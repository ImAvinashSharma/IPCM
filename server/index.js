// Imports
const express = require("express");
const app = express();
require("dotenv").config();
const morganBody = require("morgan-body");
const fs = require("fs");
const path = require("path");

// middelewares
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port" + process.env.PORT);
});

const log = fs.createWriteStream(path.join(__dirname, "logs", "express.log"), { flags: "a" });
morganBody(app, {
  stream: log
});
