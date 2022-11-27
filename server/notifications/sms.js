const config = require("./config/twilio.config");

const accountSid = config.twilio_auth_sid;
const authToken = config.twilio_auth_token;

const client = require("twilio")(accountSid, authToken);

exports.sendSMS = async (req, res) => {
  const { to, body } = req.body;

  client.messages
    .create({
      body: body,
      from: config.twilio_phone_number,
      to: to
    })
    .then(message => res.status(200).send(message.sid));
};
