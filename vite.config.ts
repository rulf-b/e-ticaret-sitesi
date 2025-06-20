import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path" // Bu satır eklendi

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Aşağıdaki "resolve" bloğu eklendi
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})