const { createLogger, transports, format } = require("winston");
// https://www.npmjs.com/package/winston
const logger = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({
      filename: "logs/system.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json())
    }),
    new transports.File({
      filename: "logs/erros.log",
      level: "error",
      format: format.combine(format.timestamp(), format.json())
    }),
    new transports.File({
      filename: "logs/db.log",
      level: "debug",
      format: format.combine(format.timestamp(), format.json())
    })
  ]
});

module.exports = logger;
