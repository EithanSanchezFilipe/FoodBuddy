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
  <div class="recipes-page">
    <div class="content-wrapper">
      <h1>Explore Recipes</h1>
      <p class="subtitle">Discover delicious meals from around the world.</p>

      <div class="search-bar">
        <input type="text" placeholder="Search recipes, ingredients, chefs..." />
        <button>Search</button>
      </div>

      <div class="recipes-grid">
        <div class="recipe-card" v-for="i in 6" :key="i">
          <div class="recipe-image"></div>
          <div class="recipe-content">
            <div class="tags">
              <span class="tag">Breakfast</span>
              <span class="time">20 min</span>
            </div>
            <h3>Avocado Toast Deluxe</h3>
            <p>A healthy and delicious start to your day with fresh ingredients.</p>
            <div class="author">
              <div class="avatar"></div>
              <span>Chef Mario</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recipes-page {
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
}

h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.subtitle {
  font-size: 1.25rem;
  color: #a0a0a0;
  margin-bottom: 3rem;
  text-align: center;
}

.search-bar {
  max-width: 600px;
  margin: 0 auto 4rem;
  display: flex;
  gap: 1rem;
}

.search-bar input {
  flex: 1;
  padding: 0.7rem 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  box-sizing: border-box;
  min-width: 0;
  width: 100%;
  max-width: 100%;
}

.search-bar input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.search-bar button {
  padding: 0.7rem 2rem;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #818cf8 0%, #c084fc 100%);
  color: #1a1a1a;
  font-weight: 600;
  cursor: pointer;
  box-sizing: border-box;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.search-bar button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.recipes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.recipe-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.recipe-card:hover {
  transform: translateY(-5px);
}

.recipe-image {
  height: 200px;
  background: #333;
  position: relative;
}

.recipe-content {
  padding: 1.5rem;
}

.tags {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.tag {
  color: #c084fc;
  background: rgba(194, 61, 255, 0.055);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
}

.time {
  color: #a0a0a0;
}

h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

p {
  color: #a0a0a0;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #555;
}

.author span {
  color: #e0e0e0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .recipes-page {
    padding: 6rem 1.5rem 4rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .search-bar {
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 3rem;
    max-width: 100%;
  }

  .search-bar input {
    padding: 0.9rem 1.25rem;
    flex: none;
  }

  .search-bar button {
    width: 100%;
    padding: 0.9rem;
    flex: none;
  }

  .recipes-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .recipes-page {
    padding: 6rem 1rem 4rem;
  }

  h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .search-bar {
    max-width: 100%;
    width: 100%;
  }

  .search-bar input {
    font-size: 0.95rem;
    padding: 0.85rem 1rem;
  }

  .search-bar button {
    padding: 0.85rem 1rem;
  }

  .recipe-card {
    border-radius: 16px;
  }
}
</style>
