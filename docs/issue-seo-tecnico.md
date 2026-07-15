# SEO técnico básico

Sem GitHub conectado por aqui, então não consigo abrir a issue direto no repo — copia esse conteúdo pra uma issue nova em https://github.com/Bielcx/jcm-solucoes-graficas/issues/new.

## Contexto

Itens técnicos de SEO que não dependem de nenhuma decisão de conteúdo/negócio — só não foram feitos ainda. Baixo esforço, sem dependência externa.

## Tarefas

- [ ] **sitemap.xml automático** — instalar `@astrojs/sitemap` e configurar no `astro.config.mjs`. Gera o sitemap sincronizado com as rotas reais a cada build (evita manter lista de URLs na mão conforme produtos forem adicionados).
- [ ] **robots.txt** — arquivo em `public/robots.txt` liberando indexação geral e apontando pro sitemap gerado.
- [ ] **og:image + meta tags de compartilhamento** — imagem 1200x630 com a marca (fundo escuro, logo, tagline) pra aparecer em preview de WhatsApp/redes sociais. Adicionar `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `twitter:card`, `twitter:image` no `BaseLayout.astro`.

## Atenção

O `site` no `astro.config.mjs` está configurado como `https://jcmsolucoesgraficas.com.br` — é um placeholder. Confirmar o domínio real antes de gerar o sitemap/og:image com URLs absolutas, senão sai tudo com link errado.

## Definição de pronto

- Build gera `sitemap-index.xml` e `sitemap-0.xml` em `dist/`.
- `robots.txt` acessível e referenciando o sitemap com o domínio certo.
- Link do site colado no WhatsApp mostra a imagem/título/descrição corretos.
