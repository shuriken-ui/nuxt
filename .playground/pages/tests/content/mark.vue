<script setup lang="ts">
definePageMeta({
  title: 'Mark',
  icon: 'ph:align-center-horizontal-simple-duotone',
  description: 'Highlight text with a background color.',
  section: 'content',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">Mark</BaseHeading>
    </div>
    <div class="flex gap-2">
      <mark class="nui-mark">test</mark>
    </div>
  </div>
</template>
