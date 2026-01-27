<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <p class="footer-tagline">
              <span class="first-sentence">{{ $t('footer.tagline.first') }}</span>
              <strong class="second-sentence"> {{ $t('footer.tagline.second') }}</strong>
            </p>
            <p class="footer-point">{{ $t('footer.point1') }}</p>
            <p class="footer-point">{{ $t('footer.point2') }}</p>
          </div>
        </div>

        <div class="footer-section">
          <p class="footer-paragraph">
            {{ $t('footer.paragraph') }}
          </p>
          
          <div class="social-media-buttons">
            <a href="#" class="social-button" aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            <a href="https://www.linkedin.com/in/grzegorz-p-winiarek-b2b-commodities-869992266/" class="social-button" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        
      </div>

      <div class="quick-links-section">
        <div class="quick-links-horizontal">
          <img class="quick-links-logo" :src="logoUrl" alt="B2B Commodities Logo" />
          <router-link to="/" class="quick-link">{{ $t('footer.links.home') }}</router-link>
          <router-link to="/products" class="quick-link">{{ $t('footer.links.products') }}</router-link>
          <router-link to="/partners" class="quick-link">{{ $t('footer.links.partners') }}</router-link>
          <router-link to="/founder" class="quick-link">{{ $t('footer.links.founder') }}</router-link>
          <router-link to="/contact" class="quick-link">{{ $t('footer.links.contact') }}</router-link>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>&copy; 2025 {{ $t('footer.rights') }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import logo from '@/assets/images/logo-placeholder.png'
const logoUrl = logo
</script>

<style scoped>
.footer {
  background-color: #ffffff;
  color: var(--text-primary);
  padding: var(--space-4xl) var(--space-2xl) 0;
  border-top: 1px solid var(--border-color);
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-4xl);
  margin-bottom: var(--space-4xl);
}

.footer-section h3,
.footer-section h4 {
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
  font-size: var(--text-xl);
  font-weight: 600;
}

.footer-tagline {
  font-size: clamp(1.25rem, 2.4vw, 1.75rem);
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: var(--space-md);
  line-height: 1.35;
  max-width: 28ch;
  text-align: justify;
  text-align-last: left;
}

.footer-description {
  color: var(--text-secondary);
  line-height: 1.6;
}
.footer-point {
  color: var(--text-secondary);
  margin: 0 0 var(--space-sm);
  line-height: 1.6;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 400;
  text-align: left;
}

.footer-point::before {
  content: '✔';
  color: var(--primary-color);
  font-weight: 700;
}

/* Two-tone tagline styling */
.first-sentence { color: var(--text-primary); opacity: 1; }
.second-sentence { color: var(--text-secondary); font-weight: 500; }

.footer-paragraph {
  color: var(--text-secondary);
  font-weight: 400;
  line-height: 1.7;
  text-align: justify;
  margin-bottom: var(--space-lg);
}

.social-media-buttons {
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-lg);
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  transition: all var(--transition-base);
  text-decoration: none;
}

.social-button:hover {
  background-color: var(--primary-dark);
  color: white;
  transform: translateY(-2px);
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: var(--space-sm);
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--primary-color);
}

.quick-links-logo {
  height: 30px;
  width: auto;
  opacity: 1;
  margin-right: auto;
}

.quick-links-section {
  margin: var(--space-2xl) 0 var(--space-sm);
}

.quick-links-horizontal {
  display: flex;
  justify-content: center;
  gap: var(--space-2xl);
  flex-wrap: wrap;
}

.quick-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: var(--text-base);
  font-weight: 500;
  transition: color var(--transition-fast);
}

.quick-link:hover {
  color: var(--primary-color);
}

.quick-link:focus {
  outline: none;
}

.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding: var(--space-lg) 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #54261280;
  font-size: var(--text-sm);
}

.footer-bottom p {
  margin: 0;
  color: #54261280;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }
  .footer-tagline { max-width: 100%; }
}

@media (max-width: 768px) {
  .footer {
    padding: var(--space-4xl) var(--space-lg) 0;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
    text-align: center;
  }

  .quick-links-horizontal {
    gap: var(--space-lg);
    justify-content: center;
  }

  .quick-link {
    font-size: var(--text-sm);
  }

  .footer-bottom-content {
    flex-direction: column;
    gap: var(--space-md);
    text-align: center;
    color: #54261280;
  }

  .contact-item {
    justify-content: center;
  }
}
</style>
