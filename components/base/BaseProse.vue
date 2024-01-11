<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * Inner elements shapes.
     *
     * @since 2.0.0
     * @default 'none'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg'
  }>(),
  {
    rounded: undefined,
  },
)

const rounded = useNuiDefaultProperty(props, 'BaseProse', 'rounded')

const radiuses = {
  none: 'nui-prose-straight',
  sm: 'nui-prose-rounded',
  md: 'nui-prose-smooth',
  lg: 'nui-prose-curved',
} as Record<string, string>
</script>

<template>
  <div class="nui-prose" :class="rounded && radiuses[rounded]">
    <slot></slot>
  </div>
</template>
