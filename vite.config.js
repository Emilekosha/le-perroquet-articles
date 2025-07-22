import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base: '/NOM_DU_REPO/', // 👈 très important
  plugins: [react()],
})
