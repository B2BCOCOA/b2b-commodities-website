<template>
  <section class="trust-section">
    <div class="container">
      <div class="trust-content">
        <div class="trust-text-grid">
          <h2 class="trust-title">
            <span class="first-sentence">Focusing on quality,</span>
            <strong class="second-sentence"> we maintain customer trust</strong>
          </h2>
          <p class="trust-description">We guarantee that every agricultural input we supply undergoes rigorous quality testing. Reliable solutions for sustainable farming and improved crop yields.</p>
        </div>
      </div>

      <!-- Partner Logos -->
      <div class="partners-grid">
        <div class="partner-logo">
          <div class="logo-circle white">
            <img :src="partner1" alt="Partner 1" class="partner-image" />
          </div>
        </div>
        <div class="partner-logo">
          <div class="logo-circle white">
            <img :src="partner2" alt="Partner 2" class="partner-image" />
          </div>
        </div>
        <div class="partner-logo">
          <div class="logo-circle white">
            <img :src="partner3" alt="Partner 3" class="partner-image" />
          </div>
        </div>
        <div class="partner-logo">
          <div class="logo-circle white">
            <img :src="partner4" alt="Partner 4" class="partner-image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import partner1 from '@/assets/images/partner_1.png'
import partner2 from '@/assets/images/partner_2.png'
import partner3 from '@/assets/images/partner_3.png'
import partner4 from '@/assets/images/partner_4.png'
</script>

<style scoped>
.trust-section { padding: 0 0 3rem; background: var(--background); margin-top: -2rem; }

.trust-content { text-align:center; max-width: 1200px; margin:0 auto 3.25rem; padding:0 3rem; }

.trust-text-grid { display: grid; grid-template-columns: 1.1fr 0.8fr; gap: 0.5rem; align-items: center; text-align: left; }

.trust-title { font-size:clamp(1.9rem,3.2vw,2.4rem); font-weight:500; line-height:1.22; margin:0; }
.trust-title strong { font-weight:500; }
.first-sentence { color: #313131; }
.second-sentence { color: rgba(49, 49, 49, 0.5); }

.text-secondary {
  color: var(--text-secondary);
}

.text-primary {
  color: var(--text-primary);
}

.trust-description { font-size:1.05rem; color:var(--text-secondary); line-height:1.55; margin: 0; font-weight: 200; opacity: 0.7; text-align: justify; }

.partners-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:0.1rem; max-width:1400px; margin:2rem auto 0; padding:0 6rem; }

.partner-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-circle { width:220px; height:220px; min-width:220px; min-height:220px; max-width:220px; max-height:220px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 6px 18px -8px rgba(0,0,0,.25); transition:.35s; flex-shrink:0; }

.logo-circle:hover { transform:translateY(-6px) scale(1.03); box-shadow:0 14px 30px -10px rgba(0,0,0,.3); }

.logo-circle.green { background:linear-gradient(135deg,var(--primary-color),var(--primary-light)); color:#fff; }

.logo-circle.white { background:#fff; color:var(--text-primary); border:1.5px solid var(--border-color); }

.logo-circle.yellow { background:#fbbf24; color:#fff; }

.logo-text { font-size:1.5rem; font-weight:700; text-align:center; line-height:1.15; letter-spacing:.05em; }

.logo-icon {
  font-size: 4rem;
}

.partner-image { width: 70%; height: 70%; object-fit: contain; filter: none; opacity: 0.95; }

@media (max-width: 768px) {
  .trust-text-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }
  
  .trust-title {
    font-size: var(--text-2xl);
    margin-bottom: 1rem;
  }

  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
    padding: 0 1.25rem;
  }

  .logo-circle {
    width: 100px;
    height: 100px;
    min-width: 100px;
    min-height: 100px;
    max-width: 100px;
    max-height: 100px;
  }

  .logo-text {
    font-size: var(--text-xs);
  }

  .logo-icon {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-md);
    padding: 0 0.75rem;
  }

  .logo-circle {
    width: 80px;
    height: 80px;
    min-width: 80px;
    min-height: 80px;
    max-width: 80px;
    max-height: 80px;
  }
}
</style>
