<script setup lang="ts">
definePageMeta({
  title: 'BaseAvatarGroup',
  icon: 'system-uicons:users',
  description: 'Avatar group component',
  section: 'base',
})

const people = [
  {
    'data-nui-tooltip': 'Clarissa Perez',
    'src': 'https://tairo.cssninja.io/img/avatars/19.svg',
  },
  {
    'data-nui-tooltip': 'Aaaron Splatter',
    'src': 'https://tairo.cssninja.io/img/avatars/16.svg',
  },
  {
    'data-nui-tooltip': 'Mike Miller',
    'src': 'https://tairo.cssninja.io/img/avatars/3.svg',
  },
  {
    'data-nui-tooltip': 'Benedict Kessler',
    'src': 'https://tairo.cssninja.io/img/avatars/22.svg',
  },
  {
    'data-nui-tooltip': 'Maya Rosselini',
    'src': 'https://tairo.cssninja.io/img/avatars/2.svg',
  },
]
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseAvatarGroup">
      <NuiPreview
        title="Size: xxs"
        description="Avatar group component xxs size"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseAvatarGroup size="xxs" :limit="4" :avatars="people" />
        </div>
      </NuiPreview>

      <NuiPreview title="Size: xs" description="Avatar group component xs size">
        <div class="flex flex-wrap items-end gap-4">
          <BaseAvatarGroup size="xs" :limit="4" :avatars="people" />
        </div>
      </NuiPreview>

      <NuiPreview title="Size: sm" description="Avatar group component sm size">
        <div class="flex flex-wrap items-end gap-4">
          <BaseAvatarGroup size="sm" :limit="4" :avatars="people" />
        </div>
      </NuiPreview>

      <NuiPreview title="Size: md" description="Avatar group component md size">
        <div class="flex flex-wrap items-end gap-4">
          <BaseAvatarGroup size="md" :limit="4" :avatars="people" />
        </div>
      </NuiPreview>

      <NuiPreview title="Size: lg" description="Avatar group component lg size">
        <div class="flex flex-wrap items-end gap-4">
          <BaseAvatarGroup size="lg" :limit="4" :avatars="people" />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
