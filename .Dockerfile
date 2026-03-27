# ENTRYPOINT ["./docker-start.sh"]
# # ENTRYPOINT ["sleep", "infinity"]

FROM oven/bun:1.3.6-debian AS deps

WORKDIR /app

RUN apt-get update && apt-get install -y \
    curl wget

COPY package.json bun.lock ./

# Install all dependencies including devDependencies
RUN bun install --frozen-lockfile

FROM oven/bun:1.3.6-debian AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma Client
RUN bun x prisma generate

# Build Next.js standalone output
RUN bun run build

FROM oven/bun:1.3.6-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN apt-get update && apt-get install -y --no-install-recommends wget \
    && rm -rf /var/lib/apt/lists/*

# only copy runtime files
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Prisma schema + engines
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

EXPOSE 3000

HEALTHCHECK CMD wget -no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["bun", "server.js"]