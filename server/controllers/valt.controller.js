exports.getValtItem = (req, res) => {
  res.status(200).json([
    {
      app: gamil,
      email: "test@test.com",
      password: "test"
    },
    {
      app: fb,
      email: "test@test.com",
      password: "test"
    },
    {
      app: wb,
      email: "test@test.com",
      password: "test"
    }
  ]);
};
