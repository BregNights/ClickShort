export class ShortUrlPresenter {
  static toHTTP(shortCode: string, originalUrl: string) {
    return {
      code: shortCode,
      shortUrl: `http://localhost:3333/${shortCode}`, //todo
      originalUrl,
    }
  }
}
