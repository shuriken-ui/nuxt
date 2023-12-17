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
      <div class="flex flex-wrap items-end gap-4">
        <BaseAvatar size="xxs">
          <img
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            rounded="full"
          />
        </BaseAvatar>
        <BaseAvatar size="xs">
          <img
            src="https://tairo.cssninja.io/img/avatars/1.svg"
            rounded="full"
          />
        </BaseAvatar>

        <BaseAvatar
          src="https://tairo.cssninja.io/img/avatars/5.svg"
          rounded="full"
        />

        <BaseAvatar
          src="https://tairo.cssninja.io/img/avatars/4.svg"
          rounded="full"
          size="md"
        />

        <BaseAvatar
          src="https://tairo.cssninja.io/img/avatars/3.svg"
          rounded="full"
          size="lg"
        />

        <BaseAvatar
          src="https://tairo.cssninja.io/img/avatars/8.svg"
          rounded="full"
          size="xl"
        />

        <BaseAvatar
          src="https://tairo.cssninja.io/img/avatars/16.svg"
          rounded="full"
          size="2xl"
        />

        <BaseAvatar
          src="https://tairo.cssninja.io/img/avatars/2.svg"
          rounded="full"
          size="3xl"
        />

        <BaseAvatar
          src="https://tairo.cssninja.io/img/avatars/20.svg"
          rounded="full"
          size="4xl"
        />
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseAvatar Rounded
      </BaseHeading>
      <div class="grid grid-cols-8 gap-6">
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://tairo.cssninja.io/img/avatars/2.svg"
            dot
            badgeSrc="https://source.unsplash.com/random/"
          />
          <small>default</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            rounded="none"
            dot
            badgeSrc="https://source.unsplash.com/random/"
          />
          <small>straight</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            rounded="sm"
            dot
          />
          <small>rounded</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            rounded="lg"
            dot
          />
          <small>curved</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            rounded="full"
            dot="warning"
            ring
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
            rounded="none"
            mask="hex"
            dot
          />
          <small>hex</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            rounded="none"
            mask="hexed"
            dot
          />
          <small>hexed</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            rounded="none"
            mask="deca"
            dot
          />
          <small>deca</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            rounded="none"
            mask="blob"
            dot
          />
          <small>blob</small>
        </div>
        <div class="flex flex-col items-center">
          <BaseAvatar
            src="https://source.unsplash.com/random/"
            rounded="none"
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
