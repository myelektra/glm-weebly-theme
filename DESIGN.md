# DESIGN.md — Myelektra Weebly Theme

## Architecture

### Dual Output Strategy
Single source of truth (React/Vite) generates modern web app.  
Weebly theme is independently maintained static HTML — manually synced.

**Why not SSR/SSG:** Weebly requires static HTML upload. React build uses `vite-plugin-singlefile` to inline all CSS/JS into one HTML for the web version.

### Theme Structure (Weebly)
Simple custom theme format (not Developer Theme):
- `index.html` — main template (all sections inline)
- `main_style.css` — all styles
- No subdirectories in zip (Weebly ignores subfolders)
- 13 HTML pages total

## Design Decisions

### Logo Text
- "myelektra" (lowercase) + ".com" (blue #1877F2)
- "myelektra" is 2x height of ".com" (28px : 14px)
- Flexbox with `align-items: baseline` keeps text aligned
- **Reason:** Brand emphasis on "myelektra" while keeping ".com" readable

### Logo Format
- React Header/Footer: PNG from catbox CDN
- Weebly Header/Footer: PNG from catbox CDN
- **Reason:** Inline SVG had compatibility issues, PNG is simpler and consistent

### "Our Experience" Marquee
- 40 company logos in continuous scroll
- Grayscale by default → color on hover
- **CSS animation FAILED** because Weebly minifier strips `@keyframes 0% { transform }` regardless of value
- **Solution:** JS `requestAnimationFrame` loop with `cancelAnimationFrame` on hover

### Footer
- 4 columns: Brand, Solutions, Company, Contact
- Contact: PT. Myelektra Solusi Indonesia, +62 21 29636761, Book a Consultation
- Consistent across all 13 HTML pages
- Footer injected via `scripts/add-footer.mjs`

### SEO Schema
Per-page JSON-LD schemas:
| Page | Schema |
|------|--------|
| Home | Organization |
| About | AboutPage |
| Academy | Course |
| Consultation | Service + Offer |
| How It Works | HowTo |
| Solutions | ItemList |
| Solutions detail | Service |
| Industries, Pricing | WebPage |

## Image Hosting
catbox.moe (free, no signup, direct links).  
All 40 client logos + logo-myelektra.png uploaded via `scripts/upload-logos.mjs`.

## Weebly Quirks
1. **CSS minifier strips `0%` keyframe transform** — use JS animation
2. **No subdirectories in zip upload** — flatten all files
3. **Cache-busting via query string** — `?1784471123` appended to CSS/JS
4. **Simple custom theme** — only index.html + main_style.css recognized
