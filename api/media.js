const crypto = require("crypto");

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

async function readBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");

  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 4 * 1024 * 1024) {
        reject(new Error("Request too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body ? JSON.parse(body) : {}));
    req.on("error", reject);
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { cloudName, apiKey, apiSecret } = getCloudinaryConfig();
    if (!cloudName || !apiKey || !apiSecret) {
      res.status(500).json({ error: "Cloudinary credentials are not configured" });
      return;
    }

    const media = await readBody(req);
    const dataUrl = String(media.file || "");
    if (!dataUrl.startsWith("data:")) {
      res.status(400).json({ error: "Media upload must be a data URL" });
      return;
    }

    const contentType = dataUrl.slice(5, dataUrl.indexOf(";")) || String(media.type || "");
    if (!/^(image|video)\//.test(contentType)) {
      res.status(400).json({ error: "Only image and video uploads are allowed" });
      return;
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const signedParams = {
      folder: "pepfactory",
      timestamp,
    };
    const form = new URLSearchParams({
      ...signedParams,
      api_key: apiKey,
      file: dataUrl,
      signature: signCloudinaryParams(signedParams, apiSecret),
    });

    const uploadResponse = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form,
    });
    const result = await uploadResponse.json();
    if (!uploadResponse.ok) {
      res.status(uploadResponse.status).json({ error: result.error?.message || "Cloudinary upload failed" });
      return;
    }

    res.status(200).json({
      url: result.secure_url,
      publicId: result.public_id,
      type: result.resource_type,
      contentType,
      name: media.name || result.original_filename || "media",
    });
  } catch (error) {
    res.status(500).json({ error: error.message || "Media upload failed" });
  }
};
