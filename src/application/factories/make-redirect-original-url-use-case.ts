import { prisma } from "@/infra/database/prisma"
import { PrismaShortCodeRepository } from "@/infra/repositories/prisma/prisma-short-code-repository"
import { RedirectShortCodeUseCase } from "../use-cases/redirect-short-code"


export function makeRedirectOriginalUrlUseCase() {
  const shortCodeRepository = new PrismaShortCodeRepository(prisma)
  const useCase = new RedirectShortCodeUseCase(shortCodeRepository)

  return useCase
}
