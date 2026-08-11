import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// User site: https://MihirChandratre08.github.io/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
