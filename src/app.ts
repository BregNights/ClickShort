import { registerDeleteExpiredShortCodesJob } from "@/jobs/delete-expired-short-codes.job"
import fastify from "fastify"
import { clickShort } from "./http/routes/click-short.routes"

export const app = fastify()

registerDeleteExpiredShortCodesJob()

app.register(clickShort)
