<template>
  <section id="home" class="hero-wrapper">
    <div class="container">
      <div class="hero-surface">
        <video
          ref="videoA"
          class="hero-video"
          :class="{ visible: currentIndex === 0 }"
          :src="sources[0]"
          muted
          playsinline
        ></video>
        <video
          ref="videoB"
          class="hero-video"
          :class="{ visible: currentIndex === 1 }"
          :src="sources[1]"
          muted
          playsinline
        ></video>
        <video
          ref="videoC"
          class="hero-video"
          :class="{ visible: currentIndex === 2 }"
          :src="sources[2]"
          muted
          playsinline
        ></video>
        <div class="hero-bg" />
        <div class="hero-inner">
          <div class="hero-copy">
            <p class="eyebrow">#1 Agricultural Partner in Ruvuma</p>
            <h1>Empowering Growth in<br />Agriculture and Beyond</h1>
            <div class="cta-row">
              <a href="#services" class="cta ghost">Our Services ↗</a>
              <a href="#contact" class="cta primary">Get in touch ↗</a>
            </div>
          </div>
          <!-- Floating Stats Bar -->
          <div class="stats-bar">
            <div class="stat">
              <span class="value">+{{ stat1 }}</span>
              <span class="label">Years serving agricultural enterprises</span>
            </div>
            <div class="divider" />
            <div class="stat">
              <span class="value">+{{ stat2 }}</span>
              <span class="label">Agricultural products supplied nationwide</span>
            </div>
            <div class="divider" />
            <div class="stat">
              <span class="value">+{{ stat3 }}</span>
              <span class="label">Farmers and businesses supported</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import videoSrc1 from '@/assets/videos/brofa_background_video.mp4'
import videoSrc2 from '@/assets/videos/brofa_background_video_2.mp4'
import videoSrc3 from '@/assets/videos/brofa_background_video_3.mp4'

const sources = [videoSrc1, videoSrc2, videoSrc3]

// Animated stats
const stat1 = ref(0)
const stat2 = ref(0)
const stat3 = ref(0)

function animateValue(targetRef, targetValue, durationMs) {
  const start = 0
  const range = targetValue - start
  const startTime = performance.now()
  const step = (now) => {
    const progress = Math.min((now - startTime) / durationMs, 1)
    targetRef.value = Math.floor(start + range * progress)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

const videoA = ref(null)
const videoB = ref(null)
const videoC = ref(null)
const currentIndex = ref(0)

function playIndex(index) {
  const els = [videoA.value, videoB.value, videoC.value]
  els.forEach((el, i) => {
    if (!el) return
    if (i === index) {
      try {
        void el.play()
      } catch {}
    } else {
      el.pause()
    }
  })
  currentIndex.value = index
}

function handleEnded(i) {
  const next = (i + 1) % sources.length
  const els = [videoA.value, videoB.value, videoC.value]
  const nextEl = els[next]
  if (nextEl) {
    nextEl.currentTime = 0
  }
  playIndex(next)
}

onMounted(() => {
  const a = videoA.value
  const b = videoB.value
  const c = videoC.value
  if (a) a.addEventListener('ended', () => handleEnded(0))
  if (b) b.addEventListener('ended', () => handleEnded(1))
  if (c) c.addEventListener('ended', () => handleEnded(2))
  if (a) void a.play()

  // Kick off stats animations on mount
  animateValue(stat1, 4, 1200)
  animateValue(stat2, 50, 1400)
  animateValue(stat3, 100, 1600)
})

onBeforeUnmount(() => {
  const a = videoA.value
  const b = videoB.value
  const c = videoC.value
  if (a) a.removeEventListener('ended', () => handleEnded(0))
  if (b) b.removeEventListener('ended', () => handleEnded(1))
  if (c) c.removeEventListener('ended', () => handleEnded(2))
})
</script>

<style scoped>
.hero-wrapper {
  padding-top: 5.25rem; /* adjusted for taller navbar */
  margin-bottom: 8rem; /* increased to accommodate floating stats bar */
}

.hero-surface {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  min-height: 660px;
  display: flex;
  align-items: stretch;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.hero-video.visible {
  opacity: 1;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.25)),
    linear-gradient(to right, rgba(0,0,0,0.2), rgba(0,0,0,0.0));
  z-index: 0;
}

.hero-inner { 
  position: relative; 
  z-index: 1; 
  flex: 1; 
  padding: clamp(1.5rem,4vw,3rem);
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-copy h1 {
  font-size: clamp(2.2rem,4.2vw,3.2rem);
  font-weight: 600;
  line-height: 1.25;
  color: #fff;
  margin: 0 0 1.75rem;
  letter-spacing: -0.5px;
}

.eyebrow {
  font-size: .85rem;
  letter-spacing: .15em;
  text-transform: uppercase;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
}

.cta-row { display:flex; gap:3rem; flex-wrap:wrap; }

.cta {
  display:inline-flex;
  align-items:center;
  gap:1.5rem;
  font-weight:400;
  padding:.9rem 0;
  text-decoration:none;
  background:transparent;
  color:rgba(255, 255, 255, 0.9);
  border:none;
  border-bottom:1px solid rgba(255, 255, 255, 0.6);
  transition:.35s cubic-bezier(.65,.05,.36,1);
  font-size:1.15rem;
  width:fit-content;
}
.cta.primary:hover { transform:translateY(-2px); }
.cta.ghost:hover { transform:translateY(-2px); }

.stats-bar {
  position: absolute;
    bottom: 0px;
    right: 0rem;
  background:#fff;
  padding:2rem 2.25rem;
  border-radius: .75rem 0 0 0;
  display:flex;
  gap:2rem;
  box-shadow:0 18px 40px -12px rgba(0,0,0,.25);
  align-items:stretch;
  width: min(820px, calc(100% - 3rem));
  backdrop-filter: blur(4px);
}

.stat { flex:1; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; }
.value { font-size:3.2rem; font-weight:800; color:rgba(49, 49, 49, 0.9); line-height:1; margin-bottom:.35rem; }
.label { font-size:.75rem; text-transform:uppercase; letter-spacing:.08em; font-weight:400; color:var(--text-secondary); line-height:1.3; }
.divider { width:1px; background:linear-gradient(to bottom, rgba(0,0,0,.08), rgba(0,0,0,.15)); }

/* Fade-in on load for hero texts */
.hero-copy .eyebrow,
.hero-copy h1,
.hero-copy .cta-row {
  opacity: 0;
  transform: translateY(12px);
  animation: heroFadeUp .75s ease-out forwards;
}

.hero-copy .eyebrow { animation-delay: .05s; }
.hero-copy h1 { animation-delay: .15s; }
.hero-copy .cta-row { animation-delay: .28s; }

@keyframes heroFadeUp {
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 1100px) {
  .stats-bar { position:static; margin-top:2.5rem; flex-direction:column; gap:1.25rem; width:100%; border-radius: .75rem; }
  .divider { display:none; }
  .hero-surface { min-height: 580px; }
  .hero-wrapper { margin-bottom: var(--space-4xl); }
}

@media (max-width: 640px) {
  .hero-wrapper { padding-top: 6.75rem; }
  .hero-surface { min-height:520px; }
  .cta { flex:1 1 100%; justify-content:center; }
  .stats-bar { padding:1.25rem 1.4rem; }
  .value { font-size:1.9rem; }
}
</style>
