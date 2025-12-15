import { PrismaShortCodeRepository } from "@/repositories/prisma/prisma-short-code-repository"
import { RedirectShortCodeUseCase } from "../redirect-short-code"

export function makeRedirectOriginalUrlUseCase() {
  const shortCodeRepository = new PrismaShortCodeRepository()
  const useCase = new RedirectShortCodeUseCase(shortCodeRepository)

  return useCase
}
