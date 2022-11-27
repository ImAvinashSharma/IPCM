const config = require("./config/db.config");
const cassandra = require("cassandra-driver");

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

/*
CREATE KEYSPACE grocery WITH REPLICATION = {'class' : 'SimpleStrategy','replication_factor' : 1};

CREATE TABLE IF NOT EXISTS grocery.fruit_stock (item_id TEXT, name TEXT, price_p_item DECIMAL, PRIMARY KEY (item_id));

INSERT INTO grocery.fruit_stock (item_id, name, price_p_item) VALUES ('a0','apples',0.50);
INSERT INTO grocery.fruit_stock (item_id, name, price_p_item) VALUES ('b1','bananas',0.40);
INSERT INTO grocery.fruit_stock (item_id, name, price_p_item) VALUES ('c3','oranges',0.35);
INSERT INTO grocery.fruit_stock (item_id, name, price_p_item) VALUES ('d4','pineapples',2.5);
*/
