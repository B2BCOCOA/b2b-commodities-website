<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="navbar-content">
        <!-- Logo -->
        <a href="#home" class="nav-brand" aria-label="Brofa Investment Limited Home">
          <img :src="logo" alt="Brofa Investment Limited" class="brand-logo" />
        </a>

        <!-- Desktop Navigation -->
        <div class="nav-links desktop-nav">
          <a href="#home" class="nav-link active">Home</a>
          <a href="#about" class="nav-link">About Us</a>
          <a href="#services" class="nav-link">Services</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
        
        <!-- Spacer for layout balance -->
        <div class="nav-spacer"></div>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Mobile Navigation (rendered only when open) -->
        <div v-if="isMobileMenuOpen" :class="['mobile-menu', { open: isMobileMenuOpen }]">
          <div class="nav-links">
            <a href="#home" class="nav-link" @click="closeMobileMenu">Home</a>
            <a href="#about" class="nav-link" @click="closeMobileMenu">About Us</a>
            <a href="#services" class="nav-link" @click="closeMobileMenu">Services</a>
            <a href="#contact" class="nav-link" @click="closeMobileMenu">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '@/assets/images/brofa_logo.png'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all var(--transition-base);
  padding: 0.75rem 0; /* increased height */
}

.navbar.scrolled {
  padding: 0.55rem 0; /* compact but still taller */
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100%;
  min-height: 60px; /* ensure consistent height */
}

.desktop-nav {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--space-3xl);
}

.nav-spacer {
  width: 1px; /* Invisible spacer for layout balance */
}

.nav-brand { display:flex; align-items:center; gap:.65rem; font-weight:700; color:var(--primary-color); text-decoration:none; height:100%; }
.brand-logo { height:42px; width:auto; display:block; object-fit:contain; transition:transform .35s; }
.navbar.scrolled .brand-logo { height:38px; }
.nav-brand:hover .brand-logo { transform:translateY(-2px) scale(1.02); }

/* Moved to .navbar-content styles above */

.nav-link { font-weight:400; color: var(--text-secondary); transition: color var(--transition-fast), font-weight var(--transition-fast); position:relative; text-decoration:none; }
.nav-link:hover { color: var(--text-primary); }
/* Active (current section) – higher contrast & bolder, no color shift */
.nav-link.active { color: var(--text-primary); font-weight:700; }
/* Remove previous underline decoration */
.nav-link.active::after { display:none !important; content:none; }

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-sm);
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: var(--text-primary);
  border-radius: 2px;
  transition: all var(--transition-fast);
}

.mobile-menu { position:absolute; top:100%; left:0; right:0; background:#fff; box-shadow:var(--shadow-lg); padding:var(--space-lg) var(--space-xl) var(--space-xl); border-radius:0 0 var(--radius-lg) var(--radius-lg); animation:menuFade .25s ease; z-index: 1200; }
@keyframes menuFade { from { opacity:0; transform:translateY(-6px);} to { opacity:1; transform:translateY(0);} }

.mobile-menu .nav-links {
  display: flex !important;
  flex-direction: column;
  padding: var(--space-lg);
  gap: var(--space-md);
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
}
</style>
