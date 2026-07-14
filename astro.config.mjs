import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Site estático — sem SSR/backend nesta primeira versão.
// O adapter @astrojs/cloudflare fica instalado para quando precisarmos
// de API routes (ex: orçamento com envio automático, admin de produtos).
export default defineConfig({
  site: 'https://jcmsolucoesgraficas.com.br',
  vite: {
    plugins: [tailwindcss()],
  },
});
