import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import CSS styles
import './assets/css/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Ensure correct document title after mount (some hosts cache default)
if (typeof document !== 'undefined') {
	document.title = 'BROFA Investment'
}
