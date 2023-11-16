import { addTemplate } from '@nuxt/kit'
import colors from 'tailwindcss/colors.js'
import { join, dirname } from 'pathe'
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  extends: '..',
  modules: ['nuxt-component-meta', 'unplugin-fonts/nuxt'],
  unfonts: {
    google: {
      families: ['Roboto Flex', 'Inter', 'Karla'],
    },
  },
  sourcemap: true,
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
  componentMeta: {
    globalsOnly: false,
    debug: 2,
    exclude: [
      (component: any) => {
        const componentsPath = join(
          dirname(fileURLToPath(import.meta.url)),
          '../components',
        )
        const isExternal = !component.filePath?.startsWith?.(componentsPath)
        const isIcon = component?.kebabName?.startsWith('icon-')

        return isExternal || isIcon
      },
    ],
    checkerOptions: {
      schema: {
        ignore: ['KeyboardEvent'],
      },
    },
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
