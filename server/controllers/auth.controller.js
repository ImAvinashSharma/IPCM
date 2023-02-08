const config = require("../config/auth.config");
require("dotenv").config();
const { client } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const sendMail = require("../notifications/email");

exports.signup = async (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, parseInt(process.env.SALT_ROUNDS))
  };
  const query = "INSERT INTO users (id, username , password, email, created_at) VALUES (uuid(),?,?,?,toTimestamp(now()));";
  await client.execute(query, [user.username, user.password, user.email], { prepare: true });
  return res.status(200).send({ message: "User was registered successfully!" });
};

exports.signin = async (req, res) => {
  console.log("Signin");
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };
  const query = "SELECT * FROM users WHERE username = ?;";
  const user_data = await client.execute(query, [user.username], { prepare: true });
  if (user_data.rowLength === 0) {
    return res.status(404).send({ message: "User Not found." });
  }
  const passwordIsValid = bcrypt.compareSync(user.password, user_data.rows[0].password);
  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Password!"
    });
  }
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  sendMail(user.email, "New login detected", `${ip} - ${user.username}`); // TODO Added temples
  const token = jwt.sign({ id: user_data.rows[0].id }, config.secret, {
    expiresIn: 86400 // 24 hours
  });
  res.status(200).send({
    user: {
      id: user_data.rows[0].id,
      username: user_data.rows[0].username,
      email: user_data.rows[0].email
      // roles: authorities,
    },
    accessToken: token
  });
};

exports.forgotPassword = async (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email
  };
  const query = "SELECT * FROM users WHERE username = ?;";
  const user_data = await client.execute(query, [user.username], { prepare: true });
  if (user_data.rowLength === 0) {
    return res.status(404).send({ message: "User Not found." });
  }

  sendMail(user.email, "Reset password", ""); //TODO: Added temples and OTP generation
  res.status(200).send({
    message: "Email and OTP send"
  });
};
