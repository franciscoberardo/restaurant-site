import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteImagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),ViteImagemin()],
  base:'https://franciscoberardo.github.io/restaurant-site/'
})
