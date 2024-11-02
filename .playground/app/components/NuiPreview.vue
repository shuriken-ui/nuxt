<script setup lang="ts">
const props = defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div
    className="border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950 p-6 rounded-sm"
  >
    <div v-if="props.title" class="mb-6">
      <h3
        class="font-sans font-medium text-lg text-muted-800 dark:text-muted-100 mb-2"
      >
        {{ props.title }}
      </h3>
      <p
        v-if="props.description"
        class="font-sans text-sm text-muted-500 dark:text-muted-400"
      >
        {{ props.description }}
      </p>
    </div>
    <slot />
  </div>
</template>
