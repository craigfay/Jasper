import { prisma } from '../generated/prisma-client'

export default async function() {
  const thread = await prisma.createThread({
    participants: {
      connect: [{
        email: "hugh@prisma.io"
      }, {
        email: "alan@prisma.io"
      }, {
        email: "joan@prisma.io"
      }]
    }
  })
  await prisma.createMessage({
    content: "If you run the wires across the plugboard matrix diagonally, you'll eliminate rotor positions 500 times faster.",
    thread: {
      connect: {
        id: thread.id
      }
    },
    author: {
      connect: {
        email: "hugh@prisma.io"
      }
    }
  })
  await prisma.createMessage({
    content: "This is actually not an entirely terrible idea.",
    thread: {
      connect: {
        id: thread.id
      }
    },
    author: {
      connect: {
        email: "alan@prisma.io"
      }
    }
  })
  await prisma.createMessage({
    content: "That's Alan for \"thank you.\"",
    thread: {
      connect: {
        id: thread.id
      }
    },
    author: {
      connect: {
        email: "joan@prisma.io"
      }
    }
  })
}