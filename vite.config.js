// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Hospitalline/', // Make sure this matches your GitHub repository name
  plugins: [react()],
});
