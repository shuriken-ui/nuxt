<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The size of the progress bar.
     *
     * @default 'sm'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

    /**
     * The contrast ot the progress bar.
     *
     * @default 'default'
     */
    contrast?: 'default' | 'contrast'

    /**
     * The color of the progress bar.
     *
     * @default 'primary'
     */
    color?: 'primary' | 'info' | 'success' | 'warning' | 'danger'

    /**
     * The radius of the progress bar.
     *
     * @since 2.0.0
     * @default 'full'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The current value of the progress bar.
     * If `value` is not provided, the progress bar will be in an indeterminate state.
     */
    value?: number

    /**
     * The maximum value of the progress bar.
     */
    max?: number
  }>(),
  {
    size: undefined,
    contrast: undefined,
    color: undefined,
    rounded: undefined,
    value: undefined,
    max: 100,
  },
)

const size = useNuiDefaultProperty(props, 'BaseProgress', 'size')
const contrast = useNuiDefaultProperty(props, 'BaseProgress', 'contrast')
const color = useNuiDefaultProperty(props, 'BaseProgress', 'color')
const rounded = useNuiDefaultProperty(props, 'BaseProgress', 'rounded')

const colors = {
  primary: 'nui-progress-primary',
  info: 'nui-progress-info',
  success: 'nui-progress-success',
  warning: 'nui-progress-warning',
  danger: 'nui-progress-danger',
} as Record<string, string>

const contrasts = {
  default: 'nui-progress-default',
  contrast: 'nui-progress-contrast',
} as Record<string, string>

const radiuses = {
  none: '',
  sm: 'nui-progress-rounded',
  md: 'nui-progress-smooth',
  lg: 'nui-progress-curved',
  full: 'nui-progress-full',
} as Record<string, string>

const sizes = {
  xs: 'nui-progress-xs',
  sm: 'nui-progress-sm',
  md: 'nui-progress-md',
  lg: 'nui-progress-lg',
  xl: 'nui-progress-xl',
} as Record<string, string>

const value = computed(() => {
  const { value, max } = props

  if (max === 0) {
    return 0
  }
  return typeof value === 'number' ? (value / max) * 100 : undefined
})
</script>

<template>
  <div
    role="progressbar"
    :aria-valuenow="value"
    :aria-valuemax="props.max"
    class="nui-progress"
    :class="[
      size && sizes[size],
      contrast && contrasts[contrast],
      color && colors[color],
      rounded && radiuses[rounded],
    ]"
  >
    <div
      class="nui-progress-bar"
      :class="[
        value === null &&
          'nui-progress-indeterminate animate-nui-progress-indeterminate',
      ]"
      :style="value !== null ? `width: ${value}%` : 'width: 100%'"
    ></div>
  </div>
</template>
