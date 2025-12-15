import { PrismaShortCodeRepository } from "@/repositories/prisma/prisma-short-code-repository"
import cron from "node-cron"
import { DeleteExpiredShortCodesUseCase } from "../use-cases/delete-expired-short-codes"

export function registerDeleteExpiredShortCodesJob() {
  const shortCodeRepository = new PrismaShortCodeRepository()
  const useCase = new DeleteExpiredShortCodesUseCase(shortCodeRepository)

  cron.schedule("0 3 * * *", async () => {
    const deleted = await useCase.execute()
    console.log(`[CRON] Deleted ${deleted} expired short codes`)
  })
}
