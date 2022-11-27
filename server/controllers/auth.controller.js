const config = require("../config/auth.config");
require("dotenv").config();

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, parseInt(process.env.SALT_ROUNDS))
  };
  console.log(user);
  return res.status(200).send({ message: "User was registered successfully!" });
};

exports.signin = (req, res) => {
  console.log(req.body);
  return res.status(200).send({ message: "User was logged in successfully!" });
};
