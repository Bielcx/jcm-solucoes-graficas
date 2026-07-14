# JCM Soluções Gráficas — Catálogo Digital

Catálogo digital com aparência de loja e finalização de pedido pelo WhatsApp.
Sem backend, sem plataforma mensal — site estático hospedado na Cloudflare Pages.

## Stack

- **Astro** (site estático, componentes `.astro`)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Cloudflare Pages** (hospedagem)
- Produtos cadastrados em `src/data/products.ts`
- Carrinho em `localStorage` (`src/scripts/cart.ts`)
- Checkout e orçamento via link `wa.me` (sem backend)

## Rodando localmente

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera site estático em dist/
npm run preview   # serve o build de produção localmente
```

## Antes de publicar

1. Atualizar `src/data/config.ts` com o número real de WhatsApp, e-mail e Instagram.
2. Trocar as imagens placeholder em `public/images/` pelas fotos reais dos produtos
   (mesmo nome de arquivo referenciado em `src/data/products.ts`, ou atualizar os caminhos).
3. Revisar/editar os produtos em `src/data/products.ts` (preços, quantidades mínimas, categorias).
4. Conectar o domínio próprio no Cloudflare Pages.

## Deploy (Cloudflare Pages)

1. No dashboard da Cloudflare: Workers & Pages → Create → Pages → Connect to Git.
2. Selecione este repositório.
3. Build command: `npm run build` — Build output directory: `dist`.
4. Deploy. A cada push na branch principal, o site é republicado automaticamente.

## Estrutura

```
src/
  data/          # produtos e configurações do site (WhatsApp, nome, etc.)
  scripts/       # lógica do carrinho (localStorage)
  layouts/       # layout base (head, header, footer)
  components/    # Header, Footer, ProductCard
  pages/
    index.astro            # home
    catalogo/index.astro   # listagem de produtos
    catalogo/[slug].astro  # página de produto
    carrinho.astro         # carrinho + checkout WhatsApp
    orcamento.astro        # formulário de orçamento personalizado
```

## Próximos passos (fora do MVP)

- Fotos reais dos produtos
- Página de produtos personalizados com upload de arte (precisaria de backend/storage)
- Painel simples para editar produtos sem mexer no código
- Analytics (Cloudflare Web Analytics, gratuito)
