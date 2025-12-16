import { RedisService } from "@/infra/database/redis/redis-service"
import { CacheRepository } from "@/infra/repositories/redis/cache-repository"

export class RedisCacheRepository implements CacheRepository {
  constructor(private redis: RedisService) {}

  async get<T>(key: string): Promise<T | null> {
    const value = await this.redis.get(key)
    return value ? JSON.parse(value) : null
  }

  async set<T>(key: string, value: T, ttlSeconds = 60): Promise<void> {
    await this.redis.set(key, JSON.stringify(value), "EX", ttlSeconds)
  }
}
