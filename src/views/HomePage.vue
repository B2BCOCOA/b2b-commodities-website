<template>
  <div class="home-page">
    <HeroSection />
    <AboutSection />
  </div>
</template>

<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
</script>

<style scoped>
.home-page {
  padding-top: 80px; /* Offset for fixed navbar */
  min-height: 100vh;
}
</style>
