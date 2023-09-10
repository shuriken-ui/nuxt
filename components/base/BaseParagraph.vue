<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The HTML element or component name to use for the paragraph.
     */
    as?: string

    /**
     * The size of the paragraph.
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
     * The weight of the paragraph.
     */
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'

    /**
     * The lead of the paragraph.
     */
    lead?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'
  }>(),
  {
    as: 'p',
    size: 'md',
    weight: 'normal',
    lead: 'normal',
  },
)

const sizeStyle = {
  xs: 'nui-paragraph-xs',
  sm: 'nui-paragraph-sm',
  md: 'nui-paragraph-md',
  lg: 'nui-paragraph-lg',
  xl: 'nui-paragraph-xl',
  '2xl': 'nui-paragraph-2xl',
  '3xl': 'nui-paragraph-3xl',
  '4xl': 'nui-paragraph-4xl',
  '5xl': 'nui-paragraph-5xl',
  '6xl': 'nui-paragraph-6xl',
  '7xl': 'nui-paragraph-7xl',
  '8xl': 'nui-paragraph-8xl',
  '9xl': 'nui-paragraph-9xl',
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
  'nui-paragraph',
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
