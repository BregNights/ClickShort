import { InMemoryShortUrlRepository } from "@/repositories/in-memory/in-memory-short-code-repository"
import { RedirectShortCodeUseCase } from "./redirect-short-code"

let inMemoryShorUrlRepository: InMemoryShortUrlRepository
let sut: RedirectShortCodeUseCase

describe("redirect Short Code Use Case", () => {
  beforeEach(() => {
    inMemoryShorUrlRepository = new InMemoryShortUrlRepository()
    sut = new RedirectShortCodeUseCase(inMemoryShorUrlRepository)
  })

  it("should be able to redirect a shorten url", async () => {
    await inMemoryShorUrlRepository.create({
      originalUrl: "https://www.google.com.br",
      shortCode: "123",
    })

    const result = await sut.execute({
      shortCode: "123",
    })

    expect(result).toMatchObject({
      code: expect.objectContaining({
        originalUrl: "https://www.google.com.br",
        shortCode: "123",
        clicks: 1,
      }),
    })
  })
})
