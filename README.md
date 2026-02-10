# 10years.photos.bradsiefert.com Site Setup
A personal photo project site built with **Nuxt 3** and **Nuxt Content**, presenting a curated collection of 70 photos organized into Places, People, and Instant Film, with about and endnotes sections.

## Tech stack
- **Nuxt 3** – Vue-based framework
- **@nuxt/content** – Document-driven content (Markdown) with `documentDriven: true`
- **Bootstrap 5** – Layout and components (via SCSS)
- **Sass** – Styles (`assets/scss/`: `app.scss`, `darkmode.scss`, `fontfaces.scss`)
- **Phosphor Icons** – Icon set
- **TypeScript** – Typed config and scripts

## Project structure
| Path | Purpose |
|------|--------|
| `content/` | Markdown content: index, table of contents, about, places (1–37), people (38–61), instant film (62–79), endnotes |
| `components/` | Vue components: `navbar`, `footie`, and content components (`cover`, `toc`, `aboutme`) |
| `layouts/` | `image-post.vue`, `text-post.vue` for content pages |
| `pages/` | `index.vue` (content-driven), `tableofcontents.vue` |
| `public/photos/` | Optimized images (places, people, instantfilm) |
| `10yearfullres/` | Full-resolution source images (70 + aboutme, day1) |
| `assets/` | Fonts, SCSS, images |

## Setup

Install dependencies:

```bash
npm install
```

## Development
Run the dev server at `http://localhost:3000`:

```bash
npm run dev
```

## Production
Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Generate a static site (if using SSG):

```bash
npm run generate
```

## Documentation
- [Nuxt 3](https://nuxt.com/docs/getting-started/introduction)
- [Nuxt Content](https://content.nuxt.com/)
- [Nuxt deployment](https://nuxt.com/docs/getting-started/deployment)
