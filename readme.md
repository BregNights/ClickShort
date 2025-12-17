# ClickShort

ClickShort é uma API de encurtador de URLs desenvolvida com foco em boas práticas de arquitetura, testabilidade e escala, utilizando Node.js, Fastify, Prisma, PostgreSQL e Redis.

O projeto foi pensado para demonstrar domínio em back-end moderno, incluindo cache, testes E2E, CI/CD e separação clara de responsabilidades.

## Funcionalidades

Criar URLs encurtadas

Redirecionar para a URL original

Contabilizar cliques

Cache de URLs mais acessadas com Redis

Testes unitários e E2E

## Tecnologias

Node.js

Fastify

Prisma ORM

PostgreSQL

Redis

Vitest

GitHub Actions (CI)

## Endpoints

POST /

GET /:shortCode

## Configuração do ambiente
#### Clonar o projeto

git clone https://github.com/seu-usuario/clickshort.git

cd clickshort

#### Instalar dependências

pnpm install

#### Variáveis de ambiente

DATABASE_URL=postgresql://postgres:docker@localhost:5432/click-short?schema=public
SECRET_HASH=dev

## Testes
#### Testes unitários
pnpm test
#### Testes E2E
pnpm test:e2e

### Os testes E2E utilizam:
PostgreSQL

Redis

Migrations automáticas

Cada execução é isolada por schema.

## Prisma
#### Gerar client
pnpm prisma generate
#### Rodar migrations
pnpm prisma migrate deploy

## CI/CD

#### O projeto possui GitHub Actions configurado para:
Rodar testes unitários em push

Rodar testes E2E em push

Subir Postgres e Redis automaticamente
