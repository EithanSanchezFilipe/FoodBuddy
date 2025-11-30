<script setup>
import Silk from '@/composants/Background.vue'
</script>

<template>
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
  <div class="about-page">
    <div class="content-wrapper">
      <h1>About FoodBuddy</h1>
      <p class="mission-statement">
        We are on a mission to revolutionize how you experience food. Connecting food lovers with
        the best culinary experiences.
      </p>

      <div class="features-grid">
        <div class="feature-card">
          <h3>Our Vision</h3>
          <p>To create a world where good food is accessible to everyone, everywhere.</p>
        </div>
        <div class="feature-card">
          <h3>Our Team</h3>
          <p>A passionate group of foodies, developers, and designers working together.</p>
        </div>
        <div class="feature-card">
          <h3>Community</h3>
          <p>Building a vibrant community of food enthusiasts sharing their journey.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  padding: 8rem 2rem 6rem;
  color: #ffffff;
  display: flex;
  justify-content: center;
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
  max-width: 1200px;
  width: 100%;
  text-align: center;
}

h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;
}

.mission-statement {
  font-size: 1.25rem;
  color: #e0e0e0;
  max-width: 800px;
  margin: 0 auto 4rem;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border-color: rgba(213, 107, 255, 0.3);
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #c084fc;
}

.feature-card p {
  color: #a0a0a0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  .about-page {
    padding: 6rem 1rem 4rem;
  }
}
</style>
