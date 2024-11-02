<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * Adds a flat or a on hover shadow to the card.
     */
    shadow?: 'flat' | 'hover'

    /**
     * The color of the card.
     *
     * @default 'default'
     */
    color?:
      | 'default'
      | 'default-contrast'
      | 'muted'
      | 'muted-contrast'
      | 'dark'
      | 'black'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'none'

    /**
     * The radius of the card.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg'
  }>(),
  {
    rounded: undefined,
    shadow: undefined,
    color: undefined,
  },
)

const color = useNuiDefaultProperty(props, 'BaseCard', 'color')
const rounded = useNuiDefaultProperty(props, 'BaseCard', 'rounded')

const radiuses = {
  none: '',
  sm: 'nui-card-rounded-sm',
  md: 'nui-card-rounded-md',
  lg: 'nui-card-rounded-lg',
}

const colors = {
  'default': 'nui-card-default',
  'default-contrast': 'nui-card-default-contrast',
  'muted': 'nui-card-muted',
  'muted-contrast': 'nui-card-muted-contrast',
  'dark': 'nui-card-dark',
  'black': 'nui-card-black',
  'primary': 'nui-card-primary',
  'info': 'nui-card-info',
  'success': 'nui-card-success',
  'warning': 'nui-card-warning',
  'danger': 'nui-card-danger',
  'none': '',
}

const shadows = {
  flat: 'nui-card-shadow',
  hover: 'nui-card-shadow-hover',
}

const classes = computed(() => [
  'nui-card',
  rounded.value && radiuses[rounded.value],
  color.value && colors[color.value],
  props.shadow && shadows[props.shadow],
])
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
