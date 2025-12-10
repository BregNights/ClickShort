// import { FastifyReply, FastifyRequest } from "fastify"
// import { z } from "zod"

// export async function shortenUrl(request: FastifyRequest, reply: FastifyReply) {
//   const shortenUrlBodySchema = z.object({
//     url: z.url(),
//   })
//   const { url } = shortenUrlBodySchema.parse(request.body)

//   console.log(url)

//   reply.status(201).send({ message: "ok" })
// }

// export class ShortenUrl {
//   constructor(private shortenUrl: ShortenUrlUseCase) {}
// }
