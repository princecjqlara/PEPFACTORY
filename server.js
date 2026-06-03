const http = require("http");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const dataDir = path.join(rootDir, ".data");
const communityPath = path.join(dataDir, "community.json");
const accountsPath = path.join(dataDir, "accounts.json");

loadEnv(path.join(rootDir, ".env"));

const port = Number(process.env.PORT || 5174);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

fs.mkdirSync(dataDir, { recursive: true });

function loadEnv(filePath) {
  try {
    const envFile = fs.readFileSync(filePath, "utf8");
    envFile.split(/\r?\n/).forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return;
      const separatorIndex = trimmed.indexOf("=");
      if (separatorIndex === -1) return;
      const key = trimmed.slice(0, separatorIndex).trim();
      const value = trimmed.slice(separatorIndex + 1).trim();
      if (key && !Object.hasOwn(process.env, key)) {
        process.env[key] = value;
      }
    });
  } catch {
    // Local env is optional.
  }
}

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2));
}

function sendJson(res, status, value) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(value));
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

function normalizeProductDeletedAt(deletedAt = {}) {
  if (!deletedAt || typeof deletedAt !== "object" || Array.isArray(deletedAt)) return {};
  return Object.fromEntries(
    Object.entries(deletedAt)
      .map(([productId, timestamp]) => [String(productId || "").trim(), Math.max(0, Number(timestamp) || 0)])
      .filter(([productId, timestamp]) => productId && timestamp > 0),
  );
}

function mergeProductDeletedAt(existingDeletedAt = {}, incomingDeletedAt = {}) {
  const merged = normalizeProductDeletedAt(existingDeletedAt);
  Object.entries(normalizeProductDeletedAt(incomingDeletedAt)).forEach(([productId, timestamp]) => {
    merged[productId] = Math.max(Number(merged[productId]) || 0, timestamp);
  });
  return merged;
}

function isProductDeleted(product, deletedAt = {}) {
  const deletedTimestamp = Number(deletedAt?.[product?.id]) || 0;
  return deletedTimestamp > 0 && deletedTimestamp > (Number(product?.updatedAt) || 0);
}

function mergeCommunityState(existing = {}, incoming = {}) {
  if (existing.dataResetVersion && incoming.dataResetVersion !== existing.dataResetVersion) {
    return existing;
  }
  const resetAt = Math.max(Number(existing.dataResetAt) || 0, Number(incoming.dataResetAt) || 0);

  const mergedModeration = {
    ...(existing.moderation || {}),
    ...(incoming.moderation || {}),
    clearChatAt: Math.max(Number(existing.moderation?.clearChatAt) || 0, Number(incoming.moderation?.clearChatAt) || 0),
    clearReceiptsAt: Math.max(Number(existing.moderation?.clearReceiptsAt) || 0, Number(incoming.moderation?.clearReceiptsAt) || 0),
  };
  const merged = {
    ...existing,
    ...incoming,
    moderation: mergedModeration,
    productDeletedAt: mergeProductDeletedAt(existing.productDeletedAt, incoming.productDeletedAt),
    chat: mergeRecords(existing.chat, incoming.chat, { limit: 140 }),
    directMessages: mergeRecords(existing.directMessages, incoming.directMessages, { limit: 300 }),
    announcements: mergeRecords(existing.announcements, incoming.announcements, { limit: 30, descending: true }),
    receipts: mergeRecords(existing.receipts, incoming.receipts, { limit: 24, descending: true }),
    dataResetAt: resetAt,
  };
  if (Array.isArray(merged.products)) {
    merged.products = merged.products.filter((product) => !isProductDeleted(product, merged.productDeletedAt));
  }

  if (mergedModeration.clearChatAt) {
    merged.chat = merged.chat.filter((message) => {
      if (message.type === "receipt") return true;
      return (Number(message.createdAt) || 0) > mergedModeration.clearChatAt;
    });
    merged.announcements = merged.announcements.filter((announcement) => (Number(announcement.createdAt) || 0) > mergedModeration.clearChatAt);
  }
  if (mergedModeration.clearReceiptsAt) {
    merged.receipts = merged.receipts.filter((receipt) => (Number(receipt.createdAt) || 0) > mergedModeration.clearReceiptsAt);
    merged.chat = merged.chat.filter((message) => message.type !== "receipt" || (Number(message.createdAt) || 0) > mergedModeration.clearReceiptsAt);
    merged.directMessages = merged.directMessages.filter((message) => !message.receiptId || (Number(message.createdAt) || 0) > mergedModeration.clearReceiptsAt);
  }
  if (resetAt) {
    merged.chat = (merged.chat || []).filter((message) => (Number(message.createdAt) || 0) > resetAt);
    merged.directMessages = (merged.directMessages || []).filter((message) => (Number(message.createdAt) || 0) > resetAt);
    merged.announcements = (merged.announcements || []).filter((announcement) => (Number(announcement.createdAt) || 0) > resetAt);
    merged.receipts = (merged.receipts || []).filter((receipt) => (Number(receipt.createdAt) || 0) > resetAt);
    merged.members = Object.fromEntries(
      Object.entries(merged.members || {}).filter(([, member]) => {
        const timestamp = Math.max(Number(member?.joinedAt) || 0, Number(member?.lastSeen) || 0);
        return timestamp > resetAt;
      }),
    );
  }

  return merged;
}

function readBody(req, maxBytes = 12 * 1024 * 1024) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > maxBytes) {
        reject(new Error("Request too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body ? JSON.parse(body) : {}));
    req.on("error", reject);
  });
}

function getCloudinaryConfig() {
  const urlMatch = process.env.CLOUDINARY_URL?.match(/^cloudinary:\/\/([^:]+):([^@]+)@(.+)$/);
  return {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || urlMatch?.[3],
    apiKey: process.env.CLOUDINARY_API_KEY || urlMatch?.[1],
    apiSecret: process.env.CLOUDINARY_API_SECRET || urlMatch?.[2],
  };
}

function signCloudinaryParams(params, apiSecret) {
  const signatureBase = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join("&");
  return crypto.createHash("sha1").update(`${signatureBase}${apiSecret}`).digest("hex");
}

async function uploadToCloudinary(media) {
  const { cloudName, apiKey, apiSecret } = getCloudinaryConfig();
  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error("Cloudinary credentials are not configured");
  }

  const dataUrl = String(media.file || "");
  if (!dataUrl.startsWith("data:")) {
    throw new Error("Media upload must be a data URL");
  }

  const contentType = dataUrl.slice(5, dataUrl.indexOf(";")) || String(media.type || "");
  if (!/^(image|video)\//.test(contentType)) {
    throw new Error("Only image and video uploads are allowed");
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const signedParams = {
    folder: "deti-chat",
    timestamp,
  };
  const form = new URLSearchParams({
    ...signedParams,
    api_key: apiKey,
    file: dataUrl,
    signature: signCloudinaryParams(signedParams, apiSecret),
  });

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: form,
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error?.message || "Cloudinary upload failed");
  }

  return {
    id: result.public_id,
    url: result.secure_url,
    type: result.resource_type,
    format: result.format,
    width: result.width || null,
    height: result.height || null,
    bytes: result.bytes || null,
    name: media.name || result.original_filename || "media",
  };
}

function serveStatic(req, res) {
  const requestPath = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname);
  const safePath = requestPath === "/" ? "index.html" : path.normalize(requestPath).replace(/^[/\\]+/, "").replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(rootDir, safePath);

  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  try {
    if (req.method === "GET" && url.pathname === "/api/community") {
      sendJson(res, 200, readJson(communityPath, {}));
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/community") {
      const incomingCommunity = await readBody(req);
      const existingCommunity = readJson(communityPath, {});
      const community = mergeCommunityState(existingCommunity, incomingCommunity);
      writeJson(communityPath, community);
      sendJson(res, 200, community);
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/account") {
      const username = url.searchParams.get("username") || "";
      const accounts = readJson(accountsPath, {});
      sendJson(res, 200, accounts[username] || null);
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/account") {
      const account = await readBody(req);
      if (!account.username || !account.passwordHash) {
        sendJson(res, 400, { error: "username and passwordHash are required" });
        return;
      }
      const accounts = readJson(accountsPath, {});
      accounts[account.username] = {
        username: account.username,
        passwordHash: account.passwordHash,
      };
      writeJson(accountsPath, accounts);
      sendJson(res, 200, { ok: true });
      return;
    }

    if (req.method === "DELETE" && url.pathname === "/api/account") {
      const username = url.searchParams.get("username") || "";
      const accounts = readJson(accountsPath, {});
      delete accounts[username];
      writeJson(accountsPath, accounts);
      sendJson(res, 200, { ok: true });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/media") {
      const media = await readBody(req, 18 * 1024 * 1024);
      sendJson(res, 200, await uploadToCloudinary(media));
      return;
    }

    if (req.method === "GET") {
      serveStatic(req, res);
      return;
    }

    res.writeHead(405);
    res.end("Method not allowed");
  } catch (error) {
    sendJson(res, 500, { error: error.message });
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`DETI server running at http://127.0.0.1:${port}`);
});
