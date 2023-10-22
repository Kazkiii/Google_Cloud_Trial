import * as z from 'zod'
import prisma from '~/prisma/client'
import { PostState } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const validationResult = validatePost(body)
  
  if (!validationResult.isValid) {
    createError({
      statusCode: 422,
      message: validationResult.error?.errors.map(e => e.message).join('\n'),
      fatal: true
    })
  }
})

const validatePost = (body: any) => {
  const postValidation = z.object({
    id: z.string().nullable(),
    title: z.string(),
    desc: z.string().nullable(),
    state: z.nativeEnum(PostState),
    dueDate: z.date().nullable().refine((date) => {
      if (date == null) return true
      return date >= new Date(Date.now())
    }, 'The dueDate must be after today')
  })

  const result = postValidation.safeParse(body)
  return {
    isValid: result.success,
    data: result.success ? result.data : null,
    error: result.success ? null : result.error
  }
}
