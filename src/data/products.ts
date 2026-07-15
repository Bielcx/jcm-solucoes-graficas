export interface Product {
  id: string;
  slug: string;
  nome: string;
  categoria: 'embalagens' | 'sacolas' | 'rotulos' | 'copos';
  descricao: string;
  descricaoCurta: string;
  preco: number; // preço estimado por unidade, em R$
  unidade: string; // ex: "unidade", "pacote com 50"
  qtdMinima: number;
  imagem: string;
  personalizavel: boolean;
}

export const products: Product[] = [
  {
    id: 'caixa-pizza-35',
    slug: 'caixa-pizza-35cm',
    nome: 'Caixa de Pizza 35cm',
    categoria: 'embalagens',
    descricao:
      'Caixa de papelão branca para pizza grande, gramatura reforçada, ideal para delivery. Vendida em pacotes de 50 unidades.',
    descricaoCurta: 'Papelão reforçado, ideal para delivery.',
    preco: 2.5,
    unidade: 'unidade (pacote com 50)',
    qtdMinima: 50,
    imagem: '/images/produtos/caixa-pizza-35.svg',
    personalizavel: true,
  },
  {
    id: 'caixa-doces-6un',
    slug: 'caixa-doces-6-unidades',
    nome: 'Caixa para 6 Doces',
    categoria: 'embalagens',
    descricao:
      'Caixa com visor plástico para 6 doces ou brigadeiros, acabamento fosco. Vendida em pacotes de 25 unidades.',
    descricaoCurta: 'Com visor, acabamento fosco.',
    preco: 1.8,
    unidade: 'unidade (pacote com 25)',
    qtdMinima: 25,
    imagem: '/images/produtos/caixa-doces-6un.svg',
    personalizavel: true,
  },
  {
    id: 'sacola-kraft-m',
    slug: 'sacola-kraft-media',
    nome: 'Sacola Kraft Média',
    categoria: 'sacolas',
    descricao:
      'Sacola de papel kraft com alça de cordão, tamanho médio (25x30x10cm). Vendida em pacotes de 50 unidades.',
    descricaoCurta: 'Alça de cordão, tamanho médio.',
    preco: 3.2,
    unidade: 'unidade (pacote com 50)',
    qtdMinima: 50,
    imagem: '/images/produtos/sacola-kraft-m.svg',
    personalizavel: true,
  },
  {
    id: 'sacola-papel-p',
    slug: 'sacola-papel-pequena',
    nome: 'Sacola de Papel Pequena',
    categoria: 'sacolas',
    descricao:
      'Sacola de papel branco, tamanho pequeno, ideal para presentes e produtos leves. Vendida em pacotes de 50 unidades.',
    descricaoCurta: 'Tamanho pequeno, ideal para presentes.',
    preco: 1.5,
    unidade: 'unidade (pacote com 50)',
    qtdMinima: 50,
    imagem: '/images/produtos/sacola-papel-p.svg',
    personalizavel: true,
  },
  {
    id: 'rotulo-adesivo-redondo',
    slug: 'rotulo-adesivo-redondo-4cm',
    nome: 'Rótulo Adesivo Redondo 4cm',
    categoria: 'rotulos',
    descricao:
      'Etiqueta adesiva redonda em papel couché, 4cm de diâmetro. Vendida em cartelas de 100 unidades.',
    descricaoCurta: 'Papel couché, 4cm de diâmetro.',
    preco: 0.35,
    unidade: 'unidade (cartela com 100)',
    qtdMinima: 100,
    imagem: '/images/produtos/rotulo-adesivo-redondo.svg',
    personalizavel: true,
  },
  {
    id: 'copo-personalizado-300ml',
    slug: 'copo-personalizado-300ml',
    nome: 'Copo Personalizado 300ml',
    categoria: 'copos',
    descricao:
      'Copo descartável de papel, 300ml, disponível para personalização com a marca do cliente. Vendido em pacotes de 50 unidades.',
    descricaoCurta: 'Papel biodegradável, 300ml.',
    preco: 0.9,
    unidade: 'unidade (pacote com 50)',
    qtdMinima: 50,
    imagem: '/images/produtos/copo-personalizado-300ml.svg',
    personalizavel: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoria: Product['categoria']): Product[] {
  return products.filter((p) => p.categoria === categoria);
}

export const categorias: { valor: Product['categoria']; label: string }[] = [
  { valor: 'embalagens', label: 'Embalagens' },
  { valor: 'sacolas', label: 'Sacolas' },
  { valor: 'rotulos', label: 'Rótulos' },
  { valor: 'copos', label: 'Copos' },
];
