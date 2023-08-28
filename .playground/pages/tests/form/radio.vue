<script setup lang="ts">
definePageMeta({
  title: 'Radio',
  icon: 'ri:radio-button-fill',
  description: 'SVG icons',
  section: 'form',
})

const check = ref('primary')
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Radio: {{ check }}
      </BaseHeading>
    </div>
    <div class="grid grid-cols-5 gap-4">
      <BaseRadio v-model="check" name="radio_1" value="info" disabled />
      <BaseRadio v-model="check" name="radio_1" value="muted" />
      <BaseRadio v-model="check" name="radio_1" value="primary" />
      <BaseRadio v-model="check" name="radio_1" value="success" />
      <BaseRadio v-model="check" name="radio_1" value="warning" />
    </div>
  </div>
</template>
