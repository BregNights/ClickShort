import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "@/app";



describe("Register User (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("[POST] /", async () => {
    const response = await request(app.server).post("/").send({
      originalUrl:"https://www.google.com/"
    });

    expect(response.statusCode).toEqual(201);
  });
});
