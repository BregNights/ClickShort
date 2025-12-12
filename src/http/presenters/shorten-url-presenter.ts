export class ShortUrlPresenter {
  static toHTTP(shortCode: string, originalUrl: string) {
    return {
      code: shortCode,
      shortUrl: `https://clickshort/${shortCode}`,
      originalUrl,
    }
  }
}
