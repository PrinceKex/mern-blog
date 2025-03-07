import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import commonjs from 'vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
 server: {
  proxy: {
   '/api': {
    target: 'http://localhost:3000',
    secure: false,
   },
  },
 },
 plugins: [react(), commonjs()],
 //  plugins: [commonjs()],
})
