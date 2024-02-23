<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The size of the button.
     *
     * @default 'sm'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg'

    /**
     * The radius of the button.
     *
     * @since 2.0.0
     * @default 'full'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The color of the button.
     *
     * @default 'default'
     */
    color?:
      | 'default'
      | 'default-contrast'
      | 'muted'
      | 'muted-contrast'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'none'
  }>(),
  {
    size: undefined,
    rounded: undefined,
    color: undefined,
  },
)

const size = useNuiDefaultProperty(props, 'BaseButtonClose', 'size')
const rounded = useNuiDefaultProperty(props, 'BaseButtonClose', 'rounded')
const color = useNuiDefaultProperty(props, 'BaseButtonClose', 'color')

const sizes = {
  xs: 'nui-button-xs',
  sm: 'nui-button-sm',
  md: 'nui-button-md',
  lg: 'nui-button-lg',
} as Record<string, string>

const radiuses = {
  none: '',
  sm: 'nui-button-rounded-sm',
  md: 'nui-button-rounded-md',
  lg: 'nui-button-rounded-lg',
  full: 'nui-button-rounded-full',
} as Record<string, string>

const colors = {
  default: 'nui-button-default',
  'default-contrast': 'nui-button-default-contrast',
  muted: 'nui-button-muted',
  'muted-contrast': 'nui-button-muted-contrast',
  primary: 'nui-button-primary',
  info: 'nui-button-info',
  success: 'nui-button-success',
  warning: 'nui-button-warning',
  danger: 'nui-button-danger',
  none: '',
} as Record<string, string>

const classes = computed(() => [
  'nui-button-close',
  size.value && sizes[size.value],
  rounded.value && radiuses[rounded.value],
  color.value && colors[color.value],
])
</script>

<template>
  <button type="button" :class="classes">
    <IconClose class="nui-button-icon" />
  </button>
</template>
