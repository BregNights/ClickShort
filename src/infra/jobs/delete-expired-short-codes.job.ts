import { DeleteExpiredShortCodesUseCase } from "@/application/use-cases/delete-expired-short-codes"
import { RedisCacheRepository } from "@/cache/redis-cache-repository"
import { prisma } from "@/infra/database/prisma"
import { PrismaShortCodeRepository } from "@/infra/repositories/prisma/prisma-short-code-repository"
import cron from "node-cron"
import { redis } from "../database/redis"

export function registerDeleteExpiredShortCodesJob() {
  const cacheRepository = new RedisCacheRepository(redis)
  const shortCodeRepository = new PrismaShortCodeRepository(
    prisma,
    cacheRepository
  )
  const useCase = new DeleteExpiredShortCodesUseCase(shortCodeRepository)

  cron.schedule("0 3 * * *", async () => {
    const deleted = await useCase.execute()
    console.log(`[CRON] Deleted ${deleted} expired short codes`)
  })
}
