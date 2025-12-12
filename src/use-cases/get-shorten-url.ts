import { ShortCodeRepository } from "@/repositories/short-code-repository"
import { ShortCode } from "generated/prisma/client"

interface GetShortenUrlRequest {
  shortUrl: string
}

interface GetShortenUrlResponse {
  url: ShortCode
}

export class GetShortenUrlUseCase {
  constructor(private shortCodeRepository: ShortCodeRepository) {}

  async execute({
    shortUrl,
  }: GetShortenUrlRequest): Promise<GetShortenUrlResponse> {
    const url = await this.shortCodeRepository.findbyShortCode(shortUrl)

    if (!url) {
      throw new Error("Error")
      //todo
    }

    return { url }
  }
}
