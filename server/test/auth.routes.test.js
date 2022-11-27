const app = require("../index.js");
const request = require("supertest");
const db = require("../db");
beforeEach(done => {
  db.isLive();
  done();
});

afterEach(done => {
  db.close();
  done();
});

//? Run test
describe("check is server is running", () => {
  test("should response with 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});

describe("check for user signin", () => {
  test("should response with 200", async () => {
    const response = await request(app).post("/api/auth/signin").send({
      username: "username",
      password: "password"
    });
    expect(response.status).toBe(200);
  });
});

describe("check is server is running", () => {
  test("should response with 200", async () => {
    const response = await request(app).post("/api/auth/signup").send({
      username: "username",
      email: "email",
      password: "password"
    });
    expect(response.status).toBe(200);
  });
});
