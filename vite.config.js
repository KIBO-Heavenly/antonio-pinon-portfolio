import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Must match your GitHub repo name for GitHub Pages (verified: antonio-pinon-portfolio)
  base: '/antonio-pinon-portfolio/',
  build: {
    outDir: 'docs'
  }
})
