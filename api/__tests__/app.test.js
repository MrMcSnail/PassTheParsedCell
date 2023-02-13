const app = require("../app");
const seed = require("../../db/seed");
const db = require("../../db/connection");
const request = require("supertest");

beforeEach(() => {
  return seed();
});

afterAll(() => {
  return db.end();
});

describe("GET", () => {
  it("GET request to /api/lesson - returns status 200 and JSON Object", () => {
    return request(app)
      .get("/api/lesson")
      .expect(200)
      .then((data) => {
        expect(data.body).toEqual(
          expect.objectContaining({ lessonData: expect.any(Object) })
        );
      });
  });
});
