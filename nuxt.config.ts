// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
devtools: { enabled: true },
app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  modules: ['@nuxt/content','@nuxtjs/color-mode'],
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false
    }
  },
  css: [
    '@/assets/scss/app.scss'
    // Needed to install sass and bootstrap to make this work.
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  }
})