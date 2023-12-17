<script setup lang="ts">
definePageMeta({
  title: 'Button Icon',
  icon: 'lucide:cpu',
  description: 'Button Icon variations',
  section: 'content',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Button icon shape
      </BaseHeading>
      <div class="flex gap-2">
        <BaseButtonIcon rounded="straight">
          <Icon name="ph:moon-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon rounded="rounded">
          <Icon name="ph:github-logo-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon rounded="curved">
          <Icon name="ph:game-controller-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon rounded="full">
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Button icon colors
      </BaseHeading>
      <div class="flex gap-2">
        <BaseButtonIcon rounded="full" color="default">
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon rounded="full" color="muted">
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon rounded="full" color="primary">
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon rounded="full" color="info">
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon rounded="full" color="success">
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon rounded="full" color="warning">
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon rounded="full" color="danger">
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon rounded="full" color="none">
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Button icon size
      </BaseHeading>
      <div class="flex gap-2">
        <BaseButtonIcon rounded="full" color="primary" size="sm">
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon rounded="full" color="primary" size="md">
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon rounded="full" color="primary" size="lg">
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
      </div>
    </div>
  </div>
</template>
