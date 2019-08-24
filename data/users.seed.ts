import { prisma } from '../generated/prisma-client'

export default async function() {
  await prisma.createUser({
    email: 'robert@prisma.io',
    name: 'Robert',
  })
  await prisma.createUser({
    email: 'alan@prisma.io',
    name: 'Alan',
  })
}