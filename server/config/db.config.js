require("dotenv").config();

module.exports = {
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  keyspace: process.env.keyspace,
  Strategy: process.env.Strategy,
  DataCenter: process.env.DataCenter
};
