const request = require("supertest");

describe("Get /Mensaje_inmueble", () => {
  // beforeEach(() => {
  //     jest.setTimeout(10000);
  //  });

  test("should respond with 200 status code", async () => {
    const response = await request("http://localhost:3000")
      .get("/dev/Mensaje_inmueble")
      .send();
    expect(response.statusCode).toBe(200);
  });
});

describe("Post / Mensaje_inmueble", () => {
  test("should respond with 201 status code", async () => {
    const data = {
      id_inmuebles: "04451b40-6601-4bdb-a77e-aa42a40078d4",
      id_usuario: "0110bba7-aff8-4f77-beb7-40120ea12e6b",
    };
    const response = await request("http://localhost:3000")
      .post("/dev/Mensaje_inmueble")
      .send(data);
    expect(response.statusCode).toBe(201);
  });
});

describe("Post / Mensaje_inmueble", () => {
  test("should respond with 201 status code", async () => {
    const data = {
      id_inmuebles: "04451b40-6601-4bdb-a77e-aa42a40078d4",
      id_usuario: "0110bba7-aff8-4f77-beb7-40120ea12e6b",
    };
    const response = await request("http://localhost:3000")
      .post("/dev/Mensaje_inmueble")
      .send(data);
    expect(response.statusCode).toBe(201);
  });
});

describe("Post / Mensaje_inmueble", () => {
  test("should respond with 422 status code dont send  id_usuario", async () => {
    const data = {
      id_inmuebles: "04451b40-6601-4bdb-a77e-aa42a40078d4",
      id_usuario: "",
    };
    const response = await request("http://localhost:3000")
      .post("/dev/Mensaje_inmueble")
      .send(data);
    expect(response.statusCode).toBe(422);
  });
});

describe("Post / Mensaje_inmueble", () => {
  test("should respond with 422 status code dont send id_inmuebles", async () => {
    const data = {
      id_inmuebles: "",
      id_usuario: "0110bba7-aff8-4f77-beb7-40120ea12e6b",
    };
    const response = await request("http://localhost:3000")
      .post("/dev/Mensaje_inmueble")
      .send(data);
    expect(response.statusCode).toBe(422);
  });
});
