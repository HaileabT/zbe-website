/* ZBE Power Engineering — content below comes from zbepowereng.com.
   Gallery titles are descriptions of the photos and should be confirmed by the company. */
const P = "assets/zbe/photos/";
const L = "assets/zbe/logos/";

const PROJECTS = [
  { img: "p1.jpg", title: "Smart Banking Branch" },
  { img: "p2.jpg", title: "Forecourt & Landscape Lighting" },
  { img: "p3.jpg", title: "High-rise Tower" },
  { img: "p4.jpg", title: "Office Building" },
  { img: "p5-westin.png", title: "Westin Addis Ababa" },
  { img: "p6.jpg", title: "Cold Room Installation" },
  { img: "p7.jpg", title: "Minaye Office Park" },
];
const FEATURED = [0, 4, 6, 2]; // indexes into PROJECTS for the hero rotation

const SERVICES = [
  { t: "Comprehensive Electrical Solutions", d: "A full spectrum of services for your electrical needs, from installation to maintenance." },
  { t: "Custom PCB Design and Manufacturing", d: "Tailored electronic designs created to meet specific client requirements, delivered with our advanced manufacturing process." },
  { t: "ICT Infrastructure Development", d: "Expertise in building and developing robust ICT infrastructure for diverse applications." },
  { t: "Prototyping Services", d: "End-to-end prototyping and testing in our state-of-the-art electronics laboratory." },
  { t: "Consultation and Assessment", d: "Thorough assessments and consultations to ensure all electrical installations meet safety and efficiency standards." },
  { t: "24/7 Emergency Support", d: "Reliable emergency support for electrical issues at any time, ensuring your safety and peace of mind." },
];

const CLIENTS = [
  ["Dashen Bank", "dashen-bank.png"], ["Ministry of Health – Ethiopia", "ministry-of-health.webp"], ["Marriott International", "marriott.png"], ["MultiChoice", "multichoice.svg"],
  ["VISA", "visa-ethiopia.png"], ["Minaye Group", "minaye.png"], ["Universal Construction", "universal-construction.png"], ["ZIAS", "zias.jpg"],
  ["Dezacon", "dezacon.jpg"], ["Yema Architecture", "yema-architecture.jpg"], ["Alem Steel", "alem-steel.png"],
];

const TESTIMONIALS = [
  ["Exceptional Service and Expertise", "The team at zbepowereng.com provided us with outstanding electrical installation systems. Their professionalism and attention to detail were evident throughout the project."],
  ["Innovative Solutions and Quality Work", "We partnered with zbepowereng for our ICT infrastructure, and they delivered reliable, state-of-the-art solutions that exceeded our expectations."],
  ["Highly Recommend for Custom Electronic Needs", "Their expertise in designing and manufacturing electronic PCB boards was invaluable to our project. We appreciated the bespoke service and high-quality results."],
];

const $ = (s, r = document) => r.querySelector(s);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- hero rotation ---------- */
(function hero() {
  const hero = $(".hero"), title = $("#hero-title"), img = $("#hero-img"), count = $("#hero-count"), bar = $("#hero-progress");
  const HOLD = 4200;
  let i = 0, t0 = performance.now();

  function show(n) {
    const p = PROJECTS[FEATURED[n]];
    title.textContent = p.title; img.src = P + p.img; img.alt = p.title;
    count.textContent = `${String(n + 1).padStart(2, "0")}/${String(FEATURED.length).padStart(2, "0")}`;
  }
  function next() {
    hero.classList.add("is-swap");
    setTimeout(() => { i = (i + 1) % FEATURED.length; show(i); hero.classList.remove("is-swap"); t0 = performance.now(); }, 450);
  }
  function tick(now) {
    const pct = Math.min(1, (now - t0) / HOLD);
    bar.style.width = pct * 100 + "%";
    if (pct >= 1 && !hero.classList.contains("is-swap")) next();
    requestAnimationFrame(tick);
  }
  show(0);
  if (!reduce) requestAnimationFrame(tick);

  // wall: two columns, duplicated for a seamless loop
  const fill = (col, list) => [...list, ...list, ...list].forEach(p => { const im = new Image(); im.src = P + p.img; im.alt = ""; im.loading = "lazy"; col.append(im); });
  fill($("#wall-a"), PROJECTS.filter((_, k) => k % 2 === 0));
  fill($("#wall-b"), PROJECTS.filter((_, k) => k % 2 === 1));
})();

/* ---------- gallery ---------- */
(function gallery() {
  const grid = $("#masonry");
  PROJECTS.forEach((p, idx) => {
    const t = el("button", "tile reveal"); t.type = "button";
    t.setAttribute("aria-label", `View: ${p.title}`);
    t.innerHTML = `<img src="${P}${p.img}" alt="${p.title}" loading="lazy">
      <span class="tile__view">View project →</span>
      <span class="tile__info"><span class="tile__title">${p.title}</span></span>`;
    t.onclick = () => openCase(idx);
    grid.append(t);
  });
})();

/* ---------- case study modal ---------- */
const dlg = $("#case");
function openCase(idx) {
  const p = PROJECTS[idx];
  $("#case-title").textContent = p.title;
  $("#case-img").src = P + p.img; $("#case-img").alt = p.title;
  dlg.showModal();
}
$("#case-close").onclick = () => dlg.close();
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
$("#case-cta").onclick = () => dlg.close();

/* ---------- services ---------- */
(function services() {
  const list = $("#services-list"), img = $("#svc-img");
  SERVICES.forEach((s, i) => {
    const li = el("li");
    const b = el("div", "svc reveal"); b.tabIndex = 0;
    b.innerHTML = `<span class="svc__n">${String(i + 1).padStart(2, "0")}</span><span class="svc__t">${s.t}</span><p class="svc__d">${s.d}</p>`;
    const preview = () => { list.querySelectorAll(".svc").forEach(x => x.classList.remove("is-active")); b.classList.add("is-active"); img.src = P + PROJECTS[i].img; };
    b.addEventListener("mouseenter", preview); b.addEventListener("focus", preview);
    li.append(b); list.append(li);
  });
  list.querySelector(".svc").classList.add("is-active");
})();

/* ---------- clients + testimonials ---------- */
(function clients() {
  CLIENTS.forEach(([name, file]) => {
    const li = el("li", "reveal");
    li.innerHTML = `<img src="${L}${file}" alt="${name}" loading="lazy">`;
    $("#logos").append(li);
  });
  TESTIMONIALS.forEach(([h, q]) => {
    const f = el("figure", "quote reveal", `<span class="quote__mark" aria-hidden="true">"</span><h4>${h}</h4><blockquote>${q}</blockquote>`);
    $("#quotes").append(f);
  });
})();

/* ---------- reveal on scroll ---------- */
(function observe() {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("is-in"); io.unobserve(e.target);
  }), { threshold: .12 });
  document.querySelectorAll(".reveal, .section__head").forEach(n => { n.classList.add("reveal"); io.observe(n); });
})();

/* ---------- custom cursor ---------- */
(function cursor() {
  const c = $(".cursor"); if (!c || matchMedia("(hover: none)").matches) return;
  let x = 0, y = 0, cx = 0, cy = 0;
  addEventListener("mousemove", e => { x = e.clientX; y = e.clientY; c.classList.add("is-on"); });
  document.addEventListener("mouseleave", () => c.classList.remove("is-on"));
  (function loop() { cx += (x - cx) * .2; cy += (y - cy) * .2; c.style.transform = `translate(${cx}px,${cy}px)`; requestAnimationFrame(loop); })();
  document.addEventListener("mouseover", e => c.classList.toggle("is-hot", !!e.target.closest("a, button, .tile")));
})();
