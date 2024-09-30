import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: [
        "element-plus", 
      ]},
    lib: {
      entry: './src/index.ts',
      name: 'Counter',
      fileName: 'counter'
    }
  }
})
