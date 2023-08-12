<script setup lang="ts">
import type { NuxtLinkProps } from '#app'

const props = defineProps<NuxtLinkProps>()
const NuxtLink = defineNuxtLink({})
</script>

<template>
  <component :is="NuxtLink" class="nui-link" v-bind="props">
    <slot />
  </component>
</template>
