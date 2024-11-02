<script setup lang="ts">
definePageMeta({
  title: 'BaseButtonAction',
  icon: 'system-uicons:duplicate-alt',
  description: 'Button action component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseButtonAction">
      <NuiPreview
        title="Radius"
        description="Button action component border radiuses"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonAction rounded="none">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="sm">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="md">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="lg">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="full">
            Action
          </BaseButtonAction>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: muted"
        description="Button action component muted color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonAction rounded="none" color="muted">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="sm" color="muted">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="md" color="muted">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="lg" color="muted">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="full" color="muted">
            Action
          </BaseButtonAction>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: primary"
        description="Button action component primary color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonAction rounded="none" color="primary">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="sm" color="primary">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="md" color="primary">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="lg" color="primary">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="full" color="primary">
            Action
          </BaseButtonAction>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: info"
        description="Button action component info color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonAction rounded="none" color="info">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="sm" color="info">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="md" color="info">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="lg" color="info">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="full" color="info">
            Action
          </BaseButtonAction>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: success"
        description="Button action component success color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonAction rounded="none" color="success">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="sm" color="success">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="md" color="success">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="lg" color="success">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="full" color="success">
            Action
          </BaseButtonAction>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: warning"
        description="Button action component warning color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonAction rounded="none" color="warning">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="sm" color="warning">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="md" color="warning">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="lg" color="warning">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="full" color="warning">
            Action
          </BaseButtonAction>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: danger"
        description="Button action component danger color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonAction rounded="none" color="danger">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="sm" color="danger">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="md" color="danger">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="lg" color="danger">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="full" color="danger">
            Action
          </BaseButtonAction>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: light"
        description="Button action component light color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonAction rounded="none" color="light">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="sm" color="light">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="md" color="light">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="lg" color="light">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="full" color="light">
            Action
          </BaseButtonAction>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: dark"
        description="Button action component dark color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonAction rounded="none" color="dark">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="sm" color="dark">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="md" color="dark">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="lg" color="dark">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="full" color="dark">
            Action
          </BaseButtonAction>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: black"
        description="Button action component black color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonAction rounded="none" color="black">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="sm" color="black">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="md" color="black">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="lg" color="black">
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="full" color="black">
            Action
          </BaseButtonAction>
        </div>
      </NuiPreview>

      <NuiPreview
        title="State: loading"
        description="Button action component in loading state"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonAction rounded="none" loading>
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="sm" loading>
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="md" loading>
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="lg" loading>
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="full" loading>
            Action
          </BaseButtonAction>
        </div>
      </NuiPreview>

      <NuiPreview
        title="State: disabled"
        description="Button action component in disabled state"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonAction rounded="none" disabled>
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="sm" disabled>
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="md" disabled>
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="lg" disabled>
            Action
          </BaseButtonAction>
          <BaseButtonAction rounded="full" disabled>
            Action
          </BaseButtonAction>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Group"
        description="Button action component inside a button group"
      >
        <BaseButtonGroup>
          <BaseButtonAction rounded="md">
            View
          </BaseButtonAction>
          <BaseButtonAction rounded="md">
            <Icon name="ph:pen" class="h-4 w-4" />
          </BaseButtonAction>
          <BaseButtonAction muted rounded="md">
            Muted
          </BaseButtonAction>
          <BaseDropdown label="plus">
            <template #button>
              <BaseButtonAction rounded="none">
                plus
              </BaseButtonAction>
            </template>
            <BaseDropdownItem>Edit</BaseDropdownItem>
            <BaseDropdownItem>Cancel</BaseDropdownItem>
          </BaseDropdown>
          <BaseButtonAction disabled rounded="md">
            Disabled
          </BaseButtonAction>
          <BaseButtonAction rounded="md">
            Share
          </BaseButtonAction>
        </BaseButtonGroup>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
