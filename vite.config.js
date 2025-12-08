import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  // Dynamically import the devtools plugin only in development. Some
  // devtools packages expect browser globals (localStorage) and will
  // throw when imported during a Node build.
  let devtoolsPlugin = null
  if (mode === 'development') {
    const mod = await import('vite-plugin-vue-devtools')
    // plugin factory is the default export
    const pluginFactory = mod && (mod.default || mod)
    if (typeof pluginFactory === 'function') devtoolsPlugin = pluginFactory()
  }

  return {
    plugins: [
      vue(),
      devtoolsPlugin,
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
  }
})
