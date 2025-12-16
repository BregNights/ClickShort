import { env } from "@/env"
import Redis from "ioredis"

export class RedisService extends Redis {
  constructor() {
    super({
      host: env.REDIS_HOST,
      port: env.REDIS_PORT,
      db: env.REDIS_DB,
      lazyConnect: true,
      maxRetriesPerRequest: null,
    })

    this.on("connect", () => {
      console.log("🔌 Redis connected")
    })

    this.on("error", (err) => {
      console.error("❌ Redis error", err)
    })
  }
}
