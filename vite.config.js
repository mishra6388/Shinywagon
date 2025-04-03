import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    historyApiFallback: true, // Ensures React Router handles navigation correctly
  },
  build: {
    outDir: 'dist', // Ensures correct output folder for Vercel deployment
  }
})
