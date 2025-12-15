import { PrismaShortCodeRepository } from "@/repositories/prisma/prisma-short-code-repository"
import { RedirectShortCodeUseCase } from "../redirect-short-code"

export function makeRedirectOriginalUrlUseCase() {
  const ShortCodeRepository = new PrismaShortCodeRepository()
  const useCase = new RedirectShortCodeUseCase(ShortCodeRepository)

  return useCase
}
