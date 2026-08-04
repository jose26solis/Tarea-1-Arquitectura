export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  app: {
    head: {
      titleTemplate: '%s - Alexis Solis',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
