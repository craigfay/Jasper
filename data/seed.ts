import { prisma } from '../generated/prisma-client'

async function main() {
  await prisma.createUser({
    email: 'julien@prisma.io',
    name: 'Julien',
  })
  await prisma.createUser({
    email: 'maddy@prisma.io',
    name: 'Maddy',
  })
  await prisma.createThread({
    participants: {
      connect: [{
        email: "julien@prisma.io"
      }, {
        email: "maddy@prisma.io"
      }]
    }
  })
}

main().catch(e => console.error(e))