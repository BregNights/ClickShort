import { ShortCode } from "generated/prisma/client"

export interface CreateShortCode {
  originalUrl: string
  shortCode: string
}

export interface ShortCodeRepository {
  create(data: CreateShortCode): Promise<ShortCode>
  updateShortCode(id: number, code: string): Promise<ShortCode>
  findbyShortCode(shortCode: string): Promise<ShortCode | null>
  incrementClicks(id: number): Promise<void>
  deleteExpired(createdBefore: Date): Promise<number>
}
