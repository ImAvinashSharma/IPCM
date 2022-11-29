const config = require("./config/db.config");
const cassandra = require("cassandra-driver");
const logger = require("./controllers/logger.controller");

const distance = cassandra.types.distance;
const options = {
  contactPoints: [config.HOST],
  protocolOptions: {
    port: config.PORT
  },
  localDataCenter: config.DataCenter,
  keyspace: config.keyspace,
  credentials: { username: config.username, password: config.password },
  pooling: {
    coreConnectionsPerHost: {
      [distance.local]: 3,
      [distance.remote]: 2
    }
  },
  encoding: {
    map: Map,
    set: Set
  }
};
let client = new cassandra.Client(options);
let state = client.getState();

client.on("log", function (level, loggerName, message, furtherInfo) {
  if (level === "info") {
    console.log(`${level} - ${loggerName}:  ${message} ${furtherInfo}`);
  }
});

module.exports.state = state;

module.exports.isLive = () => {
  client.execute("SELECT NOW() FROM system.local;", function (err, result) {
    if (err) {
      console.log("\n Unable to connect Cassandra...\n");
    } else {
      console.log("\n Cassandra Database connected...\n");
    }
  });
};

let executequery = query =>
  new Promise((resolve, reject) =>
    client.execute(query, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  );

module.exports.query = query => {
  return executequery(query);
};

module.exports.client = client;

module.exports.close = () => {
  client.shutdown();
};