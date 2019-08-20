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
  const thread = await prisma.createThread({
    participants: {
      connect: [{
        email: "julien@prisma.io"
      }, {
        email: "maddy@prisma.io"
      }]
    }
  })
  await prisma.createMessage({
    content: "Hey!",
    thread: {
      connect: {
        id: thread.id
      }
    },
    author: {
      connect: {
        email: "maddy@prisma.io"
      }
    }
  })
  await prisma.createMessage({
    content: "How are you?",
    thread: {
      connect: {
        id: thread.id
      }
    },
    author: {
      connect: {
        email: "julien@prisma.io"
      }
    }
  })
}

main().catch(e => console.error(e))