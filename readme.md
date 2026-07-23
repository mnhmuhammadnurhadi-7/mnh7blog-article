<div align="center">

# 🚀 MNH Blog

**Personal blog & SEO portfolio showcase** — dibangun dari nol untuk mempraktikkan strategi SEO teknis secara langsung: performance optimization, structured data, dan content architecture yang scalable.

[![Astro](https://img.shields.io/badge/Astro-v7-BC52EE?style=flat-square&logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)

[Live Demo](https://mnh7blog-article.vercel.app) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## 📖 Tentang Proyek

Blog ini bukan sekadar tempat menulis — ini adalah **lab eksperimen SEO teknis**. Setiap artikel yang dipublikasikan melewati proses riset kata kunci (KGR), analisis search intent, hingga optimasi performa yang terukur lewat Google PageSpeed Insights & Search Console.

Proyek ini dibangun sebagai portofolio yang membuktikan kemampuan SEO secara langsung — bukan cuma teori, tapi implementasi nyata: dari arsitektur konten, technical SEO, sampai Core Web Vitals.

### ✨ Fitur Utama

- 🌗 **Dark/Light Mode** — tema konsisten di seluruh halaman, dengan sistem CSS variable terpusat
- 🖼️ **Responsive Images** — otomatis generate multiple ukuran (400w/800w/1200w) via Astro Image + Sharp, dengan dynamic preload untuk optimasi LCP
- ⚡ **Performance-first** — self-hosted fonts (WOFF2), critical CSS inlining, dan lazy-loading strategis
- 🔍 **SEO-optimized** — meta tags lengkap, Open Graph & Twitter Card, JSON-LD structured data, sitemap otomatis
- 📊 **Terintegrasi Google Search Console & GA4** — tracking indexing dan performa pencarian
- 🎨 **Custom design system** — didokumentasikan di `AGENT.md` untuk konsistensi visual jangka panjang

---

## 🛠️ Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | [Astro](https://astro.build) (Content Layer API) |
| Bahasa | TypeScript |
| Styling | Tailwind CSS |
| Image Optimization | Sharp (via `astro:assets`) |
| Hosting | Vercel |
| Analytics | Google Analytics 4, Google Search Console |

---

## 🚀 Getting Started

### Prasyarat

- Node.js (v18+)
- npm / pnpm / yarn

### Instalasi

```bash
# Clone repository
git clone https://github.com/username/mnh7blog-article.git
cd mnh7blog-article

# Install dependencies
npm install

# Jalankan dev server
npm run dev
```

Buka [http://localhost:4321](http://localhost:4321) di browser.

### Build untuk Production

```bash
npm run build
npm run preview
```

---

## 📁 Struktur Proyek

```text
/
├── public/
│   └── images/          # Asset statis (OG images, favicon, dll)
├── src/
│   ├── images/           # Cover artikel (auto-optimized via Sharp)
│   ├── content/
│   │   └── blog/         # Artikel dalam format Markdown
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── global.css    # CSS variables & sistem tema
└── astro.config.mjs
```

---

## ✍️ Menambahkan Artikel Baru

1. Taruh gambar cover di `src/images/`
2. Buat file artikel baru di `src/content/blog/`
3. Isi frontmatter:

```yaml
---
title: "Judul Artikel"
description: "Deskripsi singkat untuk SEO"
heroImage: "/images/nama-file-cover.webp"
pubDate: 2026-07-22
tags: ["tag1", "tag2"]
---
```

4. Tulis konten dalam Markdown
5. `npm run build` → commit → push. Vercel otomatis deploy, dan responsive image + OG meta ter-generate otomatis.

---

## 📈 Performance

Dioptimasi secara aktif dan diukur lewat [PageSpeed Insights](https://pagespeed.web.dev/):

- ♿ Accessibility: **100**
- ✅ Best Practices: **100**
- 🔍 SEO: **100**
- ⚡ Performance: terus dioptimasi (mobile & desktop)

---

## 👤 Tentang Penulis

Dibuat oleh **Muhammad Nur Hadi** — SEO Specialist & Project Coordinator, berbasis di Malang, Indonesia. Proyek ini merupakan bagian dari perjalanan belajar SEO praktis, dari riset hingga eksekusi teknis.

- 🌐 Portfolio: [mnurhadi-porto.vercel.app](https://mnurhadi-porto.vercel.app)
- 📝 Blog: [mnh7blog-article.vercel.app](https://mnh7blog-article.vercel.app)

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan portofolio pribadi. Silakan hubungi penulis untuk penggunaan lebih lanjut.