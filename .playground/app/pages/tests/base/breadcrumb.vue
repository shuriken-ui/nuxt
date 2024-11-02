<script setup lang="ts">
definePageMeta({
  title: 'BaseBreadcrumb',
  icon: 'system-uicons:chain',
  description: 'Breadcrumb component',
  section: 'base',
})

const demoBreadcrumb = [
  {
    label: 'Home',
    hideLabel: false,
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
      <NuiPreview title="Colors" description="Breadcrumb component colors">
        <div class="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb :items="demoBreadcrumb" color="dark" />

          <BaseBreadcrumb :items="demoBreadcrumb" color="black" />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Separator: dot"
        description="Breadcrumb component with dot separator"
      >
        <div class="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb :items="demoBreadcrumbOne" />

          <BaseBreadcrumb :items="demoBreadcrumbTwo" />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Separator: slash"
        description="Breadcrumb component with slash separator"
      >
        <div class="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb :items="demoBreadcrumbOne" separator="slash">
            /
          </BaseBreadcrumb>

          <BaseBreadcrumb :items="demoBreadcrumbTwo" separator="slash">
            /
          </BaseBreadcrumb>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Separator: chevron"
        description="Breadcrumb component with chevron separator"
      >
        <div class="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb :items="demoBreadcrumbOne" separator="chevron">
            <Icon name="lucide:chevron-right" class="w-4 h-4" />
          </BaseBreadcrumb>

          <BaseBreadcrumb :items="demoBreadcrumbTwo" separator="chevron">
            <Icon name="lucide:chevron-right" class="w-4 h-4" />
          </BaseBreadcrumb>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Separator: arrow"
        description="Breadcrumb component with arrow separator"
      >
        <div class="flex flex-col gap-4 pt-4">
          <BaseBreadcrumb :items="demoBreadcrumbOne" separator="arrow">
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </BaseBreadcrumb>

          <BaseBreadcrumb :items="demoBreadcrumbTwo" separator="arrow">
            <Icon name="lucide:arrow-right" class="w-4 h-4" />
          </BaseBreadcrumb>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
