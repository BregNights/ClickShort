import { prisma } from "@/lib/prisma"
import { randomUUID } from "crypto"

interface MakeShortUrlParams {
  originalUrl?: string
  shortCode?: string
  clicks?: number
  createdAt?: Date
}

export async function makeShortUrl({
  originalUrl = "https://example.com",
  shortCode = randomUUID().slice(0, 8),
  clicks = 0,
  createdAt = new Date(),
}: MakeShortUrlParams = {}) {
  return prisma.shortCode.create({
    data: {
      originalUrl,
      shortCode,
      clicks,
      createdAt,
    },
  })
}
