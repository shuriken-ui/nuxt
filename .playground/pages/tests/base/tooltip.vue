<script setup lang="ts">
definePageMeta({
  title: 'Nui Tooltip',
  icon: 'system-uicons:component-add',
  description: 'Tooltip component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="Nui Tooltip">
      <NuiPreview title="Position" description="Tooltip component positions">
        <div class="flex flex-wrap gap-3">
          <BaseTag
            rounded="full"
            data-nui-tooltip="Top tooltip&#xa; the second line&#xa; the third line"
          >
            Hover/Focus Me
          </BaseTag>
          <BaseTag
            rounded="full"
            data-nui-tooltip-position="down"
            data-nui-tooltip="Bottom tooltip"
          >
            Hover/Focus Me
          </BaseTag>
          <BaseTag
            rounded="full"
            data-nui-tooltip-position="start"
            data-nui-tooltip="Start tooltip"
          >
            Hover/Focus Me
          </BaseTag>
          <BaseTag
            rounded="full"
            data-nui-tooltip-position="end"
            data-nui-tooltip="End tooltip"
          >
            Hover/Focus Me
          </BaseTag>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
