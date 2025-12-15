import fastify from "fastify"
import { clickShort } from "./src/http/routes/click-short.routes"

export const app = fastify()

app.register(clickShort)

app.listen({ port: 3333 }, () => {
  console.log("Servidor rodando na porta 3333")
})
