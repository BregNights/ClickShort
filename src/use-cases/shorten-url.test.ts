import { InMemoryShortUrlRepository } from "@/repositories/in-memory/in-memory-short-code-repository"
import { ShortenUrlUseCase } from "./shorten-url"

let inMemoryShorUrlRepository: InMemoryShortUrlRepository
let sut: ShortenUrlUseCase

describe("Shorten URL Use Case", () => {
  beforeEach(() => {
    inMemoryShorUrlRepository = new InMemoryShortUrlRepository()
    sut = new ShortenUrlUseCase(inMemoryShorUrlRepository)
  })

  it("should be able to shorten a url", async () => {
    const { result } = await sut.execute({
      originalUrl: "www.google.com.br",
    })

    expect(result.shortCode).toEqual(expect.any(String))
    expect(result.shortCode).toMatch(/^[0-9a-zA-Z]{8}$/)
  })
})
