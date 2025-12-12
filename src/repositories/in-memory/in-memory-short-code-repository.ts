import { Prisma, ShortCode } from "generated/prisma/client"

import { ShortCodeRepository } from "../short-code-repository"

export class InMemoryShortUrlRepository implements ShortCodeRepository {
  public items: ShortCode[] = []

  async create(data: Prisma.ShortCodeCreateInput): Promise<ShortCode> {
    const id = this.items.length

    const code = {
      id,
      originalUrl: data.originalUrl,
      shortCode: data.shortCode ?? null,
      clicks: data.clicks ?? 0,
      active: data.active ?? true,
      createdAt: new Date(),
    }
    this.items.push(code)

    return code
  }

  async updateShortCode(id: number, code: string): Promise<ShortCode> {
    const shortUrl = this.items.find((item) => item.id === id)

    if (!shortUrl) throw new Error(`ShortUrl with id ${id} not found`)

    const updated: ShortCode = {
      ...shortUrl,
      shortCode: code,
    }

    const index = this.items.findIndex((item) => item.id === id)
    this.items[index] = updated

    return updated
  }

  async findbyShortCode(shortCode: string): Promise<ShortCode | null> {
    const code = this.items.find((item) => {
      return item.shortCode === shortCode
    })

    return code || null
  }
}
