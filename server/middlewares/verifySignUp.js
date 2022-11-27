checkDuplicateUsernameOrEmail = (req, res, next) => {
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
