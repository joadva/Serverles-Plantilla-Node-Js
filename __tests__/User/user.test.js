const request = require("supertest");

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
      .get("/dev/users/qwer")
      .send();
    expect(response.statusCode).toBe(200);
  });
});
// describe("Post / user", () => {
//   test("should respond with 201 status code", async () => {
//     const data = {
//       id_inmuebles: "04451b40-6601-4bdb-a77e-aa42a40078d4",
//       id_usuario: "0110bba7-aff8-4f77-beb7-40120ea12e6b",
//     };
//     const response = await request("http://localhost:3000")
//       .post("/dev/users")
//       .send(data);
//     expect(response.statusCode).toBe(201);
//   });
// });
