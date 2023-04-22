<script setup lang="ts">
definePageMeta({
  title: 'Flex List',
  icon: 'tabler:list-details',
  description: 'SVG icons',
  section: 'data-display',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Flex List
      </BaseHeading>
    </div>
  </div>
</template>
