import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Use relative base so it works under any subpath (GitHub Pages)
  base: './',
  plugins: [vue(),
    tailwindcss(),
  ],
})