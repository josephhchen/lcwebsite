import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lcwebsite/',  // Make sure to include both leading and trailing slashes
  build: {
    outDir: 'dist'
  }
})