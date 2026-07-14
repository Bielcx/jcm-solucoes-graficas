// Configurações gerais do site.
// TODO: atualizar com os dados reais da gráfica antes de publicar.
export const siteConfig = {
  nome: 'JCM Soluções Gráficas',
  descricao: 'Embalagens e materiais gráficos personalizados, do orçamento à entrega.',
  // Número de WhatsApp em formato internacional, só dígitos (55 + DDD + número).
  whatsappNumero: '5581999999999',
  email: 'contato@jcmsolucoesgraficas.com.br',
  instagram: '@jcmsolucoesgraficas',
  cidade: 'Recife - PE',
};

/** Monta um link wa.me com mensagem pré-preenchida. */
export function buildWhatsAppLink(mensagem: string): string {
  const texto = encodeURIComponent(mensagem);
  return `https://wa.me/${siteConfig.whatsappNumero}?text=${texto}`;
}
