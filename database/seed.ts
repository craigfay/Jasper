import { prisma } from '../src/generated/prisma-client'

async function main() {
  const seeds = [
    require('./users.seed'),
    require('./thread_1.seed'),
    require('./thread_2.seed'),
    require('./thread_3.seed'),
  ]
  for (const seed of seeds) {
    await seed.default();
  }
}

main().catch(e => console.error(e))