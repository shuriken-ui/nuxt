import { createResolver } from '@nuxt/kit'
// import { withShurikenUI } from '@shuriken-ui/tailwind'
import { withShurikenUI } from '../shuriken-ui-tailwind/src'

const { resolve } = createResolver(import.meta.url)

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
