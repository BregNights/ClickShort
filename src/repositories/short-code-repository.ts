import { Prisma, ShortCode } from "generated/prisma/client"

export interface ShortCodeRepository {
  create(data: Prisma.ShortCodeCreateInput): Promise<ShortCode>
  updateShortCode(id: number, code: string): Promise<ShortCode>
}
