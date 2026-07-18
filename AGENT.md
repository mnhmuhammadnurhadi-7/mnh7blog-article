# AGENT.md

Dokumen ini adalah context untuk AI agent (Claude Code, Cursor, dll) yang bekerja di repo ini.
Baca dulu sebelum melakukan perubahan apapun.

## Tentang Project Ini

Blog personal + portofolio SEO milik Muhammad Nur Hadi. Dibangun pakai Astro (static site
generator), di-deploy ke Vercel. Tujuan project: showcase kemampuan SEO teknis owner
(meta tag, canonical, schema, sitemap) — bukan sekadar blog biasa. Jadi setiap perubahan
kode harus tetap menjaga aspek SEO yang sudah di-setup, jangan dihapus/disederhanakan
tanpa konfirmasi.

## Stack

- **Framework**: Astro 7.1.1 (static output, bukan SSR)
- **Content**: Markdown/MDX lewat Astro Content Collections; konfigurasi konten berada di `src/content.config.ts`.
- **Styling**: belum ada CSS framework terpasang — kalau menambahkan, tanya dulu preferensi
  (Tailwind vs vanilla CSS) sebelum install
- **Hosting**: Vercel (auto-deploy dari branch `main`)
- **Bahasa konten**: Bahasa Indonesia (`lang="id"` di semua halaman)

## Struktur Folder

```
src/
  content/
    config.ts          # schema frontmatter artikel (JANGAN ubah field wajib tanpa alasan kuat)
    blog/*.md           # artikel, 1 file per artikel
  layouts/
    BaseLayout.astro    # SEMUA meta tag SEO ada di sini (title, description, OG, canonical, JSON-LD)
  pages/
    index.astro          # homepage
    blog/index.astro      # halaman "My Article" — list + search + filter tahun
    blog/[slug].astro     # halaman detail artikel (dynamic route)
    rss.xml.js            # RSS feed, auto-generate dari content collection
public/
  robots.txt             # jangan lupa update kalau domain final berubah
astro.config.mjs         # field `site` HARUS selalu sesuai domain production
```

## Aturan Wajib (Jangan Dilanggar)

1. **Setiap artikel baru wajib punya** `title`, `description` (120–160 karakter, bukan
   copy kalimat pertama artikel), `pubDate`. Field lain opsional.
2. **Kalau artikel adalah republish dari media lain** (misal Jurnalpost), WAJIB isi
   `canonicalUrl` di frontmatter mengarah ke sumber asli. Ini mencegah duplicate content
   di mata Google. Jangan pernah menghapus field ini dari artikel yang sudah punya.
3. **Jangan hardcode meta tag di halaman individual** — semua meta tag SEO harus lewat
   props ke `BaseLayout.astro`, supaya konsisten dan gampang di-maintain.
4. **Satu H1 per halaman.** `title` di frontmatter otomatis jadi bagian dari `<title>` tag,
   dan H1 di-render terpisah di `[slug].astro` — jangan tambah H1 lagi di body Markdown.
5. **`astro.config.mjs` field `site`** harus selalu sinkron dengan domain production aktif
   (dicek di Vercel dashboard), karena dipakai untuk generate canonical URL & sitemap.
6. **Jangan install plugin/dependency baru tanpa menjelaskan alasannya** ke user — user
   masih belajar, prioritaskan solusi yang minim dependency.

## Commands

```bash
npm install       # install dependency
npm run dev        # dev server di localhost:4321
npm run build       # build production, cek dulu sebelum push kalau ada perubahan besar
npm run preview      # preview hasil build production secara lokal
```

## Setelah Build

Astro otomatis generate:
- `sitemap-index.xml` (dari `@astrojs/sitemap`)
- `/rss.xml` (dari `src/pages/rss.xml.js`)

Selalu cek dua file ini ter-generate dengan benar setelah `npm run build`, terutama
setelah menambah/menghapus artikel.

## Konteks Tambahan tentang Owner

Owner sedang belajar SEO (framework 5-tier: Warrior–Legend–Mythic) dan lebih nyaman
membaca/menulis kode dibanding klik-klik UI visual (ini alasan project pindah dari
WordPress.com ke Astro). Kalau owner minta bantuan lewat AI agent, jelaskan perubahan
kode secara ringkas dan kaitkan ke konsep SEO yang relevan kalau memungkinkan — owner
menghargai pemahaman "kenapa", bukan cuma "apa"-nya.

## Progres Implementasi Desain

Desain system telah diimplementasikan berdasarkan `desain-instruksi.md` pada 18 Juli 2026:

### ✅ Selesai
- **Sistem warna (7 token)**: CSS variables untuk `--bg`, `--surface`, `--text-primary`, `--text-secondary`, `--accent`, `--accent-warn`, `--border`
- **Tipografi**: Import Google Fonts (Space Grotesk, IBM Plex Sans, IBM Plex Mono) dengan skala tipe sesuai brief
- **BaseLayout**: Header/footer dengan styling, navigation links, dan global CSS integration
- **Homepage**: Hero section dengan meta strip signature element, grid artikel terbaru
- **Halaman blog list**: Grid 3 kolom (desktop) → 1 kolom (mobile), search input, year filter chips
- **Halaman detail artikel**: 
  - Breadcrumb navigation
  - Meta strip signature element (tanggal, reading time, tags, canonical)
  - TOC (sticky sidebar desktop, collapsible accordion mobile)
  - Progress bar baca (2px, warna accent)
  - Artikel terkait (3 card)
  - Attribution canonical dengan aksen warna
- **Komponen**: Tombol (radius 4px), tag/badge (warna accent-warn), card (border tipis, no shadow)
- **Responsif**: Breakpoint desktop (>1024px), tablet (768-1024px), mobile (<768px)
- **Aksesibilitas**: Focus states, `prefers-reduced-motion` support, kontras warna AA

### 📁 File yang diubah/dibuat
- `src/styles/global.css` (baru) - CSS variables dan global styles
- `src/layouts/BaseLayout.astro` - Font imports dan layout styling
- `src/pages/index.astro` - Homepage redesign dengan meta strip
- `src/pages/blog/index.astro` - Blog list dengan grid 3 kolom dan filter
- `src/pages/blog/[slug].astro` - Article detail dengan TOC, progress bar, meta strip

### 🎨 Desain decisions
- Menggunakan IBM Plex Mono untuk metadata (reading time, tanggal, tags) untuk kesan "developer comment"
- Warna accent teal (#0F9C8C) melambangkan "data/analitis" sesuai positioning
- Card hover hanya border color change (150ms), tanpa shadow/scale untuk kesan presisi
- Lebar konten artikel max 680px untuk optimal reading experience
- Progress bar hanya 2px tipis di atas halaman, fungsional bukan dekoratif
