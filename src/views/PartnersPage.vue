<script setup>
import { useI18n } from 'vue-i18n'
import whiteSparkIcon from '@/assets/images/iconoir_spark-solid-white.png'
import handshakeImg from '@/assets/images/operratingmap.png'

import p1 from '@/assets/images/Partners Logos/partner1.png'
import p2 from '@/assets/images/Partners Logos/partner2.png'
import p3 from '@/assets/images/Partners Logos/partner3.png'
import p4 from '@/assets/images/Partners Logos/partner4.png'
import p5 from '@/assets/images/Partners Logos/partner5.png'
import p6 from '@/assets/images/Partners Logos/partner6.png'
import p7 from '@/assets/images/Partners Logos/partner7.png'
import p8 from '@/assets/images/Partners Logos/partner8.png'

const { tm } = useI18n()
</script>

<template>
  <div class="partners-page">
    <!-- Hero Section -->
    <section class="partners-hero">
      <div class="hero-content">
        <h1>{{ $t('partners.hero.title') }}</h1>
        <p>{{ $t('partners.hero.subtitle') }}</p>
      </div>
    </section>



    <!-- Partners Grid Section -->
    <section class="partners-grid-section">
      <div class="grid-container">
        <!-- Left: Handshake Image -->
        <div class="handshake-container">
          <img :src="handshakeImg" alt="Partnership handshake" class="full-bleed-image" />
        </div>
        
        <!-- Right: Partner Logos Grid -->
        <div class="logos-grid-container">
          <h2 class="logos-title">{{ $t('partners.logosTitle') }}</h2>
          <div class="logos-grid">
            <div class="logo-item"><img :src="p1" alt="Partner 1" /></div>
            <div class="logo-item"><img :src="p2" alt="Partner 2" /></div>
            <div class="logo-item"><img :src="p3" alt="Partner 3" /></div>
            <div class="logo-item"><img :src="p4" alt="Partner 4" /></div>
            <div class="logo-item"><img :src="p5" alt="Partner 5" /></div>
            <div class="logo-item"><img :src="p6" alt="Partner 6" /></div>
            <div class="logo-item"><img :src="p7" alt="Partner 7" /></div>
            <div class="logo-item"><img :src="p8" alt="Partner 8" /></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Info Cards Section -->
    <section class="partners-info-section">
      <div class="container">
        <div class="info-cards-grid">
          <!-- Card 1 -->
          <div class="info-card">
            <div class="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
              </svg>
            </div>
            <div class="card-content">
              <h3>{{ $t('partners.card1.title') }}</h3>
              <p>{{ $t('partners.card1.description') }}</p>
            </div>
          </div>
          
          <!-- Card 2 -->
          <div class="info-card">
            <div class="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.85 22.25H10.15V19.95C9.35 19.75 8.6 19.35 7.95 18.85L6.35 20.45L3.75 17.85L5.35 16.25C4.85 15.6 4.45 14.85 4.25 14.05H1.95V10.35H4.25C4.45 9.55 4.85 8.8 5.35 8.15L3.75 6.55L6.35 3.95L7.95 5.55C8.6 5.05 9.35 4.65 10.15 4.45V2.15H13.85V4.45C14.65 4.65 15.4 5.05 16.05 5.55L17.65 3.95L20.25 6.55L18.65 8.15C19.15 8.8 19.55 9.55 19.75 10.35H22.05V14.05H19.75C19.55 14.85 19.15 15.6 18.65 16.25L20.25 17.85L17.65 20.45L16.05 18.85C15.4 19.35 14.65 19.75 13.85 19.95V22.25ZM12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16ZM22.22 17.22L20.22 15.22L18.78 16.66L20.78 18.66L22.22 17.22ZM1.78 6.78L3.78 8.78L5.22 7.34L3.22 5.34L1.78 6.78Z" fill="white"/>
              </svg>
            </div>
            <div class="card-content">
              <h3>{{ $t('partners.card2.title') }}</h3>
              <p>{{ $t('partners.card2.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

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
/* Partners Page Styles */
.partners-page {
  padding-top: 80px;
}

/* Hero Section */
.partners-hero {
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



/* Grid Section */
.partners-grid-section {
  background-color: #fcfcfc;
}

.grid-container {
  display: flex;
  min-height: 600px;
  width: 100%;
}

.handshake-container {
  width: 50%;
  height: auto;
}

.full-bleed-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  padding: 4rem;
}

.logos-grid-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #fcfcfc;
}

.logos-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #313131;
  margin-bottom: 3rem;
  margin-top: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.logos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem 0;
  width: 100%;
}

.logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-item img {
  width: 100%;
  max-width: 280px;
  height: auto;
  object-fit: contain;
}

/* Info Cards Section */
.partners-info-section {
  padding: 5rem 6rem;
  background-color: #ffffff;
}

.info-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2.5rem;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.icon-circle {
  flex-shrink: 0;
  width: 54px;
  height: 54px;
  background-color: #702B0E;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-content h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #313131;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.card-content p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #31313180;
  margin: 0;
  text-align: justify;
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
  .partners-hero {
    padding: 4rem 3rem;
  }
  
  .grid-container {
    flex-direction: column;
  }
  
  .handshake-container, .logos-grid-container {
    width: 100%;
  }
  
  .handshake-container {
    height: 400px;
  }

  .partners-info-section {
    padding: 4rem 2rem;
  }
}

@media (max-width: 900px) {
  .info-cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .info-card {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .partners-info-section {
    padding: 3rem 1rem;
  }

  .partners-hero {
    padding: 3rem 2rem;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }
  
  .logos-grid-container {
    padding: 2rem;
  }
  
  .logos-grid {
    gap: 1.5rem;
  }
  
  .logo-item img {
    max-width: 220px;
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
