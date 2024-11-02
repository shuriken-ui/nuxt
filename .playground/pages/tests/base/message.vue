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
      <NuiPreview title="Color" description="Message component colors">
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage color="success">
            A successful message.
          </BaseMessage>
          <BaseMessage color="info">
            An information message.
          </BaseMessage>
          <BaseMessage color="warning">
            A warning message.
          </BaseMessage>
          <BaseMessage color="danger">
            A destructive message.
          </BaseMessage>
          <BaseMessage color="default">
            A default message.
          </BaseMessage>
          <BaseMessage color="muted">
            A muted message.
          </BaseMessage>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Message component icons">
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage color="success" icon>
            A successful message.
          </BaseMessage>
          <BaseMessage color="info" icon>
            An information message.
          </BaseMessage>
          <BaseMessage color="warning" icon>
            A warning message.
          </BaseMessage>
          <BaseMessage color="danger" icon>
            A destructive message.
          </BaseMessage>
          <BaseMessage color="default" icon="mingcute:avalanche-avax-fill">
            A default message.
          </BaseMessage>
          <BaseMessage color="muted" icon="mingcute:desk-lamp-fill">
            A muted message.
          </BaseMessage>
        </div>
      </NuiPreview>

      <NuiPreview title="Radius" description="Message component radiuses">
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage color="success" icon rounded="sm">
            A successful message.
          </BaseMessage>
          <BaseMessage color="info" icon rounded="md">
            An information message.
          </BaseMessage>
          <BaseMessage color="warning" icon rounded="lg">
            A warning message.
          </BaseMessage>
          <BaseMessage color="danger" icon rounded="full">
            A destructive message.
          </BaseMessage>
        </div>
      </NuiPreview>

      <NuiPreview title="Radius" description="Message component radiuses">
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-2xl gap-4">
          <BaseMessage color="success" icon rounded="sm" closable>
            A successful message.
          </BaseMessage>
          <BaseMessage color="info" icon rounded="md" closable>
            An information message.
          </BaseMessage>
          <BaseMessage color="warning" icon rounded="lg" closable>
            A warning message.
          </BaseMessage>
          <BaseMessage color="danger" icon rounded="full" closable>
            A destructive message.
          </BaseMessage>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
