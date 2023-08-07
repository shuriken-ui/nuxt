import { createResolver } from '@nuxt/kit'

import { withShurikenUI } from '@shuriken-ui/tailwind'

const { resolve } = createResolver(import.meta.url)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  tailwindcss: {
    config: withShurikenUI({
      content: [],
    }),
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
})
