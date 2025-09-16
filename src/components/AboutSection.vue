<template>
  <section id="about" class="about-section section">
    <div class="container">
      <div class="section-header text-center mb-16">
        <h2 class="section-title">About Brofa Investment Limited</h2>
        <p class="section-description">
          With years of expertise in financial markets, we provide comprehensive 
          investment solutions tailored to your unique financial goals.
        </p>
      </div>

      <div class="about-content">
        <div class="about-text">
          <div class="about-item">
            <h3 class="about-item-title">Our Mission</h3>
            <p class="about-item-text">
              To empower individuals and businesses to achieve financial independence 
              through strategic investment planning and expert financial guidance.
            </p>
          </div>

          <div class="about-item">
            <h3 class="about-item-title">Our Vision</h3>
            <p class="about-item-text">
              To be the leading investment firm known for integrity, innovation, 
              and exceptional client service in building long-term wealth.
            </p>
          </div>

          <div class="about-item">
            <h3 class="about-item-title">Why Choose Us</h3>
            <ul class="about-list">
              <li>Expert financial advisors with proven track records</li>
              <li>Personalized investment strategies</li>
              <li>Transparent fee structure</li>
              <li>Comprehensive risk management</li>
              <li>24/7 portfolio monitoring</li>
            </ul>
          </div>
        </div>

        <div class="about-stats">
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">15+</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">500+</div>
              <div class="stat-label">Happy Clients</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">$50M+</div>
              <div class="stat-label">Assets Managed</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">98%</div>
              <div class="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.about-section {
  background-color: var(--background-light);
}

.section-header {
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  color: var(--text-primary);
  margin-bottom: var(--space-md);
}

.section-description {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: 1.7;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3xl);
  align-items: start;
}

@media (min-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr 1fr;
  }
}

.about-item {
  margin-bottom: var(--space-2xl);
}

.about-item-title {
  color: var(--primary-color);
  font-size: var(--text-xl);
  font-weight: 600;
  margin-bottom: var(--space-md);
}

.about-item-text {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 0;
}

.about-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.about-list li {
  position: relative;
  padding-left: var(--space-lg);
  margin-bottom: var(--space-sm);
  color: var(--text-secondary);
  line-height: 1.6;
}

.about-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.about-stats {
  background-color: white;
  border-radius: var(--radius-xl);
  padding: var(--space-2xl);
  box-shadow: var(--shadow-lg);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: var(--text-3xl);
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: var(--space-sm);
  display: block;
}

@media (min-width: 768px) {
  .stat-number {
    font-size: var(--text-4xl);
  }
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .section-header {
    margin-bottom: var(--space-2xl);
  }
  
  .about-content {
    gap: var(--space-2xl);
  }
  
  .about-stats {
    padding: var(--space-lg);
  }
  
  .stats-grid {
    gap: var(--space-lg);
  }
}
</style>
