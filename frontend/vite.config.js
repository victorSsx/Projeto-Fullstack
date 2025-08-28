import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Projeto-Fullstack/", // 👈 mesmo nome do repo raiz
})
