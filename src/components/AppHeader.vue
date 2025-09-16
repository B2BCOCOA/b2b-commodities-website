<template>
  <header class="header">
    <nav class="container flex items-center justify-between py-4">
      <!-- Logo -->
      <div class="logo">
        <router-link to="/" class="text-xl font-bold text-primary">
          Brofa Investment Limited
        </router-link>
      </div>

      <!-- Desktop Navigation -->
      <ul class="nav-links hidden md:flex items-center gap-8">
        <li><a href="#home" class="nav-link">Home</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#services" class="nav-link">Services</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMobileMenu" 
        class="mobile-menu-btn md:hidden"
        :class="{ 'active': isMobileMenuOpen }"
        aria-label="Toggle mobile menu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </nav>

    <!-- Mobile Navigation -->
    <div 
      class="mobile-nav md:hidden"
      :class="{ 'active': isMobileMenuOpen }"
    >
      <ul class="mobile-nav-links">
        <li><a href="#home" class="mobile-nav-link" @click="closeMobileMenu">Home</a></li>
        <li><a href="#about" class="mobile-nav-link" @click="closeMobileMenu">About</a></li>
        <li><a href="#services" class="mobile-nav-link" @click="closeMobileMenu">Services</a></li>
        <li><a href="#contact" class="mobile-nav-link" @click="closeMobileMenu">Contact</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.header {
  background-color: white;
  box-shadow: var(--shadow-sm);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.nav-link {
  color: var(--text-primary);
  font-weight: 500;
  transition: color var(--transition-fast);
  padding: var(--space-sm) 0;
  position: relative;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width var(--transition-base);
}

.nav-link:hover::after {
  width: 100%;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger-line {
  width: 100%;
  height: 2px;
  background-color: var(--text-primary);
  transition: all var(--transition-base);
}

.mobile-menu-btn.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Mobile Navigation */
.mobile-nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: var(--shadow-lg);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base);
}

.mobile-nav.active {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.mobile-nav-links {
  list-style: none;
  padding: var(--space-md) 0;
  margin: 0;
}

.mobile-nav-link {
  display: block;
  padding: var(--space-md) var(--space-xl);
  color: var(--text-primary);
  font-weight: 500;
  transition: all var(--transition-fast);
  border-left: 3px solid transparent;
}

.mobile-nav-link:hover {
  color: var(--primary-color);
  background-color: var(--background-light);
  border-left-color: var(--primary-color);
}
</style>
