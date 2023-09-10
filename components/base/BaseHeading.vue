<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The heading element to use (e.g. `h1`, `h2`, etc.).
     */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'

    /**
     * The size of the heading.
     */
    size?:
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | '2xl'
      | '3xl'
      | '4xl'
      | '5xl'
      | '6xl'
      | '7xl'
      | '8xl'
      | '9xl'

    /**
     * The weight of the heading.
     */
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'

    /**
     * The spacing below the heading.
     */
    lead?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'
  }>(),
  {
    as: 'p',
    size: 'xl',
    weight: 'semibold',
    lead: 'normal',
  },
)

const sizeStyle = {
  xs: 'nui-heading-xs',
  sm: 'nui-heading-sm',
  md: 'nui-heading-md',
  lg: 'nui-heading-lg',
  xl: 'nui-heading-xl',
  '2xl': 'nui-heading-2xl',
  '3xl': 'nui-heading-3xl',
  '4xl': 'nui-heading-4xl',
  '5xl': 'nui-heading-5xl',
  '6xl': 'nui-heading-6xl',
  '7xl': 'nui-heading-7xl',
  '8xl': 'nui-heading-8xl',
  '9xl': 'nui-heading-9xl',
}
const weightStyle = {
  light: 'nui-weight-light',
  normal: 'nui-weight-normal',
  medium: 'nui-weight-medium',
  semibold: 'nui-weight-semibold',
  bold: 'nui-weight-bold',
  extrabold: 'nui-weight-extrabold',
}
const leadStyle = {
  none: 'nui-lead-none',
  tight: 'nui-lead-tight',
  snug: 'nui-lead-snug',
  normal: 'nui-lead-normal',
  relaxed: 'nui-lead-relaxed',
  loose: 'nui-lead-loose',
}

const classes = computed(() => [
  'nui-heading',
  sizeStyle[props.size],
  weightStyle[props.weight],
  leadStyle[props.lead],
])
</script>

<template>
  <component :is="props.as" :class="classes">
    <slot></slot>
  </component>
</template>
