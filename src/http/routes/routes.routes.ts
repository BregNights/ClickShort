import { shortenUrl } from "@/http/controllers/shorten.controller"
import { FastifyInstance } from "fastify"

export async function routes(app: FastifyInstance) {
    app.post("/shorten", shortenUrl)
}
