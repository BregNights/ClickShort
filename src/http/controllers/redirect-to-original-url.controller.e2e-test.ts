import { app } from "@/app"
import request from "supertest"
import { makeShortUrl } from "test/factories/make-short-url"
import { afterAll, beforeAll, describe, it } from "vitest"

describe("Redirect to site (e2e)", () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it("[GET] /:shortCode", async () => {
    const shortenCode = await makeShortUrl({
      originalUrl: "https://www.google.com/",
    })

    console.log(shortenCode)

    const shortCode = shortenCode.shortCode
    const response = await request(app.server).get(`/${shortCode}`).send({})

    expect(response.statusCode).toEqual(302)
  })
})
