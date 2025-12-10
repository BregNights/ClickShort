import { InMemoryShortUrlRepository } from "test/repositories/in-memory-short-url-repository"
import { ShortenUrl } from "./shorten-url"

let inMemoryShorUrlRepository: InMemoryShortUrlRepository
let sut: ShortenUrl

describe("Shorten URL Use Case", () => {
  beforeEach(() => {
    inMemoryShorUrlRepository = new InMemoryShortUrlRepository()
    sut = new ShortenUrl(inMemoryShorUrlRepository)
  })

  it("should be able to shorten a url", async () => {
    const result = await sut.execute({
      originalUrl: "www.google.com.br",
    })

    expect(result.shortenUrl.shortCode).toEqual(expect.any(String))
    expect(result.shortenUrl.shortCode).toMatch(/^[0-9a-zA-Z]{8}$/)
  })
})
