<script setup lang="ts">
definePageMeta({
  title: 'Image',
  icon: 'solar:graph-new-line-duotone',
  description: 'SVG icons',
  section: 'images',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">Images</BaseHeading>
      <BaseImage src="https://source.unsplash.com/random/" width="80" />
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Images Sizing
      </BaseHeading>
      <div class="grid grid-cols-12">
        <BaseImage src="https://source.unsplash.com/random/" width="20" />
        <BaseImage src="https://source.unsplash.com/random/" width="40" />
        <BaseImage src="https://source.unsplash.com/random/" width="60" />
        <BaseImage src="https://source.unsplash.com/random/" width="80" />
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Images Shapes
      </BaseHeading>
      <div class="grid grid-cols-12">
        <BaseImage
          src="https://source.unsplash.com/random/"
          width="80"
          shape="straight"
        />
        <BaseImage
          src="https://source.unsplash.com/random/"
          width="80"
          shape="rounded"
        />
        <BaseImage
          src="https://source.unsplash.com/random/"
          width="80"
          shape="curved"
        />
        <BaseImage
          src="https://source.unsplash.com/random/"
          width="80"
          shape="full"
        />
      </div>
    </div>
  </div>
</template>
