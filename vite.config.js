import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Uncomment and set this for GitHub Pages deployment:
  // base: '/your-repo-name/',
  // Or use '/' for custom domain or username.github.io repos
})
