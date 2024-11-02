<script setup lang="ts">
definePageMeta({
  title: 'BaseFocusLoop',
  icon: 'system-uicons:marquee',
  description: 'Focus Loop component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseFocusLoop">
      <NuiPreview title="Main demo" description="Focus Loop component demo">
        <BaseFocusLoop class="flex flex-wrap items-end gap-2">
          <BaseButton>Button</BaseButton>
          <BaseButton color="primary">
            Button
          </BaseButton>
          <BaseButton color="success">
            Button
          </BaseButton>
          <BaseButton color="info">
            Button
          </BaseButton>
          <BaseButton color="warning">
            Button
          </BaseButton>
          <BaseButton color="danger">
            Button
          </BaseButton>
          <BaseButton color="muted">
            Button
          </BaseButton>
        </BaseFocusLoop>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
