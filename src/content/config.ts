// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const researchAndDevelopments = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  })
});

// Export collections using this exact format:
export const collections = {
  'research-and-developments': researchAndDevelopments,
};