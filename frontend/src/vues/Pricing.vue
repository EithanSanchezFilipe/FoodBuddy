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
  <div class="pricing-page">
    <div class="content-wrapper">
      <h1>Simple, Transparent Pricing</h1>
      <p class="subtitle">Choose the plan that fits your culinary journey.</p>

      <div class="pricing-grid">
        <div class="pricing-card">
          <h3>Free</h3>
          <div class="price">$0<span>/mo</span></div>
          <ul class="features">
            <li>Access to basic recipes</li>
            <li>Community forum access</li>
            <li>Save up to 10 recipes</li>
          </ul>
          <button class="btn-secondary">Get Started</button>
        </div>

        <div class="pricing-card featured">
          <div class="badge">Most Popular</div>
          <h3>Pro</h3>
          <div class="price">$9.99<span>/mo</span></div>
          <ul class="features">
            <li>Unlimited recipes</li>
            <li>Meal planning tools</li>
            <li>Nutritional analysis</li>
            <li>Ad-free experience</li>
          </ul>
          <button class="btn-primary">Start Free Trial</button>
        </div>

        <div class="pricing-card">
          <h3>Chef</h3>
          <div class="price">$19.99<span>/mo</span></div>
          <ul class="features">
            <li>Everything in Pro</li>
            <li>Exclusive masterclasses</li>
            <li>Priority support</li>
            <li>Verified chef badge</li>
          </ul>
          <button class="btn-secondary">Contact Sales</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing-page {
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
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  font-size: 1.25rem;
  color: #a0a0a0;
  margin-bottom: 4rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  align-items: center;
}

.pricing-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: left;
  position: relative;
}

.pricing-card.featured {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(213, 107, 255, 0.3);
  transform: scale(1.05);
  z-index: 1;
}

.badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: bold;
  color: #1a1a1a;
}

.price {
  font-size: 3rem;
  font-weight: 800;
  margin: 1.5rem 0;
  color: #ffffff;
}

.price span {
  font-size: 1rem;
  color: #a0a0a0;
  font-weight: normal;
}

.features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
}

.features li {
  margin-bottom: 1rem;
  color: #e0e0e0;
  display: flex;
  align-items: center;
}

.features li::before {
  content: '✓';
  color: #c084fc;
  margin-right: 0.75rem;
  font-weight: bold;
}

button {
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
  color: #1a1a1a;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .pricing-page {
    padding: 6rem 1.5rem 4rem;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  .subtitle {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .pricing-card.featured {
    transform: scale(1);
  }

  .pricing-card {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .pricing-page {
    padding: 6rem 1rem 4rem;
  }

  h1 {
    font-size: 2rem;
    line-height: 1.2;
    word-break: break-word;
  }

  .subtitle {
    font-size: 1rem;
  }

  .pricing-card {
    padding: 1.5rem;
  }

  .price {
    font-size: 2.5rem;
  }
}
</style>
