<script setup lang="ts">
definePageMeta({
  title: 'Alert',
  icon: 'solar:notification-unread-lines-broken',
  description: 'SVG icons',
  section: 'feedback',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">Alert</BaseHeading>
    </div>
  </div>
</template>
