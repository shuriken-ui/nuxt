<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The name of the icon to display.
     */
    icon: string
  }>(),
  {}
)

const isIconify = computed(() => {
  return props.icon && props.icon.includes(':')
})
</script>

<template>
  <span :key="props.icon">
    <i
      v-if="isIconify"
      aria-hidden="true"
      class="iconify"
      :data-icon="props.icon"
    ></i>
    <i v-else aria-hidden="true" :class="props.icon"></i>
  </span>
</template>
