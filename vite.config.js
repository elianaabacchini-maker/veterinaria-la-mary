import { defineConfig } from 'vite'

export default defineConfig({
  base: '/veterinaria-la-mary/',
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        institucional: 'institucional.html',
        contacto: 'contacto.html',
        servicios: 'servicios.html'
      }
    }
  }
})