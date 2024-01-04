// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ['./assets/styles/main.scss'],
  modules: ['@pinia/nuxt'],
  // runtimeConfig: {
  //   public: {
  //     API_KEY: '',
  //   },
  // },
  app: {
    baseURL: '/flash-feed-app/',
    buildAssetsDir: 'assets',
  },
})
