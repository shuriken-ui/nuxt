<script setup lang="ts">
definePageMeta({
  title: 'Pagination',
  icon: 'carbon:page-scroll',
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
        Pagination
      </BaseHeading>
    </div>
  </div>
</template>
