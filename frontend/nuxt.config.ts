// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL || "http://adonis-backend:3333"
    }
  },
  ssr: true,
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
      proxy: { to: process.env.API_URL+"/**" || "http://127.0.0.1:3333/**" }
    }
  }
});
