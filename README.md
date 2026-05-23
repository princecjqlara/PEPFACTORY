# pepfactory Anonymous Group Sales Prototype

Browser prototype for an anonymous group sales system.

Included flows:

- Anonymous group chat
- Anonymous receipts
- Built-in product store and cart
- Preorder (Bulk Buy) and Flash Pools
- Sale banners on products
- Golden Ticket checkout draw every 50th transaction
- Preorder (Bulk Buy) discount tiers with automatic partial refund display

Run the shared local server for connected group chat:

```bash
node server.js
```

Then open `http://127.0.0.1:5173`. Chat, receipts, announcements, buyer counts, and accounts are shared through the local server. Opening `index.html` directly only uses isolated browser storage.
