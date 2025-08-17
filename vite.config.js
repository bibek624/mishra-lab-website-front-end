import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Set base for GitHub Pages (repo name)
  base: '/mishra-lab-website-front-end/',
  plugins: [vue(),
    tailwindcss(),
  ],
})