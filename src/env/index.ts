import "dotenv/config"
import { z } from "zod"

const envSchema = z.object({
  SECRET_HASH: z.string(),
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().default(3333),
  // REDIS_HOST: z.string().optional().default("127.0.0.1"),
  // REDIS_PORT: z.coerce.number().optional().default(6379),
  // REDIS_DB: z.coerce.number().optional().default(0),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error("Invalid environment variables", _env.error.format())
  throw new Error("Invalid environment variables")
}

export const env = _env.data
