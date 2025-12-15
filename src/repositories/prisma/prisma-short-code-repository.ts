import { prisma } from "@/lib/prisma"
import { Prisma, ShortCode } from "generated/prisma/client"
import { ShortCodeRepository } from "../short-code-repository"

export class PrismaShortCodeRepository implements ShortCodeRepository {
  async create(data: Prisma.ShortCodeCreateInput): Promise<ShortCode> {
    const shortCode = await prisma.shortCode.create({
      data,
    })
    return shortCode
  }

  async updateShortCode(id: number, code: string): Promise<ShortCode> {
    const updateCode = await prisma.shortCode.update({
      where: { id },
      data: { shortCode: code },
    })

    return updateCode
  }

  async findbyShortCode(shortCode: string): Promise<ShortCode | null> {
    const code = await prisma.shortCode.findUnique({ where: { shortCode } })

    return code
  }

  async incrementClicks(id: number): Promise<void> {
    await prisma.shortCode.update({
      where: { id },
      data: { clicks: { increment: 1 } },
    })
  }
}
