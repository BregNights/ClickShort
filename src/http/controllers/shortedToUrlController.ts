import { makeGetOriginalUrlUseCase } from "@/use-cases/factories/make-get-original-url-use-case"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

export async function redirectToOriginalUrlController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const codeParamsSchema = z.object({ shortUrl: z.string() })

  const { shortUrl } = codeParamsSchema.parse(request.params)
  console.log(request.params)

  const useCase = makeGetOriginalUrlUseCase()

  const { url } = await useCase.execute({ shortUrl })

  return reply.redirect(url.originalUrl)
}
