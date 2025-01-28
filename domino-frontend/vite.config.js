import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration du proxy pour rediriger les requêtes API vers le backend
/*export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/socket.io': {
        target: 'http://localhost:3000', // Remplacez par l'URL de votre backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Supprime le préfixe `/api` des requêtes
      }
    }
  },
  build: {
    outDir: 'dist', // This is the default; ensure it's set if needed
  },
});*/

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/socket.io': {
        target: 'http://localhost:3000',
        ws: true
      }
    }
  }
});