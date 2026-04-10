/* ============================================================
   SENSIS GOOD FF — catalogo.js
   Products · Filters · Modal · Payment methods
   ============================================================ */

/* ── WhatsApp number ─────────────────────────────────────── */
const WA_NUMBER = '526521038109'; // Mexico +52 652 103 8109

/* ── Products Data ───────────────────────────────────────── */
/* INSTRUCCIONES: Reemplaza los valores entre comillas con tu info real.
   Para 'img', usa la ruta relativa: 'producto1.jpg'
   Si no tienes imagen aún, usa '' y se mostrará el emoji.          */
const PRODUCTS = [
  {
    id: 1,
    name: 'Nombre Producto 1',
    tag: 'Categoría A',
    desc: 'Descripción del producto. Cuéntale al cliente qué es, cómo se usa y por qué vale la pena.',
    price: 299,
    oldPrice: null,
    badge: 'Popular',
    badgeClass: 'gold',
    emoji: '📦',
    img: '',            // ← pon aquí: 'producto1.jpg'
    category: 'cat-a',
  },
  {
    id: 2,
    name: 'Nombre Producto 2',
    tag: 'Categoría B',
    desc: 'Descripción del producto. Sé específico: materiales, tamaños, colores disponibles.',
    price: 450,
    oldPrice: 580,
    badge: 'Oferta',
    badgeClass: '',
    emoji: '🎁',
    img: '',            // ← pon aquí: 'producto2.jpg'
    category: 'cat-b',
  },
  {
    id: 3,
    name: 'Nombre Producto 3',
    tag: 'Categoría A',
    desc: 'Descripción del producto. Una línea honesta de por qué este producto vale cada peso.',
    price: 199,
    oldPrice: null,
    badge: 'Nuevo',
    badgeClass: 'teal',
    emoji: '✨',
    img: '',            // ← pon aquí: 'producto3.jpg'
    category: 'cat-a',
  },
  {
    id: 4,
    name: 'Nombre Producto 4',
    tag: 'Categoría B',
    desc: 'Descripción del producto. Puedes agregar hasta 2–3 oraciones de detalle aquí.',
    price: 650,
    oldPrice: null,
    badge: 'Premium',
    badgeClass: 'gold',
    emoji: '💎',
    img: '',            // ← pon aquí: 'producto4.jpg'
    category: 'cat-b',
  },
  {
    id: 5,
    name: 'Nombre Producto 5',
    tag: 'Categoría A',
    desc: 'Descripción del producto. Si tienes variantes (colores, tallas), menciónalas aquí.',
    price: 380,
    oldPrice: 420,
    badge: '',
    badgeClass: '',
    emoji: '🚀',
    img: '',            // ← pon aquí: 'producto5.jpg'
    category: 'cat-a',
  },
];

/* ── Payment methods config ──────────────────────────────── */
const PAY_METHODS = [
  {
    id: 'spin',
    icon: '📱',
    label: 'Spin OXXO',
    info: `<p>Realiza tu pago con <strong>Spin by OXXO</strong>.<br>
           Al confirmar tu pedido, recibirás los datos de pago por WhatsApp y podrás pagar directamente desde la app Spin.</p>
           <div class="pay-detail">• Acreditación inmediata · Sin comisiones</div>`
  },
  {
    id: 'oxxo',
    icon: '🏪',
    label: 'OXXO',
    info: `<p>Paga en cualquier tienda <strong>OXXO</strong> de México.<br>
           Recibirás tu referencia de pago por WhatsApp. Tienes 3 días para pagar antes de que expire.</p>
           <div class="pay-detail">• Disponible 24/7 · Cualquier OXXO del país</div>`
  },
  {
    id: 'paypal',
    icon: '🅿️',
    label: 'PayPal',
    info: `<p>Paga de forma segura con <strong>PayPal</strong>.<br>
           Acepta tarjetas Visa, Mastercard y AMEX. También puedes pagar como invitado sin cuenta PayPal.</p>
           <div class="pay-detail">• Compra protegida · SSL cifrado</div>`
  },
  {
    id: 'spei',
    icon: '🏦',
    label: 'SPEI',
    info: `<p>Transferencia bancaria vía <strong>SPEI</strong>.<br>
           Al confirmar, recibirás la CLABE interbancaria por WhatsApp. La transferencia puede hacerse desde cualquier banco en México.</p>
           <div class="pay-detail">• Acreditación en 1–2 hrs · Sin comisiones</div>`
  },
  {
    id: 'tarjeta',
    icon: '💳',
    label: 'Tarjeta',
    info: `<p>Pago con <strong>tarjeta de débito o crédito</strong>.<br>
           Visa, Mastercard o AMEX. Coordinamos el pago de forma segura por WhatsApp con los datos de tu pedido.</p>
           <div class="pay-detail">• Aceptamos débito y crédito · 3, 6 y 12 MSI disponibles</div>`
  },
  {
    id: 'efectivo',
    icon: '💵',
    label: 'Efectivo',
    info: `<p>Si estás cerca, podemos coordinar <strong>pago en efectivo</strong> al momento de entrega.<br>
           Contáctanos por WhatsApp para verificar disponibilidad en tu zona.</p>
           <div class="pay-detail">• Pago contra entrega · Solo zonas seleccionadas</div>`
  },
];

/* ════════════════════════════════════════════════════════════
   RENDER
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  renderProducts(PRODUCTS);
  renderPayMethods();
  bindFilters();
  bindModal();

});

/* ── Render products ─────────────────────────────────────── */
function renderProducts(list) {
  const grid = document.getElementById('productGrid');
  const countEl = document.getElementById('productCount');
  if (!grid) return;

  grid.innerHTML = list.map(p => `
    <div class="product-card reveal" data-cat="${p.category}" data-id="${p.id}">
      <div class="card-img-wrap">
        ${p.img
          ? `<img src="${p.img}" alt="${p.name}" loading="lazy">`
          : `<div class="card-img-placeholder">${p.emoji}</div>`
        }
        <div class="card-shine"></div>
        ${p.badge ? `<span class="card-badge ${p.badgeClass}">${p.badge}</span>` : ''}
      </div>
      <div class="card-body">
        <div class="card-tag">${p.tag}</div>
        <div class="card-name">${p.name}</div>
        <p class="card-desc">${p.desc}</p>
        <div class="card-footer">
          <div>
            <span class="card-price">$${p.price} <small style="font-size:.55em;opacity:.7">MXN</small></span>
            ${p.oldPrice ? `<span class="card-price-old">$${p.oldPrice} MXN</span>` : ''}
          </div>
          <button class="btn-comprar" onclick="openModal(${p.id})">Comprar</button>
        </div>
      </div>
    </div>
  `).join('');

  if (countEl) countEl.querySelector('span').textContent = list.length;

  // re-observe for scroll reveal
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 90);
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  grid.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
}

/* ── Render payment method buttons ──────────────────────── */
function renderPayMethods() {
  const wrap = document.getElementById('payMethodsWrap');
  if (!wrap) return;
  wrap.innerHTML = PAY_METHODS.map(pm => `
    <button class="pay-method ${pm.id === 'spin' ? 'selected' : ''}"
            data-pm="${pm.id}" onclick="selectPayMethod('${pm.id}', this)">
      <span class="pm-icon">${pm.icon}</span>
      ${pm.label}
    </button>
  `).join('');
  // show first info box
  showPayInfo('spin');
}

/* ── Filters ─────────────────────────────────────────────── */
function bindFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      const filtered = f === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === f);
      renderProducts(filtered);
    });
  });
}

/* ── Modal ───────────────────────────────────────────────── */
let currentProduct = null;

function bindModal() {
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
}

function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;

  // populate product row
  document.getElementById('modalProductName').textContent = p.name;
  document.getElementById('modalProductPrice').textContent = `$${p.price} MXN`;
  const imgEl = document.getElementById('modalProductImg');
  if (p.img) {
    imgEl.innerHTML = `<img class="modal-product-img" src="${p.img}" alt="${p.name}">`;
  } else {
    imgEl.innerHTML = `<div class="modal-product-img placeholder">${p.emoji}</div>`;
  }

  // reset form & success
  document.getElementById('modalForm').style.display = '';
  document.getElementById('modalSuccess').classList.remove('show');

  // reset pay method to spin
  document.querySelectorAll('.pay-method').forEach(b => b.classList.remove('selected'));
  const firstBtn = document.querySelector('.pay-method[data-pm="spin"]');
  if (firstBtn) firstBtn.classList.add('selected');
  showPayInfo('spin');

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Payment method selection ────────────────────────────── */
function selectPayMethod(id, btn) {
  document.querySelectorAll('.pay-method').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  showPayInfo(id);
}

function showPayInfo(id) {
  document.querySelectorAll('.pay-info-box').forEach(b => b.classList.remove('show'));
  const box = document.getElementById(`payInfo_${id}`);
  if (box) box.classList.add('show');
}

/* ── Confirm order ───────────────────────────────────────── */
function confirmOrder() {
  const name    = document.getElementById('buyerName').value.trim();
  const email   = document.getElementById('buyerEmail').value.trim();
  const phone   = document.getElementById('buyerPhone').value.trim();
  const address = document.getElementById('buyerAddress').value.trim();

  if (!name || !email) {
    alert('Por favor completa tu nombre y correo electrónico.');
    return;
  }

  const selectedPM = document.querySelector('.pay-method.selected');
  const pmId       = selectedPM ? selectedPM.dataset.pm : 'sin método';
  const pmLabel    = selectedPM ? selectedPM.textContent.trim() : '';

  // Build WhatsApp message
  const msg = encodeURIComponent(
    `🛒 *Nuevo pedido — SENSIS GOOD FF*\n\n` +
    `📦 *Producto:* ${currentProduct.name}\n` +
    `💰 *Total:* $${currentProduct.price} MXN\n` +
    `💳 *Método de pago:* ${pmLabel}\n\n` +
    `👤 *Nombre:* ${name}\n` +
    `📧 *Correo:* ${email}\n` +
    `📱 *Teléfono:* ${phone || 'No proporcionado'}\n` +
    `📍 *Dirección / Notas:* ${address || 'No proporcionada'}\n\n` +
    `¡Hola! Quiero completar este pedido. ¿Me indicas los pasos para el pago con ${pmLabel}?`
  );

  const waURL = `https://wa.me/${WA_NUMBER}?text=${msg}`;

  // Show success state
  document.getElementById('modalForm').style.display = 'none';
  document.getElementById('modalSuccess').classList.add('show');
  document.getElementById('modalSuccessName').textContent = name;
  document.getElementById('modalSuccessProduct').textContent = currentProduct.name;
  document.getElementById('modalSuccessWaLink').href = waURL;

  // Open WhatsApp
  setTimeout(() => window.open(waURL, '_blank'), 600);
}
