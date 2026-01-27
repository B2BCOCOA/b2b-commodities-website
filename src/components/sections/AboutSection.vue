<script setup>
import { useI18n } from 'vue-i18n'
// Placeholder images - replace with actual commodity images
import img1 from '@/assets/images/hero-section-pic-1.jpg'
import img2 from '@/assets/images/hero-section-pic-2.jpg'
import img3 from '@/assets/images/hero-section-pic-3.jpg'
import img4 from '@/assets/images/hero_section_background.jpg'
import bgImage from '@/assets/images/home-about-section-background.jpg'
import sparkIcon from '@/assets/images/iconoir_spark-solid-brown.png'

const { tm } = useI18n()
</script>

<template>
  <section class="about-section">
    <div class="about-container">
      <!-- Left: Image Grid -->
      <div class="about-images">
        <div class="image-grid">
          <div class="grid-item">
            <img :src="img1" alt="Cocoa" />
          </div>
          <div class="grid-item">
            <img :src="img2" alt="Soybeans" />
          </div>
          <div class="grid-item">
            <img :src="img3" alt="Cotton" />
          </div>
          <div class="grid-item">
            <img :src="img4" alt="Coffee" />
          </div>
        </div>
      </div>

      <!-- Right: Content -->
      <div class="about-content">
        <div class="about-tag">
          <img :src="sparkIcon" alt="" class="tag-icon" />
          {{ $t('about.title') }}
        </div>
        <h2 class="about-title">{{ $t('about.heading') }}</h2>
        <p class="about-description">
          {{ $t('about.description') }}
        </p>

        <div class="mission-section">
          <h3>{{ $t('about.missionTitle') }}</h3>
          <div class="mission-list">
            <div v-for="(item, index) in tm('about.missionItems')" :key="index" class="mission-item">
              <svg class="check-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{{ item }}</span>
            </div>
          </div>
        </div>

        <div class="badges">
          <div class="badge-item">
            <div class="badge-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div class="badge-text">
              <strong v-html="$t('about.badgeOne')"></strong>
            </div>
          </div>
          <div class="badge-item">
            <div class="badge-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div class="badge-text">
              <strong v-html="$t('about.badgeTwo')"></strong>
            </div>
          </div>
        </div>

        <a href="#services" class="cta-button">
          <span>{{ $t('about.checkServices') }}</span>
          <div class="btn-icon">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 6rem 6rem;
  background-image: url('@/assets/images/home-about-section-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.about-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.88);
  z-index: 1;
}

.about-container {
  display: flex;
  gap: 4rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* Left: Image Grid */
.about-images {
  flex: 0 0 45%;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.grid-item {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 5px;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.grid-item:hover img {
  transform: scale(1.05);
}

/* Right: Content */
.about-content {
  flex: 1;
}

.about-tag {
  color: var(--primary-color);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tag-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.about-title {
  font-size: 2.5rem;
  line-height: 1.2;
  color: #542612;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.about-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #6b7280;
  margin-bottom: 2rem;
}

.mission-section h3 {
  font-size: 1.25rem;
  color: #1a2b4a;
  margin-bottom: 1rem;
  font-weight: 600;
}

.mission-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.mission-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.check-icon {
  color: white;
  background-color: var(--primary-color);
  padding: 4px;
  border-radius: 3px;
  flex-shrink: 0;
  margin-top: 2px;
}

.mission-item span {
  color: #374151;
  font-size: 0.95rem;
  line-height: 1.5;
}

.badges {
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.badge-icon {
  width: 48px;
  height: 48px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.badge-text {
  font-size: 1rem;
  line-height: 1.4;
  color: #542612;
}

.badge-text strong {
  font-weight: 600;
  display: block;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 0.5rem 0.5rem 1.25rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color var(--transition-fast);
}

.cta-button:hover {
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

/* Responsive */
@media (max-width: 1024px) {
  .about-section {
    padding: 4rem 3rem;
  }

  .about-container {
    flex-direction: column-reverse;
    gap: 3rem;
  }

  .about-images {
    flex: none;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 3rem 2rem;
  }

  .about-title {
    font-size: 2rem;
  }

  .badges {
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
