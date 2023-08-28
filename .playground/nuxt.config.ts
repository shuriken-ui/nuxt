import { addTemplate } from '@nuxt/kit'
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
  typescript: {
    shim: false,
  },
  hooks: {
    // @ts-ignore
    'tailwindcss:resolvedConfig'(config) {
      addTemplate({
        filename: 'tailwind.config.ts', // gets prepended by .nuxt/
        getContents: () => `export default ${JSON.stringify(config, null, 2)}`,
        write: true,
      })
    },
  },
})
