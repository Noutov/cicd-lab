const request = require("supertest");
const app = require("../app");

describe("API tests", () => {
  test("GET /health should return ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  test("GET /add/2/3 should return 5", async () => {
    const res = await request(app).get("/add/2/3");
    expect(res.body.result).toBe(5);
  });
});