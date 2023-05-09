// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-client',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  imports: {
    dirs: ['./stores']
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://eddb9.unifr.ch/conduct/graphql' // overwritten by process.env.GQL_HOST
    }
  }
})