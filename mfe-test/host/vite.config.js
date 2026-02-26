import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        remoteHeader: 'http://localhost:5001/remoteEntry.js',
        remoteDashboard: 'http://localhost:5002/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5173,
    cors: true,
  },
  preview: {
    port: 5173,
  },
});
