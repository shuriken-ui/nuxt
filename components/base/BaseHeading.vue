<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The HTML tag to use (e.g. `h1`, `h2`, etc.).
     *
     * @default 'p'
     */
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'

    /**
     * The size of the heading.
     *
     * @default 'xl'
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
     *
     * @default 'semibold'
     */
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'

    /**
     * The spacing below the heading.
     *
     * @default 'normal'
     */
    lead?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'
  }>(),
  {
    as: undefined,
    size: undefined,
    weight: undefined,
    lead: undefined,
  },
)

const as = useNuiDefaultProperty(props, 'BaseHeading', 'as')
const size = useNuiDefaultProperty(props, 'BaseHeading', 'size')
const weight = useNuiDefaultProperty(props, 'BaseHeading', 'weight')
const lead = useNuiDefaultProperty(props, 'BaseHeading', 'lead')

const sizes = {
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
} as Record<string, string>

const weights = {
  light: 'nui-weight-light',
  normal: 'nui-weight-normal',
  medium: 'nui-weight-medium',
  semibold: 'nui-weight-semibold',
  bold: 'nui-weight-bold',
  extrabold: 'nui-weight-extrabold',
} as Record<string, string>

const leads = {
  none: 'nui-lead-none',
  tight: 'nui-lead-tight',
  snug: 'nui-lead-snug',
  normal: 'nui-lead-normal',
  relaxed: 'nui-lead-relaxed',
  loose: 'nui-lead-loose',
} as Record<string, string>

const classes = computed(() => [
  'nui-heading',
  size.value && sizes[size.value],
  weight.value && weights[weight.value],
  lead.value && leads[lead.value],
])
</script>

<template>
  <component :is="props.as ? props.as : as" :class="classes">
    <slot></slot>
  </component>
</template>
