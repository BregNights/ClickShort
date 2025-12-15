import { makeUrlShortenUseCase } from "@/use-cases/factories/make-url-shorten-use-case"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"
import { ShortUrlPresenter } from "../presenters/shorten-url-presenter"

export async function ShortenUrlController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const shortenUrlBodySchema = z.object({
    originalUrl: z
      .url()
      .refine((url) => url.startsWith("http://") || url.startsWith("https://")),
  })

  const { originalUrl } = shortenUrlBodySchema.parse(request.body)

  const useCase = makeUrlShortenUseCase()

  const { result } = await useCase.execute({ originalUrl })

  reply
    .status(201)
    .send(ShortUrlPresenter.toHTTP(result.shortCode, originalUrl))
}
