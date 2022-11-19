import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import testPlugin from './plugins/test-plugin'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), testPlugin()],
  server: {
    port: 1234
  },
  optimizeDeps: {
    // exclude: ['lodash-es']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.ts', '.js', '.jsx', '.vue']
  }
})
