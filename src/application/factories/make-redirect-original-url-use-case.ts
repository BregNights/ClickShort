import { RedisCacheRepository } from "@/cache/redis-cache-repository"
import { prisma } from "@/infra/database/prisma"
import { redis } from "@/infra/database/redis"
import { PrismaShortCodeRepository } from "@/infra/repositories/prisma/prisma-short-code-repository"
import { RedirectShortCodeUseCase } from "../use-cases/redirect-short-code"

export function makeRedirectOriginalUrlUseCase() {
  const cacheRepository = new RedisCacheRepository(redis)
  const shortCodeRepository = new PrismaShortCodeRepository(
    prisma,
    cacheRepository
  )
  const useCase = new RedirectShortCodeUseCase(shortCodeRepository)

  return useCase
}
