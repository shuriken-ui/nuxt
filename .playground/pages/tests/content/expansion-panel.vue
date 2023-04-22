<script setup lang="ts">
definePageMeta({
  title: 'Expansion Panel',
  icon: 'lucide:circuit-board',
  description: 'SVG icons',
  section: 'content',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Expansion Panel
      </BaseHeading>
    </div>
  </div>
</template>
