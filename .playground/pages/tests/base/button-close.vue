<script setup lang="ts">
definePageMeta({
  title: 'BaseButtonClose',
  icon: 'system-uicons:cross-circle',
  description: 'Button close component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseButtonClose">
      <NuiPreview title="Radius" description="Button close component radiuses">
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonClose size="md" rounded="none" color="muted" />
          <BaseButtonClose size="md" rounded="sm" color="muted" />
          <BaseButtonClose size="md" rounded="md" color="muted" />
          <BaseButtonClose size="md" rounded="lg" color="muted" />
          <BaseButtonClose size="md" rounded="full" color="muted" />
        </div>
      </NuiPreview>

      <NuiPreview title="Sizes" description="Button close component sizes">
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonClose size="xs" rounded="md" color="muted" />
          <BaseButtonClose size="sm" rounded="md" color="muted" />
          <BaseButtonClose size="md" rounded="md" color="muted" />
          <BaseButtonClose size="lg" rounded="md" color="muted" />
          <BaseButtonClose size="xl" rounded="md" color="muted" />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: default"
        description="Button close component default color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonClose size="xs" rounded="full" color="default" />
          <BaseButtonClose size="sm" rounded="full" color="default" />
          <BaseButtonClose size="md" rounded="full" color="default" />
          <BaseButtonClose size="lg" rounded="full" color="default" />
          <BaseButtonClose size="xl" rounded="full" color="default" />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: muted"
        description="Button close component muted color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonClose size="xs" rounded="full" color="muted" />
          <BaseButtonClose size="sm" rounded="full" color="muted" />
          <BaseButtonClose size="md" rounded="full" color="muted" />
          <BaseButtonClose size="lg" rounded="full" color="muted" />
          <BaseButtonClose size="xl" rounded="full" color="muted" />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: info"
        description="Button close component info color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonClose size="xs" rounded="full" color="info" />
          <BaseButtonClose size="sm" rounded="full" color="info" />
          <BaseButtonClose size="md" rounded="full" color="info" />
          <BaseButtonClose size="lg" rounded="full" color="info" />
          <BaseButtonClose size="xl" rounded="full" color="info" />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: success"
        description="Button close component success color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonClose size="xs" rounded="full" color="success" />
          <BaseButtonClose size="sm" rounded="full" color="success" />
          <BaseButtonClose size="md" rounded="full" color="success" />
          <BaseButtonClose size="lg" rounded="full" color="success" />
          <BaseButtonClose size="xl" rounded="full" color="success" />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: warning"
        description="Button close component warning color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonClose size="xs" rounded="full" color="warning" />
          <BaseButtonClose size="sm" rounded="full" color="warning" />
          <BaseButtonClose size="md" rounded="full" color="warning" />
          <BaseButtonClose size="lg" rounded="full" color="warning" />
          <BaseButtonClose size="xl" rounded="full" color="warning" />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: danger"
        description="Button close component danger color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonClose size="xs" rounded="full" color="danger" />
          <BaseButtonClose size="sm" rounded="full" color="danger" />
          <BaseButtonClose size="md" rounded="full" color="danger" />
          <BaseButtonClose size="lg" rounded="full" color="danger" />
          <BaseButtonClose size="xl" rounded="full" color="danger" />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
