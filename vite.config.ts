import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-import.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ['src/components'],
      extensions: ['vue', 'tsx'],
      dts: 'src/components.d.ts'
    })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://172.12.15.138:8088',
        changeOrigin: true
      }
    }
  }
})
