const controller = require("../controllers/valt.controller");
const { authJwt } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });
  // [authJwt.verifyToken]
  app.get("/api/valtItem/:userId", controller.getVaultItem);
  app.delete("/api/deleteVaultItem/:userId/:index", controller.deleteVaultItem);
};
