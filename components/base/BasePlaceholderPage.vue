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
  }
)
</script>

<template>
  <div class="flex min-h-[400px] items-center justify-center">
    <div
      class="mx-auto w-full text-center"
      :class="[
        props.imageSize === 'xs' ? 'max-w-xs' : '',
        props.imageSize === 'sm' ? 'max-w-sm' : '',
        props.imageSize === 'md' ? 'max-w-md' : '',
        props.imageSize === 'lg' ? 'max-w-lg' : '',
        props.imageSize === 'xl' ? 'max-w-xl' : '',
      ]"
    >
      <div
        v-if="'image' in $slots"
        class="mx-auto"
        :class="[
          props.imageSize === 'xs' ? 'max-w-xs' : '',
          props.imageSize === 'sm' ? 'max-w-sm' : '',
          props.imageSize === 'md' ? 'max-w-md' : '',
          props.imageSize === 'lg' ? 'max-w-lg' : '',
          props.imageSize === 'xl' ? 'max-w-xl' : '',
        ]"
      >
        <slot name="image"></slot>
      </div>
      <div class="mx-auto max-w-sm">
        <BaseHeading
          as="h4"
          weight="medium"
          size="xl"
          class="text-muted-800 mb-1 mt-4 dark:text-white"
        >
          {{ props.title }}
        </BaseHeading>
        <p v-if="props.subtitle" class="text-muted-400 font-sans text-sm">
          {{ props.subtitle }}
        </p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
