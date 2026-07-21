# Myelektra Content Editor — Cloudflare Pages

Web app untuk edit `content-config.json` lewat browser, lalu simpan ke GitHub.
Client tinggal edit form, klik Save — otomatis commit ke GitHub & trigger build.

## Fitur

- **Form view** — semua field teks diedit di form, terkelompok per section
- **Raw JSON view** — edit langsung JSON (buat AI/ChatGPT)
- **Download JSON** — export file, bisa diedit di AI tool, upload balik
- **Upload JSON** — import hasil editan AI
- **Save to GitHub** — commit otomatis ke repo → trigger Actions build

## Cara Deploy ke Cloudflare Pages

### 1. Buat GitHub Personal Access Token

- Buka https://github.com/settings/tokens
- Klik **Generate new token (classic)**
- Scope: pilih **repo** (full control)
- Generate, copy tokennya (misal: `ghp_xxxxxx`)

### 2. Deploy ke Cloudflare Pages

#### Via Dashboard (mudah)

1. Buka https://dash.cloudflare.com → **Pages**
2. Klik **Create a application** → **Pages** → **Connect to Git**
3. Pilih repo `myelektra/content-editor`
4. Set:
   - **Project name:** `myelektra-content-editor`
   - **Production branch:** `master`
   - **Build output directory:** `/` (root)
   - **Build command:** (kosongkan — static site)
5. Klik **Save and Deploy**

#### Set Environment Variable (secret)

1. Di halaman project Pages → **Settings** → **Environment variables**
2. Tambah:
   - **Name:** `GITHUB_TOKEN`
   - **Value:** `ghp_xxxxxx` (token dari step 1)
   - **Scope:** Production
3. Klik **Save**

#### Re-deploy

1. Klik **Deployments** → ⋮ → **Retry deployment**
2. Tunggu selesai (≈ 1 menit)

### 3. Buka App

URL: `https://myelektra-content-editor.pages.dev`

## Cara Pakai

1. Buka app
2. Form otomatis terisi dari `content-config.json` di GitHub
3. Edit teks yang ingin diubah
4. **Download JSON** — export file, kirim ke ChatGPT, minta edit, upload balik
5. **Upload JSON** — import hasil AI
6. **Save to GitHub** — simpan perubahan

## Catatan

- `GITHUB_TOKEN` harus punya akses **repo** ke `myelektra/glm-weebly-theme`
- Setiap Save → commit ke `master` → GitHub Actions (`build-weebly.yml`) jalan → build zip
- Download zip dari Actions → upload ke Weebly

