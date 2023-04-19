<script setup lang="ts">
import IconIndeterminate from '~~/../components/icon/IconIndeterminate.vue'

definePageMeta({
  title: 'Avatar',
  icon: 'solar:user-circle-broken',
  description: 'SVG icons',
  section: 'images',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseAvatar
      </BaseHeading>
      <div class="grid grid-cols-8 gap-6">
        <div class="flex flex-col items-center">
          <BaseAvatar src="https://source.unsplash.com/random/" dot />
          <small>default</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            shape="straight"
            dot
          />
          <small>straight</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            shape="rounded"
            dot
          />
          <small>rounded</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            shape="curved"
            dot
          />
          <small>curved</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            shape="full"
            dot
          />
          <small>full</small>
        </div>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseAvatar
        <small>xl</small>
      </BaseHeading>
      <div class="grid grid-cols-8 gap-6">
        <div class="flex flex-col items-center">
          <BaseAvatar src="https://source.unsplash.com/random/" size="xl" dot />
          <small>default</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            size="xl"
            shape="straight"
            dot
          />
          <small>straight</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            size="xl"
            shape="rounded"
            dot
          />
          <small>rounded</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            size="xl"
            shape="curved"
            dot
          />
          <small>curved</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            size="xl"
            shape="full"
            dot
          />
          <small>full</small>
        </div>
      </div>
    </div>
  </div>
</template>
