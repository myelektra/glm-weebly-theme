# AGENTS.md — Myelektra Weebly Theme

## Project
React + Vite web app + standalone Weebly theme (static HTML).  
Two separate outputs share same design/logo/content.

## Key Files & Structure

```
/
├── src/                    # React app (Vite + Tailwind)
│   ├── components/         # Header, Footer, Layout
│   ├── pages/              # Home, About, Solutions, etc.
│   └── index.css           # Tailwind + imports main_style.css
├── weebly-theme/           # Static HTML theme for Weebly upload
│   ├── index.html          # Homepage (all sections inline)
│   ├── main_style.css      # Shared stylesheet
│   └── manifest.json       # Weebly theme metadata
├── public/                 # Static assets for React build
└── scripts/
    ├── sync-logo.mjs       # Copy logo → weebly-theme, replace SVG refs
    ├── add-footer.mjs      # Inject footer into weebly html files
    ├── seo-optimize.mjs    # Add meta/OG/schema/main tags
    └── upload-logos.mjs    # Upload images to catbox.moe CDN
```

## Build Commands
- `npm run dev` — React dev server (port 5173)
- `npm run build` — sync-logo + Vite build → `dist/index.html` (singlefile)
- `npm run sync-logo` — copy logo PNG to weebly-theme, replace inline SVG

## Weebly Theme Upload
Zip `weebly-theme/` contents (NO subdirectories, NO client_* files, NO README):
```
zip -r theme.zip *.html main_style.css manifest.json logo-myelektra.png
```
Upload via Weebly editor: Theme → Custom Theme → Upload.

## Images
All client logos hosted on catbox.moe (free CDN).  
Logo mapping saved in `weebly-theme/catbox-map.txt`.  
`logo-myelektra.png` also on catbox for Weebly builds.

## Weebly CSS Minifier Bug
Strips `0% { transform: translateX(N) }` from `@keyframes` (treats as identity regardless of value).  
**Fix:** Use JS `requestAnimationFrame` for marquee animations instead of CSS keyframes.  
See `scripts/upload-logos.mjs` and inline `<script>` in `index.html`.

## Footer & Header
- React Footer.tsx uses PNG + "myelektra.com" (white + blue #1877F2)
- React Header.tsx uses PNG + "myelektra.com" (black + blue #1877F2)
- "myelektra" 2x height of ".com" (28px vs 14px, baseline-aligned)
- Weebly footers: PT. Myelektra Solusi Indonesia + +62 21 29636761 added

## SEO / GEO / AIO
All HTML files have: meta description, OG tags, Twitter Card, canonical URL, JSON-LD schema per page type, `<main>` wrapper.

## Pending / Known Issues
- Client logos in `public/clients/` not used by React build (uses catbox URLs directly)
- `robots.txt` and `llms.txt` in weebly-theme but not critical for Weebly
