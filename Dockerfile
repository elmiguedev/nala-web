# Etapa de build
FROM oven/bun:1.1.13 AS builder

WORKDIR /app

# Copiar archivos de proyecto
COPY . .

# Instalar dependencias y construir la app
RUN bun install --frozen-lockfile
RUN bun next build

# Etapa final
FROM oven/bun:1.1.13-slim

WORKDIR /app

# Copiar archivos necesarios desde el builder
COPY --from=builder /app /app

# Exponer el puerto (si usás el default de Next)
EXPOSE 3000

# Comando para ejecutar en producción
CMD ["bun", "next", "start"]