import { RedisCacheRepository } from "@/cache/redis-cache-repository"
import { randomUUID } from "node:crypto"

import { prisma } from "@/infra/database/prisma"
import { redis } from "@/infra/database/redis"
import { PrismaShortCodeRepository } from "./prisma-short-code-repository"

describe("PrismaShortCodeRepository + Redis cache", () => {
  const redisCache = new RedisCacheRepository(redis)
  const shortCodeRepository = new PrismaShortCodeRepository(prisma, redisCache)
  const random = randomUUID()

  it("should cache shortCode on first access", async () => {
    const code = await shortCodeRepository.create({
      originalUrl: "https://google.com",
      shortCode: random,
    })

    const result = await shortCodeRepository.findbyShortCode(code.shortCode)

    const cached = await redis.get(`short-code:${code.shortCode}`)

    expect(cached).not.toBeNull()
    expect(result?.originalUrl).toBe("https://google.com")
  })

  it("should return cached value on subsequent calls", async () => {
    await shortCodeRepository.findbyShortCode(random)

    const cached = await redis.get(`short-code:${random}`)
    expect(cached).not.toBeNull()
  })
})
