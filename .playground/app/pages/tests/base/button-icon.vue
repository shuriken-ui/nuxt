<script setup lang="ts">
definePageMeta({
  title: 'BaseButtonIcon',
  icon: 'system-uicons:plus-circle',
  description: 'Button icon component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseButtonIcon">
      <NuiPreview title="Radius" description="Button icon component radiuses">
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none">
            <Icon name="ph:moon-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm">
            <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md">
            <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg">
            <Icon name="ph:alien-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full">
            <Icon name="ph:heart-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview title="Size" description="Button icon component sizes">
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon size="sm" rounded="md">
            <Icon name="ph:game-controller-duotone" class="h-4 w-4" />
          </BaseButtonIcon>
          <BaseButtonIcon size="md" rounded="md">
            <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon size="lg" rounded="md">
            <Icon name="ph:game-controller-duotone" class="h-6 w-6" />
          </BaseButtonIcon>
          <BaseButtonIcon size="xl" rounded="md">
            <Icon name="ph:game-controller-duotone" class="h-7 w-7" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: default"
        description="Button icon component default color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="default">
            <Icon name="ph:moon-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="default">
            <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="default">
            <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="default">
            <Icon name="ph:alien-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="default">
            <Icon name="ph:heart-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: muted"
        description="Button icon component muted color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="muted">
            <Icon name="ph:moon-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="muted">
            <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="muted">
            <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="muted">
            <Icon name="ph:alien-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="muted">
            <Icon name="ph:heart-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: primary"
        description="Button icon component primary color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="primary">
            <Icon name="ph:moon-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="primary">
            <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="primary">
            <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="primary">
            <Icon name="ph:alien-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="primary">
            <Icon name="ph:heart-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: info"
        description="Button icon component info color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="info">
            <Icon name="ph:moon-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="info">
            <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="info">
            <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="info">
            <Icon name="ph:alien-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="info">
            <Icon name="ph:heart-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: success"
        description="Button icon component success color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="success">
            <Icon name="ph:moon-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="success">
            <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="success">
            <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="success">
            <Icon name="ph:alien-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="success">
            <Icon name="ph:heart-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: warning"
        description="Button icon component warning color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="warning">
            <Icon name="ph:moon-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="warning">
            <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="warning">
            <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="warning">
            <Icon name="ph:alien-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="warning">
            <Icon name="ph:heart-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: danger"
        description="Button icon component danger color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="danger">
            <Icon name="ph:moon-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="danger">
            <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="danger">
            <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="danger">
            <Icon name="ph:alien-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="danger">
            <Icon name="ph:heart-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: light"
        description="Button icon component light color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="light">
            <Icon name="ph:moon-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="light">
            <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="light">
            <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="light">
            <Icon name="ph:alien-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="light">
            <Icon name="ph:heart-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: dark"
        description="Button icon component dark color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="dark">
            <Icon name="ph:moon-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="dark">
            <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="dark">
            <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="dark">
            <Icon name="ph:alien-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="dark">
            <Icon name="ph:heart-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: black"
        description="Button icon component black color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="black">
            <Icon name="ph:moon-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="black">
            <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="black">
            <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="black">
            <Icon name="ph:alien-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="black">
            <Icon name="ph:heart-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="State: loading"
        description="Button icon component in loading state"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" loading>
            <Icon name="ph:moon-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" loading>
            <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" loading>
            <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" loading>
            <Icon name="ph:alien-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" loading>
            <Icon name="ph:heart-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="State: disabled"
        description="Button icon component in disabled state"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" disabled>
            <Icon name="ph:moon-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="sm" disabled>
            <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="md" disabled>
            <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="lg" disabled>
            <Icon name="ph:alien-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
          <BaseButtonIcon rounded="full" disabled>
            <Icon name="ph:heart-duotone" class="h-5 w-5" />
          </BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Group"
        description="Button icon component inside a group"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonGroup>
            <BaseButtonIcon rounded="md" color="default">
              <Icon name="ph:moon-duotone" class="h-5 w-5" />
            </BaseButtonIcon>
            <BaseButtonIcon rounded="md" color="default">
              <Icon name="ph:github-logo-duotone" class="h-5 w-5" />
            </BaseButtonIcon>
            <BaseButtonIcon rounded="md" color="default">
              <Icon name="ph:game-controller-duotone" class="h-5 w-5" />
            </BaseButtonIcon>
            <BaseButtonIcon rounded="md" color="default">
              <Icon name="ph:alien-duotone" class="h-5 w-5" />
            </BaseButtonIcon>
            <BaseButtonIcon rounded="md" color="default">
              <Icon name="ph:heart-duotone" class="h-5 w-5" />
            </BaseButtonIcon>
          </BaseButtonGroup>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
