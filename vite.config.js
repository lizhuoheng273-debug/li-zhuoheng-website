import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// Cloudflare Pages 构建环境自带 CF_PAGES=1，此时站点部署在域名根路径，base 必须为 '/'
// GitHub Pages 无该变量，沿用 '/li-zhuoheng-website/' 以匹配仓库子路径
const base = process.env.CF_PAGES ? '/' : '/li-zhuoheng-website/'

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 5173,
  },
})
