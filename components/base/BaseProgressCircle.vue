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
  }>(),
  {
    value: 0,
    max: 100,
    size: 60,
    thickness: 4,
    animation: 2,
  },
)

const percent = computed(() => {
  const { value, max } = props

  if (max === 0) {
    return 0
  }
  return (value / max) * 100
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
</script>

<template>
  <svg
    role="progressbar"
    :aria-valuenow="props.value"
    :aria-valuemax="props.max"
    class="block"
    viewBox="0 0 45 45"
    :width="props.size"
    :height="props.size"
  >
    <circle
      class="text-muted-200 dark:text-muted-700 stroke-current"
      :stroke-width="props.thickness"
      fill="none"
      cx="50%"
      cy="50%"
      r="15.91549431"
    />
    <circle
      class="circle-value stroke-current transition-all duration-500"
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
  transform-origin: center;
  transform: rotate(-90deg);
}

.circle-value {
  animation-name: circle-chart-fill;
  animation-duration: v-bind(duration);
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
    stroke-dasharray: v-bind(dasharray);
  }
}
</style>
