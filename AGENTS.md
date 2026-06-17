# AGENTS.md

## Cursor Cloud specific instructions

This is a single-service static site built with **Nuxt 4** + **@nuxt/content** (Markdown content collections). There is no backend API, database server, or authentication to run — `@nuxt/content` uses a bundled SQLite (`better-sqlite3`) at build/dev time only.

### Service: Nuxt site
- Package manager is **npm** (`package-lock.json`). Node 22 is used.
- `npm install` runs `nuxt prepare` via the `postinstall` hook, which generates `.nuxt` types. This is required after dependency changes.
- Run dev server: `npm run dev` (serves at `http://localhost:3000`). Content slugs are catch-all routes like `/places/06`, `/people/38`, `/about/02`, `/instantfilm/62`, `/endnotes/80`; valid links are listed on `/tableofcontents`.
- Static build (what Netlify runs): `npm run generate` (prerenders all routes into `dist/`; `nitro` preset is `netlify-static`). `npm run build` and `npm run preview` also work.
- There are **no lint or test scripts** defined in `package.json`.

### Notes
- The `10yearfullres/` directory holds full-resolution source images and is not used by the running app; optimized images served by the app live under `public/photos/`.
