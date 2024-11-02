<script setup lang="ts">
definePageMeta({
  title: 'BasePlaceholderPage',
  icon: 'system-uicons:component-add',
  description: 'Placeholder component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BasePlaceholderPage">
      <NuiPreview title="Default" description="Placeholder component default">
        <BasePlaceholderPage
          title="Looks like you are new!"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges."
        >
          <template #image>
            <img
              src="https://tairo.cssninja.io/img/illustrations/placeholders/people/2.svg"
              alt="placeholder-image"
            >
          </template>

          <div class="mt-2 flex justify-center gap-2">
            <BaseButton color="primary" rounded="md" class="h-11 w-40">
              Take some action
            </BaseButton>
          </div>
        </BasePlaceholderPage>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
