import { DeleteExpiredShortCodesUseCase } from "@/application/use-cases/delete-expired-short-codes"
import { prisma } from "@/infra/database/prisma"
import { PrismaShortCodeRepository } from "@/infra/repositories/prisma/prisma-short-code-repository"
import cron from "node-cron"

export function registerDeleteExpiredShortCodesJob() {
  const shortCodeRepository = new PrismaShortCodeRepository(prisma)
  const useCase = new DeleteExpiredShortCodesUseCase(shortCodeRepository)

  cron.schedule("0 3 * * *", async () => {
    const deleted = await useCase.execute()
    console.log(`[CRON] Deleted ${deleted} expired short codes`)
  })
}
