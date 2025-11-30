<script setup lang="ts">
import type { HeaderLink } from '@/interfaces/header'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const props = defineProps<{
  headerLinks: HeaderLink[]
}>()

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="header-pill">
    <div class="logo">
      <RouterLink to="/" @click="closeMobileMenu">FoodBuddy</RouterLink>
    </div>
    
    <!-- Desktop Navigation -->
    <nav class="desktop-nav">
      <ul>
        <li v-for="link in props.headerLinks" :key="link.text">
          <RouterLink :to="link.href" :class="{ 'cta-button': link.type === 'cta' }">
            {{ link.text }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    
    <!-- Mobile Menu Button -->
    <button class="mobile-menu-button" @click="toggleMobileMenu" aria-label="Toggle menu">
      <Menu v-if="!mobileMenuOpen" :size="24" />
      <X v-else :size="24" />
    </button>
    
    <!-- Mobile Navigation -->
    <nav class="mobile-nav" :class="{ 'mobile-nav-open': mobileMenuOpen }">
      <ul>
        <li v-for="link in props.headerLinks" :key="link.text">
          <RouterLink 
            :to="link.href" 
            :class="{ 'cta-button': link.type === 'cta' }"
            @click="closeMobileMenu"
          >
            {{ link.text }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  
  <!-- Overlay for mobile menu -->
  <div 
    v-if="mobileMenuOpen" 
    class="mobile-overlay" 
    @click="closeMobileMenu"
  ></div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.header-pill {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  z-index: 100;
  
  /* Glassmorphism & Shape */
  background: rgba(18, 18, 20, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  box-shadow: 
    0 4px 24px -1px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.02) inset;
  
  width: auto;
  min-width: 600px;
  max-width: 90vw;
}

.logo a {
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.desktop-nav {
  margin-left: auto;
}

.desktop-nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

.desktop-nav a {
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  color: #a1a1aa;
  font-weight: 500;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.desktop-nav a:not(.cta-button):hover {
  color: #fff;
}

.desktop-nav a.router-link-active:not(.cta-button) {
  color: #fff;
  position: relative;
}

.desktop-nav a.router-link-active:not(.cta-button)::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(135deg, #6366f1 0%, #c084fc 100%);
  border-radius: 2px;
}

.cta-button {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: white !important;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.85rem;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cta-button:hover {
  background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(79, 70, 229, 0.4);
}

/* Mobile Menu Button */
.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: auto;
  transition: opacity 0.2s ease;
}

.mobile-menu-button:hover {
  opacity: 0.7;
}

/* Mobile Navigation */
.mobile-nav {
  display: none;
}

/* Mobile Overlay */
.mobile-overlay {
  display: none;
}

@media (max-width: 768px) {
  .header-pill {
    min-width: auto;
    width: calc(100% - 2rem);
    padding: 0.75rem 1rem;
    top: 16px;
  }
  
  .logo a {
    font-size: 1.1rem;
  }
  
  /* Hide desktop nav on mobile */
  .desktop-nav {
    display: none;
  }
  
  /* Show mobile menu button */
  .mobile-menu-button {
    display: block;
  }
  
  /* Mobile Navigation Styles */
  .mobile-nav {
    display: block;
    position: fixed;
    top: 80px;
    right: 1rem;
    background: rgba(18, 18, 20, 0.95);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 1.5rem;
    min-width: 200px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    z-index: 99; /* Ensure it's above the overlay but below the header */
  }
  
  .mobile-nav-open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .mobile-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .mobile-nav a {
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    color: #a1a1aa;
    font-weight: 500;
    transition: all 0.2s ease;
    font-size: 0.95rem;
    display: block;
    padding: 0.5rem;
  }
  
  .mobile-nav a:not(.cta-button):hover {
    color: #fff;
  }
  
  .mobile-nav a.router-link-active:not(.cta-button) {
    color: #fff;
    background: rgba(99, 102, 241, 0.15);
    border-radius: 8px;
  }
  
  .mobile-nav .cta-button {
    text-align: center;
    margin-top: 0.5rem;
  }
  
  /* Mobile Overlay */
  .mobile-overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 90;
    animation: fadeIn 0.3s ease;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}

@media (max-width: 480px) {
  .header-pill {
    width: calc(100% - 1rem);
    padding: 0.6rem 0.8rem;
  }
  
  .logo a {
    font-size: 1rem;
  }
  
  .mobile-nav {
    right: 0.5rem;
    left: 0.5rem;
    top: 70px;
  }
}
</style>
