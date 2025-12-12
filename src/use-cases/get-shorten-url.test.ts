import { InMemoryShortUrlRepository } from "@/repositories/in-memory/in-memory-short-code-repository"
import { GetShortenUrlUseCase } from "./get-shorten-url"

let inMemoryShorUrlRepository: InMemoryShortUrlRepository
let sut: GetShortenUrlUseCase

describe("Get Shorten URL Use Case", () => {
  beforeEach(() => {
    inMemoryShorUrlRepository = new InMemoryShortUrlRepository()
    sut = new GetShortenUrlUseCase(inMemoryShorUrlRepository)
  })

  it("should be able to get a shorten url", async () => {
    await inMemoryShorUrlRepository.create({
      originalUrl: "https://www.google.com.br",
      shortCode: "123",
    })

    const result = await sut.execute({
      shortUrl: "123",
    })

    expect(result).toMatchObject({
      url: expect.objectContaining({
        originalUrl: "https://www.google.com.br",
        shortCode: "123",
      }),
    })
  })
})
