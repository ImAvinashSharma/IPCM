const cron = require("node-cron");
// https://www.npmjs.com/package/node-cron
const init = () => {
  cron.schedule("0 * * * *", () => {
    console.log("running every minute 1, 2, 4 and 5");
  });
};

exports.init = init;
