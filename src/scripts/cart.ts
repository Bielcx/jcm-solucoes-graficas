// Carrinho simples baseado em localStorage. Sem backend.
export interface CartItem {
  id: string;
  nome: string;
  preco: number;
  unidade: string;
  qtdMinima: number;
  qtd: number;
}

const STORAGE_KEY = 'jcm_cart';
const UPDATE_EVENT = 'jcm:cart-updated';

function isBrowser() {
  return typeof window !== 'undefined';
}

export function getCart(): CartItem[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  if (!isBrowser()) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent(UPDATE_EVENT, { detail: items }));
}

export function addToCart(item: Omit<CartItem, 'qtd'>, qtd: number) {
  const items = getCart();
  const existing = items.find((i) => i.id === item.id);
  if (existing) {
    existing.qtd += qtd;
  } else {
    items.push({ ...item, qtd });
  }
  saveCart(items);
}

export function updateQty(id: string, qtd: number) {
  const items = getCart();
  const item = items.find((i) => i.id === id);
  if (!item) return;
  if (qtd <= 0) {
    saveCart(items.filter((i) => i.id !== id));
    return;
  }
  item.qtd = qtd;
  saveCart(items);
}

export function removeFromCart(id: string) {
  saveCart(getCart().filter((i) => i.id !== id));
}

export function clearCart() {
  saveCart([]);
}

export function getCartCount(): number {
  return getCart().reduce((acc, i) => acc + i.qtd, 0);
}

export function getCartTotal(): number {
  return getCart().reduce((acc, i) => acc + i.qtd * i.preco, 0);
}

export function onCartUpdate(cb: (items: CartItem[]) => void) {
  if (!isBrowser()) return;
  window.addEventListener(UPDATE_EVENT, (e) => cb((e as CustomEvent<CartItem[]>).detail));
}

function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

/** Monta a mensagem de finalização de pedido para o WhatsApp. */
export function buildOrderMessage(items: CartItem[]): string {
  if (items.length === 0) return '';
  const linhas = items.map(
    (i) => `• ${i.nome} — ${i.qtd} ${i.unidade} — ${formatBRL(i.preco * i.qtd)}`
  );
  const total = items.reduce((acc, i) => acc + i.qtd * i.preco, 0);
  return [
    'Olá! Gostaria de fazer o seguinte pedido:',
    '',
    ...linhas,
    '',
    `Valor estimado total: ${formatBRL(total)}`,
    '',
    '(Valor sujeito a confirmação de frete e disponibilidade)',
  ].join('\n');
}

export { formatBRL };
