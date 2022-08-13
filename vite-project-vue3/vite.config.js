/*
 * @Description: 
 * @Author: v833
 * @Date: 2022-06-26 15:43:40
 * @LastEditors: v833
 * @LastEditTime: 2022-08-13 17:56:19
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.js', '.jsx', '.vue'],
  }
})
