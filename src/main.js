import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import brofaFavicon from './assets/icons/nav_icon.png'

// Import CSS styles
import './assets/css/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Ensure correct document title after mount (some hosts cache default)
if (typeof document !== 'undefined') {
	document.title = 'BROFA Investment'
	// Update favicon to the requested asset from src/assets
	const setFavicon = (href) => {
		const ensure = (rel) => {
			let link = document.querySelector(`link[rel='${rel}']`)
			if (!link) {
				link = document.createElement('link')
				link.setAttribute('rel', rel)
				document.head.appendChild(link)
			}
			link.setAttribute('href', href)
		}
		ensure('icon')
		ensure('shortcut icon')
	}
	setFavicon(brofaFavicon)
}
