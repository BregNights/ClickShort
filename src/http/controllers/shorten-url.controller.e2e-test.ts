import { app } from "@/app"
import request from "supertest"

describe("Shorten Url (e2e)", () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it("[POST] /", async () => {
    const response = await request(app.server).post("/").send({
      originalUrl: "https://www.google.com/",
    })

    expect(response.statusCode).toEqual(201)
  })
})
