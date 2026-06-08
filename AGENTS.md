# AGENTS.md

## Cursor Cloud specific instructions

### Product overview

Single Nuxt 3 photo-book site ("10 Years of Photos by Brad Siefert"). Markdown content lives in `content/`; no database, Docker, or env vars are required.

### Services

| Service | Command | Port | Notes |
|---------|---------|------|-------|
| Nuxt dev server | `npm run dev` | 3000 | Only required service for local development |

Optional: `npm run build` then `npm run preview` for production preview; `npm run generate` for static export.

### Standard commands

See `README.md` for full setup. Quick reference:

- Install: `npm install` (runs `nuxt prepare` via postinstall)
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

There are no lint or test scripts in `package.json`.

### Gotchas

- **Do not run `npm run build` while `npm run dev` is active.** Both mutate `.nuxt/`; a concurrent build can leave the dev server in a broken state (`#internal/nuxt/paths` import errors). If that happens, stop dev, run `rm -rf .nuxt && npx nuxt prepare`, then restart dev.
- **Missing static assets:** `public/photos/` and several cover images (`public/intro-photos.webp`, etc.) are not in the repo. The app runs and renders Markdown, but photo `<img>` tags will 404 until assets are added.
- **Content routes** use Nuxt Content paths derived from folder names, e.g. `/places/06`, `/about/02`, `/people/38`, `/tableofcontents` (not `/about` or `/places/01`).
- **Node:** Works on Node 22.x (tested). No `engines` field or `.nvmrc` in repo.
