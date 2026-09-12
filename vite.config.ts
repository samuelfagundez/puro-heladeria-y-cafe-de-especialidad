import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Nombre del repo en GitHub Pages -> https://<usuario>.github.io/puro-heladeria-y-cafe-de-especialidad/
const BASE = process.env.VITE_BASE ?? '/puro-heladeria-y-cafe-de-especialidad/'

export default defineConfig({
  base: BASE,
  plugins: [react(), tailwindcss()],
})
