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
     * Default shape for components
     * 
     * This allows to not have to specify the shape prop on every component.
     * Define only the ones you want to override.
     */
    defaultShapes: {
      /**
       * Default shape for the BaseAccordion component
       *
       * @type {'straight' | 'rounded' | 'curved'}
       */
      accordion: 'rounded',
      /**
       * Default shape for the BaseAutocompleteItem component
       *
       * @type {'straight' | 'rounded' | 'curved' | 'full'}
       */
      autocompleteItem: 'rounded',
      /**
       * Default shape for the BaseAvatar component
       *
       * @type {'straight' | 'rounded' | 'curved' | 'full'}
       */
      avatar: 'full',
      /**
       * Default shape for the BaseButton component
       *
       * @type {'straight' | 'rounded' | 'curved' | 'full'}
       */
      button: 'rounded',
      /**
       * Default shape for the BaseButtonAction component
       *
       * @type {'straight' | 'rounded' | 'curved' | 'full'}
       */
      buttonAction: 'rounded',
      /**
       * Default shape for the BaseButtonIcon component
       *
       * @type {'straight' | 'rounded' | 'curved' | 'full'}
       */
      buttonIcon: 'rounded',
      /**
       * Default shape for the BaseButtonIcon component
       *
       * @type {'straight' | 'rounded' | 'curved' | 'full'}
       */
      buttonClose: 'full',
      /**
       * Default shape for the BaseCard component
       *
       * @type {'straight' | 'rounded' | 'curved' | 'full'}
       */
      card: 'rounded',
      /**
       * Default shape for the BaseDropdown component
       *
       * @type {'straight' | 'rounded' | 'curved' | 'full'}
       */
      dropdown: 'rounded',
      /**
       * Default shape for the BaseIconBox component
       *
       * @type {'straight' | 'rounded' | 'curved' | 'full'}
       */
      iconBox: 'rounded',
      /**
       * Default shape for all input components component
       * - BaseAutocomplete
       * - BaseCheckbox
       * - BaseInput
       * - BaseInputFile
       * - BaseInputListbox
       * - BaseInputSelect
       * - BaseInputTextarea
       *
       * @type {'straight' | 'rounded' | 'curved' | 'full'}
       */
      input: 'rounded',
      /**
       * Default shape for the BaseMessage component
       *
       * @type {'straight' | 'rounded' | 'curved' | 'full'}
       */
      message: 'curved',
      /**
       * Default shape for the BasePagination component
       *
       * @type {'straight' | 'rounded' | 'curved' | 'full'}
       */
      pagination: 'rounded',
      /**
       * Default shape for the BaseProgress component
       *
       * @type {'straight' | 'rounded' | 'curved' | 'full'}
       */
      progress: 'full',
      /**
       * Default shape for the BaseProse component
       *
       * @type {'straight' | 'rounded' | 'curved'}
       */
      prose: 'rounded',
      /**
       * Default shape for the BaseTabSlider component
       *
       * @type {'straight' | 'rounded' | 'curved' | 'full'}
       */
      tabSlider: 'rounded',
      /**
       * Default shape for the BaseTag component
       *
       * @type {'straight' | 'rounded' | 'curved' | 'full'}
       */
      tag: 'rounded',
    },
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
    },
  },
})
```