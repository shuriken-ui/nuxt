<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The color of the progress bar.
     */
    color?: 'primary' | 'info' | 'success' | 'warning' | 'danger'

    /**
     * The contrast ot the progress bar.
     */
    contrast?: 'default' | 'contrast'

    /**
     * The shape of the progress bar.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

    /**
     * The size of the progress bar.
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

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
    color: 'primary',
    contrast: 'default',
    shape: undefined,
    size: 'sm',
    value: undefined,
    max: 100,
  },
)

const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.progress,
)

const colorStyle = {
  primary: 'nui-progress-primary',
  info: 'nui-progress-info',
  success: 'nui-progress-success',
  warning: 'nui-progress-warning',
  danger: 'nui-progress-danger',
}
const contrastStyle = {
  default: 'nui-progress-default',
  contrast: 'nui-progress-contrast',
}
const shapeStyle = {
  straight: '',
  rounded: 'nui-progress-rounded',
  curved: 'nui-progress-curved',
  full: 'nui-progress-full',
}
const sizeStyle = {
  xs: 'nui-progress-xs',
  sm: 'nui-progress-sm',
  md: 'nui-progress-md',
  lg: 'nui-progress-lg',
  xl: 'nui-progress-xl',
}

const value = computed(() => {
  const { value, max } = props

  if (max === 0) {
    return 0
  }
  return typeof value === 'number' ? (value / max) * 100 : null
})
</script>

<template>
  <div
    role="progressbar"
    :aria-valuenow="value"
    :aria-valuemax="props.max"
    class="nui-progress"
    :class="[
      contrastStyle[props.contrast],
      colorStyle[props.color],
      sizeStyle[props.size],
      shape && shapeStyle[shape],
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
