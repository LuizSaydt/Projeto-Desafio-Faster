// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  ssr: false,
  spaLoadingTemplate: "spa-loading-template.html",
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
    strict: true
  },
  modules: [
    "@nuxtjs/tailwindcss"
  ],
  routeRules: {
    "/api/**": {
      proxy: { to: "http://127.0.0.1:3333/**" }
    }
  }
});
