import { ShortCodeRepository } from "@/infra/repositories/short-code-repository"
import { ShortCode } from "generated/prisma/client"
import { ResourceNotFoundError } from "./errors/resource-not-found-error"

interface GetShortenUrlRequest {
  shortCode: string
}

interface GetShortenUrlResponse {
  code: ShortCode
}

export class RedirectShortCodeUseCase {
  constructor(private shortCodeRepository: ShortCodeRepository) {}

  async execute({
    shortCode,
  }: GetShortenUrlRequest): Promise<GetShortenUrlResponse> {
    const code = await this.shortCodeRepository.findbyShortCode(shortCode)

    if (!code) {
      throw new ResourceNotFoundError()
    }

    await this.shortCodeRepository.incrementClicks(code.id)

    return { code }
  }
}
