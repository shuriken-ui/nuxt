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
     *
     * @default 'xs'
     */
    imageSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'

    /**
     * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the inner element.
       */
      inner?: string | string[]

      /**
       * CSS classes to apply to the img element.
       */
      img?: string | string[]

      /**
       * CSS classes to apply to the content element.
       */
      content?: string | string[]

      /**
       * CSS classes to apply to the title element.
       */
      title?: string | string[]

      /**
       * CSS classes to apply to the subtitle element.
       */
      subtitle?: string | string[]
    }
  }>(),
  {
    subtitle: undefined,
    imageSize: undefined,
    classes: () => ({}),
  },
)

const imageSize = useNuiDefaultProperty(
  props,
  'BasePlaceholderPage',
  'imageSize',
)

const sizes = {
  xs: 'nui-placeholder-xs',
  sm: 'nui-placeholder-sm',
  md: 'nui-placeholder-md',
  lg: 'nui-placeholder-lg',
  xl: 'nui-placeholder-xl',
}
</script>

<template>
  <div
    class="nui-placeholder-page"
    :class="[imageSize && sizes[imageSize], props.classes?.wrapper]"
  >
    <div class="nui-placeholder-page-inner" :class="props.classes?.inner">
      <div
        v-if="'image' in $slots"
        class="nui-placeholder-page-img"
        :class="props.classes?.img"
      >
        <slot name="image" />
      </div>
      <div class="nui-placeholder-page-content" :class="props.classes?.content">
        <BaseHeading
          as="h4"
          weight="medium"
          size="xl"
          class="nui-placeholder-page-title"
          :class="props.classes?.title"
        >
          {{ props.title }}
        </BaseHeading>
        <p
          v-if="props.subtitle"
          class="nui-placeholder-page-subtitle"
          :class="props.classes?.subtitle"
        >
          {{ props.subtitle }}
        </p>
        <slot />
      </div>
    </div>
  </div>
</template>
