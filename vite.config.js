import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src/',
      '@styles': '/src/assets/styles',
      '@assets': '/src/assets/',
      '@common': '/src/common/',
      '@utils': '/src/utils/',
    },
  },
  server: {
    port: 5500,
  }
})
