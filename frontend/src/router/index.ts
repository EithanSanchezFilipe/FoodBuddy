import { createRouter, createWebHistory } from 'vue-router'
import Features from '@/vues/Features.vue'
import Home from '@/vues/Home.vue'
import About from '@/vues/About.vue'
import Pricing from '@/vues/Pricing.vue'
import Recipes from '@/vues/Recipes.vue'
import SignIn from '@/vues/SignIn.vue'
import SignUp from '@/vues/SignUp.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/features', name: 'Features', component: Features },
    { path: '/about', name: 'About', component: About },
    { path: '/pricing', name: 'Pricing', component: Pricing },
    { path: '/recipes', name: 'Recipes', component: Recipes },
    { path: '/sign-in', name: 'SignIn', component: SignIn },
    { path: '/sign-up', name: 'SignUp', component: SignUp },
    { path: '/sign-out', name: 'SignOut', component: () => import('@/vues/SignOut.vue') },
  ],
})

export default router
