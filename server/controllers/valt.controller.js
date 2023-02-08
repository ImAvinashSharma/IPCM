exports.getValtItem = (req, res) => {
  res.status(200).json([
    {
      app: "gamil",
      email: "gmail@test.com",
      password: "test",
      created_at: "toady",
      last_used_at: "toady",
      url: "https://gmail.com/",
    },
    {
      app: "facebook",
      email: "facebook@test.com",
      password: "test",
      created_at: "toady",
      last_used_at: "toady",
      url: "https://www.facebook.com/",
    },
    {
      app: "whatsapp",
      email: "whatsapp@test.com",
      password: "test",
      created_at: "toady",
      last_used_at: "toady",
      url: "https://web.whatsapp.com/",
    },
  ]);
};
