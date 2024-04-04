<script setup lang="ts">
/* eslint-disable vue/require-prop-comment */
import type { RouteLocationRaw } from '#vue-router'

// We can't use exported types from `#app` because vue doesn't support it yet.
type NuxtLinkProps = {
  to?: RouteLocationRaw
  href?: RouteLocationRaw
  external?: boolean
  replace?: boolean
  custom?: boolean
  // eslint-disable-next-line @typescript-eslint/ban-types
  target?: '_blank' | '_parent' | '_self' | '_top' | (string & {}) | null
  rel?: string | null
  noRel?: boolean
  prefetch?: boolean
  noPrefetch?: boolean
  activeClass?: string
  exactActiveClass?: string
  ariaCurrentValue?: string
}
const props = withDefaults(defineProps<NuxtLinkProps>(), {
  to: undefined,
  href: undefined,
  target: undefined,
  rel: undefined,
  prefetch: undefined,
  noPrefetch: undefined,
  activeClass: undefined,
  exactActiveClass: undefined,
  ariaCurrentValue: undefined,
})
const NuxtLink = defineNuxtLink({})
</script>

<template>
  <component :is="NuxtLink" class="nui-link" v-bind="props as any">
    <slot />
  </component>
</template>
