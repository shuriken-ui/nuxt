<script setup lang="ts">
definePageMeta({
  title: 'BaseThemeToggle',
  icon: 'system-uicons:toggles',
  description: 'Theme toggle component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseThemeToggle">
      <NuiPreview
        title="Variations"
        description="Theme toggle component variations"
      >
        <div class="flex items-center gap-10">
          <BaseThemeToggle />

          <BaseThemeSwitch />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
