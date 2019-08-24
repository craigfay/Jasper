import { prisma } from '../generated/prisma-client'

export default async function() {
  const thread = await prisma.createThread({
    participants: {
      connect: [{
        email: "alastair@prisma.io"
      }, {
        email: "alan@prisma.io"
      }]
    }
  })
  await prisma.createMessage({
    content: "I like solving problems, Commander. And Enigma is the most difficult problem in the world.",
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
    content: "Enigma isn't difficult, it's impossible. The Americans, the Russians, the French, the Germans, everyone thinks Enigma is unbreakable.",
    thread: {
      connect: {
        id: thread.id
      }
    },
    author: {
      connect: {
        email: "alastair@prisma.io"
      }
    }
  })
  await prisma.createMessage({
    content: "Good. Let me try and we'll know for sure, won't we?",
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
}