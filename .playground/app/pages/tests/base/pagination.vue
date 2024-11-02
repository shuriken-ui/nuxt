<script setup lang="ts">
definePageMeta({
  title: 'BasePagination',
  icon: 'system-uicons:circle-menu',
  description: 'Pagination component',
  section: 'base',
})

const route = useRoute()
const currentPage = computed(() => {
  try {
    return Number.parseInt(route.query.page as string) || 1
  }
  catch {}
  return 1
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BasePagination">
      <NuiPreview
        title="Rounded: none"
        description="Pagination component radius none"
      >
        <BasePagination
          :item-per-page="8"
          :total-items="512"
          :current-page="currentPage"
          :max-links-displayed="5"
          rounded="none"
        />
      </NuiPreview>

      <NuiPreview
        title="Rounded: sm"
        description="Pagination component radius sm"
      >
        <BasePagination
          :item-per-page="8"
          :total-items="512"
          :current-page="currentPage"
          :max-links-displayed="5"
          rounded="sm"
          color="dark"
        />
      </NuiPreview>

      <NuiPreview
        title="Rounded: md"
        description="Pagination component radius md"
      >
        <BasePagination
          :item-per-page="8"
          :total-items="512"
          :current-page="currentPage"
          :max-links-displayed="5"
          rounded="md"
          color="black"
        />
      </NuiPreview>

      <NuiPreview
        title="Rounded: lg"
        description="Pagination component radius lg"
      >
        <BasePagination
          :item-per-page="8"
          :total-items="512"
          :current-page="currentPage"
          :max-links-displayed="5"
          rounded="lg"
        />
      </NuiPreview>

      <NuiPreview
        title="Rounded: full"
        description="Pagination component radius full"
      >
        <BasePagination
          :item-per-page="8"
          :total-items="1000000"
          :current-page="currentPage"
          :max-links-displayed="5"
          rounded="full"
        />
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
