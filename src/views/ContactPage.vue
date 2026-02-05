<script setup>
import { useI18n } from 'vue-i18n'
import ContactSection from '@/components/sections/ContactSection.vue'
import whiteSparkIcon from '@/assets/images/iconoir_spark-solid-white.png'

const { tm } = useI18n()
</script>

<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="hero-content">
        <h1>{{ $t('contact.hero.title') }}</h1>
        <p>{{ $t('contact.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- Main Contact Section -->
    <ContactSection />

    <!-- Stats Marquee -->
    <div class="stats-marquee">
      <div class="stats-track">
        <!-- Group 1 -->
        <div class="stats-group">
          <template v-for="(item, index) in tm('home.statsMarquee')" :key="'g1-' + index">
            <div class="stat-item">{{ item }}</div>
            <img :src="whiteSparkIcon" class="separator-icon" alt="" />
          </template>
        </div>
        <!-- Group 2 (Duplicate) -->
        <div class="stats-group">
          <template v-for="(item, index) in tm('home.statsMarquee')" :key="'g2-' + index">
            <div class="stat-item">{{ item }}</div>
            <img :src="whiteSparkIcon" class="separator-icon" alt="" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Contact Page Styles */
.contact-page {
  padding-top: 80px;
}

/* Hero Section */
.contact-hero {
  background-color: #8B4513;
  background-image: linear-gradient(rgba(139, 69, 19, 0.9), rgba(139, 69, 19, 0.85)), url('@/assets/images/containerspage.jpg');
  background-size: cover;
  background-position: bottom;
  padding: 6rem 6rem;
  color: white;
}

.hero-content {
  max-width: 800px;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #ffffff;
}

.hero-content p {
  font-size: 1.4rem;
  line-height: 1.35;
  opacity: 0.8;
  font-weight: 300;
  color: #ffffff;
}

/* Stats Marquee Styles */
.stats-marquee {
  background-color: var(--primary-color);
  color: white;
  width: 100%;
  overflow: hidden;
  padding: 1.5rem 0;
  position: relative;
  z-index: 10;
}

.stats-track {
  display: flex;
  width: max-content;
  animation: marquee 40s linear infinite;
}

.stats-group {
  display: flex;
  align-items: center;
  gap: 6rem;
  padding-right: 6rem;
}

.stat-item {
  font-size: 1.15rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.separator-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

@keyframes marquee {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

/* Responsive */
@media (max-width: 1024px) {
  .contact-hero {
    padding: 4rem 3rem;
  }
}

@media (max-width: 768px) {
  .contact-hero {
    padding: 3rem 2rem;
  }

  .hero-content h1 {
    font-size: 2.2rem;
  }

  .hero-content p {
    font-size: 1.1rem;
  }
  
  .stats-group {
    gap: 3rem;
    padding-right: 3rem;
  }
  
  .stat-item {
    font-size: 1.25rem;
  }
}
</style>
