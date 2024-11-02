<script setup lang="ts">
definePageMeta({
  title: 'BaseButton',
  icon: 'system-uicons:duplicate-alt',
  description: 'Button component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseButton">
      <NuiPreview title="Radius" description="Button component border radiuses">
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton rounded="none">
            Button
          </BaseButton>
          <BaseButton rounded="sm">
            Button
          </BaseButton>
          <BaseButton rounded="md">
            Button
          </BaseButton>
          <BaseButton rounded="lg">
            Button
          </BaseButton>
          <BaseButton rounded="full">
            Button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview title="Size" description="Button component sizes">
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton size="sm" rounded="md">
            Button
          </BaseButton>
          <BaseButton size="md" rounded="md">
            Button
          </BaseButton>
          <BaseButton size="lg" rounded="md">
            Button
          </BaseButton>
          <BaseButton size="xl" rounded="md">
            Button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview title="Badge" description="Button component badges">
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton size="sm" rounded="md" badge badge-pulse>
            Button
          </BaseButton>
          <BaseButton size="md" rounded="md" badge badge-pulse>
            Button
          </BaseButton>
          <BaseButton size="lg" rounded="md" badge badge-pulse>
            Button
          </BaseButton>
          <BaseButton size="xl" rounded="md" badge badge-pulse>
            Button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Link"
        description="Button component rendered as a link"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton to="#" rounded="none">
            Button
          </BaseButton>
          <BaseButton to="#" rounded="sm">
            Button
          </BaseButton>
          <BaseButton to="#" rounded="md">
            Button
          </BaseButton>
          <BaseButton to="#" rounded="lg">
            Button
          </BaseButton>
          <BaseButton to="#" rounded="full">
            Button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: solid"
        description="Button component solid variant"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="solid">
            Button
          </BaseButton>
          <BaseButton variant="solid" color="muted">
            Button
          </BaseButton>
          <BaseButton variant="solid" color="primary">
            Button
          </BaseButton>
          <BaseButton variant="solid" color="success">
            Button
          </BaseButton>
          <BaseButton variant="solid" color="info">
            Button
          </BaseButton>
          <BaseButton variant="solid" color="warning">
            Button
          </BaseButton>
          <BaseButton variant="solid" color="danger">
            Button
          </BaseButton>
          <BaseButton variant="solid" color="light">
            Button
          </BaseButton>
          <BaseButton variant="solid" color="dark">
            Button
          </BaseButton>
          <BaseButton variant="solid" color="black">
            Button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: pastel"
        description="Button component pastel variant"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="pastel">
            Button
          </BaseButton>
          <BaseButton variant="pastel" color="muted">
            Button
          </BaseButton>
          <BaseButton variant="pastel" color="primary">
            Button
          </BaseButton>
          <BaseButton variant="pastel" color="success">
            Button
          </BaseButton>
          <BaseButton variant="pastel" color="info">
            Button
          </BaseButton>
          <BaseButton variant="pastel" color="warning">
            Button
          </BaseButton>
          <BaseButton variant="pastel" color="danger">
            Button
          </BaseButton>
          <BaseButton variant="pastel" color="light">
            Button
          </BaseButton>
          <BaseButton variant="pastel" color="dark">
            Button
          </BaseButton>
          <BaseButton variant="pastel" color="black">
            Button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: outline"
        description="Button component outline variant"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton variant="outline">
            Button
          </BaseButton>
          <BaseButton variant="outline" color="muted">
            Button
          </BaseButton>
          <BaseButton variant="outline" color="primary">
            Button
          </BaseButton>
          <BaseButton variant="outline" color="success">
            Button
          </BaseButton>
          <BaseButton variant="outline" color="info">
            Button
          </BaseButton>
          <BaseButton variant="outline" color="warning">
            Button
          </BaseButton>
          <BaseButton variant="outline" color="danger">
            Button
          </BaseButton>
          <BaseButton variant="outline" color="light">
            Button
          </BaseButton>
          <BaseButton variant="outline" color="dark">
            Button
          </BaseButton>
          <BaseButton variant="outline" color="black">
            Button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview title="With icons" description="Button component with icons">
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton color="default">
            <Icon name="lucide:moon" class="-ms-1 h-4 w-4" />
            <span>Button</span>
          </BaseButton>
          <BaseButton color="primary">
            <span>Button</span>
            <Icon name="lucide:arrow-right" class="me-1 h-4 w-4" />
          </BaseButton>
          <BaseButton color="success">
            <Icon name="cib:envato" class="-ms-1 h-4 w-4" />
            <span>Button</span>
          </BaseButton>
          <BaseButton color="info">
            <Icon name="fa:twitter" class="-ms-1 h-4 w-4" />
            <span>Button</span>
          </BaseButton>
          <BaseButton color="warning">
            <Icon name="ion:shapes" class="-ms-1 h-4 w-4" />
            <span>Button</span>
          </BaseButton>
          <BaseButton color="danger">
            <Icon name="ph:heart-duotone" class="-ms-1 h-4 w-4" />
            <span>Button</span>
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Shadow: flat"
        description="Button component with a flat shadow"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton shadow="flat">
            Button
          </BaseButton>
          <BaseButton shadow="flat" color="muted">
            Button
          </BaseButton>
          <BaseButton shadow="flat" color="primary">
            Button
          </BaseButton>
          <BaseButton shadow="flat" color="success">
            Button
          </BaseButton>
          <BaseButton shadow="flat" color="info">
            Button
          </BaseButton>
          <BaseButton shadow="flat" color="warning">
            Button
          </BaseButton>
          <BaseButton shadow="flat" color="danger">
            Button
          </BaseButton>
          <BaseButton shadow="flat" color="light">
            Button
          </BaseButton>
          <BaseButton shadow="flat" color="dark">
            Button
          </BaseButton>
          <BaseButton shadow="flat" color="black">
            Button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Shadow: hover"
        description="Button component with a hover shadow"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton shadow="hover">
            Button
          </BaseButton>
          <BaseButton shadow="hover" color="muted">
            Button
          </BaseButton>
          <BaseButton shadow="hover" color="primary">
            Button
          </BaseButton>
          <BaseButton shadow="hover" color="success">
            Button
          </BaseButton>
          <BaseButton shadow="hover" color="info">
            Button
          </BaseButton>
          <BaseButton shadow="hover" color="warning">
            Button
          </BaseButton>
          <BaseButton shadow="hover" color="danger">
            Button
          </BaseButton>
          <BaseButton shadow="hover" color="light">
            Button
          </BaseButton>
          <BaseButton shadow="hover" color="dark">
            Button
          </BaseButton>
          <BaseButton shadow="hover" color="black">
            Button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="State: loading"
        description="Button component in a loading state"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton loading>
            Button
          </BaseButton>
          <BaseButton loading color="muted">
            Button
          </BaseButton>
          <BaseButton loading color="primary">
            Button
          </BaseButton>
          <BaseButton loading color="success">
            Button
          </BaseButton>
          <BaseButton loading color="info">
            Button
          </BaseButton>
          <BaseButton loading color="warning">
            Button
          </BaseButton>
          <BaseButton loading color="danger">
            Button
          </BaseButton>
          <BaseButton loading color="light">
            Button
          </BaseButton>
          <BaseButton loading color="dark">
            Button
          </BaseButton>
          <BaseButton loading color="black">
            Button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="State: disabled"
        description="Button component in a disabled state"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseButton disabled>
            Button
          </BaseButton>
          <BaseButton disabled color="muted">
            Button
          </BaseButton>
          <BaseButton disabled color="primary">
            Button
          </BaseButton>
          <BaseButton disabled color="success">
            Button
          </BaseButton>
          <BaseButton disabled color="info">
            Button
          </BaseButton>
          <BaseButton disabled color="warning">
            Button
          </BaseButton>
          <BaseButton disabled color="danger">
            Button
          </BaseButton>
          <BaseButton disabled color="light">
            Button
          </BaseButton>
          <BaseButton disabled color="dark">
            Button
          </BaseButton>
          <BaseButton disabled color="black">
            Button
          </BaseButton>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Group"
        description="Button component inside a button group"
      >
        <BaseButtonGroup>
          <BaseButton color="default">
            <Icon name="lucide:edit-3" class="-ms-1 h-3 w-3" />
            <span>Edit</span>
          </BaseButton>
          <BaseButton color="default">
            <Icon name="lucide:eye" class="-ms-1 h-3 w-3" />
            <span>View</span>
          </BaseButton>
          <BaseButton color="primary">
            <Icon name="lucide:box" class="-ms-1 h-3 w-3" />
            <span>Stash</span>
          </BaseButton>
          <BaseButton color="default">
            <Icon name="lucide:share-2" class="-ms-1 h-3 w-3" />
            <span>Share</span>
          </BaseButton>
        </BaseButtonGroup>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
