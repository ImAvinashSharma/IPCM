checkDuplicateUsernameOrEmail = (req, res, next) => {};

checkRolesExisted = (req, res, next) => {};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};

module.exports = verifySignUp;
