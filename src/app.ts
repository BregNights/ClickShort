import fastify from "fastify"
import { clickShort } from "./infra/http/routes/click-short.routes"
import { registerDeleteExpiredShortCodesJob } from "./infra/jobs/delete-expired-short-codes.job"

export const app = fastify()

registerDeleteExpiredShortCodesJob()

app.register(clickShort)
