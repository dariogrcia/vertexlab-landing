import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path for GitHub Pages project site: https://dariogrcia.github.io/vertexlab-landing/
export default defineConfig({
  plugins: [react()],
  base: '/vertexlab-landing/',
})
