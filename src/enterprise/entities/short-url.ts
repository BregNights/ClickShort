import { Optional } from "@/@types/optional"

export interface ShortUrlProps {
  id: string
  originalUrl: string
  shortCode: string
  clicks: number
  active: boolean
  createdAt: Date
  expiresAt?: Date | null
}

export class ShortUrl {
  constructor(private props: ShortUrlProps) {}

  get id() {
    return this.props.id
  }

  get originalUrl() {
    return this.props.originalUrl
  }

  get shortCode() {
    return this.props.shortCode
  }

  get clicks() {
    return this.props.clicks
  }

  get active() {
    return this.props.active
  }

  get createdAt() {
    return this.props.createdAt
  }

  get expiresAt() {
    return this.props.expiresAt
  }

  static create(
    props: Optional<
      ShortUrlProps,
      "id" | "clicks" | "active" | "createdAt" | "expiresAt" | "shortCode"
    >
  ) {
    return new ShortUrl({
      ...props,
      id: props.id ?? "0",
      clicks: props.clicks ?? 0,
      active: props.active ?? true,
      createdAt: props.createdAt ?? new Date(),
      expiresAt: props.expiresAt ?? null,
      shortCode: props.shortCode ?? "",
    })
  }
}
