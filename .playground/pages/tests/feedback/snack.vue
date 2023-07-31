<script setup lang="ts">
definePageMeta({
  title: 'Snack',
  icon: 'tabler:badge',
  description: 'Snack details',
  section: 'feedback',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">Snack</BaseHeading>
      <div class="flex gap-3">
        <BaseSnack label="I am a default snack" />
        <BaseSnack label="I am a muted snack" />
        <BaseSnack label="I am a small snack" size="sm" />
      </div>
    </div>
  </div>
</template>
