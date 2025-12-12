import { FastifyInstance } from "fastify"
import { ShortenUrlController } from "../controllers/shorten.controller"

export async function routes(app: FastifyInstance) {
  app.post("/shorten", ShortenUrlController)
}
