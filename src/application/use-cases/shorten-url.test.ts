import { InMemoryShortUrlRepository } from "@/infra/repositories/in-memory/in-memory-short-code-repository"
import { ShortenUrlUseCase } from "./shorten-url"

let inMemoryShorUrlRepository: InMemoryShortUrlRepository
let sut: ShortenUrlUseCase

describe("Shorten URL Use Case", () => {
  beforeEach(() => {
    inMemoryShorUrlRepository = new InMemoryShortUrlRepository()
    sut = new ShortenUrlUseCase(inMemoryShorUrlRepository)
  })

  it("should generate a short code for a valid url", async () => {
    const { result } = await sut.execute({
      originalUrl: "https://www.google.com.br",
    })

    expect(result.shortCode).toEqual(expect.any(String))
    expect(result.shortCode).toMatch(/^[0-9a-zA-Z]{8}$/)
    expect(inMemoryShorUrlRepository.items[0].originalUrl).toBe(
      result.originalUrl
    )
    expect(inMemoryShorUrlRepository.items[0].shortCode).toBe(result.shortCode)
  })
})
