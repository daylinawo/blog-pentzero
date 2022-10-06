import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import ssr from 'vite-plugin-ssr/plugin';

const path = require('path');

export default defineConfig({
  plugins: [vue(), svgLoader(), ssr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                @import "./src/assets/styles/_breakpoints.scss";
                `,
      },
    },
  },
});
