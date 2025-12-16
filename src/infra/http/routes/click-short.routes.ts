import { FastifyInstance } from "fastify"
import { redirectToOriginalUrlController } from "../controllers/redirect-to-original-url.controller"
import { ShortenUrlController } from "../controllers/shorten-url.controller"

export async function clickShort(app: FastifyInstance) {
  app.post("/", ShortenUrlController)
  app.get("/:shortCode", redirectToOriginalUrlController)
}
