import { crx } from '@crxjs/vite-plugin'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import manifest from './manifest.json' assert { type: 'json' } // Node >=17

export default defineConfig({
  plugins: [
    vue(),
    crx({ manifest }),
  ],
})
