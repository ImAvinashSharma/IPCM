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
  if (!userId) return res.status(400).json({ message: "Invalid request" });
  try {
    const vault = await client.LRANGE(userId, 0, -1);
    const vaultItems = vault.map(item => JSON.parse(item));
    return res.status(200).json(vaultItems);
  } catch (err) {
    console.log(err);
  }
  return res.status(400).json([]);
};

exports.addItemsToVault = async (req, res) => {
  const { userId, app, email, password, created_at, last_used_at, url } = req.body;
  const vaultItem = JSON.stringify({ app, email, password, created_at, last_used_at, url });
  await client.lPush(userId, vaultItem);
  res.status(200).json({ message: "success" });
};

exports.editVaultItem = async (req, res) => {
  const { userId, index } = req.params;
  const { app, email, password, created_at, last_used_at, url } = req.body;
  const vaultItem = JSON.stringify({ app, email, password, created_at, last_used_at, url });
  await client.lSet(userId, index, vaultItem);
  return res.status(200).json({ message: "success" });
};

exports.deleteVaultItem = async (req, res) => {
  const { userId, index } = req.params;
  console.log(userId, index);
  const vaultItem = await client.lIndex(userId, index);
  await client.lRem(userId, 0, vaultItem);
  return res.status(200).json({ message: "success" });
};

exports.deleteVault = async (req, res) => {
  const { userId } = req.params;
  await client.del(userId);
  return res.status(200).json({ message: "success" });
};
