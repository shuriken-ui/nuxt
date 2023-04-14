import colors from 'tailwindcss/colors.js'

export default defineNuxtConfig({
  extends: '..',
  modules: ['unplugin-fonts/nuxt'],
  unfonts: {
    google: {
      families: ['Roboto Flex', 'Inter', 'Karla'],
    },
  },
  tailwindcss: {
    config: {
      content: [],
      theme: {
        fontFamily: {
          heading: ['Roboto Flex', 'sans-serif'],
          sans: ['Inter', 'sans-serif'],
          alt: ['Karla', 'sans-serif'],
          mono: [
            'ui-monospace',
            'SFMono-Regular',
            'Menlo',
            'Monaco',
            'Consolas',
            '"Liberation Mono"',
            '"Courier New"',
            'monospace',
          ],
        },
        extend: {
          colors: {
            primary: colors?.sky,
            success: colors?.lime,
            // muted: colors?.stone,
          },
        },
      },
    },
  },
  // hooks: {
  //   'tailwindcss:config'(config) {
  //     console.dir(config, { depth: null })
  //   },
  // },
})
