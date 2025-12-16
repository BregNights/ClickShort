import { PrismaService } from "@/infra/database/prisma/prisma-service"
import { ShortCode } from "generated/prisma/client"
import { randomUUID } from "node:crypto"
import { CreateShortCode, ShortCodeRepository } from "../short-code-repository"

export class PrismaShortCodeRepository implements ShortCodeRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateShortCode): Promise<ShortCode> {
    const shortCode = await this.prisma.shortCode.create({
      data: {
        originalUrl: data.originalUrl,
        shortCode: randomUUID(),
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
    const code = await this.prisma.shortCode.findUnique({
      where: { shortCode },
    })

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
