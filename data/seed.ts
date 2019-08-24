import { prisma } from '../generated/prisma-client'

async function main() {
  const seeds = [
    require('./users.seed'),
    require('./thread_1.seed'),
  ]
  for (const seed of seeds) {
    await seed.default();
  }
}

main().catch(e => console.error(e))