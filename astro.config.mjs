import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// Site estático — sem SSR/backend nesta primeira versão.
// O adapter @astrojs/cloudflare fica instalado para quando precisarmos
// de API routes (ex: orçamento com envio automático, admin de produtos).
//
// TODO: "site" abaixo é placeholder — trocar pelo domínio real antes de publicar.
// O sitemap e as meta tags de og:image usam essa URL para montar links absolutos.
export default defineConfig({
  site: 'https://jcmsolucoesgraficas.com.br',
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});