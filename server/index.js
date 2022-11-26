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
const cors = require("cors");

//? middelewares
//@middelewares  "parse requests of content-type - application/json"
app.use(express.json());
//@middelewares "parse requests of content-type - application/x-www-form-urlencoded"
app.use(express.urlencoded({ extended: true }));
//@middelewares "CORS"
app.use(cors());

//? error
const errorHandler = (error, request, response, next) => {
  console.log(`error ${error.message}`);
  const status = error.status || 400;
  response.status(status).send(error.message);
};

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.post("/upload", async (req, res) => {
  const data = req.body;
  console.log(data);
  const fileHash = await addFile(data);
  return res.send(`http://localhost:8080/ipfs/${fileHash}`);
});

const addFile = async ({ path, content }) => {
  const file = { path: path, content: Buffer.from(content) };
  const filesAdded = await ipfs.add(file);
  return filesAdded.cid;
};

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
