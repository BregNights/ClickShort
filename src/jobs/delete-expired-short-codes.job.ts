import { PrismaShortCodeRepository } from "@/repositories/prisma/prisma-short-code-repository"
import cron from "node-cron"
import { DeleteExpiredShortCodesUseCase } from "../use-cases/delete-expired-short-codes"

export function registerDeleteExpiredShortCodesJob() {
  const ShortCodeRepository = new PrismaShortCodeRepository()
  const useCase = new DeleteExpiredShortCodesUseCase(ShortCodeRepository)

  cron.schedule("0 3 * * *", async () => {
    const deleted = await useCase.execute()
    console.log(`[CRON] Deleted ${deleted} expired short codes`)
  })
}
