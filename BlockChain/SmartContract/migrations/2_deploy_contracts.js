const UserCredentials = artifacts.require("UserCredentials");

module.exports = function (deployer) {
    deployer.deploy(UserCredentials);
};