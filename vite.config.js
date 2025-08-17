import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Use relative base so it works under any subpath (GitHub Pages)
  base: './',
  build: {
    outDir: 'docs', // output directly to docs/ for GitHub Pages (deploy from branch)
    emptyOutDir: true,
  },
  plugins: [vue(),
    tailwindcss(),
  ],
})