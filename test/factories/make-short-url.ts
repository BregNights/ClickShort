import { PrismaService } from "@/infra/database/prisma/prisma-service"
import { randomUUID } from "crypto"

interface MakeShortUrlParams {
  originalUrl?: string
  shortCode?: string
  clicks?: number
  createdAt?: Date
}

export class MakeShortUrlFactory {
  constructor(private prisma: PrismaService) {}

  async execute({
    originalUrl = "https://example.com",
    shortCode = randomUUID().slice(0, 8),
    clicks = 0,
    createdAt = new Date(),
  }: MakeShortUrlParams = {}) {
    return this.prisma.shortCode.create({
      data: {
        originalUrl,
        shortCode,
        clicks,
        createdAt,
      },
    })
  }
}
