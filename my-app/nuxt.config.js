// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon'],
  css: [
    '@/assets/scss/main.scss',
  ],
  ssr: false,
  app: {
    head: {
      title: "Muhammed Yunus Doğru & Front-End Developer",
      ogTitle: "Muhammed Yunus Doğru & Front-End Developer",
      description: "Crafting intuitive interfaces with code and creativity.",
      ogDescription: "Crafting intuitive interfaces with code and creativity.",
      lang: "en",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale-1',
    },
    link: [{rel: 'icon', type: 'image/x-icon', href: '../favicon.ico'}]
  }
})
