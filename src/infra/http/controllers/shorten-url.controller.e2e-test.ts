import { PrismaService } from "@/infra/database/prisma/prisma-service"
import request from "supertest"

describe("Shorten Url (e2e)", () => {
  let app: any
  let prisma: PrismaService

  beforeAll(async () => {
    const appModule = await import("src/app.js")
    const prismaModule = await import("@/infra/database/prisma/index.js")

    app = appModule.app
    prisma = prismaModule.prisma

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
