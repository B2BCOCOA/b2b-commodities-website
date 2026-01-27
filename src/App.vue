<script setup>
import { onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import PageLoader from './components/PageLoader.vue'

const route = useRoute()

watch(() => route.path, () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
})

let rafId
let isTouch = false

onMounted(() => {
  // Skip on touch devices
  const isFirefox = /firefox/i.test(navigator.userAgent)
  isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || isFirefox
  if (isTouch) return

  const dot = document.createElement('div')
  const ring = document.createElement('div')
  dot.className = 'cursor-dot'
  ring.className = 'cursor-ring'
  document.body.appendChild(dot)
  document.body.appendChild(ring)

  let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2
  let ringX = targetX, ringY = targetY

  const onMove = (e) => {
    targetX = e.clientX
    targetY = e.clientY
    dot.style.transform = `translate(${targetX}px, ${targetY}px)`
  }

  const animate = () => {
    ringX += (targetX - ringX) * 0.12
    ringY += (targetY - ringY) * 0.12
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`
    rafId = requestAnimationFrame(animate)
  }

  window.addEventListener('mousemove', onMove)
  animate()

  const cleanup = () => {
    window.removeEventListener('mousemove', onMove)
    if (rafId) cancelAnimationFrame(rafId)
    dot.remove()
    ring.remove()
  }

  // store cleanup on element for onBeforeUnmount to access
  ;(window).__cursorCleanup = cleanup
})

onBeforeUnmount(() => {
  if ((window).__cursorCleanup) (window).__cursorCleanup()
})
</script>

<template>
  <div id="app">
    <PageLoader />
    <AppNavbar />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<style>
@import './assets/css/main.css';

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Fancy cursor (disabled on touch) */
@media (pointer: fine) {
  body { cursor: none; }
  .cursor-dot {
    position: fixed;
    left: 0; top: 0;
    width: 6px; height: 6px;
    margin-left: -3px; margin-top: -3px;
    background: var(--primary-color);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.02s linear;
  }
  .cursor-ring {
    position: fixed;
    left: 0; top: 0;
    width: 32px; height: 32px;
    margin-left: -16px; margin-top: -16px;
    border: 2px solid rgba(255,255,255,0.9);
    box-shadow: 0 0 0 2px rgba(37,99,235,0.2);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transition: transform 0.15s ease-out, border-color 0.2s;
  }
}

/* Force default cursor in Firefox */
@-moz-document url-prefix() {
  body { cursor: auto !important; }
  .cursor-dot, .cursor-ring { display: none !important; }
}
</style>
