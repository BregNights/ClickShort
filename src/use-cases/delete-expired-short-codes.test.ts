import { InMemoryShortUrlRepository } from "@/repositories/in-memory/in-memory-short-code-repository"
import { DeleteExpiredShortCodesUseCase } from "./delete-expired-short-codes"

let inMemoryShorUrlRepository: InMemoryShortUrlRepository
let sut: DeleteExpiredShortCodesUseCase

describe("Delete Expired Short Code Use Case", () => {
  beforeEach(() => {
    inMemoryShorUrlRepository = new InMemoryShortUrlRepository()
    sut = new DeleteExpiredShortCodesUseCase(inMemoryShorUrlRepository)
  })

  it("should delete short codes older than 1 year", async () => {
    const now = new Date()

    await inMemoryShorUrlRepository.create({
      originalUrl: "https://old.com",
      shortCode: "old",
      createdAt: new Date(now.getFullYear() - 2, 1, 1),
    })

    await inMemoryShorUrlRepository.create({
      originalUrl: "https://recent.com",
      shortCode: "recent",
    })

    const result = await sut.execute()

    expect(result).toBe(1)
    expect(inMemoryShorUrlRepository.items).toHaveLength(1)
    expect(inMemoryShorUrlRepository.items[0].shortCode).toBe("recent")
  })
})
