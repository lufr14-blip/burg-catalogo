/* ============================================================
   Burg · Catálogo comercial — app
   Vanilla JS, sem dependências. Funciona offline.
   ============================================================ */
(function () {
  "use strict";
  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const THUMB = "assets/img/thumb/", LARGE = "assets/img/large/";
  const imgsOf = p => [1, 2, 3].map(n => p.slug + "-" + n + ".jpg");
  const coverThumb = p => THUMB + p.slug + "-" + (p.cover + 1) + ".jpg";
  const coverLarge = p => LARGE + p.slug + "-" + (p.cover + 1) + ".jpg";

  const ICONS = {
    spark:'<svg viewBox="0 0 24 24" fill="none"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" fill="currentColor"/></svg>',
    grid:'<svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    leaf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 4S8 4 5 12c-1.5 4 1 7 1 7s4-1 7-3"/><path d="M20 4c0 8-6 12-14 16"/></svg>',
    chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    sliders:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/></svg>',
    check:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>'
  };

  /* ---------- Backgrounds ---------- */
  $("#hero-bg").style.backgroundImage = `url('${LARGE + HEROES.hero}')`; // acima da dobra (pré-carregado no <head>)
  // company e CTA ficam abaixo da dobra: carregam sob demanda
  function lazyBg(sel, file) {
    const el = $(sel); if (!el) return;
    const set = () => { el.style.backgroundImage = `url('${LARGE + file}')`; };
    if (!("IntersectionObserver" in window)) { set(); return; }
    const o = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { set(); o.disconnect(); } }), { rootMargin: "300px" });
    o.observe(el);
  }
  lazyBg("#company-media", HEROES.company);
  lazyBg("#contato", HEROES.cta);

  /* ---------- Diferenciais ---------- */
  $("#diff-grid").innerHTML = DIFERENCIAIS.map((d, i) => `
    <article class="dcard reveal">
      <span class="dcard__n">0${i + 1}</span>
      <div class="dcard__ic">${ICONS[d.icon]}</div>
      <h3>${d.title}</h3>
      <p>${d.text}</p>
    </article>`).join("");

  /* ---------- Team ---------- */

  /* ---------- Filtros ---------- */
  let activeCat = "todos", query = "";
  $("#filters").innerHTML = CATEGORIES.map(c =>
    `<button role="tab" data-cat="${c.id}" aria-selected="${c.id === "todos"}" class="${c.id === "todos" ? "active" : ""}">${c.label}</button>`).join("");
  // wrap toolbar content for styling
  const tb = $(".cat__toolbar");
  tb.innerHTML = `<div class="cat__toolbar-inner">${tb.innerHTML}</div>`;

  const badgeClass = p => p.prep === "Marinado" ? "badge--Marinado" : p.prep === "Temperado" ? "badge--Temperado" : "badge--natura";

  function currentList() {
    return PRODUCTS.filter(p => {
      const okCat = activeCat === "todos" || p.cat === activeCat;
      const q = query.trim().toLowerCase();
      const okQ = !q || (p.name + " " + p.cut + " " + p.cat + " " + p.prep + " " + p.brand + " " + p.tags.join(" ")).toLowerCase().includes(q);
      return okCat && okQ;
    });
  }

  /* ---------- Render grid ---------- */
  const grid = $("#grid");
  let filtered = [];
  function renderGrid() {
    filtered = currentList();
    $("#cat-count").textContent = filtered.length + (filtered.length === 1 ? " produto" : " produtos");
    $("#cat-empty").hidden = filtered.length > 0;
    grid.innerHTML = filtered.map((p, i) => `
      <article class="card reveal" data-i="${i}" tabindex="0" role="button" aria-label="Ver detalhes: ${p.name}" style="transition-delay:${Math.min(i, 8) * 40}ms">
        <div class="card__media">
          <img loading="lazy" src="${coverThumb(p)}" alt="${p.name}">
        </div>
        <div class="card__scrim"></div>
        <span class="card__brand" data-b="${p.brand}">${p.brand}</span>
        <span class="badge ${badgeClass(p)}">${p.prep === "In natura" ? "In natura" : p.prep}</span>
        <div class="card__body">
          <div class="card__cut">${p.cut}</div>
          <h3 class="card__name">${p.name}</h3>
          <div class="card__meta">${p.weight}</div>
        </div>
        <span class="card__plus" aria-hidden="true">+</span>
      </article>`).join("");
    $$(".card__media img", grid).forEach(img => {
      if (img.complete) img.classList.add("loaded");
      else img.addEventListener("load", () => img.classList.add("loaded"), { once: true });
    });
    observeReveals();
  }

  $("#filters").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    activeCat = b.dataset.cat;
    $$("#filters button").forEach(x => { const on = x === b; x.classList.toggle("active", on); x.setAttribute("aria-selected", on); });
    renderGrid();
  });
  let st;
  $("#search").addEventListener("input", e => {
    clearTimeout(st); query = e.target.value;
    st = setTimeout(renderGrid, 120);
  });

  grid.addEventListener("click", e => {
    const card = e.target.closest(".card"); if (!card) return;
    openModal(parseInt(card.dataset.i, 10));
  });
  grid.addEventListener("keydown", e => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".card"); if (!card) return;
    e.preventDefault();
    openModal(parseInt(card.dataset.i, 10));
  });

  /* ---------- Modal / Lightbox ---------- */
  const modal = $("#modal"), mPanel = $("#modal-panel");
  let mIndex = 0, gIndex = 0;

  /* ---------- Foco / acessibilidade dos diálogos ---------- */
  let _opener = null;
  const _bgEls = () => [document.getElementById("hdr"), document.getElementById("top"), document.querySelector(".foot")];
  function lockUI(dialog) {
    _opener = document.activeElement;
    document.body.classList.add("locked");
    _bgEls().forEach(el => el && el.setAttribute("inert", ""));
    const first = dialog.querySelector("button, [href], input");
    if (first) first.focus();
  }
  function unlockUI() {
    document.body.classList.remove("locked");
    _bgEls().forEach(el => el && el.removeAttribute("inert"));
    if (_opener && _opener.focus) _opener.focus();
    _opener = null;
  }
  function trapTab(e, dialog) {
    if (e.key !== "Tab") return;
    const f = Array.from(dialog.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])')).filter(el => el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function openModal(i) {
    const wasOpen = !modal.hidden;
    mIndex = i;
    const p = filtered[i]; if (!p) return;
    gIndex = p.cover;
    const imgs = imgsOf(p);
    mPanel.innerHTML = `
      <div class="mgal">
        <div class="mgal__main">
          ${imgs.map((f, k) => `<img class="${k === p.cover ? "show" : ""}" data-k="${k}" src="${LARGE + f}" alt="${p.name} ${k + 1}">`).join("")}
        </div>
        <div class="mgal__thumbs">
          ${imgs.map((f, k) => `<button class="${k === p.cover ? "active" : ""}" data-k="${k}"><img src="${THUMB + f}" alt=""></button>`).join("")}
        </div>
      </div>
      <div class="minfo">
        <div class="minfo__cut">${p.cut} · ${p.brand}</div>
        <h2 class="minfo__name">${p.name}</h2>
        <div class="minfo__chips">
          <span class="chip chip--prep" data-p="${p.prep}">${p.prep}</span>
          ${p.weight ? `<span class="chip">${p.weight}</span>` : ""}
          <span class="chip">${p.cat}</span>
        </div>
        <p class="minfo__desc">${p.desc}</p>
        <ul class="minfo__args">
          ${p.tags.map(t => `<li>${ICONS.check}<span>${t}</span></li>`).join("")}
        </ul>
        <div class="minfo__foot">Código de referência <b>${p.code.replace(/[a-z]/g, "")}</b> · Imagem ilustrativa</div>
      </div>`;
    modal.hidden = false;
    bindGallery(p);
    if (!wasOpen) lockUI(modal);
  }
  function bindGallery(p) {
    const mains = $$(".mgal__main img", mPanel), thumbs = $$(".mgal__thumbs button", mPanel);
    const show = k => {
      gIndex = (k + mains.length) % mains.length;
      mains.forEach(m => m.classList.toggle("show", +m.dataset.k === gIndex));
      thumbs.forEach(t => t.classList.toggle("active", +t.dataset.k === gIndex));
    };
    thumbs.forEach(t => t.addEventListener("click", () => show(+t.dataset.k)));
    const main = $(".mgal__main", mPanel);
    main.addEventListener("click", () => show(gIndex + 1));
    swipe(main, () => show(gIndex + 1), () => show(gIndex - 1));
  }
  function closeModal() { modal.hidden = true; unlockUI(); }
  function navModal(d) { const n = (mIndex + d + filtered.length) % filtered.length; openModal(n); }

  $("#modal-close").addEventListener("click", closeModal);
  $("#modal-prev").addEventListener("click", () => navModal(-1));
  $("#modal-next").addEventListener("click", () => navModal(1));
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });

  /* ---------- Presentation mode ---------- */
  const present = $("#present"), stage = $("#present-stage"), dotsWrap = $("#present-dots");
  let pList = [], pIndex = 0;

  function openPresent() {
    pList = filtered.length ? filtered : PRODUCTS;
    pIndex = 0;
    stage.innerHTML = pList.map((p, k) => `
      <div class="pslide ${k === 0 ? "show" : ""}" data-k="${k}">
        <img data-src="${coverLarge(p)}" alt="${p.name}">
        <div class="present__cap">
          <div class="pc-cut">${p.cut} · ${p.brand}</div>
          <div class="pc-name">${p.name}</div>
          <div class="pc-desc">${p.desc}</div>
        </div>
      </div>`).join("");
    dotsWrap.innerHTML = pList.map((_, k) => `<button data-k="${k}" class="${k === 0 ? "active" : ""}"></button>`).join("");
    present.hidden = false;
    swipe(stage, () => navPresent(1), () => navPresent(-1));
    dotsWrap.querySelectorAll("button").forEach(b => b.addEventListener("click", () => gotoPresent(+b.dataset.k)));
    loadSlide(0); loadSlide(1);
    updateMeta();
    lockUI(present);
  }
  function loadSlide(k) {
    const s = $$(".pslide", stage)[k]; if (!s) return;
    const im = s.querySelector("img");
    if (im && !im.getAttribute("src")) im.setAttribute("src", im.dataset.src);
  }
  function gotoPresent(k) {
    pIndex = (k + pList.length) % pList.length;
    $$(".pslide", stage).forEach(s => s.classList.toggle("show", +s.dataset.k === pIndex));
    dotsWrap.querySelectorAll("button").forEach(b => b.classList.toggle("active", +b.dataset.k === pIndex));
    loadSlide(pIndex); loadSlide(pIndex + 1);
    updateMeta();
  }
  function navPresent(d) { gotoPresent(pIndex + d); }
  function updateMeta() { $("#present-meta").innerHTML = `<b>${pIndex + 1}</b> / ${pList.length} &nbsp;·&nbsp; ${pList[pIndex].cat}`; }
  function closePresent() { present.hidden = true; unlockUI(); }

  ["#btn-present", "#btn-present-2", "#btn-present-3"].forEach(id => { const el = $(id); if (el) el.addEventListener("click", () => { closeMobnav(); openPresent(); }); });
  $("#present-close").addEventListener("click", closePresent);
  $("#present-prev").addEventListener("click", () => navPresent(-1));
  $("#present-next").addEventListener("click", () => navPresent(1));

  /* ---------- Keyboard ---------- */
  document.addEventListener("keydown", e => {
    if (!modal.hidden) {
      if (e.key === "Escape") closeModal();
      else if (e.key === "ArrowRight") navModal(1);
      else if (e.key === "ArrowLeft") navModal(-1);
      else trapTab(e, modal);
    } else if (!present.hidden) {
      if (e.key === "Escape") closePresent();
      else if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); navPresent(1); }
      else if (e.key === "ArrowLeft") navPresent(-1);
      else trapTab(e, present);
    }
  });

  /* ---------- Swipe helper ---------- */
  function swipe(el, onLeft, onRight) {
    let x0 = null;
    el.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
    el.addEventListener("touchend", e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 45) (dx < 0 ? onLeft : onRight)();
      x0 = null;
    }, { passive: true });
  }

  /* ---------- Header scroll ---------- */
  const hdr = $("#hdr");
  const onScroll = () => hdr.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile nav ---------- */
  const mobnav = $("#mobnav"), burger = $("#btn-menu");
  function openMobnav() { mobnav.hidden = false; burger.classList.add("open"); burger.setAttribute("aria-expanded", "true"); }
  function closeMobnav() { mobnav.hidden = true; burger.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  burger.addEventListener("click", () => mobnav.hidden ? openMobnav() : closeMobnav());
  $$("#mobnav a").forEach(a => a.addEventListener("click", closeMobnav));

  /* ---------- Back to top ---------- */
  $("#btn-top").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- Reveal on scroll ---------- */
  let io;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) { $$(".reveal").forEach(e => e.classList.add("in")); return; }
    if (!io) io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    $$(".reveal:not(.in)").forEach(e => io.observe(e));
  }

  /* ---------- Animated counters ---------- */
  function animateCounters() {
    $$(".stat__num").forEach(el => {
      const target = parseFloat(el.dataset.count), pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
      let cur = 0; const steps = 40; const inc = target / steps; let i = 0;
      const tick = () => {
        i++; cur = Math.min(target, inc * i);
        el.textContent = pre + (Number.isInteger(target) ? Math.round(cur) : cur.toFixed(1)) + suf;
        if (i < steps) requestAnimationFrame(tick);
      };
      tick();
    });
  }
  const statsSec = $("#numeros");
  if ("IntersectionObserver" in window) {
    const so = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { animateCounters(); so.disconnect(); } }), { threshold: 0.3 });
    so.observe(statsSec);
  } else animateCounters();

  /* ---------- Dados estruturados de produtos (SEO) ---------- */
  function injectProductSchema() {
    const items = PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": p.name,
        "image": new URL(coverLarge(p), document.baseURI).href,
        "description": p.desc,
        "category": p.cat + " › " + p.cut,
        "brand": { "@type": "Brand", "name": p.brand }
      }
    }));
    const data = { "@context": "https://schema.org", "@type": "ItemList", "name": "Catálogo de cortes Burg", "numberOfItems": PRODUCTS.length, "itemListElement": items };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(data);
    document.head.appendChild(s);
  }

  /* ---------- Init ---------- */
  renderGrid();
  observeReveals();
  injectProductSchema();
})();
