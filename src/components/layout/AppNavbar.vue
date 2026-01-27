<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="navbar-content">
        <!-- Logo -->
        <router-link to="/" class="nav-brand" aria-label="B2B Commodities Home">
          <img :src="logo" alt="B2B Commodities" class="brand-logo" />
        </router-link>

        <!-- Desktop Navigation -->
        <div class="nav-links desktop-nav">
          <router-link to="/" class="nav-link">{{ $t('nav.home') }}</router-link>
          <router-link to="/products" class="nav-link">{{ $t('nav.products') }}</router-link>
          <router-link to="/partners" class="nav-link">{{ $t('nav.partners') }}</router-link>
          <router-link to="/founder" class="nav-link">{{ $t('nav.founder') }}</router-link>
          <router-link to="/contact" class="nav-button">{{ $t('nav.contact') }}</router-link>
          <LanguageSwitcher />
        </div>
        

        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Mobile Navigation (rendered only when open) -->
        <div v-if="isMobileMenuOpen" :class="['mobile-menu', { open: isMobileMenuOpen }]">
          <div class="nav-links">
            <router-link to="/" class="nav-link" @click="closeMobileMenu">{{ $t('nav.home') }}</router-link>
            <router-link to="/products" class="nav-link" @click="closeMobileMenu">{{ $t('nav.products') }}</router-link>
            <router-link to="/partners" class="nav-link" @click="closeMobileMenu">{{ $t('nav.partners') }}</router-link>
            <router-link to="/founder" class="nav-link" @click="closeMobileMenu">{{ $t('nav.founder') }}</router-link>
            <router-link to="/contact" class="nav-button mobile-btn" @click="closeMobileMenu">{{ $t('nav.contact') }}</router-link>
            <div class="mobile-switcher-wrapper">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import logo from '@/assets/images/logo-placeholder.png'

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
  window.scrollTo({ top: 0, behavior: 'instant' })
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
  padding-right: 6rem; /* Match hero right padding */
}

.desktop-nav {
  display: flex;
  gap: var(--space-3xl);
  align-items: center;
  margin-left: auto; /* Push to the right */
}


.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  height: 100%;
  padding-left: 6rem; /* Match hero left padding */
  outline: none;
}
.brand-logo { height:42px; width:auto; display:block; object-fit:contain; transition:transform .35s; }
.navbar.scrolled .brand-logo { height:38px; }
.nav-brand:hover .brand-logo { transform:translateY(-2px) scale(1.02); }

/* Moved to .navbar-content styles above */

.nav-link { font-weight:400; color: var(--text-secondary); transition: color var(--transition-fast), font-weight var(--transition-fast); position:relative; text-decoration:none; outline: none; }
.nav-link:hover { color: var(--text-primary); }
/* Active (current page) – higher contrast & bolder */
.nav-link.router-link-exact-active { color: var(--primary-color); font-weight:700; }
.nav-link.router-link-active { color: var(--text-primary); }

.nav-button {
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color var(--transition-fast);
  white-space: nowrap;
  outline: none;
}

.nav-button:hover {
  background-color: var(--primary-dark);
}

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
