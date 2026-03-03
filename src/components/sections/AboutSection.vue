<script setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onUnmounted } from 'vue'
// Actual about section images
import img1 from '@/assets/images/home-about-section-pic1.jpg'
import img2 from '@/assets/images/home-about-section-pic2.jpg'
import img3 from '@/assets/images/home-about-section-pic3.jpg'
import img4 from '@/assets/images/home-about-section-pic4.jpg'
import aboutImage1 from '@/assets/images/aboutimage1.jpg'
import aboutImage2 from '@/assets/images/aboutimage2.jpg'
import aboutImage3 from '@/assets/images/aboutimage3.jpg'
import aboutImage4 from '@/assets/images/aboutimage4.jpg'
import bgImage from '@/assets/images/home-about-section-background.jpg'
import sparkIcon from '@/assets/images/iconoir_spark-solid-brown.png'

const { tm } = useI18n()

// Create image sets for rotation
const imageSet1 = [img1, aboutImage1]
const imageSet2 = [img2, aboutImage2]
const imageSet3 = [img3, aboutImage3]
const imageSet4 = [img4, aboutImage4]

// Current index for rotation
const currentImageIndex = ref(0)
let rotationInterval

// Track overlay images and their fade state
const overlayImages = ref({
  img1: null,
  img2: null,
  img3: null,
  img4: null,
  visible: false
})

const currentImages = ref({
  img1: imageSet1[0],
  img2: imageSet2[0],
  img3: imageSet3[0],
  img4: imageSet4[0]
})

const rotateImages = () => {
  // Prepare next images
  const nextIndex = (currentImageIndex.value + 1) % 2
  overlayImages.value = {
    img1: imageSet1[nextIndex],
    img2: imageSet2[nextIndex],
    img3: imageSet3[nextIndex],
    img4: imageSet4[nextIndex],
    visible: true
  }
  // After fade duration, update base images and hide overlay
  setTimeout(() => {
    currentImageIndex.value = nextIndex
    currentImages.value = {
      img1: imageSet1[nextIndex],
      img2: imageSet2[nextIndex],
      img3: imageSet3[nextIndex],
      img4: imageSet4[nextIndex]
    }
    overlayImages.value.visible = false
  }, 1200)
}

onMounted(() => {
  rotationInterval = setInterval(rotateImages, 7000)
})

onUnmounted(() => {
  if (rotationInterval) {
    clearInterval(rotationInterval)
  }
})
</script>

<template>
  <section id="about-us" class="about-section">
    <div class="about-container">
      <!-- Left: Image Grid -->
      <div class="about-images">
        <div class="image-grid">
          <div class="grid-item">
            <img :src="currentImages.img1" alt="Cocoa" class="rotating-image base-image" />
            <img v-if="overlayImages.visible" :src="overlayImages.img1" class="rotating-image overlay-image fade-in" alt="Cocoa next" />
            <div class="image-overlay overlay-1">
              <span>{{ tm('about.imageOverlays')[0] }}</span>
            </div>
          </div>
          <div class="grid-item">
            <img :src="currentImages.img2" alt="Soybeans" class="rotating-image base-image" />
            <img v-if="overlayImages.visible" :src="overlayImages.img2" class="rotating-image overlay-image fade-in" alt="Soybeans next" />
            <div class="image-overlay overlay-2">
              <span>{{ tm('about.imageOverlays')[1] }}</span>
            </div>
          </div>
          <div class="grid-item">
            <img :src="currentImages.img3" alt="Cotton" class="rotating-image base-image" />
            <img v-if="overlayImages.visible" :src="overlayImages.img3" class="rotating-image overlay-image fade-in" alt="Cotton next" />
            <div class="image-overlay overlay-3">
              <span>{{ tm('about.imageOverlays')[2] }}</span>
            </div>
          </div>
          <div class="grid-item">
            <img :src="currentImages.img4" alt="Coffee" class="rotating-image base-image" />
            <img v-if="overlayImages.visible" :src="overlayImages.img4" class="rotating-image overlay-image fade-in" alt="Coffee next" />
            <div class="image-overlay overlay-4">
              <span>{{ tm('about.imageOverlays')[3] }}</span>
            </div>
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

        <router-link to="/products" class="cta-button">
          <span>{{ $t('about.checkProducts') }}</span>
          <div class="btn-icon">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 6rem 6rem;
  background-image: url('@/assets/images/containerspage.jpg');
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
  position: relative;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
}

.grid-item img.base-image {
  z-index: 1;
}

.grid-item img.overlay-image {
  z-index: 2;
  opacity: 0;
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.grid-item img.overlay-image.fade-in {
  opacity: 1;
}

.grid-item img.rotating-image {
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.4s ease, backdrop-filter 0.4s ease;
  z-index: 2;
  backdrop-filter: blur(2px);
}

.overlay-1 { background-color: rgba(112, 43, 14, 0.88); } /* Deep Brown */
.overlay-2 { background-color: #cec68e88; }  /* Forest Green */
.overlay-3 { background-color: rgba(245, 204, 138, 0.88); } /* Muted Gold */
.overlay-4 { background-color: rgba(69, 30, 14, 0.88); }  /* Dark Cocoa */

.image-overlay span {
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transform: translateY(10px);
  transition: transform 0.4s ease;
}

.grid-item:hover img {
  transform: scale(1.1);
}

.grid-item:hover .image-overlay {
  opacity: 1;
}

.grid-item:hover .image-overlay span {
  transform: translateY(0);
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
  margin-bottom: 1.2rem;
  font-weight: 700;
}

.about-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #6b7280;
  margin-bottom: 1rem;
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
  margin-bottom: 2rem;
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
