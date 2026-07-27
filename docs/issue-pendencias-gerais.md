# Pendências gerais do site (JCM Soluções Gráficas)

Sem conector de kanban ligado por aqui, então deixo pronto pra você colar no seu board (Trello, Notion, etc.).

## Contexto

Site já no ar (Cloudflare Pages, deploy automático a cada push na `main`). Itens abaixo dependem de decisão ou material do dono do negócio — não são bugs, são pendências de conteúdo/produto.

## Tarefas

- [ ] **Domínio real** — `astro.config.mjs` está com o placeholder `https://jcmsolucoesgraficas.com.br`. Depois de decidir e configurar o domínio na Cloudflare (Custom domains do projeto Pages), trocar esse valor e rebuildar — sitemap e og:image usam essa URL pra montar links absolutos.
- [ ] **Limpar arquivo solto** — apagar `public/images/og-image.png` (sobrou da geração do og:image; só o `.jpg` é usado).
- [ ] **Logo da Insider** — cliente adicionado ao "Marcas que já saíram daqui" só com nome por enquanto. Assim que tiver o arquivo (PNG/SVG), adicionar em `public/images/clientes/` e referenciar em `src/components/TrustedBy.astro`.
- [ ] **Nome real do cliente da hamburgueria** — hoje aparece como "Hamburgueria parceira" no trusted-by, aguardando autorização/nome real.
- [ ] **Fotos reais de produto** — as 6 imagens do catálogo hoje são ilustrações SVG placeholder (`public/images/produtos/`). Trocar por fotos reais dos produtos quando disponíveis.
- [ ] **Configurador 3D no orçamento personalizado** — ideia de visualização 3D da embalagem customizada. Bloqueado até decidir: qual produto entra primeiro, dimensões reais disponíveis, e se o cliente poderá fazer upload da própria arte pra pré-visualizar. Também exige reestruturar o formulário de orçamento (hoje é texto livre) para campos estruturados antes de começar.
- [ ] **Gateway de pagamento (Mercado Pago)** — hoje o checkout é 100% via WhatsApp. Se decidir cobrar direto no site pelos itens de catálogo (preço fixo), avaliar Checkout Pro do Mercado Pago. Só faz sentido pros produtos de preço fixo, não pro fluxo de orçamento personalizado (que é negociado).

## Definição de pronto

Cada item é independente — pode ser resolvido e fechado individualmente conforme a informação/decisão chegar.
