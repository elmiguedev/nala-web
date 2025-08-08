# Stage 1: Build con pnpm
FROM node:18-alpine AS builder
WORKDIR /app

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Copiamos manifiestos para cachear instalación
COPY package.json pnpm-lock.yaml ./

# Instalamos dependencias antes de copiar todo para aprovechar cacheo
RUN pnpm install --frozen-lockfile

# Copiamos el resto del código
COPY . .

# Generamos build estático
RUN pnpm run build

# Stage 2: Servir contenido estático con Nginx
FROM nginx:stable-alpine

# Eliminamos config default de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Config custom de nginx
COPY nginx.conf /etc/nginx/conf.d/

# Copiamos contenido exportado (estático)
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]