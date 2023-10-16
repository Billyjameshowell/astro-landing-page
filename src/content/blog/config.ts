import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    description: z.string(),
    date: z.date(),
    draft: z.boolean(),
    author: z.enum(["John Doe", "Jane Doe", "Billy Howell"])
  })
});


export const collections = { blog };