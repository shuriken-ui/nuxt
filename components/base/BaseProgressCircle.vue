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
  }>(),
  {
    value: 0,
    max: 100,
    size: 60,
    thickness: 4,
  }
)

const value = computed(() => {
  const { value, max } = props

  if (max === 0) {
    return 0
  }
  return (value / max) * 100
})
</script>

<template>
  <svg
    role="progressbar"
    :aria-valuenow="value"
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
      class="stroke-current transition-all duration-500"
      :stroke-width="props.thickness"
      :stroke-dasharray="`${value},100`"
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
  animation: circle-chart-fill 2.4s reverse;
  transform: rotate(-90deg);
  transform-origin: center;
  animation-timing-function: cubic-bezier(0.78, 0.59, 0.19, 0.33);
}

.block svg circle:nth-child(2) {
  animation: circle-chart-fill 2.4s reverse;
  transform: rotate(-90deg);
  transform-origin: center;
  animation-timing-function: cubic-bezier(0.78, 0.59, 0.19, 0.33);
}

@keyframes circle-chart-fill {
  50% {
    stroke-dasharray: 0 0;
  }

  100% {
    stroke-dasharray: 0 100;
  }
}

@keyframes circle-chart-fill-2 {
  from {
    opacity: 1;
  }

  to {
    stroke-dasharray: 0 100;
    opacity: 0;
  }
}

@keyframes circle-chart-fill-3 {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 1;
    stroke-dasharray: 0 100;
  }

  100% {
    stroke-dasharray: 0 100;
    opacity: 0;
  }
}
</style>
