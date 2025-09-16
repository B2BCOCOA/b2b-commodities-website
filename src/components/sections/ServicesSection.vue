<template>
  <section class="services-section" id="services">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="first-sentence">Quality Services That</span>
          <strong class="second-sentence"> Drive Agricultural Growth</strong>
        </h2>
      </div>

      <div class="services-grid">
        <div class="service-card" v-for="service in services" :key="service.id">
          <div class="service-icon">
            <img :src="service.icon" :alt="service.title + ' icon'" class="icon-image" loading="lazy" />
          </div>
          <div class="service-content">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
// Imported service icons (PNG) for consistent styling & caching
import iconImportExport from '@/assets/icons/hugeicons_trade-up.png'
import iconGeneralSupply from '@/assets/icons/fluent-mdl2_product.png'
import iconTransport from '@/assets/icons/icon-park-outline_transporter.png'
import iconAgriInputs from '@/assets/icons/tabler_plant-2.png'
import iconMerchantTrading from '@/assets/icons/healthicons_agriculture-outline.png'
import iconConsultancy from '@/assets/icons/mdi_help-outline.png'

const services = ref([
  {
    id: 1,
    title: 'Import and Export',
    description: 'We handle comprehensive import and export services for agricultural products and equipment, ensuring seamless international trade operations.',
    icon: iconImportExport
  },
  {
    id: 2,
    title: 'General Supply',
    description: 'Supplying high-quality agricultural inputs, tools, and equipment to support farming operations across the region.',
    icon: iconGeneralSupply
  },
  {
    id: 3,
    title: 'Transport and Logistics',
    description: 'Reliable transportation and logistics services ensuring timely delivery of goods and materials to our clients.',
    icon: iconTransport
  },
  {
    id: 4,
    title: 'Agri Inputs',
    description: 'Providing premium quality agricultural inputs including seeds, fertilizers, and farming tools for optimal crop production.',
    icon: iconAgriInputs
  },
  {
    id: 5,
    title: 'Merchant Trading',
    description: 'Expert in mechanical trading of agricultural equipment and machinery to enhance farming productivity.',
    icon: iconMerchantTrading
  },
  {
    id: 6,
    title: 'Consultancy Services',
    description: 'Professional agricultural consultancy services to help farmers and enterprises optimize their operations and productivity.',
    icon: iconConsultancy
  }
])
</script>

<style scoped>
.services-section { padding: clamp(3.5rem,7vw,5.5rem) 0; background:#f4faf6; }

/* Reduced bottom margin under title */
.section-header { text-align:center; margin-bottom:2.9rem; max-width:600px; margin-left:auto; margin-right:auto; }

.section-title { font-size:clamp(1.9rem,3.2vw,2.4rem); font-weight:500; line-height:1.22; margin:0; }
.section-title strong { font-weight:500; }
.first-sentence { color:#313131; }
.second-sentence { color:rgba(49,49,49,.5); }

.services-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:0; max-width:1200px; margin:0 auto; }

/* Lightened border using RGBA for reduced visual weight */
.service-card { background:#fff; border-radius:0; padding:1.9rem 1.6rem 1.7rem; border:1px solid rgba(226,232,240,.35); box-shadow:0 6px 22px -10px rgba(0,0,0,.12); transition:.35s; display:flex; flex-direction:column; }
.service-card:hover { transform:translateY(-6px); box-shadow:0 18px 34px -14px rgba(0,0,0,.22); border-color:rgba(58,180,112,.55); }

/* Remove inner rounding for grid adjacency; add rounding only on outer perimeter */
.services-grid > .service-card:first-child { border-top-left-radius:.85rem; }
.services-grid > .service-card:nth-child(3) { border-top-right-radius:.85rem; }
.services-grid > .service-card:nth-last-child(3) { border-bottom-left-radius:.85rem; }
.services-grid > .service-card:last-child { border-bottom-right-radius:.85rem; }

/* Icon container: white background, no border, lighter shadow */
.service-icon { width:60px; height:60px; background:#fff; border:none; border-radius:14px; display:flex; align-items:center; justify-content:center; margin:0 0 1.1rem; box-shadow:0 2px 6px -2px rgba(0,0,0,.14); }

/* Recolor black icons to green via filter; adjust if source icons differ */
.icon-image { width:30px; height:30px; object-fit:contain; filter:brightness(0) saturate(100%) invert(38%) sepia(71%) saturate(660%) hue-rotate(93deg) brightness(88%) contrast(94%); opacity:.95; }

.service-content h3 { font-size:1.05rem; font-weight:700; color:rgba(49,49,49,.9); margin:0 0 .55rem; letter-spacing:.3px; }
.service-description { font-size:.9rem; color:var(--text-secondary); line-height:1.55; text-align:justify; font-weight:400; opacity:.5; }

/* Mobile: single column layout */
@media (max-width: 860px) { 
  .services-grid { 
    grid-template-columns: 1fr; 
    gap: 1rem;
  }
  .service-card {
    border-radius: .85rem;
  }
}
@media (max-width: 640px) { 
  .section-title { font-size:2rem; } 
  .service-card { padding:1.5rem 1.3rem 1.4rem; } 
}
</style>
