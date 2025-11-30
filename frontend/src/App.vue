<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import type { HeaderLink } from './interfaces/header'
import Header from './composants/Header.vue'
import Footer from './composants/Footer.vue'
import { RouterView } from 'vue-router'

const authStore = useAuthStore()

onMounted(() => {
  authStore.fetchSession()
})

const headerLinks = computed<HeaderLink[]>(() => {
  const links: HeaderLink[] = [
    { text: 'Features', href: '/features', type: 'normal' },
    { text: 'Pricing', href: '/pricing', type: 'normal' },
    { text: 'Recipes', href: '/recipes', type: 'normal' },
    { text: 'About', href: '/about', type: 'normal' },
  ]

  if (authStore.isAuthenticated) {
    links.push({ text: 'Sign-out', href: '/sign-out', type: 'cta' })
  } else {
    links.push({ text: 'Sign-in', href: '/sign-in', type: 'cta' })
  }
  
  return links
})
</script>

<template>
  <div class="app-container">
    <Header :headerLinks="headerLinks" />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #0f0f0f;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}

#app {
  min-height: 100vh;
}
</style>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  position: relative;
}
</style>
