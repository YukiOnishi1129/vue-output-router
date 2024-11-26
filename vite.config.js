import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repositoryName = 'vue-output-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? `/${repositoryName}/` : '/',
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
