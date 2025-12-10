import fastify from "fastify"
import { routes } from "./src/http/routes/routes.routes"

export const app = fastify()

app.register(routes)

app.listen({ port: 3333 }, () => {
  console.log("Servidor rodando na porta 3333")
})
