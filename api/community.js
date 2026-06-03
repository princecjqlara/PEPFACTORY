const { getAppState, mergeCommunityState, readJsonBody, setAppState } = require("./_state");

module.exports = async function handler(req, res) {
  try {
    if (req.method === "GET") {
      res.status(200).json(await getAppState("community"));
      return;
    }

    if (req.method === "POST") {
      const incoming = await readJsonBody(req);
      const existing = await getAppState("community");
      const community = mergeCommunityState(existing, incoming);
      res.status(200).json(await setAppState("community", community));
      return;
    }

    res.setHeader("Allow", "GET, POST");
    res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    res.status(500).json({ error: error.message || "Community API failed" });
  }
};
