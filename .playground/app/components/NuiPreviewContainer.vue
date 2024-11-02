<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="w-full bg-muted-50 dark:bg-muted-900 min-h-screen px-4">
    <div class="w-full max-w-7xl mx-auto py-12">
      <h2
        v-if="props.title"
        class="text-2xl font-medium mb-10 text-muted-800 dark:text-muted-100"
      >
        {{ props.title }}
      </h2>
      <div class="flex flex-col gap-y-20 w-full">
        <slot />
      </div>
    </div>
  </div>
</template>
