import { ShortUrl } from "@/enterprise/entities/short-url"

export interface ShortUrlRepository {
  create(shortUrl: ShortUrl): Promise<ShortUrl>
  updateShortCode(id: string, code: string): Promise<ShortUrl>
}
