import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to your repository name for GitHub Pages project sites
  base: '/antonio-pinon-portfolio/',
  build: {
    outDir: 'docs'
  }
})
