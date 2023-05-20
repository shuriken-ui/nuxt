<script setup lang="ts">
definePageMeta({
  title: 'Switch',
  icon: 'ic:round-published-with-changes',
  description: 'SVG icons',
  section: 'form',
})

const ball = ref(false)
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">Switch</BaseHeading>
      <div class="flex items-center gap-8" dir="rtl">
        <BaseThemeSwitch />
        <BaseThemeToggle />
        <BaseSwitchBall v-model="ball" />
        <BaseSwitchThin v-model="ball" />
      </div>
    </div>
  </div>
</template>
