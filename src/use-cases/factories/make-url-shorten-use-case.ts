import { PrismaShortCodeRepository } from "@/repositories/prisma/prisma-short-code-repository";
import { ShortenUrlUseCase } from "../shorten-url";

export function makeUrlShortenUseCase() {
  const ShortCodeRepository = new PrismaShortCodeRepository();
  const useCase = new ShortenUrlUseCase(ShortCodeRepository);

  return useCase;
}
