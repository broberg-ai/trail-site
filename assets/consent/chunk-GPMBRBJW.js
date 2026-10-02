// src/index.ts
var CONSENT_CATEGORIES = [
  { key: "essential", label: "Essential", description: "Required for the site to function.", essential: true },
  { key: "analytics", label: "Analytics", description: "Helps us understand how the site is used." },
  { key: "marketing", label: "Marketing", description: "Personalised content and advertising." }
];
function createLocalStorageConsentStorage(key) {
  const ls = (() => {
    try {
      const s = globalThis.localStorage;
      if (s && typeof s.getItem === "function" && typeof s.setItem === "function") return s;
    } catch {
    }
    return null;
  })();
  if (!ls) return createMemoryConsentStorage();
  return {
    get() {
      try {
        const raw = ls.getItem(key);
        return raw ? JSON.parse(raw) : null;
      } catch {
        return null;
      }
    },
    set(record) {
      try {
        ls.setItem(key, JSON.stringify(record));
      } catch {
      }
    },
    clear() {
      try {
        ls.removeItem(key);
      } catch {
      }
    }
  };
}
function createCookieConsentStorage(options = {}) {
  const doc = globalThis.document;
  if (!doc || typeof doc.cookie !== "string") return createMemoryConsentStorage();
  const name = options.name ?? DEFAULT_KEY;
  const maxAge = Math.round((options.maxAgeDays ?? DEFAULT_MAX_AGE_DAYS) * 86400);
  const secure = globalThis.location?.protocol === "https:";
  const attrs = (age) => `; Max-Age=${age}; Path=/; SameSite=Lax${options.domain ? `; Domain=${options.domain}` : ""}${secure ? "; Secure" : ""}`;
  return {
    get() {
      const hit = doc.cookie.split("; ").find((c) => c.startsWith(`${name}=`));
      if (!hit) return null;
      try {
        return JSON.parse(decodeURIComponent(hit.slice(name.length + 1)));
      } catch {
        return null;
      }
    },
    set(record) {
      doc.cookie = `${name}=${encodeURIComponent(JSON.stringify(record))}${attrs(maxAge)}`;
    },
    clear() {
      doc.cookie = `${name}=${attrs(0)}; Expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
  };
}
function createMemoryConsentStorage() {
  let record = null;
  return {
    get: () => record,
    set: (r) => {
      record = r;
    },
    clear: () => {
      record = null;
    }
  };
}
var DEFAULT_KEY = "broberg-consent";
var DEFAULT_MAX_AGE_DAYS = 365;
function createConsentManager(options) {
  if (!options?.policyVersion) throw new Error("createConsentManager: `policyVersion` is required");
  const categories = options.categories ?? CONSENT_CATEGORIES;
  const storage = options.storage ?? createLocalStorageConsentStorage(options.storageKey ?? DEFAULT_KEY);
  const version = options.policyVersion;
  const maxAgeMs = (options.maxAgeDays ?? DEFAULT_MAX_AGE_DAYS) * 864e5;
  const now = options.now ?? (() => Date.now());
  const expired = (r) => {
    const t = Date.parse(r.acceptedAt);
    return !Number.isFinite(t) || now() - t > maxAgeMs;
  };
  const listeners = /* @__PURE__ */ new Set();
  const isEssential = (key) => categories.some((c) => c.key === key && c.essential);
  function normalize(selection) {
    const out = {};
    for (const c of categories) out[c.key] = c.essential ? true : selection[c.key] === true;
    return out;
  }
  function nowIso() {
    return new Date(now()).toISOString();
  }
  function commit(categoriesRecord) {
    const record = { policyVersion: version, acceptedAt: nowIso(), categories: categoriesRecord };
    storage.set(record);
    for (const l of listeners) l(record);
    return record;
  }
  return {
    categories,
    getRecord: () => storage.get(),
    isOutdated() {
      const r = storage.get();
      return r != null && r.policyVersion !== version;
    },
    needsBanner() {
      const r = storage.get();
      return r == null || !r.policyVersion || r.policyVersion !== version || expired(r);
    },
    has(category) {
      if (isEssential(category)) return true;
      const r = storage.get();
      return r != null && !expired(r) && r.policyVersion === version && r.categories[category] === true;
    },
    acceptAll() {
      const all = {};
      for (const c of categories) all[c.key] = true;
      return commit(all);
    },
    rejectAll() {
      return commit(normalize({}));
    },
    setConsent(selection) {
      return commit(normalize(selection));
    },
    withdraw() {
      storage.clear();
      for (const l of listeners) l(null);
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }
  };
}

export { CONSENT_CATEGORIES, createConsentManager, createCookieConsentStorage, createLocalStorageConsentStorage, createMemoryConsentStorage };
//# sourceMappingURL=chunk-GPMBRBJW.js.map
//# sourceMappingURL=chunk-GPMBRBJW.js.map