import { Prisma, ShortCode } from "generated/prisma/client"

export interface ShortCodeRepository {
  create(data: Prisma.ShortCodeCreateInput): Promise<ShortCode>
  updateShortCode(id: number, code: string): Promise<ShortCode>
  findbyShortCode(shortCode: string): Promise<ShortCode | null>
  incrementClicks(id: number): Promise<void>
}
