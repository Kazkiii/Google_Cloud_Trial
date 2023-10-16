<template>
  <v-app>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<!-- <script lang="ts" setup>
const { status } = useAuth()

if (status.value === 'unauthenticated') {
  createError({ statusCode: 403, message: 'Access Denied' })
  navigateTo('/login')
}
</script> -->
