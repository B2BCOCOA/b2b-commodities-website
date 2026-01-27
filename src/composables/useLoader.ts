import { ref } from 'vue'

const isLoading = ref(false)
let loadingTimeout: ReturnType<typeof setTimeout>

export function useLoader() {
  const setLoading = (loading: boolean) => {
    if (loading) {
      // Show loader after 300ms of loading to avoid flickering on fast connections
      loadingTimeout = setTimeout(() => {
        isLoading.value = true
      }, 300)
    } else {
      // Clear timeout and hide loader
      clearTimeout(loadingTimeout)
      isLoading.value = false
    }
  }

  return {
    isLoading,
    setLoading,
  }
}
