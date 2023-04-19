<script setup lang="ts">
definePageMeta({
  title: 'Icon Box',
  icon: 'lucide:package-2',
  description: 'Box wrappers for icons',
  section: 'content',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Iconbox pastel
      </BaseHeading>
      <div class="flex gap-3">
        <BaseIconBox size="lg" color="default">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="primary">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="info">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="success">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="warning">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="danger">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Iconbox pastel bordered
      </BaseHeading>
      <div class="flex gap-3">
        <BaseIconBox size="lg" color="default" bordered>
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="primary" bordered>
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="info" bordered>
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="success" bordered>
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="warning" bordered>
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="danger" bordered>
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Iconbox solid
      </BaseHeading>
      <div class="flex gap-3">
        <BaseIconBox size="lg" color="primary" flavor="solid">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="info" flavor="solid">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="success" flavor="solid">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="warning" flavor="solid">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="danger" flavor="solid">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Iconbox outline
      </BaseHeading>
      <div class="flex gap-3">
        <BaseIconBox size="lg" color="primary" flavor="outline">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="info" flavor="outline">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="success" flavor="outline">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="warning" flavor="outline">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" color="danger" flavor="outline">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Iconbox custom
      </BaseHeading>
      <div class="flex gap-3">
        <BaseIconBox size="lg" class="bg-fuchsia-500/10 text-fuchsia-500">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" class="bg-indigo-500/10 text-indigo-500">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="lg" class="bg-purple-500/10 text-purple-500">
          <Icon name="ph:heartbeat-duotone" class="w-6 h-6" />
        </BaseIconBox>
      </div>
    </div>
  </div>
</template>
