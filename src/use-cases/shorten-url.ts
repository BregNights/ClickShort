import { env } from "@/env"
import { ShortCodeRepository } from "@/repositories/short-code-repository"
import { ShortCode } from "generated/prisma/client"
import Hashids from "hashids"

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
    const created = await this.shortCodeRepository.create({
      originalUrl,
      shortCode: "1",
    })

    const alphabet =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const hashids = new Hashids(env.SECRET_HASH, 8, alphabet)

    const code = hashids.encode(created.id)

    const updated = await this.shortCodeRepository.updateShortCode(
      created.id,
      code
    )

    return { result: updated }
  }
}
