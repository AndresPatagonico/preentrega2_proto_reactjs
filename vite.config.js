import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Desde Github hay que pasar le base.
  base: "/preentrega2_proto_reactjs/",
})
