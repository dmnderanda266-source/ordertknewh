
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Using './' allows the app to be deployed in subdirectories (like GitHub Pages)
  // or at the root of a domain without changing the config.
  base: './', 
})
