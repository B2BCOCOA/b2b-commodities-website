<template>
  <div class="home-page">
    <HeroSection />
    <TrustSection />
    <AboutSection />
    <TeamSection />
    <ServicesSection />
    <ContactSection />
  </div>
</template>

<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import TrustSection from '@/components/sections/TrustSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import TeamSection from '@/components/sections/TeamSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}
</style>
