<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

onMounted(async () => {
  await authStore.signOut()
  router.push('/sign-in')
})
</script>

<template>
  <div class="sign-out-container">
    <p>Signing out...</p>
  </div>
</template>

<style scoped>
.sign-out-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  background-color: #0f0f0f;
}
</style>
