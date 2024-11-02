<script setup lang="ts">
definePageMeta({
  title: 'BaseTag',
  icon: 'system-uicons:tags',
  description: 'Tag component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseTag">
      <NuiPreview title="Size" description="Tag component sizes">
        <div class="flex flex-wrap items-end gap-3">
          <BaseTag rounded="md" size="sm">
            Label
          </BaseTag>
          <BaseTag rounded="md" size="md">
            Label
          </BaseTag>
        </div>
      </NuiPreview>

      <NuiPreview title="Radius" description="Tag component radiuses">
        <div class="flex flex-wrap items-end gap-3">
          <BaseTag rounded="none">
            Label
          </BaseTag>
          <BaseTag rounded="sm">
            Label
          </BaseTag>
          <BaseTag rounded="md">
            Label
          </BaseTag>
          <BaseTag rounded="lg">
            Label
          </BaseTag>
          <BaseTag rounded="full">
            Label
          </BaseTag>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: solid"
        description="Tag component solid colors"
      >
        <div class="flex flex-wrap items-end gap-3">
          <BaseTag rounded="md" variant="solid" color="default">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="solid" color="muted">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="solid" color="primary">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="solid" color="success">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="solid" color="info">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="solid" color="warning">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="solid" color="danger">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="solid" color="light">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="solid" color="dark">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="solid" color="black">
            Label
          </BaseTag>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: pastel"
        description="Tag component pastel colors"
      >
        <div class="flex flex-wrap items-end gap-3">
          <BaseTag rounded="md" variant="pastel" color="default">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="pastel" color="muted">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="pastel" color="primary">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="pastel" color="success">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="pastel" color="info">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="pastel" color="warning">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="pastel" color="danger">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="pastel" color="light">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="pastel" color="dark">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="pastel" color="black">
            Label
          </BaseTag>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: outline"
        description="Tag component outline colors"
      >
        <div class="flex flex-wrap items-end gap-3">
          <BaseTag rounded="md" variant="outline" color="default">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="outline" color="muted">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="outline" color="primary">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="outline" color="success">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="outline" color="info">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="outline" color="warning">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="outline" color="danger">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="outline" color="light">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="outline" color="dark">
            Label
          </BaseTag>
          <BaseTag rounded="md" variant="outline" color="black">
            Label
          </BaseTag>
        </div>
      </NuiPreview>

      <NuiPreview title="Shadow: flat" description="Tag component flat shadows">
        <div class="flex flex-wrap items-end gap-3">
          <BaseTag rounded="md" shadow="flat" color="default">
            Label
          </BaseTag>
          <BaseTag rounded="md" shadow="flat" color="muted">
            Label
          </BaseTag>
          <BaseTag rounded="md" shadow="flat" color="primary">
            Label
          </BaseTag>
          <BaseTag rounded="md" shadow="flat" color="success">
            Label
          </BaseTag>
          <BaseTag rounded="md" shadow="flat" color="info">
            Label
          </BaseTag>
          <BaseTag rounded="md" shadow="flat" color="warning">
            Label
          </BaseTag>
          <BaseTag rounded="md" shadow="flat" color="danger">
            Label
          </BaseTag>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Shadow: hover"
        description="Tag component hover shadows"
      >
        <div class="flex flex-wrap items-end gap-3">
          <BaseTag rounded="md" shadow="hover" color="default">
            Label
          </BaseTag>
          <BaseTag rounded="md" shadow="hover" color="muted">
            Label
          </BaseTag>
          <BaseTag rounded="md" shadow="hover" color="primary">
            Label
          </BaseTag>
          <BaseTag rounded="md" shadow="hover" color="success">
            Label
          </BaseTag>
          <BaseTag rounded="md" shadow="hover" color="info">
            Label
          </BaseTag>
          <BaseTag rounded="md" shadow="hover" color="warning">
            Label
          </BaseTag>
          <BaseTag rounded="md" shadow="hover" color="danger">
            Label
          </BaseTag>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
