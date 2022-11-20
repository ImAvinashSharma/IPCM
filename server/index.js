//? Imports
const express = require("express");
const app = express();
require("dotenv").config();
const morganBody = require("morgan-body");
const fs = require("fs");
const path = require("path");
const ipfsClient = require("ipfs-http-client");
// * https://github.com/jonasbostoen/nodejs-ipfs-app/blob/master/index.js
const ipfs = ipfsClient.create("http://localhost:5001");

//? middelewares
app.use(express.json());

//? error
const errorHandler = (error, request, response, next) => {
  console.log(`error ${error.message}`);
  const status = error.status || 400;
  response.status(status).send(error.message);
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port :: " + process.env.PORT);
});

// * https://reflectoring.io/express-error-handling/
app.use(errorHandler);

//? loger
const log = fs.createWriteStream(path.join(__dirname, "logs", "express.log"), { flags: "a" });
morganBody(app, {
  noColors: true,
  stream: log
});

//? testing
module.exports = app;

//TODO: Login and register
//TODO: IPFS put data
//TODO: Added extention
