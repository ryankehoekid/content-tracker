import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/v5/',
  plugins: [react()],
  build: {
    outDir: '../v5',
    emptyOutDir: true,
    chunkSizeWarningLimit: 900,
  },
})
