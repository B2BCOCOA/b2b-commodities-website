<template>
  <section class="about-section" id="about">
    <div class="container">
      <div class="about-content">
        <h2 class="section-title">Get to know more about<br><span class="accent">Brofa Investment</span></h2>
        
        <div class="about-grid">
          <div class="about-panel">
            <p>
              At Brofa Investment, we are dedicated to enhancing agricultural trade and productivity. We specialize in
              import and export, ensuring prompt delivery of agri inputs, general supplies, and reliable transport & logistics services.
            </p>
          </div>
          <div class="about-copy">
            <p>
              Our commitment to quality and innovation in merchant trading propels us to be a leading partner for agricultural enterprises seeking to thrive in a competitive market. Join us as we foster sustainable growth and efficiency in the agricultural sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for this component
</script>

<style scoped>
.about-section { padding: clamp(3.5rem,7vw,5.5rem) 0; background: var(--background-light); }

.about-content { max-width: 1200px; margin: 0 auto; }

.section-title { font-size:clamp(2rem,3.2vw,2.6rem); font-weight:600; line-height:1.25; color:var(--text-primary); text-align:center; margin:0 0 3rem; }
.section-title .accent { color: var(--primary-color); font-weight:700; }

.about-grid { display:grid; grid-template-columns: 1fr 1fr; gap:2.75rem; align-items:center; }
.about-panel { background:url('@/assets/images/about_section_background.jpg') center/cover no-repeat; color:#fff; border-radius:.85rem; padding:1.25rem 1.25rem 1.25rem; position:relative; min-height:170px; display:flex; align-items:flex-end; box-shadow:0 14px 34px -14px rgba(0,0,0,.4); }
.about-panel::after { content:''; position:absolute; inset:0; background:rgba(0,0,0,0.55); border-radius:inherit; }
.about-panel p { position:relative; z-index:1; font-size:1.05rem; line-height:1.55; font-weight:300; letter-spacing:.25px; color:#fff; text-align:justify; padding:0 1rem; opacity:0.85; }
.about-copy p { font-size:1.05rem; color:var(--text-secondary); line-height:1.7; text-align:justify; }

@media (max-width: 860px) { .about-grid { grid-template-columns:1fr; gap:2rem; } .about-panel { min-height:200px; } }
@media (max-width: 640px) { .section-title { font-size:2.1rem; } .about-copy p { font-size:1rem; } }
</style>
