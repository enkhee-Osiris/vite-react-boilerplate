import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh(), WindiCSS()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
