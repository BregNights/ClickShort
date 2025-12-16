import { ShortCodeRepository } from "../infra/repositories/short-code-repository"

export class DeleteExpiredShortCodesUseCase {
  constructor(private shortCodeRepository: ShortCodeRepository) {}

  async execute() {
    const oneYearAgo = new Date()
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)

    return this.shortCodeRepository.deleteExpired(oneYearAgo)
  }
}
