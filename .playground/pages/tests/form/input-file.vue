<script setup lang="ts">
definePageMeta({
  title: 'Input File',
  icon: 'solar:cloud-upload-linear',
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
        Input File
      </BaseHeading>
    </div>
  </div>
</template>
