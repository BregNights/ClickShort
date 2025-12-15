import { PrismaShortCodeRepository } from "@/repositories/prisma/prisma-short-code-repository"
import { ShortenUrlUseCase } from "../shorten-url"

export function makeUrlShortenUseCase() {
  const shortCodeRepository = new PrismaShortCodeRepository()
  const useCase = new ShortenUrlUseCase(shortCodeRepository)

  return useCase
}
