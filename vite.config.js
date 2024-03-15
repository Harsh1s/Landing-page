import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // enable CSS modules for Material-UI styles
      generateScopedName: '[local]___[hash:base64:5]'
    }
  }
});
