import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        category: z.string().optional(),
        layout: z.string().optional(),
        image: z.object({ src: z.string(), alt: z.string().optional() }).optional(),
        details: z.object({
          date: z.string().optional(),
          settings: z.string().optional(),
          location: z.string().optional()
        }).optional()
      })
    })
  }
})
