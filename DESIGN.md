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
- 14 HTML pages total (not counting client_* image files)

## Navigation

### Desktop Nav Order
`Home → Solutions (dropdown) → Industries → Pricing → Academy → About → Contact Us (dropdown)`

### Contact Us Dropdown
- **Get Quote Here** → `get-quote-here-new.html` (HubSpot form)
- **Book Online Meeting** → `consultation.html` (HubSpot Meetings)

### How It Works
Hidden from all nav menus (desktop & mobile). Page remains accessible via direct URL.

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
- Company: About, Industries, Academy (How It Works removed 2025-07)
- Contact: PT. Myelektra Solusi Indonesia, +62 21 29636761, Get Quote Here, Book Online Meeting, Book a Consultation
- Consistent across all HTML pages
- Footer injected via `scripts/add-footer.mjs`

### HubSpot Integrations
- **Consultation** → HubSpot Meetings embed (no form)
- **Get Quote Here** → HubSpot Forms embed (portal 3306812)

### Contact Page (`contact-new.html` / React `/contact`)
- Corporate office: 38th Floor, 88 Office, Kota Kasablanka, South Jakarta, Indonesia
- Contact: PT. Myelektra Solusi Indonesia, +62 21 29636761
- Hours: Weekdays 9:00–18:00
- Google Maps iframe pointing to 88 Office

## SEO Schema
Per-page JSON-LD schemas:
| Page | Schema |
|------|--------|
| Home | Organization |
| About | AboutPage |
| Academy | Course |
| Consultation | Service + Offer |
| How It Works | HowTo |
| Contact | ContactPage |
| Solutions | ItemList |
| Solutions detail | Service |
| Industries, Pricing, Get Quote | WebPage |

## Image Hosting
catbox.moe (free, no signup, direct links).  
All 40 client logos + logo-myelektra.png uploaded via `scripts/upload-logos.mjs`.

## Weebly Quirks
1. **CSS minifier strips `0%` keyframe transform** — use JS animation
2. **No subdirectories in zip upload** — flatten all files
3. **Cache-busting via query string** — `?1784471123` appended to CSS/JS
4. **Simple custom theme** — only index.html + main_style.css recognized
