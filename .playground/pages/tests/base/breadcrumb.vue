<script setup lang="ts">
definePageMeta({
  title: 'BaseBreadcrumb',
  icon: 'mingcute:more-1-fill',
  description: 'Breadcrumb component',
  section: 'base',
})

const demoBreadcrumbOne = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '#',
  },
  {
    label: 'Products',
    hideLabel: false,
    to: '#',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    to: '#',
  },
]

const demoBreadcrumbTwo = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '#',
  },
  {
    label: 'Products',
    hideLabel: false,
    icon: 'lucide:layout-grid',
    to: '#',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    icon: 'lucide:laptop',
    to: '#',
  },
]
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseBreadcrumb">
      <NuiPreview
        title="Separator: dot"
        description="Breadcrumb component with dot separator"
      >
        <div class="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb :items="demoBreadcrumbOne" separator="dot" />

          <BaseBreadcrumb :items="demoBreadcrumbTwo" separator="dot" />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Separator: slash"
        description="Breadcrumb component with slash separator"
      >
        <div class="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb :items="demoBreadcrumbOne" separator="slash" />

          <BaseBreadcrumb :items="demoBreadcrumbTwo" separator="slash" />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Separator: chevron"
        description="Breadcrumb component with chevron separator"
      >
        <div class="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb :items="demoBreadcrumbOne" separator="chevron" />

          <BaseBreadcrumb :items="demoBreadcrumbTwo" separator="chevron" />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Separator: arrow"
        description="Breadcrumb component with arrow separator"
      >
        <div class="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb :items="demoBreadcrumbOne" separator="arrow" />

          <BaseBreadcrumb :items="demoBreadcrumbTwo" separator="arrow" />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
