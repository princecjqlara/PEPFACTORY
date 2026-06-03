const memoryStore = (globalThis.__pepfactoryStore ||= {
  community: {},
  accounts: {},
});

function getSupabaseUrl() {
  const configuredUrl = String(process.env.SUPABASE_URL || "").trim().replace(/\/+$/, "");
  const databaseUrl = String(process.env.DATABASE_URL || "").trim();
  const databaseProjectRef = databaseUrl.match(/(?:^|\/\/)(?:[^@]+@)?db\.([a-z0-9-]+)\.supabase\.co/i)?.[1];
  if (!databaseProjectRef) return configuredUrl;

  const derivedUrl = `https://${databaseProjectRef}.supabase.co`;
  try {
    const configuredHost = configuredUrl ? new URL(configuredUrl).hostname : "";
    if (!configuredHost || configuredHost.split(".")[0] !== databaseProjectRef) return derivedUrl;
  } catch {
    return derivedUrl;
  }
  return configuredUrl;
}

function getSupabaseConfig() {
  return {
    url: getSupabaseUrl(),
    key: process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY,
  };
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 2 * 1024 * 1024) {
        reject(new Error("Request too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body ? JSON.parse(body) : {}));
    req.on("error", reject);
  });
}

function mergeRecords(existingRecords = [], incomingRecords = [], options = {}) {
  const byId = new Map();
  const addRecord = (record, prefer) => {
    const id = record?.id;
    if (!id) return;
    if (prefer || !byId.has(id)) byId.set(id, record);
  };
  (Array.isArray(existingRecords) ? existingRecords : []).forEach((record) => addRecord(record, false));
  (Array.isArray(incomingRecords) ? incomingRecords : []).forEach((record) => addRecord(record, true));
  const sorted = [...byId.values()].sort((a, b) => {
    const diff = (Number(a.createdAt) || 0) - (Number(b.createdAt) || 0);
    return options.descending ? -diff : diff;
  });
  return options.limit ? sorted.slice(options.descending ? 0 : -options.limit) : sorted;
}

function normalizeDeletedAtMap(deletedAt = {}) {
  if (!deletedAt || typeof deletedAt !== "object" || Array.isArray(deletedAt)) return {};
  return Object.fromEntries(
    Object.entries(deletedAt)
      .map(([recordId, timestamp]) => [String(recordId || "").trim(), Math.max(0, Number(timestamp) || 0)])
      .filter(([recordId, timestamp]) => recordId && timestamp > 0),
  );
}

function mergeDeletedAtMaps(...deletedAtMaps) {
  return deletedAtMaps.reduce((merged, deletedAt) => {
    Object.entries(normalizeDeletedAtMap(deletedAt)).forEach(([recordId, timestamp]) => {
      merged[recordId] = Math.max(Number(merged[recordId]) || 0, timestamp);
    });
    return merged;
  }, {});
}

function isDeleted(recordId, deletedAt = {}, updatedAt = 0) {
  const deletedTimestamp = Number(deletedAt?.[recordId]) || 0;
  return deletedTimestamp > 0 && deletedTimestamp > (Number(updatedAt) || 0);
}

function withActiveProductCategory(product, categoryDeletedAt = {}) {
  const categoryDeletedTimestamp = Number(categoryDeletedAt?.[product?.category]) || 0;
  if (!categoryDeletedTimestamp || categoryDeletedTimestamp <= (Number(product?.updatedAt) || 0)) return product;
  return { ...product, category: "General", updatedAt: categoryDeletedTimestamp };
}

function getReplacementSignalId(entry) {
  const createdAt = Number(entry?.createdAt) || 0;
  return createdAt ? String(createdAt) : "";
}

function applyDeletionMarkers(community) {
  if (Array.isArray(community.products)) {
    community.products = community.products
      .filter((product) => !isDeleted(product?.id, community.productDeletedAt, product?.updatedAt))
      .map((product) => withActiveProductCategory(product, community.productCategoryDeletedAt));
  }
  if (Array.isArray(community.productCategories)) {
    community.productCategories = community.productCategories.filter(
      (category) => category && !isDeleted(category, community.productCategoryDeletedAt, community.productCategoryUpdatedAt?.[category]),
    );
  }
  if (Array.isArray(community.chat)) {
    community.chat = community.chat.filter((message) => !isDeleted(message?.id, community.chatDeletedAt));
  }
  if (Array.isArray(community.directMessages)) {
    community.directMessages = community.directMessages.filter((message) => !isDeleted(message?.id, community.directMessageDeletedAt));
  }
  if (Array.isArray(community.announcements)) {
    community.announcements = community.announcements.filter((announcement) => !isDeleted(announcement?.id, community.announcementDeletedAt));
  }
  if (community.members && typeof community.members === "object") {
    community.members = Object.fromEntries(Object.entries(community.members).filter(([memberId, member]) => !isDeleted(memberId, community.memberDeletedAt, getMemberUpdatedAt(member))));
  }
  if (community.moderation) {
    community.moderation.blocked = Object.fromEntries(Object.entries(community.moderation.blocked || {}).filter(([memberId]) => !isDeleted(memberId, community.memberDeletedAt)));
    community.moderation.timeouts = Object.fromEntries(Object.entries(community.moderation.timeouts || {}).filter(([memberId]) => !isDeleted(memberId, community.memberDeletedAt)));
    community.moderation.replacements = (community.moderation.replacements || []).filter(
      (entry) =>
        !isDeleted(getReplacementSignalId(entry), community.replacementDeletedAt) &&
        !isDeleted(entry?.previous, community.memberDeletedAt) &&
        !isDeleted(entry?.next, community.memberDeletedAt),
    );
  }
  if (community.trollControls) {
    community.trollControls.trollAccounts = (community.trollControls.trollAccounts || []).filter((account) =>
      !isDeleted(account, community.memberDeletedAt, getMemberUpdatedAt(community.members?.[account])),
    );
    community.trollControls.rules = (community.trollControls.rules || []).filter(
      (rule) => !isDeleted(rule?.id, community.trollRuleDeletedAt) && !isDeleted(rule?.account, community.memberDeletedAt, getMemberUpdatedAt(community.members?.[rule?.account])),
    );
  }
  return community;
}

function pruneDeletedAtMap(deletedAt, resetAt) {
  return Object.fromEntries(Object.entries(normalizeDeletedAtMap(deletedAt)).filter(([, timestamp]) => timestamp > resetAt));
}

function getMemberUpdatedAt(member) {
  return Math.max(Number(member?.joinedAt) || 0, Number(member?.lastSeen) || 0);
}

function pruneDeletionMarkersAfterReset(community, resetAt) {
  [
    "productDeletedAt",
    "productCategoryUpdatedAt",
    "productCategoryDeletedAt",
    "announcementDeletedAt",
    "chatDeletedAt",
    "directMessageDeletedAt",
    "memberDeletedAt",
    "replacementDeletedAt",
    "trollRuleDeletedAt",
  ].forEach((key) => {
    community[key] = pruneDeletedAtMap(community[key], resetAt);
  });
}

function mergeCommunityState(existing = {}, incoming = {}) {
  const resetAt = Math.max(Number(existing.dataResetAt) || 0, Number(incoming.dataResetAt) || 0);
  const moderation = {
    ...(existing.moderation || {}),
    ...(incoming.moderation || {}),
    clearChatAt: Math.max(Number(existing.moderation?.clearChatAt) || 0, Number(incoming.moderation?.clearChatAt) || 0),
    clearReceiptsAt: Math.max(Number(existing.moderation?.clearReceiptsAt) || 0, Number(incoming.moderation?.clearReceiptsAt) || 0),
  };
  const merged = {
    ...existing,
    ...incoming,
    moderation,
    productDeletedAt: mergeDeletedAtMaps(existing.productDeletedAt, incoming.productDeletedAt),
    productCategoryUpdatedAt: mergeDeletedAtMaps(existing.productCategoryUpdatedAt, incoming.productCategoryUpdatedAt),
    productCategoryDeletedAt: mergeDeletedAtMaps(existing.productCategoryDeletedAt, incoming.productCategoryDeletedAt),
    announcementDeletedAt: mergeDeletedAtMaps(existing.announcementDeletedAt, incoming.announcementDeletedAt),
    chatDeletedAt: mergeDeletedAtMaps(existing.chatDeletedAt, incoming.chatDeletedAt),
    directMessageDeletedAt: mergeDeletedAtMaps(existing.directMessageDeletedAt, incoming.directMessageDeletedAt),
    memberDeletedAt: mergeDeletedAtMaps(existing.memberDeletedAt, incoming.memberDeletedAt),
    replacementDeletedAt: mergeDeletedAtMaps(existing.replacementDeletedAt, incoming.replacementDeletedAt),
    trollRuleDeletedAt: mergeDeletedAtMaps(existing.trollRuleDeletedAt, incoming.trollRuleDeletedAt),
    chat: mergeRecords(existing.chat, incoming.chat, { limit: 140 }),
    directMessages: mergeRecords(existing.directMessages, incoming.directMessages, { limit: 300 }),
    announcements: mergeRecords(existing.announcements, incoming.announcements, { limit: 30, descending: true }),
    receipts: mergeRecords(existing.receipts, incoming.receipts, { limit: 24, descending: true }),
    dataResetAt: resetAt,
  };
  applyDeletionMarkers(merged);
  if (moderation.clearChatAt) {
    merged.chat = (merged.chat || []).filter((message) => message.type === "receipt" || (Number(message.createdAt) || 0) > moderation.clearChatAt);
    merged.announcements = (merged.announcements || []).filter((announcement) => (Number(announcement.createdAt) || 0) > moderation.clearChatAt);
  }
  if (moderation.clearReceiptsAt) {
    merged.receipts = (merged.receipts || []).filter((receipt) => (Number(receipt.createdAt) || 0) > moderation.clearReceiptsAt);
    merged.chat = (merged.chat || []).filter((message) => message.type !== "receipt" || (Number(message.createdAt) || 0) > moderation.clearReceiptsAt);
    merged.directMessages = (merged.directMessages || []).filter((message) => !message.receiptId || (Number(message.createdAt) || 0) > moderation.clearReceiptsAt);
  }
  if (resetAt) {
    pruneDeletionMarkersAfterReset(merged, resetAt);
    merged.chat = (merged.chat || []).filter((message) => (Number(message.createdAt) || 0) > resetAt);
    merged.directMessages = (merged.directMessages || []).filter((message) => (Number(message.createdAt) || 0) > resetAt);
    merged.announcements = (merged.announcements || []).filter((announcement) => (Number(announcement.createdAt) || 0) > resetAt);
    merged.receipts = (merged.receipts || []).filter((receipt) => (Number(receipt.createdAt) || 0) > resetAt);
  }
  applyDeletionMarkers(merged);
  return merged;
}

async function getAppState(key) {
  const config = getSupabaseConfig();
  if (!config.url || !config.key) return memoryStore[key] || {};
  try {
    const response = await fetch(`${config.url}/rest/v1/app_state?key=eq.${encodeURIComponent(key)}&select=value`, {
      headers: {
        apikey: config.key,
        Authorization: `Bearer ${config.key}`,
      },
    });
    if (!response.ok) return memoryStore[key] || {};
    const rows = await response.json();
    return rows[0]?.value || memoryStore[key] || {};
  } catch {
    return memoryStore[key] || {};
  }
}

async function setAppState(key, value) {
  memoryStore[key] = value;
  const config = getSupabaseConfig();
  if (!config.url || !config.key) return value;
  try {
    const response = await fetch(`${config.url}/rest/v1/app_state`, {
      method: "POST",
      headers: {
        apikey: config.key,
        Authorization: `Bearer ${config.key}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates,return=representation",
      },
      body: JSON.stringify([{ key, value }]),
    });
    if (!response.ok) return value;
    const rows = await response.json();
    return rows[0]?.value || value;
  } catch {
    return value;
  }
}

module.exports = {
  getAppState,
  mergeCommunityState,
  readJsonBody,
  setAppState,
};
