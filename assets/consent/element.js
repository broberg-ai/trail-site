import { createConsentManager, createCookieConsentStorage, CONSENT_CATEGORIES } from './chunk-GPMBRBJW.js';

// src/element.ts
var TEXTS = {
  da: {
    title: "Vi bruger cookies",
    titleUpdated: "Vores cookie-politik er opdateret",
    body: "N\xF8dvendige cookies f\xE5r siden til at virke. Med dit samtykke bruger vi ogs\xE5 cookies til statistik og marketing. Du kan altid \xE6ndre dit valg under \xABCookie-indstillinger\xBB.",
    readMore: "L\xE6s mere",
    rejectAll: "Afvis alle",
    acceptAll: "Accepter alle",
    customize: "Tilpas",
    panelTitle: "Cookie-indstillinger",
    panelBody: "V\xE6lg hvilke cookies vi m\xE5 bruge. Dit valg g\xE6lder p\xE5 dette site og kan \xE6ndres n\xE5r som helst.",
    alwaysOn: "Altid til",
    save: "Gem valg",
    withdraw: "Tr\xE6k samtykke tilbage",
    withdrawReload: "Tr\xE6k samtykke tilbage (siden genindl\xE6ses)",
    reopen: "Cookies",
    noChoice: "Intet valg endnu",
    saved: "Gemt",
    categories: {
      essential: { label: "N\xF8dvendige", description: "F\xE5r siden til at virke: login, sikkerhed og dit cookie-valg. Kan ikke sl\xE5s fra." },
      analytics: { label: "Statistik", description: "Hj\xE6lper os med at forst\xE5, hvordan siden bruges, s\xE5 vi kan forbedre den." },
      marketing: { label: "Marketing", description: "Bruges til at vise relevante annoncer og m\xE5le kampagner, ogs\xE5 p\xE5 andre sites." }
    }
  },
  en: {
    title: "We use cookies",
    titleUpdated: "Our cookie policy has been updated",
    body: "Necessary cookies make the site work. With your consent we also use cookies for statistics and marketing. You can change your choice at any time under \u201CCookie settings\u201D.",
    readMore: "Read more",
    rejectAll: "Reject all",
    acceptAll: "Accept all",
    customize: "Customize",
    panelTitle: "Cookie settings",
    panelBody: "Choose which cookies we may use. Your choice applies to this site and can be changed at any time.",
    alwaysOn: "Always on",
    save: "Save choice",
    withdraw: "Withdraw consent",
    withdrawReload: "Withdraw consent (the page reloads)",
    reopen: "Cookies",
    noChoice: "No choice yet",
    saved: "Saved",
    categories: {
      essential: { label: "Necessary", description: "Make the site work: login, security and your cookie choice. Cannot be turned off." },
      analytics: { label: "Statistics", description: "Help us understand how the site is used so we can improve it." },
      marketing: { label: "Marketing", description: "Used to show relevant ads and measure campaigns, also on other sites." }
    }
  }
};
var BODY = {
  da: {
    lead: "N\xF8dvendige cookies f\xE5r siden til at virke.",
    with: (list) => `Med dit samtykke bruger vi ogs\xE5 cookies til ${list}.`,
    only: "Vi bruger ikke cookies til statistik eller marketing.",
    tail: "Du kan altid \xE6ndre dit valg under \xABCookie-indstillinger\xBB.",
    and: "og"
  },
  en: {
    lead: "Necessary cookies make the site work.",
    with: (list) => `With your consent we also use cookies for ${list}.`,
    only: "We do not use cookies for statistics or marketing.",
    tail: "You can change your choice at any time under \u201CCookie settings\u201D.",
    and: "and"
  }
};
var STYLE = `
:host{all:initial;font:14px/1.5 var(--font-sans,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif);
  --bc-bg:var(--card,#fff);--bc-fg:var(--card-foreground,#1f1f1f);--bc-muted:var(--muted-foreground,#6b6b6b);
  --bc-border:var(--border,#e5e5e5);--bc-primary:var(--primary,#1f1f1f);--bc-on-primary:var(--primary-foreground,#fafafa);
  --bc-secondary:var(--secondary,#f2f2f2);--bc-ring:var(--ring,#a3a3a3);--bc-radius:var(--radius,0.5rem)}
*{box-sizing:border-box}
[hidden]{display:none!important}
.banner{position:fixed;z-index:2147483000;left:var(--broberg-consent-banner-left,24px);bottom:var(--broberg-consent-banner-bottom,24px);width:440px;max-width:calc(100vw - 24px);background:var(--bc-bg);color:var(--bc-fg);
  border:1px solid var(--bc-border);border-radius:calc(var(--bc-radius) + 4px);box-shadow:0 12px 32px rgba(0,0,0,.18);padding:20px}
@media (max-width:520px){.banner{left:var(--broberg-consent-banner-left,12px);right:12px;bottom:var(--broberg-consent-banner-bottom,12px);width:auto;padding:16px}}
h2{margin:0 0 6px;font-size:16px;font-weight:600}
.banner p{margin:0 0 16px;font-size:13px;color:var(--bc-muted)}
a{color:var(--bc-fg)}
.row{display:grid;grid-template-columns:1fr 1fr;gap:8px}
button{font:inherit}
.btn{appearance:none;border:1px solid transparent;border-radius:var(--bc-radius);padding:10px 14px;font-weight:600;font-size:14px;cursor:pointer;transition:filter .12s,transform .06s}
.btn:hover{filter:brightness(1.08)}
.btn:active{transform:translateY(1px)}
.banner:focus,.panel:focus{outline:none}
.btn:focus-visible,.switch:focus-visible,.reopen:focus-visible,a:focus-visible{outline:2px solid var(--bc-ring);outline-offset:2px}
.main{background:var(--bc-primary);color:var(--bc-on-primary)}
.ghost{background:transparent;color:var(--bc-fg);border-color:var(--bc-border);font-weight:500}
.wide{margin-top:10px;display:block;width:100%}
.scrim{position:fixed;z-index:2147483001;inset:0;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;padding:16px}
.panel{width:520px;max-width:100%;max-height:100%;overflow:auto;background:var(--bc-bg);color:var(--bc-fg);border:1px solid var(--bc-border);
  border-radius:calc(var(--bc-radius) + 4px);padding:22px}
.panel>p{margin:0 0 14px;font-size:13px;color:var(--bc-muted)}
.cat{display:flex;gap:14px;align-items:flex-start;justify-content:space-between;padding:14px 0;border-top:1px solid var(--bc-border)}
.cat h3{margin:0 0 2px;font-size:14px;font-weight:600}
.cat p{margin:0;font-size:12.5px;color:var(--bc-muted)}
.tag{font-size:11px;color:var(--bc-muted);white-space:nowrap;padding-top:3px}
.switch{flex:none;width:42px;height:24px;border-radius:999px;border:0;background:var(--bc-secondary);position:relative;cursor:pointer;margin-top:2px;padding:0}
.switch::after{content:"";position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:var(--bc-bg);box-shadow:0 1px 2px rgba(0,0,0,.3);transition:left .15s}
.switch[aria-checked="true"]{background:var(--bc-primary)}
.switch[aria-checked="true"]::after{left:21px;background:var(--bc-on-primary)}
.foot{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;padding-top:16px;border-top:1px solid var(--bc-border)}
@media (max-width:520px){.foot{grid-template-columns:1fr}}
.meta{margin-top:12px;font-size:11.5px;color:var(--bc-muted)}
.linkbtn{background:none;border:0;padding:0;color:var(--bc-fg);text-decoration:underline;cursor:pointer;font-size:inherit}
.reopen{position:fixed;z-index:2147483000;left:var(--broberg-consent-reopen-x,16px);bottom:var(--broberg-consent-reopen-y,16px);display:flex;align-items:center;gap:6px;background:var(--bc-bg);color:var(--bc-fg);
  border:1px solid var(--bc-border);border-radius:999px;padding:7px 12px 7px 10px;font-size:12.5px;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.12)}
.reopen.right{left:auto;right:var(--broberg-consent-reopen-x,16px)}
.reopen.top{bottom:auto;top:var(--broberg-consent-reopen-y,16px)}
.reopen svg{width:16px;height:16px}
`;
var COOKIE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9 4 4 0 0 1-5-5 4 4 0 0 1-4-4Z"/><circle cx="8.5" cy="11" r="1"/><circle cx="12" cy="16" r="1"/></svg>';
var esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
var FOCUSABLE = 'button:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])';
var REOPEN_CORNERS = /* @__PURE__ */ new Map([
  ["right", " right"],
  ["bottom-right", " right"],
  ["top-left", " top"],
  ["top-right", " top right"]
]);
var reopenCorner = (pos) => REOPEN_CORNERS.get(pos ?? "") ?? "";
var active = null;
var triggerListening = false;
function listenForTriggers() {
  if (triggerListening || typeof document === "undefined") return;
  triggerListening = true;
  document.addEventListener("click", (e) => {
    const t = e.target?.closest?.("[data-broberg-consent-open]");
    if (!t || !active) return;
    e.preventDefault();
    active.open();
  });
}
var ACTIVATED = "data-consent-activated";
function activateGranted(has, root = document) {
  let n = 0;
  root.querySelectorAll(`script[type="text/plain"][data-consent]:not([${ACTIVATED}])`).forEach((old) => {
    if (!has(old.dataset.consent)) return;
    const s = document.createElement("script");
    for (const a of Array.from(old.attributes)) {
      if (a.name === "type" || a.name === "data-consent") continue;
      s.setAttribute(a.name, a.value);
    }
    const t = old.getAttribute("data-type");
    if (t) s.setAttribute("type", t);
    s.removeAttribute("data-type");
    s.setAttribute("data-consent", old.dataset.consent);
    s.setAttribute(ACTIVATED, "");
    if (!old.hasAttribute("async")) s.async = false;
    s.text = old.text;
    old.setAttribute(ACTIVATED, "");
    old.replaceWith(s);
    n++;
  });
  root.querySelectorAll(`iframe[data-consent][data-consent-src]:not([${ACTIVATED}])`).forEach((f) => {
    if (!has(f.dataset.consent)) return;
    f.setAttribute("src", f.dataset.consentSrc);
    f.setAttribute(ACTIVATED, "");
    n++;
  });
  return n;
}
function gtagOf() {
  const w = globalThis;
  w.dataLayer = w.dataLayer || [];
  if (!w.gtag) w.gtag = function() {
    w.dataLayer.push(arguments);
  };
  return w.gtag;
}
function consentModeState(has) {
  const g = (b) => b ? "granted" : "denied";
  return {
    analytics_storage: g(has("analytics")),
    ad_storage: g(has("marketing")),
    ad_user_data: g(has("marketing")),
    ad_personalization: g(has("marketing"))
  };
}
var Base = typeof HTMLElement === "undefined" ? class {
} : HTMLElement;
var BrobergConsentElement = class extends Base {
  static get observedAttributes() {
    return ["lang"];
  }
  /** The headless manager. Read consent with `el.manager.has("analytics")`. */
  manager;
  _texts = {};
  /** Override any text, field by field; merged over the built-in language. Setting it re-renders. */
  get texts() {
    return this._texts;
  }
  set texts(value) {
    this._texts = value ?? {};
    if (this.root) this.render();
  }
  root;
  view = "closed";
  draft = {};
  lastFocus = null;
  unsubscribe = null;
  /** Overridable for tests. Withdrawing cannot stop a script that already ran, so the page reloads. */
  reload = () => location.reload();
  connectedCallback() {
    const policyVersion = this.getAttribute("policy-version");
    if (!policyVersion) {
      throw new Error('<broberg-consent>: the "policy-version" attribute is required (bump it when your cookie policy changes).');
    }
    if (!this.manager) {
      const used = this.getAttribute("categories");
      const keep = used == null ? null : new Set(used.split(/[\s,]+/).filter(Boolean));
      this.manager = createConsentManager({
        policyVersion,
        categories: keep ? CONSENT_CATEGORIES.filter((c) => c.essential || keep.has(c.key)) : void 0,
        // F014.13: a first-party cookie the server can read, renewed yearly.
        storage: createCookieConsentStorage({
          name: this.getAttribute("storage-key") ?? void 0,
          domain: this.getAttribute("cookie-domain") ?? void 0
        })
      });
    }
    if (!this.root) this.root = this.attachShadow({ mode: "open" });
    const consentMode = this.hasAttribute("consent-mode");
    if (consentMode) {
      gtagOf()("consent", "default", { ...consentModeState(() => false), wait_for_update: 500 });
      if (!this.manager.needsBanner()) gtagOf()("consent", "update", consentModeState((c) => this.manager.has(c)));
    }
    this.unsubscribe = this.manager.subscribe((record) => {
      if (consentMode) gtagOf()("consent", "update", consentModeState((c) => this.manager.has(c)));
      if (record) activateGranted((c) => this.manager.has(c));
      this.dispatchEvent(new CustomEvent("consent-change", { detail: record, bubbles: true, composed: true }));
    });
    if (!this.manager.needsBanner()) activateGranted((c) => this.manager.has(c));
    active = this;
    globalThis.brobergConsent = this.manager;
    listenForTriggers();
    this.view = this.manager.needsBanner() ? "banner" : "closed";
    this.render();
  }
  disconnectedCallback() {
    this.unsubscribe?.();
    this.unsubscribe = null;
    if (active === this) active = null;
  }
  attributeChangedCallback() {
    if (this.root) this.render();
  }
  /** Open the settings panel (what the reopen handle and footer links do). */
  open() {
    this.lastFocus = document.activeElement ?? null;
    const rec = this.manager.getRecord();
    this.draft = {};
    for (const c of this.manager.categories) this.draft[c.key] = c.essential ? true : rec?.categories[c.key] === true;
    this.view = "panel";
    this.render();
    this.q('[data-testid="consent-panel"]')?.focus();
  }
  close() {
    this.view = this.manager.needsBanner() ? "banner" : "closed";
    this.render();
    this.restoreFocus();
  }
  /** Back to where the user was, if that is outside us. Never onto one of our buttons. */
  restoreFocus() {
    const f = this.lastFocus;
    this.lastFocus = null;
    if (f && f !== this && f.isConnected && typeof f.focus === "function") f.focus();
  }
  get t() {
    const lang = (this.getAttribute("lang") ?? document.documentElement.lang ?? "da").toLowerCase().startsWith("en") ? "en" : "da";
    const base = TEXTS[lang];
    const categories = { ...base.categories, ...this._texts.categories ?? {} };
    return { ...base, ...this._texts, categories, body: this._texts.body ?? this.composeBody(lang, categories) };
  }
  /** Default body built from the categories in use; identical to 0.4.1 when all are. */
  composeBody(lang, labels) {
    const optional = (this.manager?.categories ?? CONSENT_CATEGORIES).filter((c) => !c.essential);
    if (optional.length === CONSENT_CATEGORIES.filter((c) => !c.essential).length && !this._texts.categories) {
      return TEXTS[lang].body;
    }
    const b = BODY[lang];
    const names = optional.map((c) => (labels[c.key]?.label ?? c.label).toLowerCase());
    const list = names.length > 1 ? `${names.slice(0, -1).join(", ")} ${b.and} ${names[names.length - 1]}` : names[0];
    return `${b.lead} ${list ? b.with(list) : b.only} ${b.tail}`;
  }
  q(sel) {
    return this.root.querySelector(sel);
  }
  label(c) {
    return this.t.categories[c.key] ?? { label: c.label, description: c.description };
  }
  decide(kind) {
    if (kind === "accept") this.manager.acceptAll();
    else if (kind === "reject") this.manager.rejectAll();
    else this.manager.setConsent(this.draft);
    this.view = "closed";
    this.render();
    this.restoreFocus();
  }
  render() {
    const t = this.t;
    const hideReopen = this.hasAttribute("hide-reopen");
    const privacy = this.getAttribute("privacy-href");
    const decided = !this.manager.needsBanner();
    const rec = this.manager.getRecord();
    const version = esc(this.getAttribute("policy-version") ?? "");
    const cats = this.manager.categories.map((c) => {
      const l = this.label(c);
      const control = c.essential ? `<span class="tag">${esc(t.alwaysOn)}</span>` : `<button class="switch" role="switch" aria-checked="${this.draft[c.key] === true}" aria-label="${esc(l.label)}" data-key="${esc(c.key)}" data-testid="consent-toggle-${esc(c.key)}"></button>`;
      return `<div class="cat"><div><h3>${esc(l.label)}</h3><p>${esc(l.description)}</p></div>${control}</div>`;
    }).join("");
    this.root.innerHTML = `<style>${STYLE}</style>
<div class="banner" tabindex="-1" role="region" aria-label="Cookies" data-testid="consent-banner" ${this.view === "banner" ? "" : "hidden"}>
  <h2>${esc(this.manager.isOutdated() ? t.titleUpdated : t.title)}</h2>
  <p>${esc(t.body)}${privacy ? ` <a href="${esc(privacy)}" data-testid="consent-read-more">${esc(t.readMore)}</a>` : ""}</p>
  <div class="row">
    <button class="btn main" data-act="reject" data-testid="consent-reject-all">${esc(t.rejectAll)}</button>
    <button class="btn main" data-act="accept" data-testid="consent-accept-all">${esc(t.acceptAll)}</button>
  </div>
  <button class="btn ghost wide" data-act="open" data-testid="consent-customize">${esc(t.customize)}</button>
</div>
<div class="scrim" ${this.view === "panel" ? "" : "hidden"}>
  <div class="panel" tabindex="-1" role="dialog" aria-modal="true" aria-label="${esc(t.panelTitle)}" data-testid="consent-panel">
    <h2>${esc(t.panelTitle)}</h2>
    <p>${esc(t.panelBody)}</p>
    ${cats}
    <div class="foot">
      <button class="btn main" data-act="reject" data-testid="consent-panel-reject-all">${esc(t.rejectAll)}</button>
      <button class="btn ghost" data-act="save" data-testid="consent-save">${esc(t.save)}</button>
      <button class="btn main" data-act="accept" data-testid="consent-panel-accept-all">${esc(t.acceptAll)}</button>
    </div>
    <div class="meta">${version}${rec ? "" : ` \xB7 ${esc(t.noChoice)}`}${rec ? ` \xB7 <button class="linkbtn" data-act="withdraw" data-testid="consent-withdraw">${esc(document.querySelector(`[${ACTIVATED}]`) ? t.withdrawReload : t.withdraw)}</button>` : ""}</div>
  </div>
</div>
<button class="reopen${reopenCorner(this.getAttribute("reopen-position"))}" data-act="open" data-testid="consent-reopen" aria-label="${esc(t.panelTitle)}" ${this.view === "closed" && decided && !hideReopen ? "" : "hidden"}>${COOKIE_SVG}${esc(t.reopen)}</button>`;
    this.root.querySelectorAll("[data-act]").forEach((b) => {
      b.addEventListener("click", () => {
        const act = b.dataset.act;
        if (act === "accept" || act === "reject" || act === "save") this.decide(act);
        else if (act === "open") this.open();
        else if (act === "withdraw") {
          const ranSomething = document.querySelector(`[${ACTIVATED}]`) !== null;
          this.manager.withdraw();
          if (ranSomething) {
            this.reload();
            return;
          }
          this.view = "banner";
          this.render();
          this.q('[data-testid="consent-banner"]')?.focus();
        }
      });
    });
    this.root.querySelectorAll(".switch").forEach((s) => {
      s.addEventListener("click", () => {
        const key = s.dataset.key;
        this.draft[key] = !this.draft[key];
        s.setAttribute("aria-checked", String(this.draft[key]));
      });
    });
    const panel = this.q('[data-testid="consent-panel"]');
    panel?.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        this.close();
        return;
      }
      if (e.key !== "Tab") return;
      const items = Array.from(panel.querySelectorAll(FOCUSABLE));
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      const cur = this.root.activeElement;
      if (e.shiftKey && cur === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && cur === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }
};
function defineBrobergConsent(tag = "broberg-consent") {
  if (typeof customElements === "undefined") return;
  if (!customElements.get(tag)) customElements.define(tag, BrobergConsentElement);
}
defineBrobergConsent();

export { BrobergConsentElement, TEXTS, activateGranted, consentModeState, defineBrobergConsent };
//# sourceMappingURL=element.js.map
//# sourceMappingURL=element.js.map