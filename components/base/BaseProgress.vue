<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The color of the progress bar.
     */
    color?: 'primary' | 'info' | 'success' | 'warning' | 'danger'

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
    shape: undefined,
    size: 'sm',
    value: undefined,
    max: 100,
  }
)

const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.progress
)

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
    class="bg-muted-200 dark:bg-muted-700 relative w-full overflow-hidden"
    :class="[
      props.size === 'xs' && 'h-1',
      props.size === 'sm' && 'h-2',
      props.size === 'md' && 'h-3',
      props.size === 'lg' && 'h-4',
      props.size === 'xl' && 'h-5',
      shape === 'rounded' && 'rounded',
      shape === 'curved' && 'rounded-md',
      shape === 'full' && 'rounded-full',
    ]"
  >
    <div
      class="absolute start-0 top-0 h-full transition-all duration-300"
      :class="[
        props.color === 'primary' && 'bg-primary-500',
        props.color === 'success' && 'bg-success-500',
        props.color === 'info' && 'bg-info-500',
        props.color === 'warning' && 'bg-warning-500',
        props.color === 'danger' && 'bg-danger-500',
        shape === 'rounded' && 'rounded',
        shape === 'curved' && 'rounded-md',
        shape === 'full' && 'rounded-full',
        value === null && 'animate-nui-indeterminate w-full',
      ]"
      :style="value !== null ? `width: ${value}%` : ''"
    ></div>
  </div>
</template>
