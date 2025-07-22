// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/le-perroquet-articles/', // 👈 important pour GitHub Pages
  plugins: [react()],
});
