<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import PageLoader from './components/PageLoader.vue'

const route = useRoute()

watch(() => route.path, () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
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
</style>
