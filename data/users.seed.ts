import { prisma } from '../generated/prisma-client'

export default async function() {
  await prisma.createUser({
    email: 'alan@prisma.io',
    name: 'Alan',
    password: 'password1',
  })
  await prisma.createUser({
    email: 'robert@prisma.io',
    name: 'Robert',
    password: 'password2',
  })
  await prisma.createUser({
    email: 'joan@prisma.io',
    name: 'Joan',
    password: 'password3',
  })
  await prisma.createUser({
    email: 'hugh@prisma.io',
    name: 'Hugh',
    password: 'password4',
  })
  await prisma.createUser({
    email: 'alastair@prisma.io',
    name: 'Alastair',
    password: 'password5',
  })
}