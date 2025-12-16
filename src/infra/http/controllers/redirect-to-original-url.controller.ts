import { makeRedirectOriginalUrlUseCase } from "@/application/factories/make-redirect-original-url-use-case"
import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

export async function redirectToOriginalUrlController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const codeParamSchema = z.object({ shortCode: z.string() })

  const { shortCode } = codeParamSchema.parse(request.params)

  const useCase = makeRedirectOriginalUrlUseCase()

  const { code } = await useCase.execute({ shortCode })

  return reply.redirect(code.originalUrl)
}
