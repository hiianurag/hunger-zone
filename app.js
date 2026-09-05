// ============================================================
// app.js — Hunger Zone Restaurant — Rendering & Interactions
// ============================================================

/* ── Helpers ─────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
  ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));

function waLink(item, size) {
  const label = size ? `${item} (${size})` : item;
  const msg = encodeURIComponent(`Hi Hunger Zone, I'd like to order ${label}`);
  return `https://wa.me/${BUSINESS.whatsappRaw}?text=${msg}`;
}

function starHTML(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

/* ── State ───────────────────────────────────────────────── */
let activeCategory = 'all';
let searchQuery    = '';

/* ── Header: scroll effect + hamburger ──────────────────── */
function initHeader() {
  const header  = $('#header');
  const burger  = $('#hamburger');
  const mobileNav = $('#mobile-nav');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
    const scrollTop = $('#scroll-top');
    if (scrollTop) scrollTop.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });

  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mobileNav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });

  // Close mobile nav on link click
  $$('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mobileNav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  // Scroll-to-top button
  const scrollBtn = $('#scroll-top');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}

/* ── Category Strip ─────────────────────────────────────── */
function renderCategoryStrip() {
  const grid = $('#category-grid');
  if (!grid) return;

  const cats = CATEGORY_ORDER.map(key => MENU_DATA[key]).filter(Boolean);

  grid.innerHTML = cats.map(cat => `
    <button
      class="cat-card"
      data-cat="${getCatKey(cat)}"
      aria-label="Filter menu to ${esc(cat.label)}"
      id="cat-btn-${getCatKey(cat)}"
    >
      <span class="cat-card-icon">${esc(cat.icon)}</span>
      <span class="cat-card-label">${esc(cat.label)}</span>
    </button>
  `).join('');

  grid.querySelectorAll('.cat-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.cat;
      setCategory(key);
      document.getElementById('menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function getCatKey(cat) {
  return CATEGORY_ORDER.find(k => MENU_DATA[k] === cat) || '';
}

/* ── Menu Tabs ───────────────────────────────────────────── */
function renderMenuTabs() {
  const wrap = $('#menu-tabs');
  if (!wrap) return;

  const allBtn = `<button class="menu-tab active" data-cat="all" id="tab-all">All</button>`;
  const tabs = CATEGORY_ORDER.map(key => {
    const cat = MENU_DATA[key];
    return `<button class="menu-tab" data-cat="${key}" id="tab-${key}">${esc(cat.icon)} ${esc(cat.label)}</button>`;
  }).join('');

  wrap.innerHTML = allBtn + tabs;

  wrap.querySelectorAll('.menu-tab').forEach(btn => {
    btn.addEventListener('click', () => setCategory(btn.dataset.cat));
  });
}

function setCategory(key) {
  activeCategory = key;

  // Update tabs
  $$('.menu-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === key));
  // Update cat cards
  $$('.cat-card').forEach(c => c.classList.toggle('active', c.dataset.cat === key));

  renderMenu();
}

/* ── Search ──────────────────────────────────────────────── */
function initSearch() {
  const input = $('#menu-search');
  if (!input) return;
  input.addEventListener('input', () => {
    searchQuery = input.value.trim().toLowerCase();
    renderMenu();
  });
}

/* ── Menu Rendering ──────────────────────────────────────── */
function renderMenu() {
  const output = $('#menu-output');
  if (!output) return;

  const categoriesToRender = activeCategory === 'all'
    ? CATEGORY_ORDER
    : [activeCategory];

  let html = '';
  let totalVisible = 0;

  for (const key of categoriesToRender) {
    const cat = MENU_DATA[key];
    if (!cat) continue;

    const block = renderCategory(key, cat);
    if (block.count > 0) {
      html += block.html;
      totalVisible += block.count;
    }
  }

  if (totalVisible === 0) {
    html = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <div class="no-results-text">No items found for "${esc(searchQuery)}"</div>
      </div>`;
  }

  output.innerHTML = html;
}

function matchesSearch(text) {
  if (!searchQuery) return true;
  return text.toLowerCase().includes(searchQuery);
}

function renderCategory(key, cat) {
  let innerHtml = '';
  let count = 0;

  if (cat.type === 'pizza') {
    const result = renderPizzaSection(cat);
    innerHtml = result.html;
    count = result.count;
  } else if (cat.type === 'single') {
    const result = renderSingleItems(cat);
    innerHtml = result.html;
    count = result.count;
  } else if (cat.type === 'sized') {
    const result = renderSizedItems(cat);
    innerHtml = result.html;
    count = result.count;
  } else if (cat.type === 'flat') {
    const result = renderFlatItems(cat);
    innerHtml = result.html;
    count = result.count;
  }

  if (count === 0) return { html: '', count: 0 };

  const html = `
    <div class="menu-category-block" id="menu-section-${key}">
      <h2 class="menu-cat-title">
        <span class="cat-icon">${esc(cat.icon)}</span>
        ${esc(cat.label)}
      </h2>
      ${innerHtml}
    </div>`;

  return { html, count };
}

/* Single-price items */
function renderSingleItems(cat) {
  const filtered = cat.items.filter(item =>
    matchesSearch(item.name) || matchesSearch(item.desc || '')
  );

  if (filtered.length === 0) return { html: '', count: 0 };

  const cards = filtered.map(item => `
    <div class="item-card${item.featured ? ' featured' : ''}">
      <div class="item-card-top">
        <span class="item-name"><span class="veg-dot"></span>${esc(item.name)}</span>
        ${item.featured ? '<span class="featured-chip">🔥 Popular</span>' : ''}
      </div>
      ${item.desc ? `<p class="item-desc">${esc(item.desc)}</p>` : ''}
      <div class="item-card-bottom">
        <span class="item-price">₹${item.price}</span>
        <a href="${waLink(item.name)}" target="_blank" rel="noopener" class="order-btn" aria-label="Order ${esc(item.name)} on WhatsApp">
          📲 Order
        </a>
      </div>
    </div>
  `).join('');

  return {
    html: `<div class="items-grid">${cards}</div>`,
    count: filtered.length,
  };
}

/* Sized items (fries: Regular / Large) */
function renderSizedItems(cat) {
  const filtered = cat.items.filter(item =>
    matchesSearch(item.name) || matchesSearch(item.desc || '')
  );

  if (filtered.length === 0) return { html: '', count: 0 };

  const cards = filtered.map(item => `
    <div class="sized-card">
      <div class="sized-card-name"><span class="veg-dot"></span>${esc(item.name)}</div>
      ${item.desc ? `<div class="sized-card-desc">${esc(item.desc)}</div>` : ''}
      <div class="size-prices">
        ${cat.sizeLabels.map((label, i) => `
          <a href="${waLink(item.name, label)}" target="_blank" rel="noopener"
             class="size-price-cell" aria-label="Order ${esc(item.name)} ${label} (₹${item.prices[i]}) on WhatsApp">
            <div class="size-label">${esc(label)}</div>
            <div class="size-amount">₹${item.prices[i]}</div>
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');

  return {
    html: `<div class="items-grid">${cards}</div>`,
    count: filtered.length,
  };
}

/* Flat-price items (all same price) */
function renderFlatItems(cat) {
  const filtered = cat.items.filter(item =>
    matchesSearch(item.name) || matchesSearch(item.desc || '')
  );

  if (filtered.length === 0) return { html: '', count: 0 };

  const cards = filtered.map(item => `
    <div class="flat-card">
      <div class="flat-card-info">
        <div class="flat-card-name"><span class="veg-dot"></span>${esc(item.name)}</div>
        ${item.desc ? `<div class="flat-card-desc">${esc(item.desc)}</div>` : ''}
      </div>
      <div class="flat-price-wrap">
        <span class="flat-price">₹${cat.flatPrice}</span>
        <a href="${waLink(item.name)}" target="_blank" rel="noopener" class="order-btn btn-sm" aria-label="Order ${esc(item.name)} on WhatsApp">
          📲
        </a>
      </div>
    </div>
  `).join('');

  return {
    html: `<div class="flat-grid">${cards}</div>`,
    count: filtered.length,
  };
}

/* Pizza section */
function renderPizzaSection(cat) {
  let totalCount = 0;
  let groupsHtml = '';

  for (const group of cat.groups) {
    // Pizza Mania Pie (combo only)
    if (group.comboInfo && group.items.length === 0) {
      if (!searchQuery || matchesSearch(group.group) || matchesSearch(group.comboInfo.comboName)) {
        groupsHtml += renderManiaPie(group);
        totalCount++;
      }
      continue;
    }

    // Filter items
    const filteredItems = group.items.filter(item =>
      matchesSearch(item.name) || matchesSearch(item.desc || '') || matchesSearch(group.group)
    );

    if (filteredItems.length === 0) continue;
    totalCount += filteredItems.length;

    // Build price display
    let priceDisplay = '';
    if (group.singlePrice !== undefined) {
      priceDisplay = `<span class="pizza-size-badge">₹${group.singlePrice} each</span>`;
    } else if (group.prices) {
      priceDisplay = cat.sizeLabels.map((sz, i) =>
        `<span class="pizza-size-badge">${esc(sz)}: ₹${group.prices[i]}</span>`
      ).join('');
    }

    const rows = filteredItems.map(item => {
      if (group.singlePrice !== undefined) {
        // Pizza Mania Special — single price row
        return `
          <div class="pizza-item-row">
            <div class="pizza-item-name-wrap">
              <div class="pizza-item-name"><span class="veg-dot"></span>${esc(item.name)} ${item.featured ? '<span class="featured-chip">🔥 Popular</span>' : ''}</div>
              ${item.desc ? `<div class="pizza-item-desc">${esc(item.desc)}</div>` : ''}
            </div>
            <a href="${waLink(item.name)}" target="_blank" rel="noopener" class="pizza-price-btn" aria-label="Order ${esc(item.name)} on WhatsApp">
              <span class="ps-price">₹${group.singlePrice}</span>
            </a>
          </div>`;
      } else {
        // 3-size pizza row
        const sizeBtns = cat.sizeLabels.map((sz, i) => `
          <a href="${waLink(item.name, sz)}" target="_blank" rel="noopener" class="pizza-price-btn"
             aria-label="Order ${esc(item.name)} ${sz} pizza (₹${group.prices[i]}) on WhatsApp">
            <span class="ps-label">${esc(sz)}</span>
            <span class="ps-price">₹${group.prices[i]}</span>
          </a>`).join('');

        return `
          <div class="pizza-item-row">
            <div class="pizza-item-name-wrap">
              <div class="pizza-item-name"><span class="veg-dot"></span>${esc(item.name)} ${item.featured ? '<span class="featured-chip">🔥 Popular</span>' : ''}</div>
              ${item.desc ? `<div class="pizza-item-desc">${esc(item.desc)}</div>` : ''}
            </div>
            <div class="pizza-prices-row">${sizeBtns}</div>
          </div>`;
      }
    }).join('');

    groupsHtml += `
      <div class="pizza-group-block">
        <div class="pizza-group-header">
          <span class="pizza-group-name">${esc(group.group)}</span>
          <div class="pizza-group-prices">${priceDisplay}</div>
        </div>
        <div class="pizza-items-table">${rows}</div>
      </div>`;
  }

  if (totalCount === 0) return { html: '', count: 0 };

  const addonsHtml = renderPizzaAddons(cat.addons);

  return {
    html: groupsHtml + addonsHtml,
    count: totalCount,
  };
}

/* Pizza Mania Pie combo */
function renderManiaPie(group) {
  const ci = group.comboInfo;
  const toppingChips = ci.toppings.map(t => `
    <a href="${waLink(`Pizza Mania Pie (${t})`)}" target="_blank" rel="noopener"
       class="topping-chip" aria-label="Order Pizza Mania Pie with ${esc(t)} topping">
      <span class="veg-dot"></span>${esc(t)}
    </a>`).join('');

  return `
    <div class="pizza-group-block">
      <div class="pizza-group-header">
        <span class="pizza-group-name">${esc(group.group)}</span>
      </div>
      <div class="mania-pie-card">
        <div class="mania-pie-title">${esc(ci.comboName)}</div>
        <div class="mania-pie-note">${esc(ci.comboNote)}</div>
        <div class="mania-pie-combo-price">Combo: ₹${ci.comboPrice}</div>
        <div class="topping-list">${toppingChips}</div>
        <div class="mania-pie-each">Single topping mini pizza — each ₹${ci.toppingPrice}</div>
      </div>
    </div>`;
}

/* Pizza add-ons info box */
function renderPizzaAddons(addons) {
  if (!addons || addons.length === 0) return '';

  const rows = addons.map(a => `
    <div class="addon-row">
      <div class="addon-name">${esc(a.name)}</div>
      ${a.desc ? `<div class="addon-desc">${esc(a.desc)}</div>` : ''}
      <div class="addon-prices">
        ${Object.entries(a.prices).map(([sz, price]) => `
          <div class="addon-size">
            <div class="addon-size-label">${esc(sz)}</div>
            <div class="addon-size-price">₹${price}</div>
          </div>`).join('')}
      </div>
    </div>`).join('');

  return `
    <div class="pizza-addons-box">
      <div class="pizza-addons-title">🔧 Customise Your Pizza</div>
      <div class="pizza-addons-sub">Add-ons & upgrades — prices are per pizza</div>
      <div class="addons-grid">${rows}</div>
    </div>`;
}

/* ── Offers Section ──────────────────────────────────────── */
function renderOffers() {
  const grid = $('#offers-grid');
  if (!grid) return;

  grid.innerHTML = BUSINESS.offers.map(offer => `
    <div class="offer-card">
      <span class="offer-badge">${esc(offer.badge)}</span>
      <span class="offer-icon">${esc(offer.icon)}</span>
      <h3 class="offer-title">${esc(offer.title)}</h3>
      <div class="offer-subtitle">${esc(offer.subtitle)}</div>
      <p class="offer-desc">${esc(offer.desc)}</p>
    </div>
  `).join('');
}

/* ── Reviews Section ─────────────────────────────────────── */
function renderReviews() {
  const grid = $('#reviews-grid');
  if (!grid) return;

  grid.innerHTML = BUSINESS.reviews.map(r => `
    <div class="review-card">
      <div class="review-stars" aria-label="${r.rating} out of 5 stars">${starHTML(r.rating)}</div>
      <p class="review-text">"${esc(r.text)}"</p>
      <div class="reviewer">
        <div class="reviewer-avatar" aria-hidden="true">${esc(r.avatar)}</div>
        <div class="reviewer-name">${esc(r.name)}</div>
      </div>
    </div>
  `).join('');
}

/* ── QR Payment ──────────────────────────────────────────── */
function renderQR() {
  const img = $('#qr-img');
  if (!img) return;
  
  // Set up error fallback image if API is offline
  img.onerror = () => {
    img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23ffffff"/><path d="M20 20h60v60H20zM30 30v40h40V30zM40 40h20v20H40zM120 20h60v60h-60zM130 30v40h40V30zM140 40h20v20h-20zM20 120h60v60H20zM30 130v40h40v-40zM40 140h20v20H40zM100 20h10v20h-10zM90 50h20v20H90zM100 90h20v20h-20zM140 100h40v20h-40zM120 130h20v20h-20zM160 140h20v40h-20zM100 160h40v20h-40z" fill="%23171311"/></svg>';
  };
}

/* ── Flame Particles ─────────────────────────────────────── */
function initFlameParticles() {
  const container = $('#flame-particles');
  if (!container) return;

  const count = 10;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'flame-particle';
    p.textContent = ['🔥','✨','⚡'][i % 3];
    p.style.left = `${Math.random() * 90 + 5}%`;
    p.style.top  = `${Math.random() * 60 + 30}%`;
    p.style.animationDuration  = `${3 + Math.random() * 4}s`;
    p.style.animationDelay     = `${Math.random() * 5}s`;
    p.style.fontSize           = `${0.8 + Math.random() * 0.8}rem`;
    container.appendChild(p);
  }
}

/* ── Active nav highlight on scroll ─────────────────────── */
function initScrollSpy() {
  const sections = ['menu','offers','reviews','contact'].map(id => document.getElementById(id));
  const navLinks = $$('.nav-link[href^="#"]');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.25, rootMargin: '-60px 0px 0px 0px' });

  sections.forEach(s => s && obs.observe(s));
}

/* ── Bootstrap ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  renderCategoryStrip();
  renderMenuTabs();
  initSearch();
  renderMenu();
  renderOffers();
  renderReviews();
  renderQR();
  initFlameParticles();
  initScrollSpy();
});
