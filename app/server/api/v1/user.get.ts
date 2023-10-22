import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  if (typeof query.accountId === 'string') {
    return await prisma.user.findUnique({ where: { accountId: query.accountId } })
  }
})
