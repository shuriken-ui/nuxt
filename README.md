<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/shuriken-ui/.github/assets/86636408/278e3026-1997-4e01-9457-20772adbce31">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/shuriken-ui/.github/assets/86636408/06f9d8e2-38aa-45b2-b91e-1c891a20e271">
    <img alt="Shuriken UI logo" src="https://github.com/shuriken-ui/.github/assets/86636408/06f9d8e2-38aa-45b2-b91e-1c891a20e271">
  </picture>
</p>


<p align="center">
  <a href="https://shurikenui.com" title="Shuriken UI website"><strong>shurikenui.com</strong></a> | 
  by <a href="https://cssninja.io" title="Our official website"><strong>cssninja.io</strong></a>
</p>

---

## Shuriken UI - Nuxt

Shuriken UI is a free and open-source Tailwind CSS UI Kit. It is a collection of components and templates that you can use to build your next Tailwind CSS project.

This repository contains the Nuxt version (a [layer](https://nuxt.com/docs/getting-started/layers)) of Shuriken UI with ready to use components (form inputs, buttons, cards, etc.) that you can use to build your  project.

## Installation

```bash
pnpm install -D @shuriken-ui/nuxt
```

> **Note**: This also installs the [Shuriken UI Tailwind CSS](https://github.com/shuriken-ui/tailwind) package and required nuxt modules:
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

This is the [app configuration](https://nuxt.com/docs/getting-started/configuration#app-configuration) for Shuriken UI components

> **Note**: It's not a module configuration, so you must define it in `app.config.ts`, not in `nuxt.config.ts`.

```ts
export default defineAppConfig({
  /**
   * Shuriken UI layer configuration
   */
  nui: {
    /**
     * Set default properties for BaseButton component
     */
    BaseButton: {
      variant: 'pastel',
      rounded: 'md',
    },

    // ...
  },
})
```


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
       * or generate your own with tools like https://tailwindshades.com
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

      /**
       * Customize Shuriken UI components
       * 
       * @see https://github.com/shuriken-ui/tailwind
       */
      nui: {
        // ...
      }
    },
  },
})
```
