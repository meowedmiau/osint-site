# osint.board

Static OSINT dashboard. No build step, no backend, no keys.

## Deploy (GitHub Pages)
1. Push to `main`.
2. Repo → Settings → Pages → Source: `Deploy from a branch` → `main` / `/ (root)`.
3. Live at `https://<user>.github.io/<repo>/`.

## Add a tool
Append an object to `data/tools.js`:
```js
{ id: "slug", category: "search", name: "Label", desc: "What it does.", template: "https://example.com/?q={q}" }