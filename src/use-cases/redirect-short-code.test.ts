import { InMemoryShortUrlRepository } from "@/repositories/in-memory/in-memory-short-code-repository"
import { ResourceNotFoundError } from "./errors/resource-not-found-error"
import { RedirectShortCodeUseCase } from "./redirect-short-code"

let inMemoryShorUrlRepository: InMemoryShortUrlRepository
let sut: RedirectShortCodeUseCase

describe("redirect Short Code Use Case", () => {
  beforeEach(async () => {
    inMemoryShorUrlRepository = new InMemoryShortUrlRepository()
    sut = new RedirectShortCodeUseCase(inMemoryShorUrlRepository)

    await inMemoryShorUrlRepository.create({
      originalUrl: "https://www.google.com.br",
      shortCode: "123",
    })
  })

  it("should be able to redirect a shorten url", async () => {
    const result = await sut.execute({
      shortCode: "123",
    })

    expect(result).toMatchObject({
      code: expect.objectContaining({
        originalUrl: "https://www.google.com.br",
        shortCode: "123",
      }),
    })
  })

  it("should be able to increment clicks", async () => {
    const result = await sut.execute({
      shortCode: "123",
    })

    expect(result.code.clicks).toBe(1)
  })

  it("should throw if short code does not exist", async () => {
    await expect(
      sut.execute({ shortCode: "321" })
    ).rejects.toBeInstanceOf(ResourceNotFoundError)
  })
})
