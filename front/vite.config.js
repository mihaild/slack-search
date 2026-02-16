import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // This makes the build output directory 'build' like CRA
    outDir: 'build'
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8000',
      '/archive': 'http://localhost:8000',
      '/static': 'http://localhost:8000'
    }
  }
})
