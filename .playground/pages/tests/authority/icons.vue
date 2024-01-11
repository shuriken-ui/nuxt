<script setup lang="ts">
import IconIndeterminate from '~~/../components/icon/IconIndeterminate.vue'

definePageMeta({
  title: 'Icons',
  icon: 'system-uicons:diamond',
  description: 'SVG icons',
  section: 'authority',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="Icons">
      <NuiPreview title="Nui Icons" description="Svg icons used in Nui">
        <div class="flex flex-wrap items-end gap-4">
          <IconCheck class="w-8 h-8" />
          <IconIndeterminate class="w-8 h-8" />
          <IconCheckCircle class="w-8 h-8" />
          <IconChevronDown class="w-8 h-8" />
          <IconClose class="w-8 h-8" />
          <IconMoon class="w-8 h-8" />
          <IconPlus class="w-8 h-8" />
          <IconMinus class="w-8 h-8" />
          <IconSun class="w-8 h-8" />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
