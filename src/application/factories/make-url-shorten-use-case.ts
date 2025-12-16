import { prisma } from "@/infra/database/prisma"
import { PrismaShortCodeRepository } from "@/infra/repositories/prisma/prisma-short-code-repository"
import { ShortenUrlUseCase } from "../use-cases/shorten-url"


export function makeUrlShortenUseCase() {
  const shortCodeRepository = new PrismaShortCodeRepository(prisma)
  const useCase = new ShortenUrlUseCase(shortCodeRepository)

  return useCase
}
