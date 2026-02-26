import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteHeader',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/Header.jsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5001,
    cors: true,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
