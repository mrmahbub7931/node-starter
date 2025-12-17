import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,                 // allows access from Docker host
    port: 3002,
    strictPort: true,
    allowedHosts: ["admin.local.nikash"],
    fs: {
      strict: false,            // allows resolving files outside root (Docker fix)
    },
  },
  plugins: [react()],
})
