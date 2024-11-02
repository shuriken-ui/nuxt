import { fileURLToPath } from 'node:url'
import { addTemplate } from '@nuxt/kit'
import { dirname, join } from 'pathe'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-02',
  future: {
    compatibilityVersion: 4,
  },
  extends: '..',
  modules: ['nuxt-component-meta', 'unplugin-fonts/nuxt'],
  unfonts: {
    google: {
      families: ['Roboto Flex', 'Inter', 'Karla'],
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
    'tailwindcss:resolvedConfig': function (config) {
      addTemplate({
        filename: 'tailwind.config.ts', // gets prepended by .nuxt/
        getContents: () => `export default ${JSON.stringify(config, null, 2)}`,
        write: true,
      })
    },
  },
  vite: {
    optimizeDeps: {
      include: ['@headlessui/vue', '@headlessui-float/vue'],
    },
  },
})
