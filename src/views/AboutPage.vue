<template>
  <div class="about-page">
    <AboutSection />
    <TeamSection />
  </div>
</template>

<script setup>
import AboutSection from '@/components/sections/AboutSection.vue'
import TeamSection from '@/components/sections/TeamSection.vue'
</script>

<style scoped>
.about-page {
  padding-top: 80px; /* Offset for fixed navbar */
  min-height: 100vh;
}
</style>
