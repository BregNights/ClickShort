import { FastifyInstance } from "fastify"

import { redirectToOriginalUrlController } from "../controllers/ShortedToUrlController"
import { ShortenUrlController } from "../controllers/shorten.controller"

export async function routes(app: FastifyInstance) {
  app.post("/shorten", ShortenUrlController)
  app.get("/clickshort/:shortUrl", redirectToOriginalUrlController)
}
