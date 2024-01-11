<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The radius of the card.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg'

    /**
     * The color of the card.
     *
     * @default 'white'
     */
    color?:
      | 'white'
      | 'white-contrast'
      | 'muted'
      | 'muted-contrast'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'none'

    /**
     * Adds a flat or a on hover shadow to the card.
     */
    shadow?: 'flat' | 'hover'
  }>(),
  {
    rounded: undefined,
    shadow: undefined,
    color: undefined,
  },
)

const rounded = useNuiDefaultProperty(props, 'BaseCard', 'rounded')
const color = useNuiDefaultProperty(props, 'BaseCard', 'color')

const radiuses = {
  none: '',
  sm: 'nui-card-rounded',
  md: 'nui-card-smooth',
  lg: 'nui-card-curved',
} as Record<string, string>

const colors = {
  white: 'nui-card-white',
  'white-contrast': 'nui-card-white-contrast',
  muted: 'nui-card-muted',
  'muted-contrast': 'nui-card-muted-contrast',
  primary: 'nui-card-primary',
  info: 'nui-card-info',
  success: 'nui-card-success',
  warning: 'nui-card-warning',
  danger: 'nui-card-danger',
  none: '',
} as Record<string, string>

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
    <slot></slot>
  </div>
</template>
