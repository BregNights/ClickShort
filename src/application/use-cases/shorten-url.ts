import { ShortCodeRepository } from "@/infra/repositories/short-code-repository"
import { ShortCode } from "generated/prisma/client"
import { randomUUID } from "node:crypto"
import { CodeGenerator } from "./code-generator"

interface ShortenUrlRequest {
  originalUrl: string
}

interface ShortenUrlResponse {
  result: ShortCode
}

export class ShortenUrlUseCase {
  constructor(private shortCodeRepository: ShortCodeRepository) {}

  async execute({
    originalUrl,
  }: ShortenUrlRequest): Promise<ShortenUrlResponse> {
    const shortCode = randomUUID().slice(0, 8)

    const created = await this.shortCodeRepository.create({
      originalUrl,
      shortCode,
    })

    const code = await CodeGenerator(created.id)

    const updated = await this.shortCodeRepository.updateShortCode(
      created.id,
      code
    )

    return { result: updated }
  }
}
