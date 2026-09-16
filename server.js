// server.ts
import { DurableObject, WorkerEntrypoint } from "cloudflare:workers";

// @gadgets/bundled-blueprints/libraries/sync/src/collaborator.ts
var MAX_NAME_LENGTH = 40;
var MAX_CLIENT_ID_LENGTH = 100;
var SAFE_COLOR = /^(?:#[0-9a-f]{3,8}|hsl\([\s,]*\d{1,3}(?:deg)?[\s,]*\d{1,3}%[\s,]*\d{1,3}%\s*\))$/i;
var MAX_COLOR_LENGTH = 40;
var DEFAULT_COLOR = "#e1632e";
var DEFAULT_NAME = "Guest";
function normalizeCollaborator(input) {
  return {
    clientId: String(input?.clientId ?? "").slice(0, MAX_CLIENT_ID_LENGTH),
    name: String(input?.name ?? "").trim().slice(0, MAX_NAME_LENGTH) || DEFAULT_NAME,
    color: safeColor(String(input?.color ?? ""))
  };
}
function safeColor(color) {
  return color.length <= MAX_COLOR_LENGTH && SAFE_COLOR.test(color) ? color : DEFAULT_COLOR;
}

// @gadgets/bundled-blueprints/libraries/sync/src/mutation-queue.ts
var MutationQueue = class {
  #tail = Promise.resolve();
  /**
   * Runs `work` once every mutation enqueued before it has settled, and settles the way `work`
   * does. A rejection reaches its caller alone: the queue itself never stalls on one.
   */
  run(work) {
    const result = this.#tail.then(work);
    this.#tail = result.catch(() => {
    });
    return result;
  }
};

// @gadgets/bundled-blueprints/libraries/sync/src/subscribers.ts
var SubscriberRegistry = class {
  #subscribers = /* @__PURE__ */ new Map();
  #presence;
  constructor(presence) {
    this.#presence = presence ?? null;
  }
  /** How many subscribers are registered. */
  get size() {
    return this.#subscribers.size;
  }
  /** Whether `subscriber` -- the handle {@link add} returned -- is still registered. */
  has(subscriber) {
    return this.#subscribers.has(subscriber);
  }
  /** What each subscriber said about itself, in order of arrival. */
  members() {
    return Array.from(this.#subscribers.values());
  }
  /**
   * Keep `subscriber` -- the stub the RPC layer delivered, typed as the client implements it --
   * until its connection breaks or it fails a delivery, and announce its presence when hooks are
   * set: it is seeded with everyone already here, all at once, and then announced to everyone,
   * in a microtask once this call has returned, so the caller's own work comes first -- though a
   * reply the caller still awaits something for may follow the seeds. A newcomer that
   * fails a seed is gone already: it is dropped, and its leave is announced, because it was a
   * member from the moment it was added -- a subscriber added during its seeding window was seeded
   * with it, and would otherwise show it until its own roster expired it. Returns the kept handle,
   * for {@link remove}.
   */
  add(subscriber, who) {
    const stub = subscriber.dup();
    const others = this.members();
    this.#subscribers.set(stub, who);
    stub.onRpcBroken(() => {
      if (this.#drop(stub)) this.#announceLeave(who);
    });
    const presence = this.#presence;
    if (presence) {
      queueMicrotask(async () => {
        if (!this.#subscribers.has(stub)) return;
        const seeds = await Promise.allSettled(others.map((person) => Promise.resolve().then(() => presence.join(stub, person))));
        if (seeds.some((seed) => seed.status === "rejected")) this.#dropAndAnnounce(stub);
        if (!this.#subscribers.has(stub)) return;
        this.broadcast((each) => presence.join(each, who));
      });
    }
    return stub;
  }
  /**
   * Forget a subscriber before its connection breaks, release its stub and announce that it left.
   * Returns whether it was registered.
   */
  remove(subscriber) {
    const stub = subscriber;
    const who = this.#subscribers.get(stub);
    if (!this.#drop(stub)) return false;
    this.#announceLeave(who);
    return true;
  }
  /**
   * Deliver to every subscriber at once, without waiting for any of them: each `send` is called
   * synchronously, here, and what it returns is watched rather than awaited. One whose call throws
   * or rejects is dropped rather than failing the caller, and the rest are told it left; one that
   * never settles holds up nothing but its own client. A caller that broadcasts from inside its
   * mutation queue therefore neither blocks the queue on a slow browser nor deadlocks when a
   * callback re-enters it.
   */
  broadcast(send) {
    for (const stub of Array.from(this.#subscribers.keys())) {
      let delivery;
      try {
        delivery = send(stub);
      } catch {
        this.#dropAndAnnounce(stub);
        continue;
      }
      Promise.resolve(delivery).catch(() => this.#dropAndAnnounce(stub));
    }
  }
  /** Drop a subscriber whose delivery failed and, when it was still here, tell the rest it left. */
  #dropAndAnnounce(stub) {
    const who = this.#subscribers.get(stub);
    if (this.#drop(stub)) this.#announceLeave(who);
  }
  /** Tell everyone still here that `who` left, when there is a vocabulary to say it in. */
  #announceLeave(who) {
    const presence = this.#presence;
    if (presence) this.broadcast((each) => presence.leave(each, who));
  }
  /**
   * Forget a subscriber and release the stub `add` kept. Returns whether it was registered, so a
   * failure and a broken connection reported together drop -- and announce -- it once.
   */
  #drop(stub) {
    if (!this.#subscribers.delete(stub)) return false;
    stub[Symbol.dispose]();
    return true;
  }
};

// @gadgets/bundled-blueprints/libraries/sync/src/versioned.ts
function operationStatus(changed, conflicts) {
  if (conflicts.length) return "conflict";
  return changed ? "applied" : "unchanged";
}
function normalizeBaseVersion(value) {
  if (value === void 0 || value === null) return 0;
  const version = Number(value);
  return Number.isInteger(version) && version >= 0 ? version : -1;
}
function applyVersioned(current, batch, options = {}) {
  const isUnchanged = options.isUnchanged ?? sameFields;
  const items = /* @__PURE__ */ new Map();
  for (const item of current) items.set(item.id, item);
  const accepted = [];
  const conflicts = [];
  for (const incoming of batch.upserts ?? []) {
    const { baseVersion, ...rest } = incoming;
    const content = rest;
    const existing = items.get(incoming.id);
    if (existing) {
      if (baseVersion !== existing.version) {
        conflicts.push({ id: incoming.id, reason: "stale", current: existing });
        continue;
      }
      if (isUnchanged(existing, content)) continue;
    } else if (baseVersion !== 0) {
      conflicts.push({ id: incoming.id, reason: "missing" });
      continue;
    }
    const next = { ...content, version: (existing?.version ?? 0) + 1 };
    items.set(next.id, next);
    accepted.push(next);
  }
  const deletedIds = [];
  for (const deletion of batch.deletes ?? []) {
    const existing = items.get(deletion.id);
    if (!existing) continue;
    if (deletion.baseVersion !== existing.version) {
      conflicts.push({ id: deletion.id, reason: "stale", current: existing });
      continue;
    }
    items.delete(deletion.id);
    deletedIds.push(deletion.id);
  }
  const changed = accepted.length > 0 || deletedIds.length > 0;
  return { items, accepted, deletedIds, conflicts, changed, status: operationStatus(changed, conflicts) };
}
function sameFields(current, incoming) {
  const left = Object.keys(current).filter((key) => key !== "version");
  const right = Object.keys(incoming);
  if (left.length !== right.length) return false;
  return right.every((key) => key in current && Reflect.get(current, key) === Reflect.get(incoming, key));
}

// server.ts
var DEFAULT_TITLE = "Untitled document";
function isRecord(value) {
  return typeof value === "object" && value !== null;
}
var Gadget = class extends DurableObject {
  mutations;
  subscribers;
  constructor(ctx, env) {
    super(ctx, env);
    this.ctx = ctx;
    this.mutations = new MutationQueue();
    this.subscribers = new SubscriberRegistry({
      join: (subscriber, who) => subscriber.presence({
        type: "join",
        clientId: who.clientId,
        name: who.name,
        color: who.color,
        blockId: null
      }),
      leave: (subscriber, who) => subscriber.presence({ type: "leave", clientId: who.clientId })
    });
  }
  async loadDocument() {
    let doc = await this.ctx.storage.get("document:v2");
    if (doc) return doc;
    const [content, title, lastModified] = await Promise.all([
      this.ctx.storage.get("content"),
      this.ctx.storage.get("title"),
      this.ctx.storage.get("lastModified")
    ]);
    return {
      revision: 0,
      title: title ?? DEFAULT_TITLE,
      blocks: null,
      legacyContent: content ?? "",
      lastModified: lastModified ?? null
    };
  }
  async getDocument() {
    return this.loadDocument();
  }
  initializeBlocks(args) {
    return this.mutations.run(() => this.initializeBlocksLocked(args));
  }
  async initializeBlocksLocked({ blocks, title, senderId }) {
    let current = await this.ctx.storage.get("document:v2");
    const cleanBlocks = sanitizeBlocks(blocks);
    const cleanTitle = String(title || DEFAULT_TITLE);
    if (current) {
      const isBlankBootstrap = current.revision === 1 && current.title === DEFAULT_TITLE && current.blocks.length === 0;
      const hasSeedContent = cleanBlocks.length > 0 || cleanTitle !== DEFAULT_TITLE;
      if (!isBlankBootstrap || !hasSeedContent) return current;
    }
    const now = Date.now();
    current = {
      revision: current ? current.revision + 1 : 1,
      title: cleanTitle,
      blocks: cleanBlocks.map((block) => ({ id: block.id, html: block.html, version: 1 })),
      lastModified: now
    };
    await this.ctx.storage.put("document:v2", current);
    this.broadcast({
      type: "snapshot",
      senderId,
      document: current
    });
    return current;
  }
  // Explicit full-document writer for agents/importers. Unlike initializeBlocks,
  // this always applies, so callers never need to inspect revision state or
  // construct per-block applyOperation payloads just to populate a document.
  setDocument(args) {
    return this.mutations.run(() => this.setDocumentLocked(args));
  }
  async setDocumentLocked({ blocks, title, senderId }) {
    const previous = await this.ctx.storage.get("document:v2");
    const previousById = new Map((previous?.blocks || []).map((block) => [block.id, block]));
    const cleanBlocks = sanitizeBlocks(blocks);
    const document = {
      revision: (previous?.revision || 0) + 1,
      title: String(title || DEFAULT_TITLE),
      blocks: cleanBlocks.map((block) => ({
        id: block.id,
        html: block.html,
        version: (previousById.get(block.id)?.version || 0) + 1
      })),
      lastModified: Date.now()
    };
    await this.ctx.storage.put("document:v2", document);
    this.broadcast({ type: "snapshot", senderId, document });
    return document;
  }
  // Apply a compact batch of block changes. The mutation queue is the single
  // authoritative order for all collaborators.
  applyOperation(operation) {
    return this.mutations.run(() => this.applyOperationLocked(operation));
  }
  async applyOperationLocked(operation) {
    let doc = await this.ctx.storage.get("document:v2");
    if (!doc) throw new Error("Document must be initialized first.");
    const outcome = applyVersioned(doc.blocks, {
      upserts: sanitizeBlocks(operation.upserts || []),
      deletes: (operation.deletes || []).map((deletion) => ({
        id: String(deletion?.id || ""),
        baseVersion: normalizeBaseVersion(deletion?.baseVersion)
      }))
    }, {
      // Every accepted upsert takes a new version, even one whose HTML already
      // matches what is stored: the reply is how a client learns which version
      // its draft now rests on, and a block left out of it would keep looking
      // unsaved to the sender.
      isUnchanged: () => false
    });
    const byId = outcome.items;
    const { accepted, deletedIds } = outcome;
    const conflicts = outcome.conflicts.filter((conflict) => conflict.reason === "stale").map((conflict) => conflict.current);
    const requestedOrder = Array.isArray(operation.order) ? operation.order.map(String) : [];
    const order = [];
    const seen = /* @__PURE__ */ new Set();
    for (const id of requestedOrder) {
      if (byId.has(id) && !seen.has(id)) {
        order.push(id);
        seen.add(id);
      }
    }
    for (const block of doc.blocks) {
      if (byId.has(block.id) && !seen.has(block.id)) {
        order.push(block.id);
        seen.add(block.id);
      }
    }
    for (const id of byId.keys()) {
      if (!seen.has(id)) order.push(id);
    }
    const titleChanged = typeof operation.title === "string" && operation.title !== doc.title;
    const changed = outcome.changed || titleChanged || order.join("\n") !== doc.blocks.map((b) => b.id).join("\n");
    if (!changed) {
      return { status: operationStatus(false, conflicts), revision: doc.revision, conflicts };
    }
    doc = {
      revision: doc.revision + 1,
      title: typeof operation.title === "string" ? operation.title : doc.title,
      blocks: order.map((id) => byId.get(id)),
      lastModified: Date.now()
    };
    await this.ctx.storage.put("document:v2", doc);
    const event = {
      type: "operation",
      senderId: operation.senderId,
      revision: doc.revision,
      title: doc.title,
      upserts: accepted,
      deletedIds,
      order,
      lastModified: doc.lastModified
    };
    this.broadcast(event);
    return {
      status: operationStatus(true, conflicts),
      ...event,
      conflicts
    };
  }
  async subscribe(callback, client = {}) {
    this.subscribers.add(callback, normalizeCollaborator(client));
    return this.loadDocument();
  }
  async updatePresence(presence) {
    const event = {
      type: "cursor",
      ...normalizeCollaborator(presence),
      // Anchor/focus endpoints let clients render both a caret and highlighted
      // selections, including selections spanning multiple top-level blocks.
      anchorBlockId: presence.anchorBlockId ? String(presence.anchorBlockId) : null,
      anchorOffset: Math.max(0, Number(presence.anchorOffset || 0)),
      focusBlockId: presence.focusBlockId ? String(presence.focusBlockId) : null,
      focusOffset: Math.max(0, Number(presence.focusOffset || 0)),
      at: Date.now()
    };
    this.broadcastPresence(event);
  }
  // Best-effort fast path for pagehide. Clients also expire stale presence via
  // heartbeats because browsers cannot guarantee that unload RPC completes.
  async leavePresence(clientId) {
    this.broadcastPresence({
      type: "leave",
      clientId: normalizeCollaborator({ clientId }).clientId,
      at: Date.now()
    });
  }
  // Delivery is the registry's: issued at once and never awaited, so a slow or
  // failing browser holds up neither the mutation nor the other subscribers.
  broadcast(event) {
    this.subscribers.broadcast((subscriber) => subscriber.operation(event));
  }
  broadcastPresence(event) {
    this.subscribers.broadcast((subscriber) => subscriber.presence(event));
  }
  async getGoogleDocInfo() {
    if (!this.env.GOOGLE_DOC) return null;
    const metadata = await this.env.GOOGLE_DOC.getMetadata();
    return { title: metadata.title, lastModified: metadata.lastModified };
  }
  async syncToGoogleDoc({ markdown }) {
    if (!this.env.GOOGLE_DOC) throw new Error("GOOGLE_DOC binding is not configured.");
    const next = String(markdown || "").trim() || " ";
    const current = await this.env.GOOGLE_DOC.getContent();
    if ((current || "").trim() === next.trim()) return { status: "unchanged" };
    if (!(current || "").trim()) await this.env.GOOGLE_DOC.appendText(next);
    else await this.env.GOOGLE_DOC.replaceText(current, next);
    return { status: "synced", metadata: await this.env.GOOGLE_DOC.getMetadata() };
  }
};
function sanitizeBlocks(blocks) {
  if (!Array.isArray(blocks)) return [];
  const result = [];
  const seen = /* @__PURE__ */ new Set();
  for (const value of blocks) {
    const block = isRecord(value) ? value : null;
    const id = String(block?.id || "").slice(0, 100);
    const html = String(block?.html || "");
    if (!id || seen.has(id) || html.length > 1e7) continue;
    seen.add(id);
    result.push({ id, html, baseVersion: normalizeBaseVersion(block?.baseVersion) });
  }
  return result;
}
var DOC_EXPORT_FORMATS = [
  { id: "markdown", label: "Markdown", mode: "server", contentType: "text/markdown", fileExtension: ".md" },
  { id: "html", label: "HTML", mode: "browser", contentType: "text/html", fileExtension: ".html" },
  { id: "pdf", label: "PDF", mode: "browser", contentType: "application/pdf", fileExtension: ".pdf" }
];
var ExportHandler = class extends WorkerEntrypoint {
  async getExportFormats() {
    return DOC_EXPORT_FORMATS;
  }
  async export(gadget, id) {
    if (id !== "markdown") throw new Error("Unsupported document export format: " + id);
    const document = await gadget.getDocument();
    const html = document.blocks ? document.blocks.map((block) => block.html).join("") : document.legacyContent || "";
    return new Response(htmlToMarkdown(html)).body;
  }
};
function htmlToMarkdown(html) {
  const tokens = String(html).match(/<!--[\s\S]*?-->|<![^>]*>|<[^>]+>|[^<]+/g) || [];
  const lists = [];
  const links = [];
  const blockquotes = [];
  let markdown = "";
  let inPre = false;
  for (const token of tokens) {
    if (!token.startsWith("<")) {
      let text = decodeHtml(token);
      if (!inPre) {
        text = text.replace(/\s+/g, " ").replace(/([\\*_[\]])/g, "\\$1");
      }
      markdown += text;
      continue;
    }
    if (token.startsWith("<!--") || token.startsWith("<!")) continue;
    const match = /^<\s*(\/?)\s*([a-z0-9]+)([^>]*)>/i.exec(token);
    if (!match) continue;
    const closing = match[1] === "/";
    const tag = match[2].toLowerCase();
    const attributes = match[3];
    if (closing) {
      switch (tag) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
        case "p":
        case "div":
          markdown += "\n\n";
          break;
        case "blockquote": {
          const start = blockquotes.pop();
          const content = markdown.slice(start).trim().replace(/\n{3,}/g, "\n\n");
          const quoted = content ? content.split("\n").map((line) => line ? "> " + line : ">").join("\n") : ">";
          markdown = markdown.slice(0, start) + quoted + "\n\n";
          break;
        }
        case "strong":
        case "b":
          markdown += "**";
          break;
        case "em":
        case "i":
          markdown += "*";
          break;
        case "s":
        case "strike":
        case "del":
          markdown += "~~";
          break;
        case "code":
          if (!inPre) markdown += "`";
          break;
        case "pre":
          markdown += "\n```\n\n";
          inPre = false;
          break;
        case "a":
          markdown += "](" + (links.pop() || "") + ")";
          break;
        case "li":
          if (!markdown.endsWith("\n")) markdown += "\n";
          break;
        case "ul":
        case "ol":
          lists.pop();
          break;
        case "td":
        case "th":
          markdown += "	";
          break;
        case "tr":
          markdown += "\n";
          break;
      }
      continue;
    }
    switch (tag) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
        markdown += "\n\n" + "#".repeat(Number(tag[1])) + " ";
        break;
      case "p":
      case "div":
        markdown += "\n\n";
        break;
      case "br":
        markdown += "  \n";
        break;
      case "strong":
      case "b":
        markdown += "**";
        break;
      case "em":
      case "i":
        markdown += "*";
        break;
      case "s":
      case "strike":
      case "del":
        markdown += "~~";
        break;
      case "code":
        if (!inPre) markdown += "`";
        break;
      case "pre":
        markdown += "\n\n```\n";
        inPre = true;
        break;
      case "blockquote":
        markdown += "\n\n";
        blockquotes.push(markdown.length);
        break;
      case "hr":
        markdown += "\n\n---\n\n";
        break;
      case "ul":
        lists.push({ type: "ul", count: 0 });
        break;
      case "ol":
        lists.push({ type: "ol", count: 0 });
        break;
      case "li": {
        const list = lists.at(-1) || { type: "ul", count: 0 };
        list.count += 1;
        markdown += (markdown.endsWith("\n") ? "" : "\n") + "  ".repeat(Math.max(0, lists.length - 1)) + (list.type === "ol" ? list.count + ". " : "- ");
        break;
      }
      case "a":
        links.push(readHtmlAttribute(attributes, "href"));
        markdown += "[";
        break;
      case "img": {
        const alt = readHtmlAttribute(attributes, "alt").replace(/[\\[\]]/g, "\\$&");
        markdown += "![" + alt + "](" + readHtmlAttribute(attributes, "src") + ")";
        break;
      }
    }
  }
  const clean = markdown.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
  return clean ? clean + "\n" : "";
}
function readHtmlAttribute(source, name) {
  const pattern = new RegExp(name + `\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i");
  const match = pattern.exec(source);
  return decodeHtml(match ? match[1] ?? match[2] ?? match[3] ?? "" : "");
}
function decodeHtml(value) {
  return String(value).replace(/&(#x[0-9a-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi, (_, entity) => {
    const lower = entity.toLowerCase();
    if (lower.startsWith("#x")) return String.fromCodePoint(Number.parseInt(lower.slice(2), 16));
    if (lower.startsWith("#")) return String.fromCodePoint(Number.parseInt(lower.slice(1), 10));
    const named = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
    return named[lower];
  });
}
export {
  ExportHandler,
  Gadget
};
