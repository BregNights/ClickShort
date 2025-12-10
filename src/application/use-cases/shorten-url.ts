import { ShortUrl } from "@/enterprise/entities/short-url"
import Hashids from "hashids"
import { ShortUrlRepository } from "../repositories/short-url-repository"

interface ShortenUrlRequest {
  originalUrl: string
}

interface ShortenUrlResponse {
  shortenUrl: ShortUrl
}

export class ShortenUrl {
  constructor(private shortUrlRepository: ShortUrlRepository) {}
  async execute({
    originalUrl,
  }: ShortenUrlRequest): Promise<ShortenUrlResponse> {
    const shortenUrl = ShortUrl.create({
      originalUrl,
    })

    const created = await this.shortUrlRepository.create(shortenUrl)

    const alphabet =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const hashids = new Hashids(process.env.SECRET_HASH, 8, alphabet)

    const code = hashids.encode(created.id)

    const updated = await this.shortUrlRepository.updateShortCode(
      created.id,
      code
    )

    return { shortenUrl: updated }
  }
}
