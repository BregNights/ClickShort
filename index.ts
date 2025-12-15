import { registerDeleteExpiredShortCodesJob } from "@/jobs/delete-expired-short-codes.job"
import fastify from "fastify"
import { clickShort } from "./src/http/routes/click-short.routes"

export const app = fastify()

registerDeleteExpiredShortCodesJob()

app.register(clickShort)

app.listen({ port: 3333 }, () => {
  console.log("Servidor rodando na porta 3333")
})
