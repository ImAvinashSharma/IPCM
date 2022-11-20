const app = require("../index.js");
const request = require("supertest");

//? Run test
describe("check is server is running", () => {
  test("should response with 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});
