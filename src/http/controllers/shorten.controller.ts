import { makeUrlShortenUseCase } from "@/use-cases/factories/make-url-shorten-use-case"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

export async function ShortenUrlController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const shortenUrlBodySchema = z.object({
    originalUrl: z.url(),
  })

  const { originalUrl } = shortenUrlBodySchema.parse(request.body)

  const shortenCode = makeUrlShortenUseCase()

  const result = await shortenCode.execute({ originalUrl })

  reply.status(201).send({ message: result })
}
