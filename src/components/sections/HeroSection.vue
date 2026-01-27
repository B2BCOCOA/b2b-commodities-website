<script setup>
import { useI18n } from 'vue-i18n'
import mainImg from '@/assets/images/hero-section-pic-1.jpg'
import innerImg1 from '@/assets/images/hero-section-pic-2.jpg'
import innerImg2 from '@/assets/images/hero-section-pic-3.jpg'
import sparkIcon from '@/assets/images/iconoir_spark-solid-brown.png'
import whiteSparkIcon from '@/assets/images/iconoir_spark-solid-white.png'

const { tm } = useI18n()
</script>

<template>
  <section class="hero-section">
    <div class="hero-container">
      <!-- Left Part (60%) -->
      <div class="hero-left">
        <div class="hero-header">
          <p class="hero-subtitle">
            <img :src="sparkIcon" alt="" class="subtitle-icon" />
            {{ $t('home.subtitle') }}
          </p>
          <h1 class="hero-title">{{ $t('home.title') }}</h1>
        </div>

        <div class="hero-inner-split">
          <!-- Inner Left: Button and Texts -->
          <div class="hero-inner-left-col">
            <a href="#about-us" class="hero-btn">
              <span>{{ $t('home.learnMore') }}</span>
              <div class="btn-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </a>
            
            <div class="hero-actions-info">
              <div class="info-item">
                <div class="info-icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <p>{{ $t('home.globalReach') }}</p>
              </div>
              
              <div class="info-divider"></div>

              <div class="info-item">
                <div class="info-icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <p>{{ $t('home.reliableDelivery') }}</p>
              </div>
            </div>
          </div>

          <!-- Inner Right: Two Photos Vertical -->
          <div class="hero-inner-photos">
            <div class="photo-wrapper">
              <img :src="innerImg1" alt="Agriculture detail" />
            </div>
            <div class="photo-wrapper">
              <img :src="innerImg2" alt="Farming operation" />
            </div>
          </div>
        </div>
      </div>

      <div class="hero-right">
        <img :src="mainImg" alt="B2B Commodities Hero" class="main-hero-image" />
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
</template>

<style scoped>
.hero-section {
  padding-top: 40px; /* Reduced top padding */
  padding-bottom: 3rem; /* Added bottom padding */
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--background);
  /* overflow: hidden; Removed to prevent clipping */
  width: 100%;
  overflow-x: hidden; /* Prevent horizontal scroll from marquee or other elements */
}

.hero-container {
  display: flex;
  width: 100%;
  min-height: calc(100vh - 100px); /* Changed from height to min-height */
  padding-right: 6rem; /* Match left padding for balance */
}

/* Left Column - 60% */
.hero-left {
  flex: 0 0 60%;
  padding: 1rem 1rem 0rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-header {
  margin-bottom: 3rem;
}

.hero-subtitle {
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.subtitle-icon {
  width: 20px; /* Adjust size as needed */
  height: 20px;
  object-fit: contain;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  line-height: 1.1;
  color: #542612;
  font-weight: 900;
  padding-right: 4rem;
}

.hero-inner-split {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}

/* Inner Left - Button + Info */
.hero-inner-left-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero-actions-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid rgba(135, 43, 5, 0.1);
  border-radius: 5px;
  padding: 1.5rem;
}

.info-divider {
  height: 1px;
  background-color: rgba(135, 43, 5, 0.1);
  width: 100%;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 0.5rem 0.5rem 1.25rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  width: fit-content;
  transition: background-color var(--transition-fast);
}

.hero-btn:hover {
  background-color: var(--primary-dark);
}

.btn-icon {
  background-color: white;
  color: var(--primary-color);
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
}

.info-icon-circle {
  width: 48px;
  height: 48px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
}

.info-item h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.info-item p {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Inner Right - Vertical Photos */
.hero-inner-photos {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  justify-content: flex-end;
}

.photo-wrapper {
  height: 220px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.photo-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.photo-wrapper:hover img {
  transform: scale(1.05);
}

/* Right Column - 40% */
.hero-right {
  flex: 0 0 40%;
  position: relative;
  overflow: hidden;
}

.main-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px; /* Added since it now floats with padding */
}

/* Responsive - Tablet (768px to 1024px) */
@media (max-width: 1024px) {
  .hero-container {
    flex-direction: column;
    padding-right: 0;
    min-height: auto;
  }

  .hero-left {
    flex: none;
    width: 100%;
    padding: 2rem 3rem;
    order: 2; /* Text appears second (after image) */
  }

  .hero-right {
    flex: none;
    width: 100%;
    height: 350px;
    order: 1; /* Image appears first */
  }

  .hero-title {
    font-size: clamp(2rem, 4vw, 2.5rem);
    padding-right: 0;
  }

  .hero-inner-split {
    gap: 2rem;
  }

  .hero-inner-photos {
    flex-direction: row;
  }
  
  .photo-wrapper {
    flex: 1;
    height: 180px;
  }
}

/* Responsive - Mobile (below 768px) */
@media (max-width: 767px) {
  .hero-section {
    padding-top: 20px;
    padding-bottom: 2rem;
    min-height: auto;
  }

  .hero-container {
    flex-direction: column;
    padding-right: 0;
    min-height: auto;
  }

  .hero-left {
    flex: none;
    width: 100%;
    padding: 1.5rem;
    order: 2; /* Text appears second (after image) */
  }

  .hero-right {
    flex: none;
    width: 100%;
    height: 280px;
    order: 1; /* Image appears first */
    display: none; /* Hide main hero image in mobile view */
  }

  .hero-header {
    margin-bottom: 2rem;
  }

  .hero-title {
    font-size: clamp(1.75rem, 5vw, 2.25rem);
    padding-right: 0;
    color: #542612;
  }

  .hero-subtitle {
    font-size: 0.85rem;
  }

  .hero-inner-split {
    flex-direction: column;
    gap: 1.5rem;
  }

  .hero-inner-left-col {
    gap: 1.5rem;
    margin-left: 0;
  }

  .hero-actions-info {
    padding: 1rem;
    gap: 1rem;
    border-radius: 4px;
    margin-left: 0;
  }

  .info-item p {
    font-size: 0.95rem;
  }

  .hero-btn {
    padding: 0.6rem 0.6rem 0.6rem 1rem;
    font-size: 0.95rem;
  }

  .btn-icon {
    width: 24px;
    height: 24px;
  }

  .info-icon-circle {
    width: 40px;
    height: 40px;
  }
}

.stats-marquee {
  background-color: var(--primary-color);
  color: white;
  width: 100%;
  overflow: hidden; /* Critical for preventing scrollbar */
  padding: 1.5rem 0;
  position: relative;
  z-index: 10;
}

.stats-track {
  display: flex;
  width: max-content;
  animation: marquee 40s linear infinite; /* Left to right movement */
}

.stats-group {
  display: flex;
  align-items: center;
  gap: 6rem;
  padding-right: 6rem; /* Gap between groups */
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

@media (max-width: 1024px) {
  .stats-group {
    gap: 3rem;
    padding-right: 3rem;
  }
  
  .stat-item {
    font-size: 1.25rem;
  }
}
</style>
