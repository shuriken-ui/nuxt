<script setup lang="ts">
import IconIndeterminate from '~~/../components/icon/IconIndeterminate.vue'

definePageMeta({
  title: 'Icons',
  icon: 'tabler:ease-in-out-control-points',
  description: 'SVG icons',
  section: 'images',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">Icons</BaseHeading>
      <div class="grid grid-cols-12 gap-6">
        <IconCheck />
        <IconIndeterminate />
        <IconCheckCircle />
        <IconChevronDown />
        <IconClose />
        <IconMoon />
        <IconPlus />
        <IconMinus />
        <IconSun />
      </div>
    </div>
  </div>
</template>
