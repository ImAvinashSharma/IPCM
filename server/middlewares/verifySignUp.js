const { client } = require("../db");

checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const user = {
    username: req.body.username,
    email: req.body.email
  };

  const query = "SELECT * FROM user WHERE username = ?";
  const data = await client.execute(query, [user.username], { prepare: true });
  if (data.rowLength >= 1) {
    return res.status(400).send({ message: "Failed! Username is already in use!" });
  }
  next();
};

checkRolesExisted = (req, res, next) => {
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = verifySignUp;
