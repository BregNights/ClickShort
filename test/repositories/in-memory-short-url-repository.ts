import { ShortUrlRepository } from "@/application/repositories/short-url-repository"
import { ShortUrl } from "@/enterprise/entities/short-url"

export class InMemoryShortUrlRepository implements ShortUrlRepository {
  public items: ShortUrl[] = []

  async create(shortUrl: ShortUrl): Promise<ShortUrl> {
    this.items.push(shortUrl)

    return shortUrl
  }

  async updateShortCode(id: string, code: string): Promise<ShortUrl> {
    const shortUrl = this.items.find((item) => item.id === id)

    if (!shortUrl) throw new Error(`ShortUrl with id ${id} not found`)

    const updated = new ShortUrl({
      id: shortUrl.id,
      originalUrl: shortUrl.originalUrl,
      clicks: shortUrl.clicks,
      active: shortUrl.active,
      createdAt: shortUrl.createdAt,
      expiresAt: shortUrl.expiresAt,
      shortCode: code,
    })

    const index = this.items.findIndex((i) => i.id === id)
    this.items[index] = updated

    return updated
  }
}
