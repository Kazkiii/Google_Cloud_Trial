import { NuxtAuthHandler } from '#auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import prisma from '~/prisma/client'

const config = useRuntimeConfig()

export default NuxtAuthHandler({
  secret: config.AUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    // @ts-expect-error: 'default' does not exist on type, but needs 'default'
    GoogleProvider.default({
      clientId: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
    }),
  ],
})
