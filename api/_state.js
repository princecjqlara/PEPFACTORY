const memoryStore = (globalThis.__pepfactoryStore ||= {
  community: {},
  accounts: {},
});

function getSupabaseConfig() {
  return {
    url: process.env.SUPABASE_URL,
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
    chat: mergeRecords(existing.chat, incoming.chat, { limit: 140 }),
    directMessages: mergeRecords(existing.directMessages, incoming.directMessages, { limit: 300 }),
    announcements: mergeRecords(existing.announcements, incoming.announcements, { limit: 30, descending: true }),
    receipts: mergeRecords(existing.receipts, incoming.receipts, { limit: 24, descending: true }),
    dataResetAt: resetAt,
  };
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
    merged.chat = (merged.chat || []).filter((message) => (Number(message.createdAt) || 0) > resetAt);
    merged.directMessages = (merged.directMessages || []).filter((message) => (Number(message.createdAt) || 0) > resetAt);
    merged.announcements = (merged.announcements || []).filter((announcement) => (Number(announcement.createdAt) || 0) > resetAt);
    merged.receipts = (merged.receipts || []).filter((receipt) => (Number(receipt.createdAt) || 0) > resetAt);
  }
  return merged;
}

async function getAppState(key) {
  const config = getSupabaseConfig();
  if (!config.url || !config.key) return memoryStore[key] || {};
  const response = await fetch(`${config.url}/rest/v1/app_state?key=eq.${encodeURIComponent(key)}&select=value`, {
    headers: {
      apikey: config.key,
      Authorization: `Bearer ${config.key}`,
    },
  });
  if (!response.ok) return memoryStore[key] || {};
  const rows = await response.json();
  return rows[0]?.value || memoryStore[key] || {};
}

async function setAppState(key, value) {
  memoryStore[key] = value;
  const config = getSupabaseConfig();
  if (!config.url || !config.key) return value;
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
}

module.exports = {
  getAppState,
  mergeCommunityState,
  readJsonBody,
  setAppState,
};
