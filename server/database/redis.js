const { createClient } = require("redis");
const client = createClient({
  host: process.env.REDIS_HOST
});

(async () => {
  client.on("error", err => console.log("Redis Client Error", err));
  await client.connect();
})();

const test = async () => {
  await client.set("key", "value");
  const value = await client.get("key");
  console.log(value);
  await client.disconnect();
};

test();
