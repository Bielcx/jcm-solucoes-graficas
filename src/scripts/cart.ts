// Carrinho simples baseado em localStorage. Sem backend.
import { buildWhatsAppLink } from '../data/config';

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

// --- UI compartilhada entre a página /carrinho e o drawer do cabeçalho ---

export interface CartUIRefs {
  itemsEl: HTMLElement;
  emptyEl: HTMLElement;
  summaryEl: HTMLElement;
  totalEl: HTMLElement;
  checkoutLink: HTMLAnchorElement;
  clearBtn?: HTMLElement | null;
  /** Bloco com os botões de ação (checkout + esvaziar) — some/aparece junto com o resumo. */
  actionsEl?: HTMLElement | null;
}

function renderCartItemRow(item: CartItem): HTMLElement {
  const row = document.createElement('div');
  row.className =
    'flex flex-col gap-2.5 border-t border-[#efe8d6] px-[22px] py-[18px] sm:flex-row sm:items-center sm:justify-between sm:gap-4';
  row.innerHTML = `
    <div class="min-w-0 sm:flex-1">
      <p class="truncate font-display text-[15px] font-semibold text-ink">${item.nome}</p>
      <p class="mt-[3px] text-[12.5px] text-ink-faint">${formatBRL(item.preco)} / ${item.unidade}</p>
    </div>
    <div class="flex items-center justify-between gap-3 sm:shrink-0 sm:justify-end sm:gap-[18px]">
      <div class="flex items-stretch overflow-hidden rounded-md border border-cream-border">
        <button type="button" class="qty-menos w-[30px] text-[15px] text-olive-500 hover:bg-cream" aria-label="Diminuir quantidade">−</button>
        <input
          type="number"
          value="${item.qtd}"
          min="${item.qtdMinima}"
          step="${item.qtdMinima}"
          class="qty-input w-12 border-x border-cream-border bg-transparent text-center font-display text-[13px] font-semibold text-ink [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button type="button" class="qty-mais w-[30px] text-[15px] text-olive-500 hover:bg-cream" aria-label="Aumentar quantidade">+</button>
      </div>
      <p class="w-[82px] shrink-0 whitespace-nowrap text-right font-display font-semibold text-ink">${formatBRL(item.preco * item.qtd)}</p>
      <button class="remove-btn shrink-0 px-0.5 text-base text-ink-faint hover:text-terracotta-600" aria-label="Remover">✕</button>
    </div>
  `;

  const qtyInput = row.querySelector('.qty-input') as HTMLInputElement;
  qtyInput.addEventListener('change', () => {
    updateQty(item.id, Number(qtyInput.value) || item.qtdMinima);
  });

  // stepUp/stepDown nativos já respeitam min e step do input.
  row.querySelector('.qty-menos')?.addEventListener('click', () => {
    qtyInput.stepDown();
    updateQty(item.id, qtyInput.valueAsNumber);
  });
  row.querySelector('.qty-mais')?.addEventListener('click', () => {
    qtyInput.stepUp();
    updateQty(item.id, qtyInput.valueAsNumber);
  });

  const removeBtn = row.querySelector('.remove-btn') as HTMLButtonElement;
  removeBtn.addEventListener('click', () => removeFromCart(item.id));

  return row;
}

/** Liga uma UI de carrinho (itens, total, checkout) ao estado do localStorage. */
export function mountCartUI(refs: CartUIRefs) {
  function render() {
    const items = getCart();
    refs.itemsEl.innerHTML = '';

    if (items.length === 0) {
      refs.emptyEl.classList.remove('hidden');
      refs.summaryEl.classList.add('hidden');
      refs.actionsEl?.classList.add('hidden');
      return;
    }

    refs.emptyEl.classList.add('hidden');
    refs.summaryEl.classList.remove('hidden');
    refs.actionsEl?.classList.remove('hidden');
    items.forEach((item) => refs.itemsEl.appendChild(renderCartItemRow(item)));

    refs.totalEl.textContent = formatBRL(getCartTotal());
    refs.checkoutLink.href = buildWhatsAppLink(buildOrderMessage(items));
  }

  refs.clearBtn?.addEventListener('click', () => {
    if (confirm('Esvaziar o carrinho?')) clearCart();
  });

  render();
  onCartUpdate(render);
}
