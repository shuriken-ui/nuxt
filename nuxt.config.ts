import { createResolver } from '@nuxt/kit'
import tailwindcss from '@tailwindcss/vite'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    // '@nuxtjs/tailwindcss',
    '@nuxt/icon',
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  colorMode: {
    classSuffix: '',
  },

  components: [
    {
      prefix: '',
      path: resolve('./components/base'),
      global: false,
    },
    {
      prefix: '',
      path: resolve('./components/icon'),
      global: false,
    },
    {
      prefix: '',
      path: resolve('./components/form'),
      global: false,
    },
  ],

  devtools: {
    enabled: false,
  },
})
