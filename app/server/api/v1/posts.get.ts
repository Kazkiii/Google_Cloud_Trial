import prisma from '~/prisma/client'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  if (typeof query.userId === 'string') {
    return await prisma.post.findMany({ where: { authorId: query.userId } })
  } else {
    return []
  }
})
