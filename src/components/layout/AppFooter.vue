<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <p class="footer-tagline">
              <span class="first-sentence">It's time to support sustainable agriculture,</span>
              <strong class="second-sentence"> with modern solutions</strong>
            </p>
            <p class="footer-point">Experienced for more than 4 years</p>
            <p class="footer-point">Support for the latest agri-technology</p>
          </div>
        </div>

        <div class="footer-section">
          <p class="footer-paragraph">
            By increasing the effectiveness and efficiency of farming practices, the use of quality agricultural inputs is very profitable for all farming enterprises.
          </p>
          
          <div class="social-media-buttons">
            <a href="#" class="social-button" aria-label="Facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            <a href="#" class="social-button" aria-label="Twitter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            
            <a href="#" class="social-button" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        
      </div>

      <div class="quick-links-section">
        <div class="quick-links-horizontal">
          <img class="quick-links-logo" :src="whiteLogo" alt="Brofa logo" />
          <a href="#home" class="quick-link">Home</a>
          <a href="#about" class="quick-link">About Us</a>
          <a href="#services" class="quick-link">Services</a>
          <a href="#contact" class="quick-link">Contact</a>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p>&copy; 2025 All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import whiteLogo from '@/assets/images/brofa_logo_white.png'
const whiteLogoUrl = whiteLogo
</script>

<style scoped>
.footer {
  background-color: #1B1B1B;
  color: white;
  padding: var(--space-4xl) var(--space-2xl) 0;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-4xl);
  margin-bottom: var(--space-4xl);
}

.footer-section h3,
.footer-section h4 {
  color: white;
  margin-bottom: var(--space-lg);
  font-size: var(--text-xl);
  font-weight: 600;
}

.footer-tagline {
  font-size: clamp(1.25rem, 2.4vw, 1.75rem);
  font-weight: 500;
  color: var(--primary-light);
  margin-bottom: var(--space-md);
  line-height: 1.35;
  max-width: 28ch;
  text-align: justify;
  text-align-last: left;
}

.footer-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}
.footer-point {
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 var(--space-sm);
  line-height: 1.6;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 200;
}

.footer-point::before {
  content: '✔';
  color: #22c55e; /* green checkmark */
  font-weight: 700;
}

/* Two-tone tagline styling to mirror trust section, optimized for dark bg */
.first-sentence { color: #ffffff; opacity: 0.92; }
.second-sentence { color: rgba(255, 255, 255, 0.6); font-weight: 500; }

.footer-paragraph {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 200;
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
  background-color: white;
  color: #1B1B1B;
  border-radius: 50%;
  transition: all var(--transition-base);
  text-decoration: none;
}

.social-button:hover {
  background-color: var(--primary-color);
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
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--primary-light);
}

.quick-links-logo {
  height: 30px;
  width: auto;
  opacity: 0.9;
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
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: var(--text-base);
  font-weight: 400;
  transition: color var(--transition-fast);
}

.quick-link:hover {
  color: var(--primary-light);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--space-lg) 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: var(--text-sm);
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
  }

  .contact-item {
    justify-content: center;
  }
}
</style>
