<script setup lang="ts">
definePageMeta({
  title: 'Tag',
  icon: 'lucide:smile',
  description: 'Tag variations',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Tag shadow
      </BaseHeading>
      <div class="flex gap-2">
        <BaseTag shape="rounded" color="default" shadow="flat">Label</BaseTag>
        <BaseTag shape="rounded" muted shadow="flat">Label</BaseTag>
        <BaseTag shape="rounded" color="primary" shadow="flat">Label</BaseTag>
        <BaseTag shape="rounded" color="success" shadow="flat">Label</BaseTag>
        <BaseTag shape="rounded" color="info" shadow="flat">Label</BaseTag>
        <BaseTag shape="rounded" color="warning" shadow="flat">Label</BaseTag>
        <BaseTag shape="rounded" color="danger" shadow="flat">Label</BaseTag>
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Tag shadow hover
      </BaseHeading>
      <div class="flex gap-2">
        <BaseTag shape="rounded" color="default" shadow="hover">Label</BaseTag>
        <BaseTag shape="rounded" muted shadow="hover">Label</BaseTag>
        <BaseTag shape="rounded" color="primary" shadow="hover">Label</BaseTag>
        <BaseTag shape="rounded" color="success" shadow="hover">Label</BaseTag>
        <BaseTag shape="rounded" color="info" shadow="hover">Label</BaseTag>
        <BaseTag shape="rounded" color="warning" shadow="hover">Label</BaseTag>
        <BaseTag shape="rounded" color="danger" shadow="hover">Label</BaseTag>
      </div>
    </div>
  </div>
</template>
