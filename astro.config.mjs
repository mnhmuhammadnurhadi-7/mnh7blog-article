import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// GANTI dengan domain final kamu setelah connect custom domain di Vercel
// Contoh sementara: https://mnhblog.vercel.app
export default defineConfig({
  site: 'https://mnh7blog-article.vercel.app',
  integrations: [sitemap(), mdx()],
  image: {
    // Using built-in image service (no Sharp dependency needed)
  },
});
