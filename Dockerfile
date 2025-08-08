# Etapa de build (usa node + pnpm)
FROM node:18-alpine AS builder

WORKDIR /app
COPY . .

RUN npm install -g bun pnpm
RUN bun install --frozen-lockfile
RUN bunx next build

# Etapa final con bun
FROM oven/bun:1.1.13-slim

WORKDIR /app
COPY --from=builder /app /app

EXPOSE 3000
CMD ["bun", "next", "start"]