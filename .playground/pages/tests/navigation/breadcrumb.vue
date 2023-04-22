<script setup lang="ts">
definePageMeta({
  title: 'Breadcrumbs',
  icon: 'mdi:navigation-variant-outline',
  description: 'SVG icons',
  section: 'navigation',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Breadcrumbs
      </BaseHeading>
    </div>
  </div>
</template>
