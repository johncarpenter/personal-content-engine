// @gadgets/bundled-blueprints/libraries/ui/src/dom.ts
function el(tag, props = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(props)) {
    if (value === null || value === void 0 || value === false) continue;
    if (key === "class") node.className = String(value);
    else if (key === "text") node.textContent = String(value);
    else if (key === "html") node.innerHTML = String(value);
    else if (key === "style" && typeof value === "object") Object.assign(node.style, value);
    else if (key.startsWith("on") && typeof value === "function") node.addEventListener(key.slice(2).toLowerCase(), value);
    else node.setAttribute(key, value === true ? "" : String(value));
  }
  for (const child of Array.isArray(children) ? children : [children]) {
    if (child === null || child === void 0 || child === false) continue;
    node.appendChild(typeof child === "object" ? child : document.createTextNode(String(child)));
  }
  return node;
}
function icon(paths) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
}

// @gadgets/bundled-blueprints/libraries/ui/src/icons.ts
var ICONS = {
  undo: '<path d="M9 14L4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H9"/>',
  redo: '<path d="M15 14l5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H15"/>',
  bold: '<path d="M6 4h7a4 4 0 0 1 0 8H6z"/><path d="M6 12h8a4 4 0 0 1 0 8H6z"/>',
  italic: '<line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/>',
  underline: '<path d="M6 3v7a6 6 0 0 0 12 0V3"/><line x1="4" y1="21" x2="20" y2="21"/>',
  strike: '<path d="M16 4H9a3 3 0 0 0-2.83 4"/><path d="M14 12a4 4 0 0 1 0 8H6"/><line x1="4" y1="12" x2="20" y2="12"/>',
  textcolor: '<path d="M4 20h16"/><path d="M7 16l5-12 5 12"/><path d="M9 11h6"/>',
  alignLeft: '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="14" y2="12"/><line x1="4" y1="18" x2="18" y2="18"/>',
  alignCenter: '<line x1="4" y1="6" x2="20" y2="6"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="5" y1="18" x2="19" y2="18"/>',
  alignRight: '<line x1="4" y1="6" x2="20" y2="6"/><line x1="10" y1="12" x2="20" y2="12"/><line x1="6" y1="18" x2="20" y2="18"/>',
  ul: '<line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4.5" cy="6" r="1.2" fill="currentColor"/><circle cx="4.5" cy="12" r="1.2" fill="currentColor"/><circle cx="4.5" cy="18" r="1.2" fill="currentColor"/>',
  ol: '<line x1="10" y1="6" x2="20" y2="6"/><line x1="10" y1="12" x2="20" y2="12"/><line x1="10" y1="18" x2="20" y2="18"/><path d="M4 10V5L2.7 6" stroke-width="1.5"/><path d="M3 14.5c.4-.6 2-.6 2 .5s-2 1.4-2 2.5h2.2" stroke-width="1.5"/>',
  link: '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1.5-1.5"/>',
  image: '<rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="8.5" cy="9.5" r="1.4"/><path d="M20 15l-4.5-4.5L7 19"/>',
  clear: '<path d="M4 7V5h12v2"/><path d="M9 5l-2 14"/><line x1="14" y1="13" x2="20" y2="19"/><line x1="20" y1="13" x2="14" y2="19"/>'
};

// @gadgets/bundled-blueprints/libraries/ui/src/images.ts
var IMAGE_TYPES = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/webp", "image/gif"]);
var DEFAULT_IMAGE_LIMITS = { maxDimension: 1600, maxDataUrlLength: 14e5, maxGifDataUrlLength: 27e5 };
var QUALITY_STEPS = [0.86, 0.74, 0.62, 0.5];
function isImageFile(file) {
  return !!file && IMAGE_TYPES.has(file.type);
}
function imageFilesFrom(transfer) {
  if (!transfer) return [];
  const files = Array.from(transfer.files ?? []).filter(isImageFile);
  if (files.length) return files;
  return Array.from(transfer.items ?? []).filter((item) => item.kind === "file" && IMAGE_TYPES.has(item.type)).map((item) => item.getAsFile()).filter(isImageFile);
}
async function prepareImage(file, options = {}) {
  const limits = {
    maxDimension: options.maxDimension ?? DEFAULT_IMAGE_LIMITS.maxDimension,
    maxDataUrlLength: options.maxDataUrlLength ?? DEFAULT_IMAGE_LIMITS.maxDataUrlLength,
    maxGifDataUrlLength: options.maxGifDataUrlLength ?? DEFAULT_IMAGE_LIMITS.maxGifDataUrlLength
  };
  const original = await readFileAsDataURL(file);
  const image = await loadImage(original);
  const naturalWidth = image.naturalWidth || image.width;
  const naturalHeight = image.naturalHeight || image.height;
  const alt = options.alt ?? altFromFileName(file.name);
  if (file.type === "image/gif" && original.length <= limits.maxGifDataUrlLength && Math.max(naturalWidth, naturalHeight) <= limits.maxDimension) {
    return { src: original, alt, width: naturalWidth, height: naturalHeight };
  }
  let scale = Math.min(1, limits.maxDimension / Math.max(naturalWidth, naturalHeight, 1));
  for (let attempt = 0; attempt < 4; attempt++) {
    const width = Math.max(1, Math.round(naturalWidth * scale));
    const height = Math.max(1, Math.round(naturalHeight * scale));
    const canvas2 = document.createElement("canvas");
    canvas2.width = width;
    canvas2.height = height;
    const context = canvas2.getContext("2d");
    if (!context) throw new Error("This browser cannot process images.");
    context.drawImage(image, 0, 0, width, height);
    for (const quality of QUALITY_STEPS) {
      const src = encode(canvas2, quality);
      if (src.length <= limits.maxDataUrlLength) return { src, alt, width, height };
    }
    scale *= 0.7;
  }
  throw new Error("That image is too large to embed.");
}
function altFromFileName(name) {
  return name.replace(/\.[a-z0-9]+$/i, "").replace(/[-_]+/g, " ").trim() || "Image";
}
function encode(canvas2, quality) {
  const webp = canvas2.toDataURL("image/webp", quality);
  return webp.startsWith("data:image/webp") ? webp : canvas2.toDataURL("image/jpeg", quality);
}
function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result)), { once: true });
    reader.addEventListener("error", () => reject(reader.error ?? new Error("Could not read the image.")), { once: true });
    reader.readAsDataURL(file);
  });
}
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image), { once: true });
    image.addEventListener("error", () => reject(new Error("That file is not an image this browser can decode.")), { once: true });
    image.src = src;
  });
}

// @gadgets/bundled-blueprints/libraries/ui/src/prompt.ts
function promptInline(message, initial = "", options = {}) {
  const { placeholder = "", okLabel = "OK" } = typeof options === "string" ? { placeholder: options } : options;
  return new Promise((resolve) => {
    const input = el("input", { value: initial, placeholder });
    const done = (value) => {
      overlay.remove();
      resolve(value);
    };
    const ok = el("button", { class: "text-btn primary", type: "button", onclick: () => done(input.value) }, [okLabel]);
    const cancel = el("button", { class: "text-btn", type: "button", onclick: () => done(null) }, ["Cancel"]);
    const overlay = el("div", { class: "prompt-overlay", onmousedown: (event) => {
      if (event.target === overlay) done(null);
    } }, [
      el("div", { class: "prompt-card" }, [el("div", { class: "muted" }, [message]), input, el("div", { class: "composer-actions" }, [cancel, ok])])
    ]);
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") done(input.value);
      if (event.key === "Escape") done(null);
    });
    document.body.appendChild(overlay);
    input.focus();
    input.select();
  });
}
var PROMPT_STYLES = `
.prompt-overlay { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(20,20,25,.35); backdrop-filter: blur(5px); z-index: 1001; }
.prompt-card { background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: 16px; width: min(420px, 90vw); display: flex; flex-direction: column; gap: 12px; box-shadow: 0 12px 40px rgba(0,0,0,.25); }
.prompt-card .muted { font-size: 13px; color: var(--muted); }
.prompt-card input { width: 100%; padding: 8px 10px; font: inherit; border: 1px solid var(--line-strong); border-radius: 6px; background: var(--bg); color: var(--text); outline: none; }
.prompt-card .composer-actions { display: flex; justify-content: flex-end; align-items: center; gap: 8px; }
.prompt-card .text-btn { border: 1px solid var(--line); background: var(--surface); color: var(--text); border-radius: 6px; padding: 6px 12px; cursor: pointer; font: inherit; font-size: 13px; white-space: nowrap; }
.prompt-card .text-btn:hover { background: var(--surface-2); }
.prompt-card .text-btn.primary { background: var(--accent); color: #fff; border-color: var(--accent); }
`;

// @gadgets/bundled-blueprints/libraries/ui/src/status.ts
function statusIndicator({ kind = "saved", text = "Saved", title } = {}) {
  const dot = el("span", { class: `dot ${kind}` });
  const label = el("span", {}, [text]);
  const element = el("div", { class: "status", title }, [dot, label]);
  let currentKind = kind;
  let currentText = text;
  return {
    element,
    set(nextKind, nextText) {
      if (nextKind === currentKind && nextText === currentText) return;
      currentKind = nextKind;
      currentText = nextText;
      dot.className = `dot ${nextKind}`;
      label.textContent = nextText;
    }
  };
}

// @gadgets/bundled-blueprints/libraries/ui/src/toolbar.ts
function toolButton(className, paths, title, onClick, label) {
  const button = el("button", { class: className, type: "button", title, "aria-label": title });
  if (label !== void 0) button.textContent = label;
  else if (paths !== null) button.innerHTML = icon(paths);
  button.addEventListener("mousedown", (event) => event.preventDefault());
  button.addEventListener("click", onClick);
  return button;
}
function iconBtn(paths, title, onClick, label) {
  return toolButton("icon-btn", paths, title, onClick, label);
}
function segBtn(paths, title, onClick) {
  return toolButton("seg-btn", paths, title, onClick);
}
function group(prio, items, first = false) {
  const children = first ? [] : [el("div", { class: "tdiv" })];
  children.push(...items);
  return el("div", { class: "tgroup" + (prio ? " " + prio : "") }, children);
}
function colorBtn(paths, title, defaultColor, onChange) {
  const bar = el("span", { class: "bar" });
  bar.style.background = defaultColor;
  const input = el("input", { type: "color", value: defaultColor });
  const button = el("div", { class: "color-btn", title }, [el("span", { html: icon(paths) }), bar, input]);
  button.addEventListener("mousedown", (event) => event.preventDefault());
  input.addEventListener("input", () => {
    bar.style.background = input.value;
    onChange(input.value);
  });
  return button;
}
var CHEVRON = icon('<polyline points="6 9 12 15 18 9"/>');
function customSelect({ className, title, options, value, onChange }) {
  let current;
  const labelSpan = el("span", { class: "cs-label" });
  const button = el("button", { type: "button", class: "cselect " + (className ?? ""), title }, [
    labelSpan,
    el("span", { class: "cs-chev", html: CHEVRON })
  ]);
  const menu = el("div", { class: "cmenu" });
  const choices = options.filter((option) => !("sep" in option));
  const items = [];
  for (const option of options) {
    if ("sep" in option) {
      menu.appendChild(el("div", { class: "cmenu-sep" }));
      continue;
    }
    const item = el("div", { class: "cmenu-item", "data-value": option.value }, [
      el("span", {}, option.label),
      option.ex ? el("span", { class: "ex" }, option.ex) : null
    ]);
    if (option.style) item.style.cssText += option.style;
    item.addEventListener("mousedown", (event) => event.preventDefault());
    item.addEventListener("click", () => {
      closeMenu();
      setValue(option.value);
      onChange(String(option.value));
    });
    menu.appendChild(item);
    items.push(item);
  }
  let open = false;
  function setValue(next) {
    const key = String(next);
    if (key === current) return;
    current = key;
    const chosen = choices.find((option) => String(option.value) === key) ?? choices[0];
    labelSpan.textContent = chosen ? chosen.label : "";
    for (const item of items) item.classList.toggle("sel", item.dataset.value === key);
  }
  function openMenu() {
    const rect = button.getBoundingClientRect();
    menu.style.left = Math.round(rect.left) + "px";
    menu.style.top = Math.round(rect.bottom + 4) + "px";
    menu.style.minWidth = Math.round(rect.width) + "px";
    document.body.appendChild(menu);
    open = true;
    button.classList.add("open");
  }
  function closeMenu() {
    menu.remove();
    open = false;
    button.classList.remove("open");
  }
  button.addEventListener("click", () => open ? closeMenu() : openMenu());
  document.addEventListener("mousedown", (event) => {
    const target = event.target;
    if (open && !menu.contains(target) && !button.contains(target)) closeMenu();
  });
  window.addEventListener("scroll", () => {
    if (open) closeMenu();
  }, true);
  window.addEventListener("resize", () => {
    if (open) closeMenu();
  });
  setValue(value);
  return { el: button, setValue, getValue: () => current };
}

// @gadgets/bundled-blueprints/libraries/sync/src/collaborator.ts
var DEFAULT_NAME = "Guest";
function collaboratorFor(clientId2) {
  const hue = parseInt(clientId2.slice(0, 6), 36) % 360;
  return { clientId: clientId2, name: `${DEFAULT_NAME} ${clientId2.slice(0, 4).toUpperCase()}`, color: `hsl(${hue} 62% 48%)` };
}

// @gadgets/bundled-blueprints/libraries/sync/src/presence.ts
var HEARTBEAT_MS = 4e3;
var STALE_MS = 12e3;
var THROTTLE_MS = 70;
var PresenceRoster = class {
  #selfId;
  #now;
  #people = /* @__PURE__ */ new Map();
  /** `selfId` is this client's id, whose events are ignored; `now` is the clock (`Date.now` unless a test says otherwise). */
  constructor(selfId, now = Date.now) {
    this.#selfId = selfId;
    this.#now = now;
  }
  /** Everyone currently known, in order of first hearing from them, for a "who is here" strip. */
  people() {
    return Array.from(this.#people.values(), ({ clientId: clientId2, name, color }) => ({ clientId: clientId2, name, color }));
  }
  /** Everyone currently known, with their positions, for drawing. */
  entries() {
    return Array.from(this.#people.values());
  }
  /** One collaborator, or `null` when unknown. */
  get(clientId2) {
    return this.#people.get(clientId2) ?? null;
  }
  /**
   * Take in an event. A join for someone already known -- a reconnect, or the seeding of a newcomer
   * -- refreshes their name and colour but keeps their position. Returns whether anything changed,
   * which is when to redraw; the client's own events and ones naming nobody change nothing.
   */
  apply(event) {
    if (!event.clientId || event.clientId === this.#selfId) return false;
    if (event.type === "leave") return this.#people.delete(event.clientId);
    const known = this.#people.get(event.clientId);
    const { clientId: clientId2, name, color } = event;
    const cursor = event.type === "cursor" ? cursorOf(event) : known?.cursor ?? null;
    this.#people.set(clientId2, { clientId: clientId2, name, color, cursor, seenAt: this.#now() });
    return true;
  }
  /** Drop everyone not heard from for {@link STALE_MS}. Returns whether anyone was dropped. */
  expire(now = this.#now()) {
    let changed = false;
    for (const [id, person] of this.#people) {
      if (person.seenAt < now - STALE_MS) {
        this.#people.delete(id);
        changed = true;
      }
    }
    return changed;
  }
};
function cursorOf(event) {
  const { type: _type, at: _at, clientId: _clientId, name: _name, color: _color, ...cursor } = event;
  return cursor;
}
var PresenceReporter = class {
  #current;
  #send;
  #timer = null;
  #heartbeat = null;
  /**
   * `current` reads the position to send (`null` when there is nothing to say right now); `send`
   * delivers it, and its rejections are ignored -- presence is best-effort and the next one is
   * seconds away.
   */
  constructor(current, send) {
    this.#current = current;
    this.#send = send;
  }
  /** Send soon, coalescing a burst of movement into one update per {@link THROTTLE_MS}. */
  schedule() {
    if (this.#timer) clearTimeout(this.#timer);
    this.#timer = setTimeout(() => this.sendNow(), THROTTLE_MS);
  }
  /** Send the current position now, dropping any scheduled send. */
  sendNow() {
    if (this.#timer) clearTimeout(this.#timer);
    this.#timer = null;
    const update = this.#current();
    if (update !== null) this.#send(update).catch(() => {
    });
  }
  /**
   * Every {@link HEARTBEAT_MS}, send the current position and then run `onBeat` -- where the gadget
   * expires its roster and redraws. Returns the function that stops the heartbeat; starting again
   * replaces a running one.
   */
  startHeartbeat(onBeat, intervalMs = HEARTBEAT_MS) {
    this.stopHeartbeat();
    this.#heartbeat = setInterval(() => {
      this.sendNow();
      onBeat?.();
    }, intervalMs);
    return () => this.stopHeartbeat();
  }
  /** Stop the heartbeat and drop any scheduled send. */
  stopHeartbeat() {
    if (this.#heartbeat) clearInterval(this.#heartbeat);
    this.#heartbeat = null;
    if (this.#timer) clearTimeout(this.#timer);
    this.#timer = null;
  }
};

// @gadgets/bundled-blueprints/libraries/sync/src/save-scheduler.ts
var DEBOUNCE_MS = 220;
var RETRY_BASE_MS = 40;
var RETRY_MAX_MS = 1e4;
function retryDelay(failures) {
  return Math.min(RETRY_MAX_MS, RETRY_BASE_MS * 2 ** Math.max(0, failures - 1));
}
var SaveScheduler = class {
  #options;
  #timer = null;
  #shown = null;
  #inFlight = false;
  #saveAgain = false;
  #failures = 0;
  constructor(options) {
    this.#options = options;
  }
  /** Whether a save is waiting to start or in flight. */
  get busy() {
    return this.#timer !== null || this.#inFlight;
  }
  /** Consecutive failed saves so far; 0 once one succeeds. */
  get failures() {
    return this.#failures;
  }
  /** Save soon; calling again before then extends the wait. */
  schedule(delay = this.#options.debounceMs ?? DEBOUNCE_MS) {
    if (this.#options.readOnly) return;
    this.#status("saving", "Saving…");
    this.#arm(delay);
  }
  /**
   * Starts (or restarts) the timer that saves after `delay`. What the status line says meanwhile is
   * the caller's: `Saving…` after a keystroke, and after a failed save the failure, which stays up
   * through the backoff rather than being replaced by a `Saving…` that nothing in flight justifies.
   * The save announces itself when the timer fires, unless the line already says so.
   */
  #arm(delay) {
    if (this.#timer) clearTimeout(this.#timer);
    this.#timer = setTimeout(() => {
      if (this.#shown !== "saving") this.#status("saving", "Saving…");
      void this.flush();
    }, delay);
  }
  /** Forget a scheduled save. One in flight completes; nothing follows it unless it must. */
  cancel() {
    if (this.#timer) clearTimeout(this.#timer);
    this.#timer = null;
  }
  /**
   * Save now -- or, while a save is in flight, once it finishes. After the save, another is
   * scheduled if the server rejected anything, if it failed (after {@link retryDelay}), or if the
   * gadget is dirty again; a `pending` outcome schedules nothing, the gadget will.
   */
  async flush() {
    this.cancel();
    if (this.#options.readOnly) return;
    if (this.#inFlight) {
      this.#saveAgain = true;
      return;
    }
    this.#inFlight = true;
    let outcome = null;
    try {
      outcome = await this.#options.save();
      this.#failures = 0;
      if (outcome === "conflict") {
        this.#saveAgain = true;
        this.#status("conflict", "Resolving concurrent edit…");
      } else if (outcome === "pending") {
        this.#status("conflict", "Concurrent edit pending");
      } else {
        this.#status("saved", "Saved");
      }
    } catch {
      this.#failures++;
      this.#saveAgain = true;
      this.#status("offline", "Save failed — retrying");
    } finally {
      this.#inFlight = false;
      if (this.#saveAgain || outcome !== "pending" && this.#options.isDirty()) {
        this.#saveAgain = false;
        if (this.#failures) {
          this.#arm(retryDelay(this.#failures));
        } else {
          this.schedule(RETRY_BASE_MS);
        }
      }
    }
  }
  #status(status, message) {
    this.#shown = status;
    this.#options.onStatus?.(status, message);
  }
};

// @gadgets/bundled-blueprints/libraries/sync/src/subscriber.ts
function createSubscriber(RpcTarget2, callbacks) {
  class Subscriber extends RpcTarget2 {
  }
  for (const [name, callback] of Object.entries(callbacks)) {
    if (typeof callback !== "function") throw new TypeError(`Subscriber callback "${name}" is not a function.`);
    Object.defineProperty(Subscriber.prototype, name, { value: callback, writable: true, configurable: true });
  }
  return new Subscriber();
}

// client.ts
function isElement(node) {
  return !!node && node.nodeType === 1;
}
function isText(node) {
  return !!node && node.nodeType === 3;
}
var clientId = Math.random().toString(36).slice(2);
var isDocumentExport = ["html", "pdf"].includes(globalThis.gadgetExportFormatId ?? "");
var style = document.createElement("style");
style.textContent = `
:root {
  color-scheme: light;
  --bg:        #f6f6f4;
  --surface:   #ffffff;
  --surface-2: #efefec;
  --line:        rgba(20,20,25,0.10);
  --line-strong: rgba(20,20,25,0.18);
  --text:   #1d1d20;
  --muted:  #6b6b73;
  --faint:  #9a9aa2;
  --accent: #e1632e;
  --ok:#1f9d77; --warn:#b9842f; --bad:#c4566a;
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
}

* { box-sizing: border-box; }

html, body {
  margin: 0; height: 100%;
  background: var(--bg);
  color: var(--text);
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Inter, sans-serif;
  font-size: 13.5px;
  -webkit-font-smoothing: antialiased;
}

::selection { background: rgba(225,99,46,0.22); }

/* Thin scrollbars */
* { scrollbar-width: thin; scrollbar-color: rgba(20,20,25,0.22) transparent; }
*::-webkit-scrollbar { width: 10px; height: 10px; }
*::-webkit-scrollbar-thumb {
  background: rgba(20,20,25,0.22); border-radius: 10px;
  border: 3px solid transparent; background-clip: content-box;
}
*::-webkit-scrollbar-track { background: transparent; }

.app { display: flex; flex-direction: column; height: 100vh; }

/* --- Top bar --------------------------------------------------------------*/
.topbar {
  display: flex; align-items: center; gap: 12px;
  padding: 8px 16px;
  background: var(--surface);
  border-bottom: 1px solid var(--line);
  flex: 0 0 auto;
  contain: layout style;       /* isolate from editor reflows */
}
.title-wrap { display: flex; flex-direction: column; min-width: 0; }
.title-input {
  appearance: none; background: transparent; border: 1px solid transparent;
  color: var(--text); font-size: 15px; font-weight: 600; letter-spacing: -0.01em;
  padding: 3px 7px; border-radius: 6px; width: min(46vw, 420px);
  transition: border-color .14s var(--ease-out), background .14s var(--ease-out);
}
.title-input:hover { border-color: var(--line); }
.title-input:focus { outline: none; border-color: var(--line-strong); background: var(--bg); }
.status {
  display: flex; align-items: center; gap: 6px;
  font-size: 11px; letter-spacing: .03em;
  color: var(--faint); flex: 0 0 auto;
  opacity: .75; transition: opacity .2s var(--ease-out);
}
.status:hover { opacity: 1; }
.dot { width: 5px; height: 5px; border-radius: 50%; background: var(--faint); flex: 0 0 auto; }
.dot.saving { background: var(--warn); animation: pulse 1s infinite var(--ease-in-out); }
.dot.saved { background: var(--ok); }
.dot.bad { background: var(--bad); }
.dot.synced { background: var(--accent); animation: pulse .6s 2 var(--ease-in-out); }
@keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: .3; } }

.spacer { flex: 1 1 auto; }

/* --- Toolbar --------------------------------------------------------------*/
.toolbar {
  display: flex; align-items: center; flex-wrap: nowrap; gap: 0;
  padding: 6px 16px;
  background: var(--surface);
  border-bottom: 1px solid var(--line);
  flex: 0 0 auto;
  overflow-x: auto;            /* last-resort scroll on very tiny widths */
  scrollbar-width: none;
  contain: layout style;       /* isolate from editor reflows */
}
.toolbar::-webkit-scrollbar { display: none; }
.tgroup { display: inline-flex; align-items: center; gap: 4px; flex: 0 0 auto; }
.tdiv { width: 1px; height: 20px; background: var(--line); margin: 0 7px; flex: 0 0 auto; }

/* Progressive collapse: drop lower-priority groups as width shrinks, so the
   toolbar always stays on a single line. */
@media (max-width: 1180px) { .toolbar .p3 { display: none; } }
@media (max-width: 980px)  { .toolbar .p2 { display: none; } }
@media (max-width: 780px)  { .toolbar .p1 { display: none; } }

.icon-btn {
  width: 28px; height: 28px; flex: 0 0 auto;
  display: inline-flex; align-items: center; justify-content: center;
  background: transparent; border: 1px solid transparent; border-radius: 6px;
  color: var(--muted); cursor: pointer;
  transition: all .14s var(--ease-out);
}
.icon-btn:hover { background: var(--surface-2); border-color: var(--line); color: var(--text); }
.icon-btn:active { transform: scale(0.94); }
.icon-btn.active { background: rgba(225,99,46,0.12); border-color: rgba(225,99,46,0.35); color: var(--accent); }
.icon-btn svg { width: 16px; height: 16px; }
.icon-btn[disabled] { opacity: .4; pointer-events: none; }

.cselect {
  appearance: none; background: var(--surface); color: var(--text);
  border: 1px solid var(--line); border-radius: 6px;
  font-size: 12.5px; height: 28px; padding: 0 8px 0 10px; cursor: pointer;
  display: inline-flex; align-items: center; gap: 6px; flex: 0 0 auto;
  transition: border-color .14s var(--ease-out), background .14s var(--ease-out);
}
.cselect:hover { border-color: var(--line-strong); background: var(--surface-2); }
.cselect:active { transform: scale(0.98); }
.cselect.open { border-color: var(--accent); background: var(--surface); }
.cs-label { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1 1 auto; text-align: left; }
.cs-chev { display: inline-flex; color: var(--muted); flex: 0 0 auto; transition: transform .14s var(--ease-out); }
.cs-chev svg { width: 12px; height: 12px; }
.cselect.open .cs-chev { transform: rotate(180deg); }
.cselect.style-sel { width: 116px; }
.cselect.font-sel { width: 132px; }
.cselect.size-sel { width: 66px; }

.cmenu {
  position: fixed; z-index: 1000;
  background: var(--surface);
  border: 1px solid var(--line-strong);
  border-radius: 8px; padding: 4px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.08);
  max-height: 340px; overflow-y: auto;
  animation: cmenu-in .12s var(--ease-out);
}
@keyframes cmenu-in { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }
.cmenu-item {
  padding: 6px 10px; border-radius: 5px; font-size: 13px; color: var(--text);
  cursor: pointer; white-space: nowrap; display: flex; align-items: center;
  justify-content: space-between; gap: 18px;
  transition: background .1s var(--ease-out);
}
.cmenu-item:hover { background: var(--surface-2); }
.cmenu-item.sel { color: var(--accent); }
.cmenu-item.sel::after {
  content: ""; width: 13px; height: 13px; flex: 0 0 auto;
  background: no-repeat center/contain url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23e1632e' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
}

/* Color buttons */
.color-btn {
  position: relative; width: 28px; height: 28px; flex: 0 0 auto;
  display: inline-flex; flex-direction: column; align-items: center; justify-content: center;
  background: transparent; border: 1px solid transparent; border-radius: 6px;
  color: var(--muted); cursor: pointer; transition: all .14s var(--ease-out);
}
.color-btn:hover { background: var(--surface-2); border-color: var(--line); color: var(--text); }
.color-btn:active { transform: scale(0.94); }
.color-btn svg { width: 15px; height: 15px; margin-top: -1px; }
.color-btn .bar { width: 16px; height: 3px; border-radius: 2px; margin-top: 1px; }
.color-btn input[type=color] {
  position: absolute; inset: 0; opacity: 0; cursor: pointer; border: none; padding: 0;
}

/* Segmented control for alignment */
.segment {
  display: inline-flex; gap: 2px; padding: 2px;
  background: var(--surface-2); border: 1px solid var(--line); border-radius: 7px;
}
.segment .seg-btn {
  width: 24px; height: 22px; display: inline-flex; align-items: center; justify-content: center;
  background: transparent; border: none; border-radius: 5px; color: var(--muted);
  cursor: pointer; transition: all .14s var(--ease-out);
}
.segment .seg-btn svg { width: 15px; height: 15px; }
.segment .seg-btn.active {
  background: var(--surface); color: var(--accent);
  box-shadow: 0 1px 2px rgba(0,0,0,0.08);
}

/* --- Canvas / page (pageless mode) ----------------------------------------*/
/* One continuous bright-white writing surface that fills the available space,
   Google-Docs "pageless" style. No floating page card or page breaks. */
.canvas {
  flex: 1 1 auto; overflow-y: auto;
  background: var(--surface);
}

.doc-page {
  background: var(--surface);
  color: var(--text);
  width: 100%;
  max-width: 900px;          /* cap line length for comfortable reading */
  margin: 0 auto;
  /* Generous side gutters that shrink gracefully on narrow screens. */
  padding: clamp(28px, 4vw, 56px) clamp(20px, 6vw, 80px) 200px;
  min-height: 100%;
  outline: none;
  font-size: 16px; line-height: 1.6;
}

/* Document typography */
.doc-page > :first-child { margin-top: 0; }
.doc-page h1.doc-title { font-size: 30px; font-weight: 600; letter-spacing: -0.02em; margin: 0 0 4px; }
.doc-page h1 { font-size: 26px; font-weight: 600; letter-spacing: -0.01em; margin: 22px 0 8px; }
.doc-page h2 { font-size: 21px; font-weight: 600; letter-spacing: -0.01em; margin: 18px 0 6px; }
.doc-page h3 { font-size: 17px; font-weight: 600; margin: 16px 0 6px; }
.doc-page p { margin: 0 0 12px; }
.doc-page a { color: var(--accent); }
.doc-page ul, .doc-page ol { margin: 0 0 12px; padding-left: 28px; }
.doc-page li { margin: 2px 0; }
.doc-page blockquote {
  margin: 0 0 12px; padding: 4px 16px; border-left: 3px solid var(--accent);
  color: var(--muted);
}
.doc-page pre {
  margin: 0 0 12px; padding: 14px 16px; background: #f3f3f1;
  border: 1px solid var(--line); border-radius: 8px; overflow-x: auto;
  font-family: ui-monospace, "SF Mono", Menlo, monospace; font-size: 13.5px; line-height: 1.5;
}
.doc-page hr { border: none; border-top: 1px solid var(--line); margin: 22px 0; }
.doc-page img.doc-image {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 12px 0;
  border-radius: 6px;
  cursor: pointer;
}
.doc-page img.doc-image.image-selected {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
.image-controls {
  position: fixed;
  z-index: 999;
  pointer-events: none;
  border: 2px solid var(--accent);
  border-radius: 7px;
  display: none;
}
.image-controls .resize-handle {
  position: absolute;
  right: -7px;
  bottom: -7px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--surface);
  box-shadow: 0 2px 8px rgba(0,0,0,0.22);
  cursor: nwse-resize;
  pointer-events: auto;
}
.drop-target {
  box-shadow: inset 0 0 0 3px rgba(225,99,46,0.28);
}
.doc-page:empty:before {
  content: "Start writing…"; color: var(--faint);
}

/* --- Link popover ---------------------------------------------------------*/
.link-pop {
  position: fixed; z-index: 1000;
  display: flex; align-items: center; gap: 6px;
  background: var(--surface); border: 1px solid var(--line-strong);
  border-radius: 8px; padding: 5px 6px 5px 11px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.08);
  font-size: 12.5px; max-width: 380px;
  animation: cmenu-in .12s var(--ease-out);
}
.link-pop .lp-url {
  color: var(--accent); text-decoration: none;
  max-width: 210px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.link-pop .lp-url:hover { text-decoration: underline; }
.link-pop .lp-div { width: 1px; height: 18px; background: var(--line); margin: 0 2px; flex: 0 0 auto; }
.link-pop .lp-btn {
  appearance: none; background: transparent; border: 1px solid transparent;
  border-radius: 6px; color: var(--muted); cursor: pointer;
  font-size: 12px; padding: 4px 9px; white-space: nowrap;
  transition: all .14s var(--ease-out);
}
.link-pop .lp-btn:hover { background: var(--surface-2); border-color: var(--line); color: var(--text); }
.link-pop .lp-btn.lp-danger:hover { background: rgba(196,86,106,0.12); border-color: rgba(196,86,106,0.35); color: var(--bad); }

@media (max-width: 720px) {
  .title-input { width: 42vw; }
  .topbar { padding: 8px 12px; }
  .toolbar { padding: 6px 12px; }
}

html.document-export, html.document-export body {
  height: auto; background: #fff; overflow: visible;
}
html.document-export .app { display: block; height: auto; }
html.document-export .canvas { overflow: visible; }
html.document-export .doc-page {
  max-width: none;
  min-height: 0;
  padding: 0;
  font-size: 11pt;
  line-height: 1.5;
}
html.document-export .doc-page h1,
html.document-export .doc-page h2,
html.document-export .doc-page h3 { break-after: avoid-page; }
html.document-export .doc-page img,
html.document-export .doc-page pre,
html.document-export .doc-page blockquote { break-inside: avoid-page; }
html.document-export .doc-page:empty::before { content: none; }
html.document-export .doc-page img.doc-image { cursor: default; }
html.document-export .doc-page img.doc-image.image-selected { outline: none; }
@media screen {
  html.document-export body { padding: 0.65in; }
  html.document-export .app { max-width: 7.2in; margin: 0 auto; }
}

@page { margin: 0.65in; }
@media print {
  html, body { height: auto; background: #fff; overflow: visible; }
  .app { display: block; height: auto; }
  .topbar, .toolbar, .image-controls, .link-pop, .cmenu { display: none !important; }
  .canvas { overflow: visible; }
  .doc-page {
    max-width: none;
    min-height: 0;
    padding: 0;
    font-size: 11pt;
    line-height: 1.5;
  }
  .doc-page h1, .doc-page h2, .doc-page h3 { break-after: avoid-page; }
  .doc-page img, .doc-page pre, .doc-page blockquote { break-inside: avoid-page; }
  .doc-page:empty::before { content: none; }
  .doc-page img.doc-image { cursor: default; }
  .doc-page img.doc-image.image-selected { outline: none; }
}
${PROMPT_STYLES}`;
document.head.appendChild(style);
var ICONS2 = {
  ...ICONS,
  highlight: '<path d="M9 11l-4 4v3h3l4-4"/><path d="M13 7l4 4"/><path d="M11 9l5-5 4 4-5 5z"/>',
  alignJustify: '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>',
  outdent: '<line x1="20" y1="6" x2="4" y2="6"/><line x1="20" y1="18" x2="4" y2="18"/><line x1="20" y1="12" x2="11" y2="12"/><polyline points="7 9 4 12 7 15"/>',
  indent: '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/><line x1="13" y1="12" x2="20" y2="12"/><polyline points="6 9 9 12 6 15"/>',
  hr: '<line x1="4" y1="12" x2="20" y2="12"/>'
};
var editor = el("div", { class: "doc-page", contenteditable: "true", spellcheck: "true" });
var titleInput = el("input", { class: "title-input", value: "Untitled document", "aria-label": "Document title" });
var saveStatus = statusIndicator({ title: "Save status" });
var topbar = el("div", { class: "topbar" }, [
  el("div", { class: "title-wrap" }, [titleInput]),
  el("div", { class: "spacer" }),
  saveStatus.element
]);
function toolbarSelect(options) {
  const select = customSelect(options);
  select.el.addEventListener("mousedown", (e) => {
    e.preventDefault();
    savedRange = getRange();
  });
  return select;
}
var styleSel = toolbarSelect({
  className: "style-sel",
  title: "Paragraph style",
  options: [
    { value: "P", label: "Normal text" },
    { value: "TITLE", label: "Title" },
    { value: "H1", label: "Heading 1" },
    { value: "H2", label: "Heading 2" },
    { value: "H3", label: "Heading 3" },
    { value: "BLOCKQUOTE", label: "Quote" },
    { value: "PRE", label: "Code block" }
  ],
  value: "P",
  onChange: (value) => {
    restoreRange();
    if (value === "TITLE") {
      document.execCommand("formatBlock", false, "H1");
      const block = currentBlock();
      if (block && block.tagName === "H1") block.classList.add("doc-title");
    } else {
      const block = currentBlock();
      if (block) block.classList.remove("doc-title");
      document.execCommand("formatBlock", false, value);
    }
    editor.focus();
    scheduleSave();
  }
});
var fontSel = toolbarSelect({
  className: "font-sel",
  title: "Font",
  options: [
    ["Sans serif", "ui-sans-serif, system-ui, Inter, sans-serif"],
    ["Serif", "Georgia, 'Times New Roman', serif"],
    ["Mono", "ui-monospace, 'SF Mono', Menlo, monospace"],
    ["Inter", "Inter, system-ui, sans-serif"],
    ["Georgia", "Georgia, serif"],
    ["Courier", "'Courier New', monospace"]
  ].map(([label, val]) => ({ value: val, label, style: "font-family:" + val + ";" })),
  value: "ui-sans-serif, system-ui, Inter, sans-serif",
  onChange: (value) => {
    restoreRange();
    document.execCommand("fontName", false, value);
    editor.focus();
    scheduleSave();
  }
});
var sizeSel = toolbarSelect({
  className: "size-sel",
  title: "Font size",
  options: [11, 12, 13, 14, 16, 18, 20, 24, 28, 32, 40, 48].map((s) => ({ value: s, label: String(s) })),
  value: 16,
  onChange: (value) => {
    restoreRange();
    applyFontSize(parseInt(value, 10));
    editor.focus();
    scheduleSave();
  }
});
function applyFontSize(px) {
  document.execCommand("fontSize", false, "7");
  editor.querySelectorAll('font[size="7"]').forEach((f) => {
    f.removeAttribute("size");
    f.style.fontSize = px + "px";
  });
}
function cmdBtn(name, title, command, value = null) {
  return iconBtn(ICONS2[name], title, () => {
    document.execCommand(command, false, value);
    editor.focus();
    refreshToolbarState();
    scheduleSave();
  });
}
var boldBtn = cmdBtn("bold", "Bold (Ctrl+B)", "bold");
var italicBtn = cmdBtn("italic", "Italic (Ctrl+I)", "italic");
var underlineBtn = cmdBtn("underline", "Underline (Ctrl+U)", "underline");
var strikeBtn = cmdBtn("strike", "Strikethrough", "strikeThrough");
function commandColorBtn(name, title, command, defaultColor) {
  const btn = colorBtn(ICONS2[name], title, defaultColor, (color) => {
    restoreRange();
    document.execCommand(command, false, color);
    editor.focus();
    scheduleSave();
  });
  btn.addEventListener("mousedown", () => {
    savedRange = getRange();
  });
  return btn;
}
var textColorBtn = commandColorBtn("textcolor", "Text color", "foreColor", "#1d1d20");
var highlightBtn = commandColorBtn("highlight", "Highlight color", "hiliteColor", "#fff3a3");
var alignBtns = {};
function alignBtn(name, title, command) {
  return segBtn(ICONS2[name], title, () => {
    document.execCommand(command, false, null);
    editor.focus();
    refreshToolbarState();
    scheduleSave();
  });
}
alignBtns.left = alignBtn("alignLeft", "Align left", "justifyLeft");
alignBtns.center = alignBtn("alignCenter", "Align center", "justifyCenter");
alignBtns.right = alignBtn("alignRight", "Align right", "justifyRight");
alignBtns.justify = alignBtn("alignJustify", "Justify", "justifyFull");
var alignSegment = el("div", { class: "segment" }, [alignBtns.left, alignBtns.center, alignBtns.right, alignBtns.justify]);
var ulBtn = cmdBtn("ul", "Bulleted list", "insertUnorderedList");
var olBtn = cmdBtn("ol", "Numbered list", "insertOrderedList");
var outdentBtn = cmdBtn("outdent", "Decrease indent", "outdent");
var indentBtn = cmdBtn("indent", "Increase indent", "indent");
var linkBtn = iconBtn(ICONS2.link, "Insert link", () => insertLink());
var imageInput = el("input", { type: "file", accept: "image/png,image/jpeg,image/webp,image/gif", multiple: "true" });
imageInput.style.display = "none";
document.body.appendChild(imageInput);
var imageBtn = iconBtn(ICONS2.image, "Insert image", () => {
  savedRange = getRange();
  imageInput.value = "";
  imageInput.click();
});
imageInput.addEventListener("change", () => insertImageFiles(Array.from(imageInput.files || [])));
var hrBtn = cmdBtn("hr", "Horizontal line", "insertHorizontalRule");
var clearBtn = iconBtn(ICONS2.clear, "Clear formatting", () => {
  document.execCommand("removeFormat", false, null);
  const block = currentBlock();
  if (block) block.classList.remove("doc-title");
  document.execCommand("formatBlock", false, "P");
  editor.focus();
  refreshToolbarState();
  scheduleSave();
});
var undoBtn = iconBtn(ICONS2.undo, "Undo (Ctrl+Z)", () => {
  document.execCommand("undo");
  editor.focus();
  scheduleSave();
});
var redoBtn = iconBtn(ICONS2.redo, "Redo (Ctrl+Y)", () => {
  document.execCommand("redo");
  editor.focus();
  scheduleSave();
});
var toolbar = el("div", { class: "toolbar" }, [
  group(null, [undoBtn, redoBtn], true),
  // always
  group(null, [styleSel.el]),
  // always
  group("p2", [fontSel.el, sizeSel.el]),
  group(null, [boldBtn, italicBtn, underlineBtn, strikeBtn]),
  // always
  group("p2", [textColorBtn, highlightBtn]),
  group("p1", [alignSegment]),
  group("p1", [ulBtn, olBtn]),
  group("p3", [outdentBtn, indentBtn]),
  group("p2", [linkBtn, imageBtn]),
  group("p3", [hrBtn, clearBtn])
]);
var canvas = el("div", { class: "canvas" }, [editor]);
var app = el("div", { class: "app" }, [topbar, toolbar, canvas]);
document.body.appendChild(app);
var savedRange = null;
function getRange() {
  const sel = window.getSelection();
  if (sel && sel.rangeCount && editor.contains(sel.anchorNode)) return sel.getRangeAt(0).cloneRange();
  return null;
}
function restoreRange() {
  if (!savedRange) return;
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(savedRange);
}
function currentBlock() {
  const sel = window.getSelection();
  if (!sel || !sel.rangeCount) return null;
  let node = sel.anchorNode;
  while (node && node !== editor) {
    if (isElement(node) && /^(P|H1|H2|H3|H4|BLOCKQUOTE|PRE|LI|DIV)$/.test(node.tagName)) return node;
    node = node.parentNode;
  }
  return null;
}
function currentLink() {
  const sel = window.getSelection();
  if (!sel || !sel.rangeCount) return null;
  let node = sel.anchorNode;
  while (node && node !== editor) {
    if (isElement(node) && node.tagName === "A") return node;
    node = node.parentNode;
  }
  return null;
}
function selectNode(node) {
  const range = document.createRange();
  range.selectNode(node);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}
function normalizeHref(url) {
  let href = (url || "").trim();
  if (href && !/^(https?:|mailto:|tel:|#|\/)/i.test(href)) href = "https://" + href;
  return href;
}
function escapeAttr(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}
function isSafeImageDataUrl(src) {
  return /^data:image\/(png|jpe?g|webp|gif);base64,/i.test(src || "");
}
function insertImageDataUrl({ src, width, alt }) {
  if (!isSafeImageDataUrl(src)) return;
  restoreRange();
  const displayWidth = Math.min(width || 520, Math.max(240, editor.clientWidth - 40));
  const html = `<img class="doc-image" draggable="true" src="${src}" alt="${escapeAttr(alt || "Image")}" style="width:${Math.round(displayWidth)}px;height:auto;">`;
  document.execCommand("insertHTML", false, html);
  savedRange = getRange();
}
async function insertImageFiles(files) {
  const imageFiles = files.filter(isImageFile);
  if (!imageFiles.length) return;
  hideLinkPopover();
  hideImageControls();
  setStatus("saving", "Processing image…");
  try {
    for (const file of imageFiles) {
      insertImageDataUrl(await prepareImage(file, { alt: file.name || "Image" }));
    }
    editor.focus();
    refreshToolbarState();
    scheduleSave();
  } catch (e) {
    setStatus("bad", "Image failed");
  }
}
function setCaretFromPoint(x, y) {
  let range = null;
  if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(x, y);
  } else if (document.caretPositionFromPoint) {
    const pos = document.caretPositionFromPoint(x, y);
    if (pos) {
      range = document.createRange();
      range.setStart(pos.offsetNode, pos.offset);
      range.collapse(true);
    }
  }
  if (!range || !editor.contains(range.startContainer)) {
    range = document.createRange();
    range.selectNodeContents(editor);
    range.collapse(false);
  }
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  savedRange = range.cloneRange();
}
var selectedImage = null;
var resizingImage = false;
var draggedImage = null;
var imageControls = el("div", { class: "image-controls" }, [el("div", { class: "resize-handle" })]);
document.body.appendChild(imageControls);
var resizeHandle = imageControls.querySelector(".resize-handle");
function positionImageControls() {
  if (!selectedImage || !editor.contains(selectedImage) || resizingImage) return;
  const r = selectedImage.getBoundingClientRect();
  imageControls.style.left = Math.round(r.left) + "px";
  imageControls.style.top = Math.round(r.top) + "px";
  imageControls.style.width = Math.round(r.width) + "px";
  imageControls.style.height = Math.round(r.height) + "px";
  imageControls.style.display = "block";
}
function selectImage(img) {
  if (selectedImage === img) {
    positionImageControls();
    return;
  }
  hideLinkPopover();
  if (selectedImage) selectedImage.classList.remove("image-selected");
  selectedImage = img;
  selectedImage.classList.add("image-selected");
  positionImageControls();
}
function hideImageControls() {
  if (selectedImage) selectedImage.classList.remove("image-selected");
  selectedImage = null;
  imageControls.style.display = "none";
}
resizeHandle.addEventListener("mousedown", (e) => {
  if (!selectedImage) return;
  e.preventDefault();
  e.stopPropagation();
  resizingImage = true;
  const img = selectedImage;
  const startX = e.clientX;
  const startWidth = img.getBoundingClientRect().width;
  const editorWidth = editor.getBoundingClientRect().width;
  imageControls.style.display = "none";
  const move = (ev) => {
    const next = Math.max(80, Math.min(editorWidth, startWidth + ev.clientX - startX));
    img.style.width = Math.round(next) + "px";
    img.style.height = "auto";
  };
  const up = () => {
    window.removeEventListener("mousemove", move);
    window.removeEventListener("mouseup", up);
    resizingImage = false;
    positionImageControls();
    scheduleSave();
  };
  window.addEventListener("mousemove", move);
  window.addEventListener("mouseup", up);
});
editor.addEventListener("click", (e) => {
  const img = e.target instanceof Element && e.target.closest("img.doc-image");
  if (img && editor.contains(img)) selectImage(img);
  else hideImageControls();
});
editor.addEventListener("dragstart", (e) => {
  const img = e.target instanceof Element && e.target.closest("img.doc-image");
  if (!img || !editor.contains(img)) return;
  draggedImage = img;
  selectImage(img);
  hideImageControls();
  if (e.dataTransfer) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("application/x-doc-image-move", "1");
    e.dataTransfer.setData("text/plain", "");
    try {
      e.dataTransfer.setDragImage(img, Math.min(20, img.width / 2), Math.min(20, img.height / 2));
    } catch (err) {
    }
  }
});
editor.addEventListener("dragend", () => {
  draggedImage = null;
  editor.classList.remove("drop-target");
  if (selectedImage) positionImageControls();
});
editor.addEventListener("dragover", (e) => {
  const types = Array.from(e.dataTransfer && e.dataTransfer.types || []);
  if (draggedImage || imageFilesFrom(e.dataTransfer).length || types.includes("Files") || types.includes("text/html") || types.includes("text/plain")) {
    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.dropEffect = draggedImage ? "move" : "copy";
    editor.classList.add("drop-target");
  }
});
editor.addEventListener("dragleave", () => editor.classList.remove("drop-target"));
editor.addEventListener("drop", (e) => {
  editor.classList.remove("drop-target");
  if (draggedImage && editor.contains(draggedImage)) {
    e.preventDefault();
    const img = draggedImage;
    draggedImage = null;
    setCaretFromPoint(e.clientX, e.clientY);
    const range = getRange();
    if (range) {
      range.insertNode(img);
      const after = document.createRange();
      after.setStartAfter(img);
      after.collapse(true);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(after);
      savedRange = after.cloneRange();
    }
    selectImage(img);
    scheduleSave();
    return;
  }
  const files = imageFilesFrom(e.dataTransfer);
  if (files.length) {
    e.preventDefault();
    setCaretFromPoint(e.clientX, e.clientY);
    insertImageFiles(files);
    return;
  }
  const html = e.dataTransfer && e.dataTransfer.getData("text/html");
  const text = e.dataTransfer && e.dataTransfer.getData("text/plain");
  if (html && html.trim() || text) {
    e.preventDefault();
    setCaretFromPoint(e.clientX, e.clientY);
    if (html && html.trim()) document.execCommand("insertHTML", false, sanitizePastedHtml(html));
    else document.execCommand("insertHTML", false, escapeText(text).replace(/\r?\n/g, "<br>"));
    refreshToolbarState();
    scheduleSave();
  }
});
window.addEventListener("scroll", () => {
  if (selectedImage) positionImageControls();
}, true);
window.addEventListener("resize", () => {
  if (selectedImage) positionImageControls();
});
function sanitizeImageElement(srcImg) {
  const src = srcImg.getAttribute("src") || "";
  if (!isSafeImageDataUrl(src)) return null;
  const img = document.createElement("img");
  img.className = "doc-image";
  img.draggable = true;
  img.src = src;
  img.alt = srcImg.getAttribute("alt") || "Image";
  const styleWidth = (srcImg.getAttribute("style") || "").match(/width\s*:\s*([0-9.]+)px/i);
  const attrWidth = parseInt(srcImg.getAttribute("width") || "", 10);
  const width = styleWidth ? parseFloat(styleWidth[1]) : attrWidth;
  if (width && width > 0) img.style.width = Math.min(900, Math.max(40, Math.round(width))) + "px";
  img.style.height = "auto";
  return img;
}
var LINK_PROMPT = { placeholder: "https://", okLabel: "Insert" };
async function insertLink() {
  const existing = currentLink();
  if (existing) return editLink(existing);
  savedRange = getRange();
  const url = await promptInline("Enter URL:", "", LINK_PROMPT);
  if (!url) return;
  restoreRange();
  document.execCommand("createLink", false, normalizeHref(url));
  editor.focus();
  scheduleSave();
}
async function editLink(anchor) {
  const url = await promptInline("Edit URL:", anchor.getAttribute("href") || "", LINK_PROMPT);
  if (url === null) return;
  selectNode(anchor);
  if (url.trim() === "") {
    document.execCommand("unlink", false, null);
  } else {
    document.execCommand("createLink", false, normalizeHref(url));
  }
  hideLinkPopover();
  editor.focus();
  scheduleSave();
}
function removeLink(anchor) {
  selectNode(anchor);
  document.execCommand("unlink", false, null);
  hideLinkPopover();
  editor.focus();
  scheduleSave();
}
var activeLink = null;
var linkPopUrl = el("a", { class: "lp-url", target: "_blank", rel: "noopener noreferrer" });
var linkPopEdit = el("button", { class: "lp-btn" }, "Edit");
var linkPopRemove = el("button", { class: "lp-btn lp-danger" }, "Remove link");
var linkPop = el("div", { class: "link-pop" }, [
  linkPopUrl,
  el("span", { class: "lp-div" }),
  linkPopEdit,
  linkPopRemove
]);
linkPop.style.display = "none";
linkPop.addEventListener("mousedown", (e) => {
  if (e.target !== linkPopUrl) e.preventDefault();
});
linkPopEdit.addEventListener("click", () => {
  if (activeLink) editLink(activeLink);
});
linkPopRemove.addEventListener("click", () => {
  if (activeLink) removeLink(activeLink);
});
document.body.appendChild(linkPop);
function positionLinkPopover(anchor) {
  const r = anchor.getBoundingClientRect();
  linkPop.style.visibility = "hidden";
  linkPop.style.display = "flex";
  const pw = linkPop.offsetWidth, ph = linkPop.offsetHeight;
  let left = Math.round(r.left);
  left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));
  let top = Math.round(r.bottom + 6);
  if (top + ph > window.innerHeight - 8) top = Math.round(r.top - ph - 6);
  linkPop.style.left = left + "px";
  linkPop.style.top = top + "px";
  linkPop.style.visibility = "visible";
}
function showLinkPopover(anchor) {
  activeLink = anchor;
  const href = anchor.getAttribute("href") || "";
  linkPopUrl.textContent = href.replace(/^mailto:/i, "");
  linkPopUrl.setAttribute("href", href);
  positionLinkPopover(anchor);
}
function hideLinkPopover() {
  activeLink = null;
  linkPop.style.display = "none";
}
function updateLinkPopover() {
  const a = currentLink();
  if (a && editor.contains(a)) showLinkPopover(a);
  else hideLinkPopover();
}
window.addEventListener("scroll", () => {
  if (activeLink) positionLinkPopover(activeLink);
}, true);
window.addEventListener("resize", () => {
  if (activeLink) positionLinkPopover(activeLink);
});
function wrapEl(tag, child) {
  const e = document.createElement(tag);
  e.appendChild(child);
  return e;
}
function fmtOf(elem, ctx) {
  const cs = (elem.getAttribute && elem.getAttribute("style") || "").toLowerCase();
  const tag = elem.tagName;
  const n = Object.assign({}, ctx);
  if (tag === "B" || tag === "STRONG") n.bold = true;
  if (tag === "I" || tag === "EM") n.italic = true;
  if (tag === "U" || tag === "INS") n.underline = true;
  if (tag === "S" || tag === "STRIKE" || tag === "DEL") n.strike = true;
  if (tag === "CODE" || tag === "TT") n.code = true;
  if (tag === "A") n.link = elem.getAttribute("href") || ctx.link;
  if (/font-weight:\s*(bold|[6-9]00)/.test(cs)) n.bold = true;
  else if (/font-weight:\s*(normal|[1-4]00)/.test(cs)) n.bold = false;
  if (/font-style:\s*italic/.test(cs)) n.italic = true;
  else if (/font-style:\s*normal/.test(cs)) n.italic = false;
  if (/text-decoration[^;]*underline/.test(cs)) n.underline = true;
  if (/text-decoration[^;]*line-through/.test(cs)) n.strike = true;
  return n;
}
function wrapInline(text, ctx) {
  let node = document.createTextNode(text);
  if (ctx.code) node = wrapEl("code", node);
  if (ctx.strike) node = wrapEl("s", node);
  if (ctx.underline) node = wrapEl("u", node);
  if (ctx.italic) node = wrapEl("i", node);
  if (ctx.bold) node = wrapEl("b", node);
  if (ctx.link) {
    let href = ctx.link.trim();
    if (href && !/^(https?:|mailto:|tel:|#|\/)/i.test(href)) href = "https://" + href;
    const a = document.createElement("a");
    a.setAttribute("href", href);
    a.appendChild(node);
    node = a;
  }
  return node;
}
var BLOCK_TAGS = ["P", "H1", "H2", "H3", "H4", "H5", "H6", "BLOCKQUOTE", "PRE", "UL", "OL", "LI", "DIV"];
function sanitizePastedHtml(html) {
  const parsed = new DOMParser().parseFromString(html, "text/html");
  const result = document.createElement("div");
  function appendInline(src, target, ctx) {
    src.childNodes.forEach((child) => {
      if (isText(child)) {
        if (child.textContent) target.appendChild(wrapInline(child.textContent, ctx));
      } else if (isElement(child)) {
        const tag = child.tagName;
        if (tag === "BR") target.appendChild(document.createElement("br"));
        else if (tag === "IMG") {
          const img = sanitizeImageElement(child);
          if (img) target.appendChild(img);
        } else if (tag === "HR" || tag === "STYLE" || tag === "SCRIPT") return;
        else appendInline(child, target, fmtOf(child, ctx));
      }
    });
  }
  function processList(src, ctx) {
    const list = document.createElement(src.tagName === "OL" ? "ol" : "ul");
    src.childNodes.forEach((child) => {
      if (!isElement(child)) return;
      if (child.tagName === "LI") {
        const li = document.createElement("li");
        const nested = [];
        child.childNodes.forEach((g) => {
          if (isElement(g) && (g.tagName === "UL" || g.tagName === "OL")) nested.push(g);
          else if (isText(g)) {
            if (g.textContent) li.appendChild(wrapInline(g.textContent, ctx));
          } else if (isElement(g)) appendInline(g, li, fmtOf(g, ctx));
        });
        nested.forEach((n) => li.appendChild(processList(n, ctx)));
        list.appendChild(li);
      } else if (child.tagName === "UL" || child.tagName === "OL") {
        list.appendChild(processList(child, ctx));
      }
    });
    return list;
  }
  function processNodes(nodes, ctx) {
    nodes.forEach((node) => {
      if (isText(node)) {
        if (node.textContent && node.textContent.trim()) {
          const p = document.createElement("p");
          p.appendChild(wrapInline(node.textContent, ctx));
          result.appendChild(p);
        }
        return;
      }
      if (!isElement(node)) return;
      const tag = node.tagName;
      if (tag === "STYLE" || tag === "SCRIPT" || tag === "META" || tag === "BR") return;
      if (tag === "HR") {
        result.appendChild(document.createElement("hr"));
        return;
      }
      if (tag === "IMG") {
        const img = sanitizeImageElement(node);
        if (img) {
          const p = document.createElement("p");
          p.appendChild(img);
          result.appendChild(p);
        }
        return;
      }
      if (tag === "UL" || tag === "OL") {
        result.appendChild(processList(node, ctx));
        return;
      }
      if (["P", "H1", "H2", "H3", "H4", "H5", "H6", "BLOCKQUOTE", "PRE"].includes(tag)) {
        let out = tag.toLowerCase();
        if (out === "h4" || out === "h5" || out === "h6") out = "h3";
        const block = document.createElement(out);
        appendInline(node, block, ctx);
        if (block.textContent.trim() || block.querySelector("br")) result.appendChild(block);
        return;
      }
      const newCtx = fmtOf(node, ctx);
      const hasBlockChild = Array.from(node.childNodes).some(
        (c) => isElement(c) && BLOCK_TAGS.includes(c.tagName)
      );
      if (hasBlockChild) {
        processNodes(Array.from(node.childNodes), newCtx);
      } else {
        const p = document.createElement("p");
        appendInline(node, p, newCtx);
        if (p.textContent.trim() || p.querySelector("br")) result.appendChild(p);
      }
    });
  }
  processNodes(Array.from(parsed.body.childNodes), {});
  return result.innerHTML;
}
function escapeText(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
editor.addEventListener("paste", (e) => {
  const cb = e.clipboardData;
  if (!cb) return;
  const imageFiles = imageFilesFrom(cb);
  if (imageFiles.length) {
    e.preventDefault();
    savedRange = getRange();
    insertImageFiles(imageFiles);
    return;
  }
  e.preventDefault();
  const html = cb.getData("text/html");
  if (html && html.trim()) {
    document.execCommand("insertHTML", false, sanitizePastedHtml(html));
  } else {
    const text = cb.getData("text/plain") || "";
    document.execCommand("insertHTML", false, escapeText(text).replace(/\r?\n/g, "<br>"));
  }
  refreshToolbarState();
  scheduleSave();
});
function refreshToolbarState() {
  const set = (btn, on) => btn.classList.toggle("active", on);
  try {
    set(boldBtn, document.queryCommandState("bold"));
    set(italicBtn, document.queryCommandState("italic"));
    set(underlineBtn, document.queryCommandState("underline"));
    set(strikeBtn, document.queryCommandState("strikeThrough"));
    set(ulBtn, document.queryCommandState("insertUnorderedList"));
    set(olBtn, document.queryCommandState("insertOrderedList"));
    alignBtns.left.classList.toggle("active", document.queryCommandState("justifyLeft"));
    alignBtns.center.classList.toggle("active", document.queryCommandState("justifyCenter"));
    alignBtns.right.classList.toggle("active", document.queryCommandState("justifyRight"));
    alignBtns.justify.classList.toggle("active", document.queryCommandState("justifyFull"));
  } catch (e) {
  }
  const block = currentBlock();
  if (block) {
    let tag = block.tagName;
    if (tag === "LI" || tag === "DIV") tag = "P";
    if (tag === "H1" && block.classList.contains("doc-title")) tag = "TITLE";
    styleSel.setValue(["P", "TITLE", "H1", "H2", "H3", "BLOCKQUOTE", "PRE"].includes(tag) ? tag : "P");
  }
}
var selUpdateQueued = false;
function scheduleSelectionUpdate() {
  if (selUpdateQueued) return;
  selUpdateQueued = true;
  requestAnimationFrame(() => {
    selUpdateQueued = false;
    refreshToolbarState();
    updateLinkPopover();
  });
}
document.addEventListener("selectionchange", () => {
  if (editor.contains(window.getSelection().anchorNode)) scheduleSelectionUpdate();
});
var realtimeCss = `
.remote-caret-layer { position:fixed; inset:0; z-index:998; pointer-events:none; }
.remote-selection { position:fixed; border-radius:2px; opacity:.22; }
.remote-caret { position:fixed; width:2px; min-height:18px; border-radius:2px; }
.remote-caret-label { position:absolute; left:0; bottom:100%; padding:2px 5px; border-radius:4px 4px 4px 0;
  color:white; font-size:10px; font-weight:650; white-space:nowrap; transform:translateY(-2px); }
`;
style.textContent += realtimeCss;
var remoteCaretLayer = el("div", { class: "remote-caret-layer", "aria-hidden": "true" });
document.body.appendChild(remoteCaretLayer);
var me = collaboratorFor(clientId);
var applyingRemote = false;
var revision = 0;
var acknowledgedTitle = "Untitled document";
var acknowledged = /* @__PURE__ */ new Map();
var pendingByBlock = /* @__PURE__ */ new Map();
var roster = new PresenceRoster(clientId);
var STATUS_KINDS = { conflict: "synced", offline: "bad" };
function setStatus(kind, text) {
  saveStatus.set(STATUS_KINDS[kind] ?? kind, text);
}
function newBlockId() {
  if (typeof globalThis.crypto?.randomUUID === "function") return "b_" + crypto.randomUUID();
  return "b_" + Date.now().toString(36) + Math.random().toString(36).slice(2);
}
function blockId(node) {
  return isElement(node) ? node.getAttribute("data-block-id") : null;
}
function findBlock(id) {
  return Array.from(editor.children).find((node) => blockId(node) === id) || null;
}
function activeBlockId() {
  const sel = window.getSelection();
  let node = sel?.anchorNode;
  if (!node || !editor.contains(node)) return null;
  if (!isElement(node)) node = node.parentElement;
  while (node && node.parentElement !== editor) node = node.parentElement;
  return node && node.parentElement === editor ? blockId(node) : null;
}
function normalizeBlocks() {
  const selectionBlock = activeBlockId();
  for (const node of Array.from(editor.childNodes)) {
    if (isText(node) || isElement(node) && node.tagName === "BR") {
      const p = document.createElement("p");
      if (isText(node)) p.textContent = node.textContent;
      else p.appendChild(document.createElement("br"));
      editor.replaceChild(p, node);
    }
  }
  const seen = /* @__PURE__ */ new Set();
  for (const node of Array.from(editor.children)) {
    let id = blockId(node);
    if (!id || seen.has(id)) {
      id = newBlockId();
      node.setAttribute("data-block-id", id);
    }
    seen.add(id);
  }
  if (selectionBlock && !activeBlockId()) {
    const node = findBlock(selectionBlock);
    if (node) {
      const range = document.createRange();
      range.selectNodeContents(node);
      range.collapse(false);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
}
function canonicalBlockHtml(node) {
  const clone = node.cloneNode(true);
  clone.classList.remove("remote-editing");
  clone.style.removeProperty("--remote-color");
  clone.querySelectorAll(".remote-editing").forEach((child) => {
    child.classList.remove("remote-editing");
    child.style.removeProperty("--remote-color");
  });
  clone.querySelectorAll(".image-selected").forEach((image) => image.classList.remove("image-selected"));
  return clone.outerHTML;
}
function serializeBlocks() {
  normalizeBlocks();
  return Array.from(editor.children).map((node) => ({ id: blockId(node), html: canonicalBlockHtml(node) }));
}
function parseBlock(block) {
  const tpl = document.createElement("template");
  tpl.innerHTML = block.html;
  const node = tpl.content.firstElementChild || document.createElement("p");
  node.setAttribute("data-block-id", block.id);
  return node;
}
var saver = new SaveScheduler({ save: sendChanges, isDirty, onStatus: setStatus });
function scheduleSave(delay) {
  if (applyingRemote) return;
  saver.schedule(delay);
}
function currentTitle() {
  return titleInput.value.trim() || "Untitled document";
}
function isDirty() {
  const blocks = serializeBlocks();
  return blocks.some((block) => acknowledged.get(block.id)?.html !== block.html) || blocks.length !== acknowledged.size || currentTitle() !== acknowledgedTitle;
}
async function sendChanges() {
  const blocks = serializeBlocks();
  const currentIds = new Set(blocks.map((b) => b.id));
  const upserts = blocks.filter((block) => acknowledged.get(block.id)?.html !== block.html).map((block) => ({ ...block, baseVersion: acknowledged.get(block.id)?.version || 0 }));
  const deletes = Array.from(acknowledged.entries()).filter(([id]) => !currentIds.has(id)).map(([id, block]) => ({ id, baseVersion: block.version }));
  const title = currentTitle();
  if (!upserts.length && !deletes.length && title === acknowledgedTitle) return "saved";
  const result = await gadget.applyOperation({
    senderId: clientId,
    baseRevision: revision,
    upserts,
    deletes,
    order: blocks.map((b) => b.id),
    title
  });
  revision = Math.max(revision, result.revision || 0);
  for (const block of result.upserts || []) acknowledged.set(block.id, { html: block.html, version: block.version });
  for (const id of result.deletedIds || []) acknowledged.delete(id);
  acknowledgedTitle = result.title || title;
  if (!result.conflicts?.length) return "saved";
  for (const block of result.conflicts) acknowledged.set(block.id, { html: block.html, version: block.version });
  return "conflict";
}
editor.addEventListener("input", () => {
  if (selectedImage && !editor.contains(selectedImage)) hideImageControls();
  else if (selectedImage) positionImageControls();
  scheduleSave();
  presence.schedule();
});
titleInput.addEventListener("input", () => scheduleSave());
try {
  document.execCommand("styleWithCSS", false, true);
} catch (e) {
}
try {
  document.execCommand("defaultParagraphSeparator", false, "p");
} catch (e) {
}
function applyOrder(order) {
  let position = 0;
  for (const id of order || []) {
    const node = findBlock(id);
    if (!node) continue;
    const atPosition = editor.children[position];
    if (atPosition !== node) editor.insertBefore(node, atPosition || null);
    position++;
  }
}
function applyRemoteOperation(event) {
  if (!event || event.senderId === clientId) return;
  applyingRemote = true;
  revision = Math.max(revision, event.revision || 0);
  const activeId = activeBlockId();
  for (const block of event.upserts || []) {
    acknowledged.set(block.id, { html: block.html, version: block.version });
    if (block.id === activeId) {
      pendingByBlock.set(block.id, { type: "upsert", block });
      continue;
    }
    const old = findBlock(block.id);
    const next = parseBlock(block);
    if (old) old.replaceWith(next);
    else editor.appendChild(next);
  }
  for (const id of event.deletedIds || []) {
    acknowledged.delete(id);
    if (id === activeId) pendingByBlock.set(id, { type: "delete" });
    else findBlock(id)?.remove();
  }
  applyOrder(event.order);
  if (document.activeElement !== titleInput) titleInput.value = event.title || acknowledgedTitle;
  acknowledgedTitle = event.title || acknowledgedTitle;
  applyingRemote = false;
  setStatus("synced", activeId && pendingByBlock.has(activeId) ? "Concurrent edit pending" : "Live update");
  setTimeout(() => {
    if (!saver.busy) setStatus("saved", "Saved");
  }, 900);
}
function applySnapshot(doc) {
  applyingRemote = true;
  hideLinkPopover();
  hideImageControls();
  revision = doc.revision || 0;
  acknowledged.clear();
  editor.replaceChildren(...(doc.blocks || []).map(parseBlock));
  normalizeBlocks();
  for (const block of doc.blocks || []) {
    const node = findBlock(block.id);
    acknowledged.set(block.id, { html: node ? canonicalBlockHtml(node) : block.html, version: block.version });
  }
  titleInput.value = doc.title || "Untitled document";
  acknowledgedTitle = titleInput.value;
  applyingRemote = false;
}
function settlePendingBlock(id) {
  const pending = pendingByBlock.get(id);
  if (!pending) return;
  pendingByBlock.delete(id);
  const local = findBlock(id);
  const base = acknowledged.get(id);
  const dirty = local && (!base || canonicalBlockHtml(local) !== base.html);
  if (dirty) {
    scheduleSave(20);
    return;
  }
  applyingRemote = true;
  if (pending.type === "delete") local?.remove();
  else if (pending.block.version >= (base?.version || 0)) {
    const next = parseBlock(pending.block);
    if (local) local.replaceWith(next);
    else editor.appendChild(next);
  }
  applyingRemote = false;
}
editor.addEventListener("focusout", () => {
  const id = activeBlockId();
  setTimeout(() => {
    if (!linkPop.contains(document.activeElement)) hideLinkPopover();
    if (id) settlePendingBlock(id);
    presence.sendNow();
  }, 0);
});
function containingBlock(node) {
  if (!node || !editor.contains(node)) return null;
  if (!isElement(node)) node = node.parentElement;
  if (node === editor) return null;
  while (node && node.parentElement !== editor) node = node.parentElement;
  return node?.parentElement === editor ? node : null;
}
function textOffsetForPoint(block, node, offset) {
  if (!block || !node) return 0;
  try {
    const range = document.createRange();
    range.selectNodeContents(block);
    range.setEnd(node, offset);
    return range.toString().length;
  } catch (e) {
    return 0;
  }
}
function currentPresence() {
  const sel = window.getSelection();
  const anchorBlock = containingBlock(sel?.anchorNode);
  const focusBlock = containingBlock(sel?.focusNode);
  return {
    clientId,
    name: me.name,
    color: me.color,
    anchorBlockId: blockId(anchorBlock),
    anchorOffset: textOffsetForPoint(anchorBlock, sel?.anchorNode, sel?.anchorOffset || 0),
    focusBlockId: blockId(focusBlock),
    focusOffset: textOffsetForPoint(focusBlock, sel?.focusNode, sel?.focusOffset || 0)
  };
}
var presence = new PresenceReporter(currentPresence, (update) => gadget.updatePresence(update));
function domPointAtTextOffset(block, requestedOffset) {
  const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
  let remaining = Math.max(0, requestedOffset || 0), text = null, last = null;
  while (text = walker.nextNode()) {
    last = text;
    if (remaining <= text.data.length) return { node: text, offset: remaining };
    remaining -= text.data.length;
  }
  if (last) return { node: last, offset: last.data.length };
  return { node: block, offset: 0 };
}
function caretRectAtPoint(block, point) {
  try {
    const range = document.createRange();
    range.setStart(point.node, point.offset);
    range.collapse(true);
    const rect = range.getClientRects()[0];
    if (rect) return rect;
  } catch (e) {
  }
  const r = block.getBoundingClientRect();
  return { left: r.left, top: r.top + 3, height: Math.min(22, Math.max(18, r.height - 6)) };
}
function orderedSelectionRange(cursor) {
  const anchorBlock = cursor.anchorBlockId && findBlock(cursor.anchorBlockId);
  const focusBlock = cursor.focusBlockId && findBlock(cursor.focusBlockId);
  if (!anchorBlock || !focusBlock) return null;
  const anchor = domPointAtTextOffset(anchorBlock, cursor.anchorOffset);
  const focus = domPointAtTextOffset(focusBlock, cursor.focusOffset);
  const blockOrder = Array.from(editor.children);
  const ai = blockOrder.indexOf(anchorBlock), fi = blockOrder.indexOf(focusBlock);
  const anchorFirst = ai < fi || ai === fi && cursor.anchorOffset <= cursor.focusOffset;
  const start = anchorFirst ? anchor : focus;
  const end = anchorFirst ? focus : anchor;
  const range = document.createRange();
  try {
    range.setStart(start.node, start.offset);
    range.setEnd(end.node, end.offset);
  } catch (e) {
    return null;
  }
  return { range, focusBlock, focus };
}
function renderPresence() {
  remoteCaretLayer.replaceChildren();
  for (const person of roster.entries()) {
    const selection = person.cursor && orderedSelectionRange(person.cursor);
    if (!selection) continue;
    if (!selection.range.collapsed) {
      for (const rect of selection.range.getClientRects()) {
        if (!rect.width || !rect.height) continue;
        const highlight = el("span", { class: "remote-selection" });
        highlight.style.cssText = `left:${rect.left}px;top:${rect.top}px;width:${rect.width}px;height:${rect.height}px;background:${person.color}`;
        remoteCaretLayer.appendChild(highlight);
      }
    }
    const r = caretRectAtPoint(selection.focusBlock, selection.focus);
    const caret = el("span", { class: "remote-caret" }, [
      el("span", { class: "remote-caret-label" }, person.name || "Guest")
    ]);
    caret.style.cssText = `left:${Math.round(r.left)}px;top:${Math.round(r.top)}px;height:${Math.max(18, Math.round(r.height || 18))}px;background:${person.color}`;
    caret.firstChild.style.background = person.color;
    remoteCaretLayer.appendChild(caret);
  }
}
function applyPresence(event) {
  if (roster.apply(event)) renderPresence();
}
document.addEventListener("selectionchange", () => {
  if (editor.contains(window.getSelection()?.anchorNode ?? null)) presence.schedule();
});
window.addEventListener("scroll", () => {
  if (roster.entries().length) renderPresence();
}, true);
window.addEventListener("resize", () => {
  if (roster.entries().length) renderPresence();
});
presence.startHeartbeat(() => {
  if (roster.expire()) renderPresence();
});
window.addEventListener("pagehide", () => {
  gadget.leavePresence(clientId).catch(() => {
  });
});
var subscriber = createSubscriber(RpcTarget, {
  operation(event) {
    if (event.type === "snapshot") applySnapshot(event.document);
    else applyRemoteOperation(event);
  },
  presence(event) {
    applyPresence(event);
  }
});
if (isDocumentExport) {
  document.documentElement.classList.add("document-export");
  editor.removeAttribute("contenteditable");
  app.replaceChildren(canvas);
  document.body.replaceChildren(app);
}
try {
  let doc = await gadget.subscribe(subscriber, { clientId, name: me.name, color: me.color });
  if (!doc.blocks) {
    editor.innerHTML = doc.legacyContent || "";
    normalizeBlocks();
    doc = await gadget.initializeBlocks({
      blocks: serializeBlocks(),
      title: doc.title,
      senderId: clientId
    });
  }
  applySnapshot(doc);
  setStatus("saved", "Saved");
  presence.sendNow();
} catch (e) {
  console.error(e);
  setStatus("bad", "Offline");
}
refreshToolbarState();
