<template>
  <div class="services-page">
    <ServicesSection />
  </div>
</template>

<script setup>
import ServicesSection from '@/components/sections/ServicesSection.vue'
</script>

<style scoped>
.services-page {
  padding-top: 80px; /* Offset for fixed navbar */
  min-height: 100vh;
}
</style>
