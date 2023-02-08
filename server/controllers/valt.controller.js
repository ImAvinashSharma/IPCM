exports.getValtItem = (req, res) => {
  res.status(200).json([
    {
      app: "gamil",
      email: "test@test.com",
      password: "test",
      created_at: "toady",
      last_used_at: "toady",
    },
    {
      app: "fb",
      email: "test@test.com",
      password: "test",
      created_at: "toady",
      last_used_at: "toady",
    },
    {
      app: "wb",
      email: "test@test.com",
      password: "test",
      created_at: "toady",
      last_used_at: "toady",
    },
  ]);
};
