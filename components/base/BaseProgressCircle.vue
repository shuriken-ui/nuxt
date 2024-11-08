<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The current value of the progress circle.
     */
    value?: number

    /**
     * The maximum value of the progress circle.
     */
    max?: number

    /**
     * The size of the progress circle.
     */
    size?: number

    /**
     * The thickness of the progress circle.
     */
    thickness?: number

    /**
     * Enable/disable animation, or set the animation duration (in seconds).
     */
    animation?: boolean | number

    /**
     * Defines the color of the progress circle
     *
     * @since 3.0.0
     * @default 'primary'
     */
    color?:
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'light'
      | 'dark'
      | 'black'

    /**
     * Optional CSS classes to apply to the component inner elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the track element.
       */
      track?: string | string[]

      /**
       * CSS classes to apply to the progress element.
       */
      progress?: string | string[]
    }
  }>(),
  {
    value: 0,
    max: 100,
    size: 60,
    thickness: 4,
    animation: 2,
    color: undefined,
    classes: () => ({}),
  },
)

const color = useNuiDefaultProperty(props, 'BaseProgressCircle', 'color')

const percent = computed(() => {
  const { value, max } = props

  if (max === 0) {
    return 0
  }
  // Round to 2 decimal places
  return Math.round((value / max) * 10000) / 100
})

const dasharray = computed(() => {
  return `${percent.value} 100`
})
const duration = computed(() => {
  if (props.animation === false) {
    return '0s'
  }

  const maxDuration = props.animation === true ? 2 : props.animation
  const ratio = percent.value / 100
  return ratio ? `${Math.round(maxDuration * ratio * 10) / 10}s` : '0s'
})

const colors = {
  light: 'text-muted-500 dark:text-muted-400',
  dark: 'text-muted-900 dark:text-muted-100',
  black: 'text-black dark:text-white',
  primary: 'text-primary-500',
  info: 'text-info-500',
  success: 'text-success-500',
  warning: 'text-warning-500',
  danger: 'text-danger-500',
}
</script>

<template>
  <svg
    role="progressbar"
    :aria-valuenow="props.value"
    :aria-valuemax="props.max"
    class="block"
    :class="props.classes?.wrapper"
    viewBox="0 0 45 45"
    :width="props.size"
    :height="props.size"
  >
    <circle
      class="text-muted-200 dark:text-muted-700 stroke-current"
      :class="props.classes?.track"
      :stroke-width="props.thickness"
      fill="none"
      cx="50%"
      cy="50%"
      r="15.91549431"
    />
    <circle
      class="stroke-current"
      :class="[
        color && colors[color],
        props.classes?.progress,
        props.animation !== false && 'circle-value transition-all duration-500',
      ]"
      :stroke-width="props.thickness"
      :stroke-dasharray="`${percent},100`"
      stroke-linecap="round"
      fill="none"
      cx="50%"
      cy="50%"
      r="15.91549431"
    />
  </svg>
</template>

<style scoped>
.block {
  --progress-circle-duration: v-bind(duration);
  --progress-circle-dasharray: v-bind(dasharray);

  transform-origin: center;
  transform: rotate(-90deg);
}

.circle-value {
  animation-name: circle-chart-fill;
  animation-duration: var(--progress-circle-duration);
  /* transform: rotate(-90deg); */
  transform-origin: center;
  stroke-dashoffset: 0;
  animation-timing-function: cubic-bezier(0.78, 0.59, 0.19, 0.33);
}

@keyframes circle-chart-fill {
  0% {
    stroke-dasharray: 0 100;
  }

  100% {
    stroke-dasharray: var(--progress-circle-dasharray);
  }
}
</style>
