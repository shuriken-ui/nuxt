<script setup lang="ts">
definePageMeta({
  title: 'Color Picker',
  icon: 'mdi:format-color-fill',
  description: 'SVG icons',
  section: 'form',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Color Picker
      </BaseHeading>
    </div>
  </div>
</template>
