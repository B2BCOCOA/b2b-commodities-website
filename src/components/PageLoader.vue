<script setup lang="ts">
import { computed } from 'vue'
import { useLoader } from '../composables/useLoader'

const { isLoading } = useLoader()

const showLoader = computed(() => isLoading.value)
</script>

<template>
  <div v-if="showLoader" class="page-loader">
    <div class="loader-container">
      <div class="spinner"></div>
      <p class="loader-text">Loading...</p>
    </div>
  </div>
</template>

<style scoped>
.page-loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  backdrop-filter: blur(2px);
}

.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f0f0f0;
  border-top: 4px solid var(--primary-color, #0066cc);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loader-text {
  font-size: 14px;
  color: #666;
  font-weight: 500;
}
</style>
