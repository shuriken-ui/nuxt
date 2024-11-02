<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The HTML element or component name to use for the paragraph.
     *
     * @default 'p'
     */
    as?: string

    /**
     * The lead of the paragraph.
     *
     * @default 'normal'
     */
    lead?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'

    /**
     * The size of the paragraph.
     *
     * @default 'md'
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
     *
     * @default 'normal'
     */
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
  }>(),
  {
    as: undefined,
    size: undefined,
    weight: undefined,
    lead: undefined,
  },
)

const as = useNuiDefaultProperty(props, 'BaseParagraph', 'as')
const lead = useNuiDefaultProperty(props, 'BaseParagraph', 'lead')
const size = useNuiDefaultProperty(props, 'BaseParagraph', 'size')
const weight = useNuiDefaultProperty(props, 'BaseParagraph', 'weight')

const sizes = {
  'xs': 'nui-paragraph-xs',
  'sm': 'nui-paragraph-sm',
  'md': 'nui-paragraph-md',
  'lg': 'nui-paragraph-lg',
  'xl': 'nui-paragraph-xl',
  '2xl': 'nui-paragraph-2xl',
  '3xl': 'nui-paragraph-3xl',
  '4xl': 'nui-paragraph-4xl',
  '5xl': 'nui-paragraph-5xl',
  '6xl': 'nui-paragraph-6xl',
  '7xl': 'nui-paragraph-7xl',
  '8xl': 'nui-paragraph-8xl',
  '9xl': 'nui-paragraph-9xl',
}

const weights = {
  light: 'nui-weight-light',
  normal: 'nui-weight-normal',
  medium: 'nui-weight-medium',
  semibold: 'nui-weight-semibold',
  bold: 'nui-weight-bold',
  extrabold: 'nui-weight-extrabold',
}

const leads = {
  none: 'nui-lead-none',
  tight: 'nui-lead-tight',
  snug: 'nui-lead-snug',
  normal: 'nui-lead-normal',
  relaxed: 'nui-lead-relaxed',
  loose: 'nui-lead-loose',
}

const classes = computed(() => [
  'nui-paragraph',
  size.value && sizes[size.value],
  weight.value && weights[weight.value],
  lead.value && leads[lead.value],
])
</script>

<template>
  <component :is="props.as ? props.as : as" :class="classes">
    <slot />
  </component>
</template>
