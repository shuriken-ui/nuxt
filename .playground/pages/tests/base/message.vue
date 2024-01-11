<script setup lang="ts">
definePageMeta({
  title: 'BaseMessage',
  icon: 'system-uicons:postcard',
  description: 'Message component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseMessage">
      <NuiPreview title="Type" description="Message component types">
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage>A successful message.</BaseMessage>
          <BaseMessage type="info">An information message.</BaseMessage>
          <BaseMessage type="warning">A warning message.</BaseMessage>
          <BaseMessage type="danger">A destructive message.</BaseMessage>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Message component icons">
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage icon>A successful message.</BaseMessage>
          <BaseMessage type="info" icon>An information message.</BaseMessage>
          <BaseMessage type="warning" icon>A warning message.</BaseMessage>
          <BaseMessage type="danger" icon>A destructive message.</BaseMessage>
        </div>
      </NuiPreview>

      <NuiPreview title="Radius" description="Message component radiuses">
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage icon rounded="sm">A successful message.</BaseMessage>
          <BaseMessage type="info" icon rounded="md">
            An information message.
          </BaseMessage>
          <BaseMessage type="warning" icon rounded="lg">
            A warning message.
          </BaseMessage>
          <BaseMessage type="danger" icon rounded="full">
            A destructive message.
          </BaseMessage>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
