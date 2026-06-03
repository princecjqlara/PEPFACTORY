const { getAppState, readJsonBody, setAppState } = require("./_state");

module.exports = async function handler(req, res) {
  try {
    const accounts = await getAppState("accounts");

    if (req.method === "GET") {
      const username = String(req.query?.username || "");
      res.status(200).json(accounts[username] || null);
      return;
    }

    if (req.method === "POST") {
      const account = await readJsonBody(req);
      if (!account.username || !account.passwordHash) {
        res.status(400).json({ error: "username and passwordHash are required" });
        return;
      }
      accounts[account.username] = {
        username: account.username,
        passwordHash: account.passwordHash,
      };
      await setAppState("accounts", accounts);
      res.status(200).json({ ok: true });
      return;
    }

    if (req.method === "DELETE") {
      const username = String(req.query?.username || "");
      delete accounts[username];
      await setAppState("accounts", accounts);
      res.status(200).json({ ok: true });
      return;
    }

    res.setHeader("Allow", "GET, POST, DELETE");
    res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    res.status(500).json({ error: error.message || "Account API failed" });
  }
};
