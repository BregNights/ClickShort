import { env } from "@/env"
import Hashids from "hashids"

export function hashCodeGenerator(id: number) {
  const alphabet =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const hashids = new Hashids(env.SECRET_HASH, 8, alphabet)

  return hashids.encode(id)
}
