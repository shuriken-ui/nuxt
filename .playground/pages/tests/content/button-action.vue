<script setup lang="ts">
definePageMeta({
  title: 'Button Action',
  icon: 'lucide:cpu',
  description: 'Button variations',
  section: 'content',
})

const value1 = ref('')
const value2 = ref('')
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Button shape
      </BaseHeading>
      <div class="flex gap-2">
        <BaseButtonAction shape="straight">Button</BaseButtonAction>
        <BaseButtonAction color="muted" shape="rounded">
          Button
        </BaseButtonAction>
        <BaseButtonAction color="primary" shape="curved">
          Button
        </BaseButtonAction>
        <BaseButtonAction color="success" shape="full">Button</BaseButtonAction>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Button colors
      </BaseHeading>
      <div class="flex gap-2">
        <BaseButtonAction>Button</BaseButtonAction>
        <BaseButtonAction color="muted">Button</BaseButtonAction>
        <BaseButtonAction color="primary">Button</BaseButtonAction>
        <BaseButtonAction color="success">Button</BaseButtonAction>
        <BaseButtonAction color="info">Button</BaseButtonAction>
        <BaseButtonAction color="warning">Button</BaseButtonAction>
        <BaseButtonAction color="danger">Button</BaseButtonAction>
      </div>
    </div>
  </div>
</template>
