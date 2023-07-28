// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  target: "static",  
  app: {
    baseURL: '/',
    head: {
      link: [
        { rel: 'stylesheet', type:"text/css", href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' },
      ]
    }
  },  
  css: [`assets/styles/main.min.css`],
  devtools: { enabled: true },
    modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ]
})
