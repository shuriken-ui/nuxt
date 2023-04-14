import { createResolver } from '@nuxt/kit'

import { withShurikenUI } from '@shuriken-ui/tailwind'

const { resolve } = createResolver(import.meta.url)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    resolve('./assets/color-scheme.css'),
    resolve('./assets/slimscroll.css'),
    resolve('./assets/tooltips.css'),
  ],
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
      global: true,
    },
    {
      prefix: '',
      path: resolve('./components/icon'),
      global: true,
    },
    {
      prefix: '',
      path: resolve('./components/form'),
      global: true,
    },
  ],
})
