import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/X1BlockchainGuide/', // Angepasst an den Repository-Namen
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.json']
})

