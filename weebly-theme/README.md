# Myelektra Revenue Theme

Complete custom theme for **Myelektra.com** — AI-Powered Revenue Growth Partner.

## Two Deliverables

### 1. React SPA (Web Preview)
The React application in the parent directory serves as the live website preview. Run `npm run build` to generate the production build.

### 2. Weebly Theme (Static HTML)
The `weebly-theme/` directory contains static HTML/CSS files that can be uploaded directly to Weebly.

---

## Weebly Theme Upload Instructions

### Step 1: Prepare the ZIP file
1. Navigate to the `weebly-theme/` directory
2. Select ALL files in the root of this directory:
   - `index.html`
   - `main_style.css`
   - `manifest.json`
   - `solutions.html`
   - `solution-revenue-intelligence.html`
   - `solution-pipeline-builder.html`
   - `solution-revenue-engine.html`
   - `solution-ai-sales-transformation.html`
   - `solution-fractional-revenue-office.html`
   - `industries.html`
   - `how-it-works.html`
   - `pricing.html`
   - `academy.html`
   - `about.html`
   - `resources.html`
   - `consultation.html`
3. Compress these files into a ZIP archive

**Important:** All files must be in the ROOT of the ZIP archive. Do NOT include the `weebly-theme/` parent folder inside the ZIP. Any files in subdirectories will not be imported by Weebly.

### Step 2: Upload to Weebly
1. Log into your Weebly account
2. Go to **Design → Theme → Custom Theme**
3. Click **Upload Theme**
4. Select the ZIP file you created
5. Weebly will validate and import the theme

### Step 3: Assign Page Templates
After upload, go to **Pages** and assign each page the correct layout template:
- Homepage → "Homepage" (default)
- Solutions → "Solutions"
- Each solution page → corresponding solution detail template
- Industries → "Industries"
- How It Works → "How It Works"
- Pricing → "Pricing"
- Academy → "Myelektra Academy"
- About → "About"
- Resources → "Resources"
- Consultation → "Book Consultation"

---

## File Structure

```
weebly-theme/
├── index.html                              # Homepage (all 10 sections)
├── main_style.css                          # Complete CSS (responsive + animations)
├── manifest.json                           # Theme metadata
├── solutions.html                          # Solutions overview
├── solution-revenue-intelligence.html      # Revenue Intelligence detail
├── solution-pipeline-builder.html          # Pipeline Builder detail
├── solution-revenue-engine.html            # Revenue Engine detail
├── solution-ai-sales-transformation.html   # AI Sales Transformation detail
├── solution-fractional-revenue-office.html # Fractional Revenue Office detail
├── industries.html                         # Industries page
├── how-it-works.html                       # How It Works page
├── pricing.html                            # Pricing page
├── academy.html                            # Myelektra Academy page
├── about.html                              # About page
├── resources.html                          # Resources page
├── consultation.html                       # Book a Consultation page
└── README.md                               # This file
```

---

## Theme Features

### Brand Identity
- **Primary Color:** #0F1B2D (dark navy)
- **Secondary Color:** #1A73E8 (electric blue)
- **Accent Color:** #00C896 (teal green)
- **Gold Badge:** #FFB800
- **Typography:** Plus Jakarta Sans (headings), Inter (body), JetBrains Mono (data/stats)

### Components
- Sticky navigation with transparent-to-solid scroll effect
- Solutions dropdown menu
- Full-screen mobile hamburger menu
- Scroll-triggered animations (Intersection Observer API)
- Floating CTA bar (dismissible)
- Back to top button
- Cookie consent banner
- Timeline/process steps component
- Solution cards with feature lists
- Country targeting cards with flag accents
- Pricing comparison cards
- Article cards for resources
- Consultation form with validation

### Accessibility
- WCAG AA focus styles
- Semantic HTML5 elements
- Keyboard navigation support
- ARIA labels on interactive elements
- Minimum 44px touch targets on mobile

### All Content Hardcoded
Every page contains all content directly in the HTML — no Weebly drag-and-drop content areas needed for main content. The theme looks complete and professional immediately upon upload.

---

## Customization Notes

### Colors
Edit CSS custom properties at the top of `main_style.css`:
```css
:root {
  --navy: #0F1B2D;
  --blue: #1A73E8;
  --teal: #00C896;
  /* etc. */
}
```

### Logo
The logo is an inline SVG in each HTML file. Search for the `<svg>` element containing the gradient ID pattern (`url(#...)`) and the "Myelektra" text to update it.

### Contact Information
Search and replace `hello@myelektra.com` across all HTML files.

### Adding Blog Posts
The Resources page uses static article cards. To add dynamic blog content, integrate Weebly's blog functionality or replace the static cards with Weebly's `{content}` tag area.

---

## Disclaimer
"Meetings and revenue outcomes are not guaranteed. Results depend on market conditions, offer relevance, buyer readiness, domain reputation, and the client's sales process."
