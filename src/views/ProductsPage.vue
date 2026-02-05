<script setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onUnmounted } from 'vue'

// Placeholder images - replace with actual product images
import img1 from '@/assets/images/hero-section-pic-2.jpg'
import img2 from '@/assets/images/hero-section-pic-3.jpg'
import img3 from '@/assets/images/products3.jpg'
import img4 from '@/assets/images/products4.jpg'
import img5 from '@/assets/images/products5.jpg'
import img6 from '@/assets/images/products6.jpg'

// New images for rotation
import newImg1 from '@/assets/images/productsimages1.jpeg'
import newImg2 from '@/assets/images/productsimages2.jpeg'
import newImg3 from '@/assets/images/productsimages3.jpeg'
import newImg4 from '@/assets/images/productsimages4.jpg'
import newImg5 from '@/assets/images/productsimages5.jpg'
import newImg6 from '@/assets/images/productsimages6.jpg'

import whiteSparkIcon from '@/assets/images/iconoir_spark-solid-white.png'

const { tm } = useI18n()

// Image Sets
const imageSet1 = [img1, newImg1]
const imageSet2 = [img2, newImg2]
const imageSet3 = [img3, newImg3]
const imageSet4 = [img4, newImg4]
const imageSet5 = [img5, newImg5]
const imageSet6 = [img6, newImg6]

// Current index for rotation
const currentImageIndex = ref(0)
let rotationInterval

// Track overlay images and their fade state
const overlayImages = ref({
  img1: null,
  img2: null,
  img3: null,
  img4: null,
  img5: null,
  img6: null,
  visible: false
})

const currentImages = ref({
  img1: imageSet1[0],
  img2: imageSet2[0],
  img3: imageSet3[0],
  img4: imageSet4[0],
  img5: imageSet5[0],
  img6: imageSet6[0]
})

const rotateImages = () => {
  // Prepare next images
  const nextIndex = (currentImageIndex.value + 1) % 2
  overlayImages.value = {
    img1: imageSet1[nextIndex],
    img2: imageSet2[nextIndex],
    img3: imageSet3[nextIndex],
    img4: imageSet4[nextIndex],
    img5: imageSet5[nextIndex],
    img6: imageSet6[nextIndex],
    visible: true
  }
  // After fade duration, update base images and hide overlay
  setTimeout(() => {
    currentImageIndex.value = nextIndex
    currentImages.value = {
      img1: imageSet1[nextIndex],
      img2: imageSet2[nextIndex],
      img3: imageSet3[nextIndex],
      img4: imageSet4[nextIndex],
      img5: imageSet5[nextIndex],
      img6: imageSet6[nextIndex]
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
  <div class="products-page">
    <!-- Hero Section -->
    <section class="products-hero">
      <div class="hero-content">
        <h1>{{ $t('products.hero.title') }}</h1>
        <ul class="product-list">
          <li v-for="(product, index) in tm('products.hero.subtitle')" :key="index">
            {{ product }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Section 1: Global Commodity Sourcing -->
    <section class="product-section">
      <div class="section-content">
        <div class="text-content">
          <h2>{{ $t('products.section1.title') }}</h2>
          <p>{{ $t('products.section1.description') }}</p>
        </div>
        <div class="image-grid">
          <div class="grid-image-wrapper">
            <img :src="currentImages.img1" alt="Cocoa beans" class="grid-image base-image" />
            <img v-if="overlayImages.visible" :src="overlayImages.img1" class="grid-image overlay-image fade-in" alt="Cocoa beans next" />
          </div>
          <div class="grid-image-wrapper">
            <img :src="currentImages.img2" alt="Coffee beans in hands" class="grid-image base-image" />
            <img v-if="overlayImages.visible" :src="overlayImages.img2" class="grid-image overlay-image fade-in" alt="Coffee beans next" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Quality Control & Inspection -->
    <section class="product-section">
      <div class="section-content">
        <div class="text-content">
          <h2>{{ $t('products.section2.title') }}</h2>
          <p>{{ $t('products.section2.description') }}</p>
        </div>
        <div class="image-grid">
          <div class="grid-image-wrapper">
            <img :src="currentImages.img3" alt="Walnuts" class="grid-image base-image" />
            <img v-if="overlayImages.visible" :src="overlayImages.img3" class="grid-image overlay-image fade-in" alt="Walnuts next" />
          </div>
          <div class="grid-image-wrapper">
            <img :src="currentImages.img4" alt="Green coffee beans" class="grid-image base-image" />
            <img v-if="overlayImages.visible" :src="overlayImages.img4" class="grid-image overlay-image fade-in" alt="Green coffee next" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Logistics & Trade Execution -->
    <section class="product-section">
      <div class="section-content">
        <div class="text-content">
          <h2>{{ $t('products.section3.title') }}</h2>
          <p>{{ $t('products.section3.description') }}</p>
        </div>
        <div class="image-grid">
          <div class="grid-image-wrapper">
            <img :src="currentImages.img5" alt="Mixed beans" class="grid-image base-image" />
            <img v-if="overlayImages.visible" :src="overlayImages.img5" class="grid-image overlay-image fade-in" alt="Mixed beans next" />
          </div>
          <div class="grid-image-wrapper">
            <img :src="currentImages.img6" alt="Dried fruits and spices" class="grid-image base-image" />
            <img v-if="overlayImages.visible" :src="overlayImages.img6" class="grid-image overlay-image fade-in" alt="Dried fruits next" />
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
/* Products Page Styles */
.products-page {
  padding-top: 80px;
}

/* Hero Section */
.products-hero {
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

.product-list {
  list-style: disc;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.3rem 0.6rem;
  padding-left: 0;
  font-size: 1.2rem;
  line-height: 1.8;
  opacity: 0.9;
  font-weight: 300;
  color: #ffffff;
}

.product-list li {
  margin-bottom: 0;
  margin-left: 1.5rem;
}

.hero-content p {
  font-size: 1.4rem;
  line-height: 1.35;
  opacity: 0.8;
  font-weight: 300;
  color: #ffffff;
}

/* Product Sections */
.product-section {
  padding: 0;
  background-color: white;
}



.section-content {
  display: flex;
  gap: 0;
  align-items: stretch;
  max-width: 100%;
  margin: 0 auto;
  min-height: 340px;
}

.product-section:nth-child(odd) .section-content {
  flex-direction: row-reverse;
}

.text-content {
  width: 50%;
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-content h2 {
  font-size: 2rem;
  color: #313131;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.text-content p {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #31313180;
  text-align: justify;
}

.image-grid {
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
}

.grid-image-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
  transition: transform 0.5s ease;
  position: absolute;
  inset: 0;
}

.grid-image.base-image {
  z-index: 1;
}

.grid-image.overlay-image {
  z-index: 2;
  opacity: 0;
  transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.grid-image.overlay-image.fade-in {
  opacity: 1;
}

.grid-image-wrapper:hover .grid-image {
  transform: scale(1.08);
}

/* Responsive - Tablet (768px to 1024px) */
@media (max-width: 1024px) {
  .products-page {
    padding-top: 80px;
  }

  .products-hero {
    padding: 4rem 3rem;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1.2rem;
  }

  .product-section {
    padding: 0;
  }

  .section-content {
    flex-direction: column !important;
    gap: 0;
    min-height: auto;
  }

  .text-content {
    width: 100%;
    padding: 3rem;
  }

  .text-content h2 {
    font-size: 1.75rem;
  }

  .text-content p {
    font-size: 1.1rem;
  }

  .image-grid {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }

  .grid-image {
    height: 200px;
  }
}

/* Responsive - Mobile (below 768px) */
@media (max-width: 767px) {
  .products-page {
    padding-top: 70px;
  }

  .products-hero {
    background-attachment: scroll;
    padding: 2rem 1.5rem;
  }

  .hero-content h1 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  .hero-content p {
    font-size: 0.95rem;
    line-height: 1.4;
  }

  .product-section {
    padding: 0;
  }

  .section-content {
    flex-direction: column !important;
    gap: 0;
    min-height: auto;
  }

  .text-content {
    width: 100%;
    padding: 2rem 1.5rem;
    justify-content: flex-start;
  }

  .text-content h2 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .text-content p {
    font-size: 1rem;
    line-height: 1.6;
    text-align: left;
  }

  .image-grid {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }

  .grid-image-wrapper {
    min-height: 200px;
  }

  .grid-image {
    height: 200px;
  }

  .stats-group {
    gap: 2rem;
    padding-right: 2rem;
  }
  
  .stat-item {
    font-size: 0.95rem;
  }

  .separator-icon {
    width: 18px;
    height: 18px;
  }
  
  .product-list {
    grid-template-columns: repeat(2, 1fr);
    font-size: 1rem;
  }
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
