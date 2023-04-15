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
  }
)
</script>

<template>
  <component
    :is="props.as"
    class="font-heading"
    :class="[
      props.size === 'xs' && 'text-xs',
      props.size === 'sm' && 'text-sm',
      props.size === 'md' && 'text-base',
      props.size === 'lg' && 'text-lg',
      props.size === 'xl' && 'text-xl',
      props.size === '2xl' && 'text-2xl',
      props.size === '3xl' && 'text-3xl',
      props.size === '4xl' && 'text-4xl',
      props.size === '5xl' && 'text-5xl',
      props.size === '6xl' && 'text-6xl',
      props.size === '7xl' && 'text-7xl',
      props.size === '8xl' && 'text-8xl',
      props.size === '9xl' && 'text-9xl',
      props.weight === 'light' && 'font-light',
      props.weight === 'normal' && 'font-normal',
      props.weight === 'medium' && 'font-medium',
      props.weight === 'semibold' && 'font-semibold',
      props.weight === 'bold' && 'font-bold',
      props.weight === 'extrabold' && 'font-extrabold',
      props.lead === 'none' && 'leading-none',
      props.lead === 'normal' && 'leading-normal',
      props.lead === 'tight' && 'leading-tight',
      props.lead === 'snug' && 'leading-snug',
      props.lead === 'normal' && 'leading-normal',
      props.lead === 'loose' && 'leading-loose',
    ]"
  >
    <slot></slot>
  </component>
</template>
