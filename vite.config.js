<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
=======
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Hospitalline/', // Make sure this matches your GitHub repository name
  plugins: [react()],
});
>>>>>>> 29b66b9429399e29c93bf194e48b4cd8db1fc8ce
