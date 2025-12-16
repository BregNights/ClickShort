import { RedisCacheRepository } from "@/cache/redis-cache-repository"
import { prisma } from "@/infra/database/prisma"
import { redis } from "@/infra/database/redis"
import { PrismaShortCodeRepository } from "@/infra/repositories/prisma/prisma-short-code-repository"
import { ShortenUrlUseCase } from "../use-cases/shorten-url"

export function makeUrlShortenUseCase() {
  const cacheRepository = new RedisCacheRepository(redis)
  const shortCodeRepository = new PrismaShortCodeRepository(
    prisma,
    cacheRepository
  )
  const useCase = new ShortenUrlUseCase(shortCodeRepository)

  return useCase
}
