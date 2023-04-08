const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: process.env.SMTB_SERVICE_NAME,
  auth: {
    user: process.env.SMTB_EMAIL,
    pass: process.env.SMTB_PASSWORD
  },
  debug: true, // show debug output
  logger: true // log information in console
});

const sendMail = async (to, subject, html) => {
  const mailOptions = {
    from: process.env.SMTB_EMAIL,
    to,
    subject,
    html
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  console.log("Email");
};

module.exports = sendMail;
