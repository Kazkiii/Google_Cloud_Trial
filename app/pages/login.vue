<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent>
      <v-btn type="submit" block class="mt-2" @click="signIn()">Google Sign In</v-btn>
    </v-form>
  </v-sheet>
</template>

<script lang="ts" setup>
import { useAuth } from '~/composables/useAuth';

const signIn = async () => {
  await useAuth().login()
  if (useAuth().user) navigateTo('/')
}
</script>
