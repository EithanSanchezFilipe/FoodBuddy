<script setup lang="ts">
import { Bot, Calendar, Activity, ShoppingCart, Users, Smartphone } from 'lucide-vue-next'
</script>

<template>
  <div class="features-page">
    <div class="content-wrapper">
      <div class="hero-section">
        <h1>Powerful Features</h1>
        <p class="subtitle">Everything you need to master your culinary journey, powered by AI.</p>
      </div>
      
      <div class="features-grid">
        <div class="feature-card">
          <div class="icon-wrapper">
            <Bot :size="48" color="#818cf8" />
          </div>
          <h3>AI Recipe Generation</h3>
          <p>Generate unique recipes based on ingredients you already have. Reduce waste and discover new favorites.</p>
        </div>

        <div class="feature-card">
          <div class="icon-wrapper">
            <Calendar :size="48" color="#c084fc" />
          </div>
          <h3>Smart Meal Planning</h3>
          <p>Automated weekly meal plans tailored to your dietary preferences, goals, and schedule.</p>
        </div>

        <div class="feature-card">
          <div class="icon-wrapper">
            <Activity :size="48" color="#34d399" />
          </div>
          <h3>Nutrition Tracking</h3>
          <p>Keep track of calories, macros, and micros automatically as you plan and cook your meals.</p>
        </div>

        <div class="feature-card">
          <div class="icon-wrapper">
            <ShoppingCart :size="48" color="#fbbf24" />
          </div>
          <h3>Smart Shopping Lists</h3>
          <p>Automatically generate organized shopping lists from your meal plans. Never forget an item again.</p>
        </div>

        <div class="feature-card">
          <div class="icon-wrapper">
            <Users :size="48" color="#f87171" />
          </div>
          <h3>Community Hub</h3>
          <p>Share recipes, tips, and photos with a vibrant community of food lovers.</p>
        </div>

        <div class="feature-card">
          <div class="icon-wrapper">
            <Smartphone :size="48" color="#60a5fa" />
          </div>
          <h3>Cross-Platform</h3>
          <p>Access your recipes and plans from any device. Seamless sync between mobile and desktop.</p>
        </div>
      </div>

      <div class="cta-section">
        <h2>Ready to start cooking?</h2>
        <button class="btn-primary">Get Started for Free</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.features-page {
  min-height: 100vh;
  padding: 8rem 2rem 6rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #ffffff;
  display: flex;
  justify-content: center;
}

.content-wrapper {
  max-width: 1200px;
  width: 100%;
}

.hero-section {
  text-align: center;
  margin-bottom: 5rem;
}

h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;
}

.subtitle {
  font-size: 1.25rem;
  color: #a0a0a0;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 6rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: rgba(213, 107, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(129, 140, 248, 0.1) 0%, rgba(192, 132, 252, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover::before {
  opacity: 1;
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
  position: relative;
}

p {
  color: #a0a0a0;
  line-height: 1.6;
  position: relative;
}

.cta-section {
  text-align: center;
  padding: 4rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.cta-section h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
}

.btn-primary {
  padding: 1rem 2.5rem;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
  color: #ffffff;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(129, 140, 248, 0.4);
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  
  .features-page {
    padding: 6rem 1rem 4rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
