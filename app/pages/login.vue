<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent>
      <v-btn type="submit" color="primary" block class="mt-2" @click="signIn()">Google Sign In</v-btn>
    </v-form>
  </v-sheet>
</template>

<script lang="ts" setup>
import { useAuth } from '~/composables/useAuth'

console.log(useAuth().user.value)

const signIn = async () => {
  await useAuth().login()
  if (useAuth().user.value) return await navigateTo('/')
}
</script>
