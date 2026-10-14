/* =====================================================================
   DRCT website script. Beginners: edit ONLY the "SITE DETAILS" and
   "SECTION DATA" blocks below. Courses -> courses.json,
   Announcements -> announcements.json.
   ===================================================================== */

/* ---------- SITE DETAILS (fill with OFFICIAL details; leave "" if unknown) ---------- */
const CONFIG = {
  phone: "9489807222",          // e.g. "+91XXXXXXXXXX"
  whatsapp: "9489807222",       // digits only with country code, e.g. "91XXXXXXXXXX"
  email: "drctgobi@gmail.com",          // e.g. "office@example.org"
  address: "erode Main Road Lakshami Honda showroom Gobichettipalam Erode 638476",        // full postal address
  hours: "Mon-Sat 9:00 AM - 5:30 PM",          // e.g. "Mon–Sat, 9:30 AM – 5:30 PM"
  registration: ""    // trust registration no. (only if verified)
};

/* ---------- SECTION DATA (edit text between quotes; add/remove { } blocks) ---------- */
// Achievements: leave value "" to show a placeholder. Only enter verified numbers.
const ACHIEVEMENTS = [
  { label: "Students trained", value: "715" },
  { label: "Students placed", value: "536" },
  { label: "Years of service", value: "8" },
  { label: "Courses offered", value: "10" }
];
// Schemes: status "Applicable" only after DRCT confirms. Otherwise "To be confirmed".
const SCHEMES = [
  { name: "DDU-GKY", full: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana", status: "Applicable", note: "[Add DRCT's verified details: approval, centres, courses.]" },
  { name: "PMKVY", full: "Pradhan Mantri Kaushal Vikas Yojana", status: "To be confirmed", note: "[Publish only if DRCT is an approved partner.]" },
  { name: "TNSDC", full: "Tamil Nadu Skill Development Corporation", status: "To be confirmed", note: "[Publish only if DRCT is an approved partner.]" },
  { name: "AICTE", full: "All India Council for Technical Education", status: "To be confirmed", note: "[Publish only if DRCT has AICTE approval.]" }
];
// Gallery: put image files in assets/images/ . category = event type.
const GALLERY = [
  { file: "assets/images/sample1.jpg", caption: "Sample photo – replace with a real event photo", category: "Training" },
  { file: "assets/images/sample2.jpg", caption: "Sample photo – replace with a real event photo", category: "Events" },
  { file: "assets/images/sample3.jpg", caption: "Sample photo – replace with a real event photo", category: "Placements" },
  { file: "assets/images/sample4.jpg", caption: "Sample photo – replace with a real event photo", category: "Training" }
];
// Success stories: use real, consented, verified stories only. First name only recommended.
const STORIES = [
  { name: "[Student first name]", course: "[Course]", text: "[Add a verified success story here, with the student's permission.]", employer: "[Company / role]" }
];
const FACULTY = [
  { name: "[Name]", role: "[Designation]", about: "[Qualification / experience]", photo: "" }
];
// Downloads: put PDFs in assets/pdf/
const DOWNLOADS = [
  { title: "Sample: Course brochure (replace)", file: "assets/pdf/sample-brochure.pdf", size: "PDF" }
];
// Careers: leave list empty [] if no vacancies.
const JOBS = [
  { title: "Sample vacancy: Trainer (replace)", date: "2026-10-01", details: "[Qualification, experience, last date, how to apply.]", pdf: "" }
];

/* ---------- Helpers ---------- */
const $ = id => document.getElementById(id);
const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
const PH = "[Add official details]";
const enquiryHref = (msg) => CONFIG.whatsapp ? `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`
  : CONFIG.email ? `mailto:${CONFIG.email}?subject=${encodeURIComponent(msg)}` : "#contact";
document.querySelectorAll("[data-enquire]").forEach(a => a.href = enquiryHref("Enquiry about DRCT courses"));
$("yr").textContent = new Date().getFullYear();

/* ---------- Navigation ---------- */
const nav = $("nav"), btn = document.querySelector(".menu-btn");
btn.onclick = () => { const o = nav.classList.toggle("open"); btn.setAttribute("aria-expanded", o); };
nav.addEventListener("click", e => { if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", false); } });
const links = [...nav.querySelectorAll("a")];
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) links.forEach(l => l.classList.toggle("on", l.getAttribute("href") === "#" + en.target.id)); }), { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach(s => io.observe(s));

/* ---------- Contact & footer ---------- */
(function () {
  const a = $("ct-address"); a.textContent = CONFIG.address || "[Add official address]"; if (!CONFIG.address) a.className = "ph";
  const h = $("ct-hours"); h.textContent = CONFIG.hours || "[Add office hours]"; if (!CONFIG.hours) h.className = "ph";
  const box = $("ct-links");
  const add = (txt, href, cls) => { const x = el("a", "btn " + cls, txt); x.href = href; if (href.startsWith("http")) { x.target = "_blank"; x.rel = "noopener"; } box.append(x); };
  if (CONFIG.phone) add("Call " + CONFIG.phone, "tel:" + CONFIG.phone, "navy");
  if (CONFIG.whatsapp) add("WhatsApp us", enquiryHref("Hello DRCT"), "teal");
  if (CONFIG.email) add("Email " + CONFIG.email, "mailto:" + CONFIG.email, "gold");
  if (!box.children.length) box.append(el("p", "ph", "[Add official phone, WhatsApp and email in script.js → CONFIG]"));
  if (CONFIG.registration) $("ft-reg").textContent = "Registration: " + CONFIG.registration;
})();

/* ---------- Achievements ---------- */
$("achievements").append(...ACHIEVEMENTS.map(a => { const d = el("div", "stat"); d.append(el("b", "", a.value || "—"), el("span", "", a.label)); return d; }));

/* ---------- Schemes ---------- */
$("scheme-list").append(...SCHEMES.map(s => {
  const c = el("article", "card"); const ok = s.status === "Applicable";
  c.append(el("h3", "", s.name), el("p", "", s.full), el("span", "tag " + (ok ? "ok" : "chk"), ok ? "Applicable" : "To be confirmed"), el("p", "ph", s.note));
  return c;
}));

/* ---------- Gallery ---------- */
function photo(g) {
  const f = el("figure"); const i = el("img"); i.src = g.file; i.alt = g.caption; i.loading = "lazy"; i.width = 400; i.height = 300;
  i.onerror = () => { i.removeAttribute("src"); };
  const c = el("figcaption"); c.append(el("span", "tag", g.category), document.createElement("br"), g.caption);
  f.append(i, c); return f;
}
$("home-gallery").append(...GALLERY.slice(0, 4).map(photo));
function chips(box, items, onPick) {
  items.forEach((t, n) => { const b = el("button", "chip", t); b.setAttribute("aria-pressed", n === 0); b.onclick = () => { box.querySelectorAll(".chip").forEach(x => x.setAttribute("aria-pressed", x === b)); onPick(t === "All" ? "" : t); }; box.append(b); });
}
function drawGallery(cat) { const l = $("gallery-list"); l.replaceChildren(...GALLERY.filter(g => !cat || g.category === cat).map(photo)); }
chips($("g-chips"), ["All", ...new Set(GALLERY.map(g => g.category))], drawGallery); drawGallery("");

/* ---------- Stories, faculty, downloads, jobs ---------- */
$("story-list").append(...STORIES.map(s => { const c = el("article", "card"); c.append(el("h3", "", s.name), el("span", "tag", s.course), el("p", "", "“" + s.text + "”"), el("strong", "", s.employer)); return c; }));
$("faculty-list").append(...FACULTY.map(f => { const c = el("article", "card"); c.append(el("h3", "", f.name), el("span", "tag", f.role), el("p", "", f.about)); return c; }));
$("dl-list").append(...DOWNLOADS.map(d => { const li = el("li"); const a = el("a", "", "📄 " + d.title); a.href = d.file; a.target = "_blank"; a.rel = "noopener"; li.append(a, el("span", "muted", d.size)); return li; }));
$("job-list").append(...(JOBS.length ? JOBS.map(j => { const c = el("article", "card"); c.append(el("h3", "", j.title), el("span", "tag", j.date), el("p", "", j.details)); if (j.pdf) { const a = el("a", "btn teal", "Download notice"); a.href = j.pdf; c.append(a); } return c; }) : [el("p", "muted", "No vacancies at present.")]));

/* ---------- Courses (from courses.json) ---------- */
let COURSES = [];
function courseCard(c) {
  const card = el("article", "card");
  const st = c.status === "Open" ? "open" : c.status === "Closed" ? "closed" : "soon";
  const dl = el("dl");
  [["Code", c.code], ["Scheme", c.scheme], ["Duration", c.duration], ["Eligibility", c.eligibility], ["Qualification", c.qualification], ["Location", c.location]]
    .forEach(([k, v]) => { const r = el("div"); r.append(el("dt", "", k + ":"), el("dd", "", v || PH)); dl.append(r); });
  const q = el("a", "btn ghost", "Enquire"); q.href = enquiryHref("Enquiry: " + c.name + " (" + c.code + ")");
  card.append(el("h3", "", c.name), el("div", "", ""), el("p", "", c.description), dl, q);
  card.children[1].append(el("span", "tag", c.category), el("span", "tag " + st, "Admission: " + c.status));
  return card;
}
function drawCourses() {
  const s = $("c-search").value.toLowerCase(), cat = $("c-cat").value, sc = $("c-scheme").value, st = $("c-status").value;
  const list = COURSES.filter(c => (!s || (c.name + c.code).toLowerCase().includes(s)) && (!cat || c.category === cat) && (!sc || c.scheme === sc) && (!st || c.status === st));
  $("course-list").replaceChildren(...list.map(courseCard));
  $("c-count").textContent = list.length + " course(s) found";
}
function fill(sel, vals, label) { sel.replaceChildren(new Option("All " + label, ""), ...[...new Set(vals)].map(v => new Option(v, v))); }
fetch("courses.json").then(r => r.json()).then(d => {
  COURSES = d.courses || [];
  fill($("c-cat"), COURSES.map(c => c.category), "categories"); fill($("c-scheme"), COURSES.map(c => c.scheme), "schemes");
  ["c-search", "c-cat", "c-scheme", "c-status"].forEach(i => $(i).addEventListener("input", drawCourses));
  drawCourses();
  $("home-courses").replaceChildren(...COURSES.filter(c => c.featured).slice(0, 3).map(courseCard));
}).catch(() => $("c-count").textContent = "Courses could not load. Open the site through GitHub Pages or a local server, and check courses.json for typos.");

/* ---------- Announcements (from announcements.json) ---------- */
let ANN = [];
const fmt = d => new Date(d + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
const isNew = d => (Date.now() - new Date(d + "T00:00:00")) / 864e5 <= 30;
function drawAnn(cat) {
  $("ann-list").replaceChildren(...ANN.filter(a => !cat || a.category === cat).map(a => {
    const d = el("article", "ann" + (isNew(a.date) ? " fresh" : ""));
    const top = el("div"); top.append(el("span", "tag", a.category), el("span", "muted", " " + fmt(a.date) + " "));
    if (isNew(a.date)) top.append(el("span", "new", "NEW"));
    d.append(top, el("h3", "", a.title), el("p", "", a.description));
    if (a.course) d.append(el("p", "muted", "Related course: " + a.course));
    if (a.pdf) { const p = el("a", "btn ghost", "📄 Download PDF notice"); p.href = a.pdf; p.target = "_blank"; p.rel = "noopener"; d.append(p); }
    return d;
  }));
}
fetch("announcements.json").then(r => r.json()).then(d => {
  ANN = (d.announcements || []).sort((a, b) => b.date.localeCompare(a.date));
  chips($("a-chips"), ["All", ...new Set(ANN.map(a => a.category))], drawAnn); drawAnn("");
  $("home-news").replaceChildren(...ANN.slice(0, 3).map(a => { const li = el("li"); const x = el("a", "", a.title); x.href = "#announcements"; li.append(x, el("br"), el("small", "muted", fmt(a.date))); return li; }));
}).catch(() => $("ann-list").append(el("p", "ph", "Announcements could not load. Check announcements.json for typos.")));
