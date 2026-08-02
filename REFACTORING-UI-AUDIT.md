# Refactoring UI Audit — glm-weebly-theme

Audit terhadap `weebly-theme/main_style.css` + 16 halaman HTML dan `src/index.css`,
memakai 8 Quick Diagnostic dari skill `refactoring-ui`.

**Skor: 6/10 → 10/10** (3 gap awal, semuanya sudah ditutup)

---

## 🔴 Temuan kritis: 5 judul kartu tidak terlihat

Bug asli, bukan sekadar isu estetika.

Section "Our Revenue Growth Solutions" (`index.html` baris 205+) memakai
`class="section-dark"`, jadi setiap judul kartu diberi inline `style="color:#fff"`.
Namun `.solution-card` pernah di-restyle menjadi **latar putih**
(komentar di CSS: *"Mengubah latar belakang menjadi putih bersih"*), sementara
inline putihnya tidak ikut dibersihkan.

Hasilnya teks putih di atas kartu putih — **rasio kontras 1.0:1**:

| Judul kartu yang hilang |
|---|
| Revenue Intelligence |
| Pipeline Builder |
| Revenue Engine (kartu "Most Popular") |
| AI Sales Transformation |
| Fractional Revenue Office |

Kelima nama produk utama praktis tidak terbaca di homepage. Sekarang **17.28:1**.

Perbaikannya dua lapis:
- inline `style="color:#fff"` dihapus dari HTML (sumber masalah), dan
- `.solution-card .card-title` dikunci `var(--navy) !important` supaya kartu putih
  tidak bisa lagi mewarisi teks putih.

Enam judul `.card-dark` di section yang sama memang **butuh** teks putih; itu
dipindah dari inline style ke aturan CSS `.card-dark .card-title`.

---

## Hasil per diagnostic

| # | Check | Sebelum | Sesudah |
|---|---|---|---|
| 1 | Hierarki lolos blur test | ✅ | ✅ |
| 2 | Tetap jalan di grayscale | ✅ | ✅ |
| 3 | White space cukup | ✅ | ✅ |
| 4 | Label lebih redup dari value | ✅ | ✅ |
| 5 | Spacing konsisten di satu skala | ❌ | ✅ |
| 6 | Lebar teks dibatasi | ✅ | ✅ |
| 7 | Kontras memadai | ❌ | ✅ |
| 8 | Shadow sesuai elevasi | ❌ | ✅ |

Yang sudah baik sejak awal: skala tipografi modular (12→60px), `max-width: 640px`
untuk teks, label uppercase 12–14px yang tidak bersaing dengan datanya, serta
alternasi section terang/gelap.

---

## Perbaikan #7 — Kontras (WCAG AA)

Aksen `--teal` sebenarnya berwarna biru `#1877F2`, hanya **4.23:1** di atas putih —
gagal untuk label 14px dan tombol putih-di-atas-aksen.

| Elemen | Sebelum | Sesudah |
|---|---|---|
| Judul solution-card | **1.00:1** | **17.28:1** |
| `--teal` di putih | 4.23:1 | **5.41:1** (`#1565D8`) |
| Teks putih di tombol aksen | 4.23:1 | **5.41:1** |
| Badge "Most Popular" di gold | 3.93:1 | **10.86:1** (`--on-gold`) |
| `.com` & link footer | 4.45:1 | **6.66:1** (`--teal-on-dark`) |

Menggelapkan `--teal` justru **menurunkan** kontras di footer near-black
(jadi 3.48:1), jadi ditambahkan token `--teal-on-dark: #4A9BFF` khusus permukaan gelap.
32 hex `#1877F2` yang di-hardcode di 16 file HTML kini memakai token.

**12/12 pasangan warna lolos AA.**

## Perbaikan #5 — Skala spacing

Nilai off-scale (`7px`, `28px`, `56px`) disesuaikan ke skala 4/8/16/24/32/48/64,
dan ditambahkan token `--space-*` serta `--radius-*`. Padding hero `128/160px`
sengaja dipertahankan sebagai oversize yang disengaja.

## Perbaikan #8 — Skala shadow

14 shadow ad-hoc → 4 token elevasi (`--shadow-sm/md/lg/xl`), masing-masing
dua lapis (bayangan gelap rapat + bayangan lembut) sesuai anjuran skill.
Hover solution-card `-6px`/glow biru pekat diturunkan ke `-4px` + `--shadow-xl`
agar seragam dengan kartu lain.

## Bonus — `prefers-reduced-motion`

Sebelumnya tidak ada sama sekali, padahal ada orb melayang, marquee, dan
scroll-reveal. Ditambahkan di kedua stylesheet; elemen `.anim` dipaksa
`opacity: 1` supaya konten tidak pernah tersangkut tak terlihat.

---

## Konsistensi dual-output

`src/index.css` disamakan: `--color-teal` `#1877F2`→`#1565D8`,
`--color-text-secondary` `#6B7280`→`#4B5563`, `--color-text-dark` → `#FFFFFF`.

## Verifikasi

- `npm run build` sukses (407.87 kB, 1.73s)
- Tag `<div>` balance & CSS brace balance OK
- 12/12 contrast check lolos AA

Render browser tidak bisa dijalankan (download Chromium diblokir sandbox),
jadi verifikasi bersifat statis — cascade, kontras terhitung, dan integritas build.
Sebaiknya lakukan cek visual sekali saat preview theme.
