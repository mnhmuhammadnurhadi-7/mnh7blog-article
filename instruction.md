# mnhblog — Astro Blog Starter

## Setup Lokal

```bash
npm install
npm run dev
```
Buka `http://localhost:4321`

## Struktur Penting

| Path | Fungsi |
|---|---|
| `src/content/blog/*.md` | Tulis artikel baru di sini (Markdown biasa) |
| `src/layouts/BaseLayout.astro` | Semua meta tag SEO (title, description, OG, canonical, schema) |
| `src/pages/blog/index.astro` | Halaman "My Article" — search + filter tahun |
| `astro.config.mjs` | Ganti `site:` dengan domain final kamu |
| `public/robots.txt` | Update URL sitemap setelah domain fix |

## Cara Nulis Artikel Baru

Bikin file baru di `src/content/blog/nama-artikel.md`:

```md
---
title: "Judul Artikel"
description: "Ringkasan 120-160 karakter buat meta description"
pubDate: 2026-07-18
heroImage: "/images/nama-gambar.jpg"
tags: ["seo", "digital marketing"]
---

Isi artikel di sini, bisa pakai Markdown biasa (heading, bold, list, dll).
```

Kalau artikel ini juga tayang di media lain, tambahkan:
```md
canonicalUrl: "https://url-media-asli.com/artikel-tersebut"
```

Simpan gambar di `public/images/`.

## Deploy ke Vercel (Gratis, No Watermark)

1. Push project ini ke GitHub:
   ```bash
   git init
   git add .
   git commit -m "init blog"
   git remote add origin https://github.com/username-kamu/mnhblog.git
   git push -u origin main
   ```
2. Buka [vercel.com](https://vercel.com) → **Add New Project** → Import repo `mnhblog`
3. Framework Preset otomatis kedeteksi **Astro** — klik **Deploy**
4. Setelah deploy, update `site:` di `astro.config.mjs` dengan URL Vercel kamu, commit, push lagi (auto redeploy)
5. (Opsional) Connect custom domain di **Project Settings → Domains**

## Checklist SEO Sebelum Publish Artikel

- [ ] `description` diisi 120–160 karakter, bukan copy-paste kalimat pertama
- [ ] `heroImage` ada (buat Open Graph preview saat di-share)
- [ ] Kalau republish dari media lain, isi `canonicalUrl`
- [ ] Judul H1 cuma satu per halaman (otomatis dari `title`, jangan tambah `# Judul` lagi di body)
- [ ] Cek `/rss.xml` dan `/sitemap-index.xml` ke-generate otomatis setelah build
