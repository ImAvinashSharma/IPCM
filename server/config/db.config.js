require("dotenv").config();

module.exports = {
  HOST: process.env.DB_HOST,
  PORT: process.env.PORT,
  DB: process.env.DB
};
