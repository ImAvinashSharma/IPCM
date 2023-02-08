exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.validateToken = (req, res) => {
  return res.status(200).json({ message: "Valid Token" });
};

exports.userBoard = (req, res) => {
  res.status(200).json({ message: "User Content." });
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
