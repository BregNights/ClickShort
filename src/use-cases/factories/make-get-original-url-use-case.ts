import { PrismaShortCodeRepository } from "@/repositories/prisma/prisma-short-code-repository"
import { GetShortenUrlUseCase } from "../get-shorten-url"

export function makeGetOriginalUrlUseCase() {
  const ShortCodeRepository = new PrismaShortCodeRepository()
  const useCase = new GetShortenUrlUseCase(ShortCodeRepository)

  return useCase
}
