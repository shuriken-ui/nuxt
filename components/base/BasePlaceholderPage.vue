<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The title of the placeholder.
     */
    title: string

    /**
     * The subtitle of the placeholder.
     */
    subtitle?: string

    /**
     * The size of the featured image.
     */
    imageSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  }>(),
  {
    subtitle: undefined,
    imageSize: 'xs',
  },
)

const sizeStyle = {
  xs: 'nui-placeholder-xs',
  sm: 'nui-placeholder-sm',
  md: 'nui-placeholder-md',
  lg: 'nui-placeholder-lg',
  xl: 'nui-placeholder-xl',
}
</script>

<template>
  <div class="nui-placeholder-page" :class="sizeStyle[props.imageSize]">
    <div class="nui-placeholder-page-inner">
      <div v-if="'image' in $slots" class="nui-placeholder-page-img">
        <slot name="image"></slot>
      </div>
      <div class="nui-placeholder-page-content">
        <BaseHeading
          as="h4"
          weight="medium"
          size="xl"
          class="nui-placeholder-page-title"
        >
          {{ props.title }}
        </BaseHeading>
        <p v-if="props.subtitle" class="nui-placeholder-page-subtitle">
          {{ props.subtitle }}
        </p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
