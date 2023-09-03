// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
      head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1'
      }
    },
    modules: ['@nuxt/content'],
    content: {
      documentDriven: true,
      markdown: {
        anchorLinks: false
      }
    },
    css: [
      '@/assets/scss/app.scss'
      // Needed to install sass and bootstrap to make this work.
    ]
  })
