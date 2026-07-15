# Roadmap — Identidade Visual e Estilo

Objetivo: sair do "template de gráfica" (laranja + Comic-print-font + foto de estoque de caixa de papelão) e construir algo que pareça feito sob medida pra JCM. O scaffold atual é só o esqueleto funcional — este roadmap é sobre dar cara própria a ele.

## Decisões já fechadas

- **Logo:** mantida como está (decisão do dono). Fundo preto original removido — versão transparente em `public/images/marca/logo-jcm-transparente.png`. Ela lê melhor em fundo escuro, então o header/rodapé (ou uma faixa escura) vai ser o "habitat" dela; a paleta do site não deriva das cores da logo.
- **Referências de estilo:** noissue.co é a referência principal (fotografia editorial, storytelling de material). moo.com e whogivesacrap.org como referências secundárias (tátil/colorido e voz irreverente, respectivamente). Diferença chave: essas referências finalizam a compra no próprio site — a JCM finaliza no WhatsApp, então o funil não é "reduzir fricção até o pagamento", é "dar confiança até a pessoa querer continuar a conversa".
- **Mobile:** tratado como canal principal de conversão, não só "mais uma tela" — o link do WhatsApp abre o app direto no celular, no desktop depende de WhatsApp Web logado.
- **Trusted-by:** logo de clientes reais que a JCM já atendeu (Teatro Claro confirmado), idealmente combinado com foto do produto entregue pra cada cliente, não só logo solto. Depoimentos, quando entrarem, devem ser reais (print de WhatsApp, avaliação do Google) — nada de texto genérico.
- **Configurador de dimensões (ideia do 3D com sliders):** vale só pro fluxo de orçamento personalizado. A linha pronta já tem tamanho fixo, não precisa disso. Fica pra depois das fases abaixo — é o item de maior esforço técnico.

## Fase 0 — Decisões de marca (o que falta fechar)

- Personalidade: das três referências escolhidas, qual puxa mais o tom da JCM — o clean/editorial do noissue, o tátil/colorido do moo, ou o irreverente do who gives a crap? Pode ser uma mistura, mas ajuda ter isso nomeado antes da Fase 1.

## Fase 1 — Fugir da paleta e tipografia padrão

O clichê do setor é laranja vibrante + azul corporativo + fonte sans genérica (Inter/Roboto/Poppins). Alternativas mais autorais:

- Paleta reduzida e não-óbvia: base neutra (creme, papel kraft, preto-tinta) + **um só** acento saturado e incomum pro setor (verde-oliva, vinho, azul-tinta profundo). Menos cor, mais intenção.
- Tipografia com caráter: um display/serifada ou slab pra títulos (transmite "gráfica" sem ser literal) + uma sans discreta pro corpo do texto. Hoje o site usa `system-ui` genérico — é o primeiro ponto a trocar.
- Textura sutil de papel/grão no fundo em vez de branco chapado — reforça "isso aqui é impresso de verdade" sem parecer brega.

## Fase 2 — Fotografia e imagem real, não estoque

Foto de banco de imagens é o maior sinal de "site clonado". Prioridades, em ordem de impacto:

- Fotos reais dos produtos da JCM (mesmo que feitas com celular + boa luz) substituindo os placeholders — isso sozinho já muda a percepção do site.
- Se possível, registrar processo de produção (rolo de papel, corte, dobra, pilha de caixas prontas) — cria a narrativa "isso é feito aqui", que nenhum concorrente com template consegue copiar.
- Seção trusted-by/portfólio com a marca de clientes reais aplicada nas embalagens entregues (com permissão) — Teatro Claro já confirmado, mandar mais conforme lembrar. Funciona como prova social e vitrine do serviço personalizado ao mesmo tempo.

## Fase 3 — Interações que reforçam o produto físico

Em vez de UI genérica de e-commerce, usar micro-interações que remetem a papel/embalagem:

- Cards de produto com leve efeito de "dobra" ou sombra de vinco no hover, em vez de zoom de imagem padrão.
- Seletor de quantidade estilizado como ficha técnica/etiqueta de pedido, não um input number cru.
- Carrinho com uma "nota de pedido" visual (como um recibo/ficha) em vez de lista de e-commerce comum.
- Uma seção de "amostras de material" — grid de texturas de papel (kraft, couché, reciclado) que o cliente pode "sentir" visualmente e filtrar produtos por ela.

## Fase 4 — Copy com voz própria

Trocar texto institucional genérico ("qualidade e compromisso há X anos") por uma voz mais direta e específica da JCM — como se um dono de gráfica estivesse falando, não um gerador de texto corporativo. Vale revisar cada headline do site nessa lente.

## Fase 5 — Polimento técnico que também é estético

- Tipografia fluida e espaçamento generoso (muito site de gráfica é apertado e denso).
- Animações discretas de entrada (fade/slide leve ao rolar) — dá acabamento sem parecer "template com plugin de animação".
- Favicon e og:image customizados com a identidade nova (hoje é só um "J" genérico).

## Próximos passos

**Do lado de vocês (travam o resto):**

1. Confirmar se o `git push` local deu certo (mandei os comandos antes) — sem isso o código só existe aqui, não no GitHub.
2. Número real de WhatsApp pra trocar o placeholder em `src/data/config.ts`.
3. Nomear a vibe da Fase 0 (ou dizer "mistura X e Y") pra eu já fechar paleta e tipografia sem chutar.
4. Ir separando mais logos/clientes pro trusted-by, com autorização, e se der uma foto do produto entregue pra cada um.
5. Fotos reais dos produtos (mesmo que só celular) — o item de maior impacto por menor esforço do lado de vocês.

**Do meu lado (não dependem de vocês pra começar):**

1. Fase 1 — definir e implementar paleta + tipografia (com a logo como restrição: navbar/rodapé escuro).
2. Gerar versão simplificada da marca (favicon / ícone de WhatsApp) a partir do PNG transparente já pronto.
3. Corrigir o menu mobile — hoje os links de Catálogo e Orçamento somem no cabeçalho em telas pequenas.
4. Fases 3–5 (microinterações, copy, polimento) entram depois da Fase 1 estar no ar, incrementalmente, sem refazer o que já existe.

O configurador de dimensão pro orçamento personalizado fica pra depois de tudo isso — é o item de maior esforço técnico e só faz sentido com a base visual já definida.
