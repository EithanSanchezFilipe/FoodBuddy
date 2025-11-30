<script setup lang="ts">
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="brand">
        <h3>FoodBuddy</h3>
        <p>Your personal AI cooking companion.</p>
      </div>
      <div class="links">
        <div class="column">
          <h4>Product</h4>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Recipes</a>
        </div>
        <div class="column">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <div class="column">
          <h4>Legal</h4>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; {{ new Date().getFullYear() }} FoodBuddy. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1a1a1a;
  color: #d4d4d4;
  padding: 4rem 2rem 2rem;
  border-top: 1px solid #333;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3rem;
}

.brand h3 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
}

.brand p {
  color: #888;
  max-width: 300px;
}

.links {
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.column h4 {
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
}

.column a {
  color: #888;
  text-decoration: none;
  transition: color 0.2s;
}

.column a:hover {
  color: #4f46e5;
}

.copyright {
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid #333;
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  
  .links {
    gap: 2rem;
  }
}
</style>
