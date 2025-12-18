import fastify from "fastify"
import { ZodError } from "zod"
import { clickShort } from "./infra/http/routes/click-short.routes"
import { registerDeleteExpiredShortCodesJob } from "./infra/jobs/delete-expired-short-codes.job"

export const app = fastify()

registerDeleteExpiredShortCodesJob()

app.register(clickShort)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: error.format() })
  }

  return reply.status(500).send({ message: "internal server error." })
})
