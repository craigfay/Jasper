import { prisma } from '../generated/prisma-client'

export default async function() {
  await prisma.createUser({
    email: 'alan@prisma.io',
    name: 'Alan',
  })
  await prisma.createUser({
    email: 'robert@prisma.io',
    name: 'Robert',
  })
  await prisma.createUser({
    email: 'joan@prisma.io',
    name: 'Joan',
  })
  await prisma.createUser({
    email: 'hugh@prisma.io',
    name: 'Hugh',
  })
  await prisma.createUser({
    email: 'alastair@prisma.io',
    name: 'Alastair',
  })
}