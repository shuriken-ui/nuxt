import colors from 'tailwindcss/colors.js'

export default defineNuxtConfig({
  extends: '..',
  tailwindcss: {
    config: {
      content: [],
      theme: {
        fontFamily: {
          // inverted from default
          sans: ['Inter', 'sans-serif'],
          heading: ['Roboto Flex', 'sans-serif'],
          alt: ['Karla', 'sans-serif'],
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
