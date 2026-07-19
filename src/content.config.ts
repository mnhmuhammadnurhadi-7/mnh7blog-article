import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    // description dipakai buat meta description SEO -> usahakan 120-160 karakter
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // isi kalau artikel ini pernah tayang di media lain (contoh: Jurnalpost)
    // biar canonical mengarah ke sumber asli dan tidak dianggap duplicate content
    canonicalUrl: z.string().url().optional(),
  }),
});

export const collections = { blog };