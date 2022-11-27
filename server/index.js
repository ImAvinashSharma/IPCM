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

app.use(
  require("express-status-monitor")({
    title: "Server Status", // title for status screen
    path: "/status", // path for server status invokation
    spans: [
      {
        interval: 1, // every second
        retention: 60 // keep 60 datapoints in memory
      },
      {
        interval: 5, // every 5 seconds
        retention: 60
      }
    ],
    chartVisibility: {
      cpu: true, // enable CPU Usage
      mem: true, // enable Memory Usage
      load: true, // enable One Minute Load Avg
      eventLoop: true, // enable EventLoop Precess Usage
      heap: true, // enable Heap Memory Usage
      responseTime: true, // enable Response Time
      rps: true, // enable Requests per Second
      statusCodes: true // enable Status Codes
    },
    healthChecks: [
      {
        protocol: "http",
        host: "localhost",
        path: "/api/auth",
        port: "3001"
      },
      {
        protocol: "http",
        host: "localhost",
        path: "/",
        port: "3001"
      }
    ]
    // ignoreStartsWith: "/admin" // ignore path starts with
  })
);

//? testing
module.exports = app;
