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
        BaseAvatar Shape
      </BaseHeading>
      <div class="grid grid-cols-8 gap-6">
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            dot
            badgeSrc="https://source.unsplash.com/random/"
          />
          <small>default</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            shape="straight"
            dot
            badgeSrc="https://source.unsplash.com/random/"
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
        BaseAvatar Mask
      </BaseHeading>
      <div class="grid grid-cols-8 gap-6">
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            shape="straight"
            mask="hex"
            dot
          />
          <small>hex</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            shape="straight"
            mask="hexed"
            dot
          />
          <small>hexed</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            shape="straight"
            mask="deca"
            dot
          />
          <small>deca</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            shape="straight"
            mask="blob"
            dot
          />
          <small>blob</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            shape="straight"
            mask="diamond"
            dot
          />
          <small>diamond</small>
        </div>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseAvatar Sizes
      </BaseHeading>
      <div class="grid grid-cols-9">
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            size="xxs"
            dot
          />
          <small>xxs</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar src="https://source.unsplash.com/random/" size="xs" dot />
          <small>xs</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar src="https://source.unsplash.com/random/" size="sm" dot />
          <small>sm</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar src="https://source.unsplash.com/random/" size="md" dot />
          <small>md</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar src="https://source.unsplash.com/random/" size="lg" dot />
          <small>lg</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar src="https://source.unsplash.com/random/" size="xl" dot />
          <small>xl</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            size="2xl"
            dot
          />
          <small>2xl</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            size="3xl"
            dot
          />
          <small>3xl</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            size="4xl"
            dot
          />
          <small>4xl</small>
        </div>
      </div>
    </div>
  </div>
</template>
