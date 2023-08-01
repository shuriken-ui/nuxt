<script setup lang="ts">
definePageMeta({
  title: 'Checkbox',
  icon: 'lucide:sigma',
  description: 'Basic custom checkbox and radio',
  section: 'form',
})

const check = ref('')
const check2 = ref('')
const radio = ref('')
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseCheckboxAnimated Colors
      </BaseHeading>
      <div class="grid grid-cols-8 gap-4">
        <BaseCheckboxAnimated v-model="check" color="default" />
        <BaseCheckboxAnimated v-model="check" color="light" />
        <BaseCheckboxAnimated v-model="check" color="muted" />
        <BaseCheckboxAnimated v-model="check" color="primary" />
        <BaseCheckboxAnimated v-model="check" color="info" />
        <BaseCheckboxAnimated v-model="check" color="success" />
        <BaseCheckboxAnimated v-model="check" color="warning" />
        <BaseCheckboxAnimated v-model="check" color="danger" />
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseCheckboxAnimated2 Colors
      </BaseHeading>
      <div class="grid grid-cols-8 gap-4">
        <BaseCheckboxAnimated2 v-model="check2" color="default" />
        <BaseCheckboxAnimated2 v-model="check2" color="light" />
        <BaseCheckboxAnimated2 v-model="check2" color="muted" />
        <BaseCheckboxAnimated2 v-model="check2" color="primary" />
        <BaseCheckboxAnimated2 v-model="check2" color="info" />
        <BaseCheckboxAnimated2 v-model="check2" color="success" />
        <BaseCheckboxAnimated2 v-model="check2" color="warning" />
        <BaseCheckboxAnimated2 v-model="check2" color="danger" />
      </div>
    </div>
  </div>
</template>
