const redis = require("redis");

const client = redis.createClient();

(async () => {
  try {
    client.on("error", err => console.log("Redis Client Error", err));
    await client.connect();
  } catch (err) {
    console.log("Redis Client Error", err);
  } finally {
    console.log("Redis Client Connected");
  }
})();

exports.getVaultItem = async (req, res) => {
  const { userId } = req.params;
  const vault = await client.LRANGE(userId, 0, -1);
  const vaultItems = vault.map(item => JSON.parse(item));
  res.status(200).json(vaultItems);
};

exports.addItemsToVault = async (req, res) => {
  const { userId, app, email, password, created_at, last_used_at, url } = req.body;
  const vaultItem = JSON.stringify({ app, email, password, created_at, last_used_at, url });
  await client.lPush(userId, vaultItem);
  res.status(200).json({ message: "success" });
};
