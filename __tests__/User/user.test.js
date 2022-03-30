const request = require("supertest");

describe("Post / user", () => {
  let id;
  test("should respond with 201 status code", async () => {
    const data = {
      firstname: "German",
      lastname: "nose",
      correo: "juancho@hotmail.com",
      password: "TacosAlPastor",
      phone: "9932497482",
    };
    const response = await request("http://localhost:3000")
      .post("/dev/users")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
    expect(response.statusCode).toBe(201);
    id = response._body.data.id;
    console.log("id", id);
  });
});

describe("Get /user", () => {
  // beforeEach(() => {
  //     jest.setTimeout(10000);
  //  });

  test("should respond with 200 status code", async () => {
    const response = await request("http://localhost:3000")
      .get("/dev/users")
      .send();
    expect(response.statusCode).toBe(200);
  });
});

describe("Get /user/pk", () => {
  test("should respond with 200 status code with get by Primary Key", async () => {
    const response = await request("http://localhost:3000")
      .get("/dev/users/4f171c32-c125-42af-919b-ec225c8beac0")
      .send();
    expect(response.statusCode).toBe(200);
  });
});

describe("Update / user", () => {
  test("should respond with 201 status code", async () => {
    const data = {
      firstname: "GABRIEL",
      lastname: "nose",
      correo: "juancho@hotmail.com",
      password: "TacosAlPastor",
      phone: "9932497482",
    };
    const response = await request("http://localhost:3000")
      .put("/dev/users/4f171c32-c125-42af-919b-ec225c8beac0")
      .send(data);
    expect(response.statusCode).toBe(200);
  });
});

describe("delete Logic / user", () => {
  test("should respond with 201 status code", async () => {
    const response = await request("http://localhost:3000")
      .delete("/dev/users/4f171c32-c125-42af-919b-ec225c8beac0")
      .send();
    expect(response.statusCode).toBe(200);
  });
});

describe("restore user / user", () => {
  test("should respond with 201 status code", async () => {
    const response = await request("http://localhost:3000")
      .post("/dev/users/4f171c32-c125-42af-919b-ec225c8beac0")
      .send();
    expect(response.statusCode).toBe(200);
  });
});
