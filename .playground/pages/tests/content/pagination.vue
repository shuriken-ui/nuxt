<script setup lang="ts">
definePageMeta({
  title: 'Pagination',
  icon: 'carbon:page-scroll',
  description: 'SVG icons',
  section: 'content',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Pagination Shape
      </BaseHeading>
      <div class="grid grid-cols-3 gap-4">
        <BasePagination
          :item-per-page="4"
          :total-items="200"
          :current-page="4"
          :max-links-displayed="2"
          shape="straight"
        />
        <BasePagination
          :item-per-page="4"
          :total-items="200"
          :current-page="4"
          :max-links-displayed="2"
          shape="rounded"
        />
        <BasePagination
          :item-per-page="4"
          :total-items="200"
          :current-page="4"
          :max-links-displayed="2"
          shape="smooth"
        />
        <BasePagination
          :item-per-page="4"
          :total-items="200"
          :current-page="4"
          :max-links-displayed="2"
          shape="curved"
        />
        <BasePagination
          :item-per-page="4"
          :total-items="200"
          :current-page="4"
          :max-links-displayed="2"
          shape="full"
        />
      </div>
    </div>
  </div>
</template>
