<template>
  <section id="services" class="services-section section">
    <div class="container">
      <div class="section-header text-center mb-16">
        <h2 class="section-title">Our Investment Services</h2>
        <p class="section-description">
          Comprehensive financial solutions designed to meet your unique investment 
          needs and help you build lasting wealth.
        </p>
      </div>

      <div class="services-grid">
        <div class="service-card" v-for="service in services" :key="service.id">
          <div class="service-icon">
            <div class="icon-wrapper" v-html="service.icon"></div>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>

      <div class="services-cta text-center mt-16">
        <h3 class="cta-title">Ready to Start Your Investment Journey?</h3>
        <p class="cta-description">
          Contact us today for a free consultation and discover how we can help 
          you achieve your financial goals.
        </p>
        <a href="#contact" class="btn btn-primary btn-lg">Schedule Consultation</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  {
    id: 1,
    title: 'Portfolio Management',
    description: 'Professional management of your investment portfolio with diversified strategies tailored to your risk tolerance.',
    features: [
      'Custom portfolio design',
      'Regular rebalancing',
      'Risk assessment',
      'Performance reporting'
    ],
    icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-color)">
      <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 12h2v5H7v-5zm4-3h2v8h-2V9zm4-3h2v11h-2V6z"/>
    </svg>`
  },
  {
    id: 2,
    title: 'Wealth Planning',
    description: 'Comprehensive financial planning services to help you build and preserve wealth for the long term.',
    features: [
      'Financial goal setting',
      'Retirement planning',
      'Tax optimization',
      'Estate planning'
    ],
    icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-color)">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>`
  },
  {
    id: 3,
    title: 'Investment Advisory',
    description: 'Expert guidance and recommendations to help you make informed investment decisions.',
    features: [
      'Market analysis',
      'Investment research',
      'Strategy consulting',
      'Regular reviews'
    ],
    icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-color)">
      <path d="M9 11H7v8h2v-8zm4-4h-2v12h2V7zm4-4h-2v16h2V3z"/>
    </svg>`
  },
  {
    id: 4,
    title: 'Risk Management',
    description: 'Sophisticated risk assessment and management strategies to protect your investments.',
    features: [
      'Risk tolerance analysis',
      'Diversification strategies',
      'Insurance planning',
      'Market volatility protection'
    ],
    icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-color)">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V17H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z"/>
    </svg>`
  },
  {
    id: 5,
    title: 'Corporate Finance',
    description: 'Strategic financial solutions for businesses looking to optimize their capital structure.',
    features: [
      'Business valuation',
      'Capital raising',
      'Mergers & acquisitions',
      'Financial restructuring'
    ],
    icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-color)">
      <path d="M12,17.56L16.07,16.43L16.62,10.33L9.38,10.33L9.93,16.43L12,17.56M16.13,8.83L20.39,9.58C20.71,9.64 20.94,9.9 20.94,10.22L20.34,17.8C20.31,18.13 20.05,18.38 19.72,18.4L12.92,19.08C12.6,19.1 12.28,18.92 12.15,18.63L10.09,14.18C9.95,13.87 10.08,13.5 10.38,13.32L15.63,9.95C15.78,9.86 15.95,9.82 16.13,8.83Z"/>
    </svg>`
  },
  {
    id: 6,
    title: 'Educational Resources',
    description: 'Comprehensive financial education to help you understand and participate in your investment journey.',
    features: [
      'Investment workshops',
      'Market insights',
      'Educational materials',
      'One-on-one coaching'
    ],
    icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-color)">
      <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
    </svg>`
  }
])
</script>

<style scoped>
.services-section {
  background-color: white;
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

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.service-card {
  background-color: white;
  border-radius: var(--radius-xl);
  padding: var(--space-2xl);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  border: 1px solid var(--border-color);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-color);
}

.service-icon {
  margin-bottom: var(--space-lg);
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  background-color: rgba(30, 64, 175, 0.1);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-title {
  color: var(--text-primary);
  font-size: var(--text-xl);
  font-weight: 600;
  margin-bottom: var(--space-md);
}

.service-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-lg);
  flex-grow: 1;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-features li {
  position: relative;
  padding-left: var(--space-lg);
  margin-bottom: var(--space-sm);
  color: var(--text-secondary);
  font-size: var(--text-sm);
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.services-cta {
  background-color: var(--background-light);
  border-radius: var(--radius-xl);
  padding: var(--space-3xl);
  margin-top: var(--space-3xl);
}

.cta-title {
  color: var(--text-primary);
  font-size: var(--text-2xl);
  font-weight: 600;
  margin-bottom: var(--space-md);
}

.cta-description {
  color: var(--text-secondary);
  font-size: var(--text-lg);
  line-height: 1.7;
  margin-bottom: var(--space-xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .services-grid {
    gap: var(--space-lg);
  }
  
  .service-card {
    padding: var(--space-lg);
  }
  
  .services-cta {
    padding: var(--space-xl);
    margin-top: var(--space-xl);
  }
}
</style>
