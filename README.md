<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/3911343/232132279-8d8bf0ad-b1d7-4802-984e-a696763dc6cd.png">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/3911343/232132309-62971744-dcdb-429c-aa93-6ba0c1caac42.png">
    <img alt="Shuriken UI logo" src="https://user-images.githubusercontent.com/3911343/232132309-62971744-dcdb-429c-aa93-6ba0c1caac42.png">
  </picture>
</p>


<p align="center">
  <a href="https://cssninja.io" title="Our official website">by <strong>cssninja.io</strong></a>
</p>

---

## Shuriken UI - Nuxt

Shuriken UI is a free and open-source Tailwind CSS UI Kit. It is a collection of components and templates that you can use to build your next Tailwind CSS project.

This repository contains the Nuxt version (a layer) of Shuriken UI with ready to use components (form inputs, buttons, cards, etc.) that you can use to build your  project.

## Installation

```bash
pnpm install -D @shuriken-ui/nuxt
```

> **Note**:  
> This also installs the [Shuriken UI Tailwind CSS](https://github.com/shuriken-ui/tailwind) package and required nuxt modules:
>
> - [@nuxtjs/tailwindcss](https://github.com/nuxt-modules/tailwindcss)
> - [@nuxtjs/color-mode](https://github.com/nuxt-modules/color-mode)
> - [@vueuse/nuxt](https://github.com/vueuse/vueuse/tree/main/packages/nuxt)
> - [nuxt-icon](https://github.com/nuxt-modules/icon)

## Usage


```ts
// nuxt.config.ts
export default defineNuxtConfig({
  extends: [
    '@shuriken-ui/nuxt'
  ]
})
```

> **Note**: This is a [layer](https://nuxt.com/docs/getting-started/layers) and not a module, so you must extend your nuxt config with it.

## Configuration

### Nuxt `app.config.ts`

```ts
export default defineAppConfig({
  /**
   * Shuriken UI layer configuration
   */
  nui: {
    /**
     * Default shape for components,
     * can be overriden by component props
     */
    defaultShapes: {
      accordion: 'rounded',
      autocompleteItem: 'rounded',
      avatar: 'full',
      button: 'rounded',
      buttonAction: 'rounded',
      buttonIcon: 'rounded',
      buttonClose: 'full',
      card: 'rounded',
      dropdown: 'rounded',
      iconBox: 'rounded',
      input: 'rounded',
      message: 'curved',
      pagination: 'rounded',
      progress: 'full',
      prose: 'rounded',
      tabSlider: 'rounded',
      tag: 'rounded',
    },
  },
})
```

> **Note**: This is an [app configuration](https://nuxt.com/docs/getting-started/configuration#app-configuration) and not a module configuration, so you must define it in `app.config.ts`, not in `nuxt.config.ts`.


### Tailwind `tailwind.config.ts`

```ts
import { withShurikenUI } from '@shuriken-ui/tailwind'
import colors from 'tailwindcss/colors'

/**
 * Shuriken UI tailwind configuration
 */
export default withShurikenUI({
  content: [],
  theme: {
    /**
     * Customize fonts
     * 
     * You must load them yourself
     * (ex: with unplugin-fonts)
     */
    fontFamily: {
      sans: ['Roboto Flex', 'sans-serif'],
      heading: ['Inter', 'sans-serif'],
      alt: ['Karla', 'sans-serif'],
      mono: ['ui-monospace', 'monospace'],
    },
    extend: {
      /**
       * Customize colors 
       * 
       * Use tailwind predefined colors,
       * or generate your own with tailwindshades.com
       */
      colors: {
        // Define only the ones you want to override
        muted: colors.slate,
        primary: colors.violet,
        info: colors.sky,
        success: colors.teal,
        warning: colors.amber,
        danger: colors.rose,
      },
    },
  },
})
```