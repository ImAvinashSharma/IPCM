//? Imports
const express = require("express");
const app = express();
require("dotenv").config();
const morganBody = require("morgan-body");
const fs = require("fs");
const path = require("path");
const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient.create("http://localhost:5001");
const cors = require("cors");
const helmet = require("helmet");
require("./cron/checks").init();

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 3001;

//? middelewares
//@middelewares  "parse requests of content-type - application/json"
app.use(express.json());
app.use(helmet());
//@middelewares "parse requests of content-type - application/x-www-form-urlencoded"
app.use(express.urlencoded({ extended: true }));
//@middelewares "CORS"
const corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

const db = require("./db");
db.isLive();

// routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

//? error
const errorHandler = (error, request, response, next) => {
  console.log(`error ${error.message}`);
  const status = error.status || 400;
  response.status(status).send(error.message);
};

app.all("/", (req, res) => {
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

//? healthcheck
app.all("/healthcheck", (req, res) => {
  return res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}...`);
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
