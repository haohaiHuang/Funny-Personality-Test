import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// @ts-ignore - tailwindcss plugin has no types yet
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.svg'],
})
