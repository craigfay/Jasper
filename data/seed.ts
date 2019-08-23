import { prisma } from '../generated/prisma-client'

async function main() {
  await prisma.createUser({
    email: 'robert@prisma.io',
    name: 'Robert',
  })
  await prisma.createUser({
    email: 'alan@prisma.io',
    name: 'Alan',
  })
  const thread = await prisma.createThread({
    participants: {
      connect: [{
        email: "robert@prisma.io"
      }, {
        email: "alan@prisma.io"
      }]
    }
  })
  await prisma.createMessage({
    content: "Mr Turing, can I tell you a secret?",
    thread: {
      connect: {
        id: thread.id
      }
    },
    author: {
      connect: {
        email: "robert@prisma.io"
      }
    }
  })
  await prisma.createMessage({
    content: "I'm quite good with those.",
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
    content: "I'm here to help you.",
    thread: {
      connect: {
        id: thread.id
      }
    },
    author: {
      connect: {
        email: "robert@prisma.io"
      }
    }
  })
  await prisma.createMessage({
    content: "Oh, clearly!",
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
    content: "Can machines think?",
    thread: {
      connect: {
        id: thread.id
      }
    },
    author: {
      connect: {
        email: "robert@prisma.io"
      }
    }
  })
  await prisma.createMessage({
    content: "Oh, so you've read some of my published works?",
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
    content: "What makes you say that?",
    thread: {
      connect: {
        id: thread.id
      }
    },
    author: {
      connect: {
        email: "robert@prisma.io"
      }
    }
  })
}

main().catch(e => console.error(e))