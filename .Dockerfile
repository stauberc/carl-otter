# ENTRYPOINT ["./docker-start.sh"]
# # ENTRYPOINT ["sleep", "infinity"]

FROM oven/bun:1.3.6 AS deps

WORKDIR /app

RUN apt-get update && apt-get install -y \
    curl wget

COPY package.json bun.lock ./

# Install all dependencies including devDependencies
RUN bun install --frozen-lockfile

FROM oven/bun:1.3.6 AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js standalone output
RUN bun run build

FROM oven/bun:1.3.6-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN apt-get update && apt-get install -y --no-install-recommends wget \
    && rm -rf /var/lib/apt/lists/*

# Runtime files for `next start` (no standalone output required)
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

HEALTHCHECK CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["bun", "run", "start"]