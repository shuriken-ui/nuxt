<script setup lang="ts">
definePageMeta({
  title: 'Mask',
  icon: 'solar:magic-stick-broken',
  description: 'Apply mask to different elements',
  section: 'images',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseAvatar mask
      </BaseHeading>
      <div class="grid grid-cols-8 gap-6">
        <BaseAvatar
          src="https://source.unsplash.com/random/"
          size="xl"
          class="nui-mask nui-mask-hex"
        />
        <BaseAvatar
          src="https://source.unsplash.com/random/"
          size="xl"
          class="nui-mask nui-mask-hexed"
        />
        <BaseAvatar
          src="https://source.unsplash.com/random/"
          size="xl"
          class="nui-mask nui-mask-deca"
        />
        <BaseAvatar
          src="https://source.unsplash.com/random/"
          size="xl"
          class="nui-mask nui-mask-blob"
        />
        <BaseAvatar
          src="https://source.unsplash.com/random/"
          size="xl"
          class="nui-mask nui-mask-diamond"
        />
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        img mask
      </BaseHeading>
      <div>
        <img
          src="https://source.unsplash.com/random/?technology"
          class="nui-mask nui-mask-hex hover:nui-mask-hexed max-w-xs"
        />
      </div>
    </div>
  </div>
</template>
