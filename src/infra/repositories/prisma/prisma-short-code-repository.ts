import { PrismaService } from "@/infra/database/prisma/prisma-service"
import { ShortCode } from "generated/prisma/client"
import { randomUUID } from "node:crypto"
import { CacheRepository } from "../redis/cache-repository"
import { CreateShortCode, ShortCodeRepository } from "../short-code-repository"

export class PrismaShortCodeRepository implements ShortCodeRepository {
  constructor(private prisma: PrismaService, private cache: CacheRepository) {}

  async create(data: CreateShortCode): Promise<ShortCode> {
    const shortCode = await this.prisma.shortCode.create({
      data: {
        originalUrl: data.originalUrl,
        shortCode: data.shortCode ?? randomUUID(),
      },
    })
    return shortCode
  }

  async updateShortCode(id: number, code: string): Promise<ShortCode> {
    const updateCode = await this.prisma.shortCode.update({
      where: { id },
      data: { shortCode: code },
    })

    return updateCode
  }

  async findbyShortCode(shortCode: string): Promise<ShortCode | null> {
    const cacheKey = `short-code:${shortCode}`

    const cached = await this.cache.get<ShortCode>(cacheKey)
    if (cached) {
      return cached
    }

    const code = await this.prisma.shortCode.findUnique({
      where: { shortCode },
    })

    if (!code) return null

    await this.cache.set(cacheKey, code, 300)

    return code
  }

  async incrementClicks(id: number): Promise<void> {
    await this.prisma.shortCode.update({
      where: { id },
      data: { clicks: { increment: 1 } },
    })
  }

  async deleteExpired(createdBefore: Date): Promise<number> {
    const result = await this.prisma.shortCode.deleteMany({
      where: {
        createdAt: {
          lt: createdBefore,
        },
      },
    })

    return result.count
  }
}
