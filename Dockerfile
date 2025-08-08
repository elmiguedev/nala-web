# Etapa 1: build
FROM node:18-alpine AS builder

# Habilitamos las features necesarias para pnpm
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Instalamos pnpm
RUN npm install -g pnpm

# Copiamos solo lo necesario para instalar dependencias
COPY package.json pnpm-lock.yaml ./

# Instalamos dependencias (sin dev)
RUN pnpm install --frozen-lockfile

# Copiamos el resto del proyecto
COPY . .

# Generamos el build de Next.js
RUN pnpm build

# Etapa 2: imagen final liviana
FROM node:18-alpine AS runner

WORKDIR /app

# Instalamos solo runtime deps
RUN npm install -g pnpm

COPY --from=builder /app ./

# Si tu app requiere, seteá variables de entorno acá (o usalas desde fuera con docker run -e)
ENV NODE_ENV=production

EXPOSE 3000

CMD ["pnpm", "start"]