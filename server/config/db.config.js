require("dotenv").config();

module.exports = {
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  keyspace: process.env.keyspace,
  Strategy: process.env.Strategy,
  DataCenter: process.env.DataCenter
};
