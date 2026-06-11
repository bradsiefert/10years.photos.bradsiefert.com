// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-02-06',
  devtools: { enabled: false },
app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  modules: ['@nuxt/content'],
  content: {
    renderer: {
      anchorLinks: false
    }
  },
  css: [
    '@/assets/scss/app.scss'
    // Needed to install sass and bootstrap to make this work.
  ],
  nitro: {
    preset: 'netlify-static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/tableofcontents']
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ['legacy-js-api'],
          logger: {
            warn: () => {} // Suppress all warnings including deprecations
          }
        }
      }
    }
  }
})