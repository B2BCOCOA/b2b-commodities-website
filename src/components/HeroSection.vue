<template>
  <section id="home" class="hero-section">
    <div class="hero-background"></div>
    <div class="container hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          Secure Your Financial Future with 
          <span class="text-primary">Brofa Investment Limited</span>
        </h1>
        <p class="hero-description">
          Professional investment management and financial advisory services 
          to help you achieve your wealth-building goals. Trust our expertise 
          to guide your financial journey.
        </p>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary btn-lg">Get Started</a>
          <a href="#about" class="btn btn-outline btn-lg">Learn More</a>
        </div>
      </div>
      <div class="hero-image">
        <div class="hero-placeholder">
          <!-- Placeholder for hero image -->
          <svg width="400" height="300" viewBox="0 0 400 300" class="placeholder-svg">
            <rect width="400" height="300" fill="var(--background-light)" rx="12"/>
            <g transform="translate(150, 100)">
              <circle cx="50" cy="50" r="30" fill="var(--primary-color)" opacity="0.3"/>
              <rect x="20" y="70" width="60" height="40" fill="var(--secondary-color)" opacity="0.3" rx="4"/>
              <text x="50" y="135" text-anchor="middle" fill="var(--text-secondary)" font-size="14">Investment Growth</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: var(--space-4xl) 0;
  margin-top: 80px; /* Account for fixed header */
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    var(--background-light) 0%, 
    rgba(30, 64, 175, 0.05) 100%
  );
  z-index: -1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3xl);
  align-items: center;
}

@media (min-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr 1fr;
  }
}

.hero-text {
  text-align: center;
}

@media (min-width: 1024px) {
  .hero-text {
    text-align: left;
  }
}

.hero-title {
  font-size: var(--text-4xl);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: var(--space-lg);
  color: var(--text-primary);
}

@media (min-width: 768px) {
  .hero-title {
    font-size: var(--text-5xl);
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: var(--text-6xl);
  }
}

.hero-description {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin-bottom: var(--space-2xl);
  line-height: 1.7;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 1024px) {
  .hero-description {
    margin-left: 0;
    margin-right: 0;
  }
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}

@media (min-width: 1024px) {
  .hero-actions {
    justify-content: flex-start;
  }
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-placeholder {
  max-width: 100%;
  animation: float 6s ease-in-out infinite;
}

.placeholder-svg {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(var(--shadow-lg));
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .hero-section {
    min-height: 80vh;
    padding: var(--space-2xl) 0;
  }
  
  .hero-content {
    gap: var(--space-xl);
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .btn-lg {
    width: 100%;
    max-width: 300px;
  }
}
</style>
