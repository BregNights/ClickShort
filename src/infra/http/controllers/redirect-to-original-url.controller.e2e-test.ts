import { PrismaService } from "@/infra/database/prisma/prisma-service"
import request from "supertest"
import { MakeShortUrlFactory } from "test/factories/make-short-url"

describe("Redirect to site (e2e)", () => {
  let app: any
  let prisma: PrismaService
  let makeShortUrl: MakeShortUrlFactory

  beforeAll(async () => {
    const appModule = await import("src/app.js")
    const prismaModule = await import("@/infra/database/prisma/index.js")

    app = appModule.app
    prisma = prismaModule.prisma

    makeShortUrl = new MakeShortUrlFactory(prisma)
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it("[GET] /:shortCode", async () => {
    const shortenCode = await makeShortUrl.execute({
      originalUrl: "https://www.google.com/",
    })

    const shortCode = shortenCode.shortCode
    const response = await request(app.server).get(`/${shortCode}`).send({})

    expect(response.statusCode).toEqual(302)
  })
})
