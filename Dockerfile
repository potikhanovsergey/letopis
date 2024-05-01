FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY .env.deploy ./.env.local

RUN npm run db:generate
RUN npm run build

FROM base as runner
WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY .env.deploy ./.env.local

ENV NODE_ENV production

EXPOSE 3000

CMD ["node", "server.js"]