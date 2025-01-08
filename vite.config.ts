import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        charset: false, // Prevents encoding errors
      },
    },
  },
  optimizeDeps: {
    include: ["swiper/css", "swiper/css/free-mode", "swiper/css/effect-flip", "swiper/css/pagination", "swiper/css/navigation"],
  },
})
