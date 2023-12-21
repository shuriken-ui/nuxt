<script setup lang="ts">
definePageMeta({
  title: 'BasePlaceload',
  icon: 'system-uicons:card-timeline',
  description: 'Placeload component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BasePlaceload">
      <NuiPreview title="Text" description="Placeload component text">
        <div class="max-w-sm space-y-2">
          <BasePlaceload class="h-4 w-full rounded" />
          <BasePlaceload class="h-4 w-[85%] rounded" />
        </div>
      </NuiPreview>

      <NuiPreview title="Shape" description="Placeload component shape">
        <div class="flex flex-wrap items-end gap-2">
          <BasePlaceload class="h-10 w-10 rounded" />
          <BasePlaceload class="h-12 w-12 rounded-xl" />
          <BasePlaceload class="h-16 w-16 rounded-full" />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Composition"
        description="Placeload component composition"
      >
        <div class="max-w-sm">
          <BaseCard rounded="md" class="p-4 md:p-6">
            <div class="flex items-center">
              <BasePlaceload class="h-10 w-10 rounded-full" />
              <div class="ms-3 grow space-y-2">
                <BasePlaceload class="h-3 w-full rounded" />
                <BasePlaceload class="h-3 w-[85%] rounded" />
              </div>
            </div>
          </BaseCard>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
