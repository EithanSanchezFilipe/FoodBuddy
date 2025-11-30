<script setup lang="ts">
import Silk from '../composants/Background.vue'
import { RouterLink } from 'vue-router'
import { Bot, Flame, Salad } from 'lucide-vue-next'
</script>

<template>
  <div class="home-container">
    <div class="background-wrapper">
      <Silk
        :speed="5"
        :scale="1.2"
        :color="'#2E2E2E'"
        :noise-intensity="0"
        :rotation="2.3"
        class="background-canvas"
      />
    </div>

    <div class="content-wrapper">
      <section class="hero">
        <div class="hero-content">
          <div class="badge">New: AI-Powered Recipes</div>
          <h1>
            Cooking Made <span class="gradient-text">Simple</span> &
            <span class="gradient-text">Smart</span>
          </h1>
          <p class="subtitle">
            FoodBuddy helps you manage your pantry, discover recipes, and reduce food waste with the
            power of AI.
          </p>
          <div class="cta-group">
            <RouterLink to="/sign-in" class="primary-btn">Get Started</RouterLink>
            <RouterLink to="/features" class="secondary-btn">Learn More</RouterLink>
          </div>
        </div>
      </section>

      <section class="features">
        <h2>Why FoodBuddy?</h2>
        <div class="grid">
          <div class="card">
            <div class="icon-wrapper">
              <Bot :size="48" color="#818cf8" />
            </div>
            <h3>AI Chef</h3>
            <p>Generate unique recipes based on ingredients you already have at home.</p>
          </div>
          <div class="card">
            <div class="icon-wrapper">
              <Flame :size="48" color="#f87171" />
            </div>
            <h3>Calories Tracker</h3>
            <p>Keep track of your calories and get notified when you reach your goal.</p>
          </div>
          <div class="card">
            <div class="icon-wrapper">
              <Salad :size="48" color="#34d399" />
            </div>
            <h3>AI Nutritionist</h3>
            <p>Get personalized nutrition plans based on your goals and preferences.</p>
          </div>
        </div>
      </section>
      <section class="how-it-works">
        <div class="step">
          <div class="step-number">1</div>
          <h3>Track</h3>
          <p>Track your calories and get notified when you reach your goal.</p>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <h3>Plan</h3>
          <p>Get personalized meal plans based on your goals and preferences.</p>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <h3>Enjoy</h3>
          <p>Savor delicious, personalized meals without the stress.</p>
        </div>
      </section>
      <section class="final-cta">
        <h2>Ready to transform your kitchen?</h2>
        <RouterLink to="/sign-in" class="large-btn">Join FoodBuddy Today</RouterLink>
      </section>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  position: relative;
  width: 100%;
  overflow-x: hidden;
}

.background-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
}

.content-wrapper {
  position: relative;
  z-index: 1;
  padding-top: 50px;
}

.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.hero-content {
  max-width: 800px;
  animation: fadeInUp 1s ease-out;
}

.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(79, 70, 229, 0.2);
  border: 1px solid rgba(79, 70, 229, 0.4);
  border-radius: 50px;
  color: #a5b4fc;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

h1 {
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.25rem;
  color: #d4d4d4;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.cta-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.primary-btn,
.secondary-btn {
  padding: 0.8rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.primary-btn {
  background: #4f46e5;
  color: white;
  box-shadow: 0 4px 14px 0 rgba(79, 70, 229, 0.39);
}

.primary-btn:hover {
  background: #4338ca;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px 0 rgba(79, 70, 229, 0.23);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.15);
}

.features {
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 24px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.05);
}

.icon-wrapper {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.card p {
  color: #a3a3a3;
  line-height: 1.6;
}

.how-it-works {
  padding: 6rem 2rem;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  text-align: center;
}

.step {
  max-width: 300px;
}

.step-number {
  width: 50px;
  height: 50px;
  background: #4f46e5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1.5rem;
  box-shadow: 0 0 20px rgba(79, 70, 229, 0.4);
}

.final-cta {
  padding: 8rem 2rem;
  text-align: center;
}

.final-cta h2 {
  font-size: 3rem;
  margin-bottom: 3rem;
}

.large-btn {
  display: inline-block;
  background: linear-gradient(135deg, #4f46e5 0%, #818cf8 100%);
  color: white;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.3s ease;
  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.4);
}

.large-btn:hover {
  transform: scale(1.05);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .hero-content {
    padding: 0 1rem;
  }

  .cta-group {
    flex-direction: column;
  }

  .how-it-works {
    gap: 3rem;
  }
}
</style>
