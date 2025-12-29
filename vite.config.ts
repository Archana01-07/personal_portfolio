import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/Archana_Portfolio/', // ← This is the CORRECT "base" option
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});