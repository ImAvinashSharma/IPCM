require("dotenv").config();

module.exports = {
  HOST: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  DB: process.env.DB
};
