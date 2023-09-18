import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// SVG React Component
import svgr from 'vite-plugin-svgr'
import path from 'path'

const __dirname = path.resolve()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    open: true
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src/') }
  }
})
