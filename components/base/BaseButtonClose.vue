<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The shape of the button.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'
    /** The color of the button. Can be 'default' or 'muted. */
    color?: 'default' | 'muted' | 'primary'
  }>(),
  {
    shape: undefined,
    color: 'default',
  }
)

const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.buttonClose
)

const shapeStyle = {
  straight: '',
  rounded: 'rounded-md',
  curved: 'rounded-lg',
  full: 'rounded-full',
}
</script>

<template>
  <button
    type="button"
    class="flex h-9 w-9 items-center justify-center transition-colors duration-300 disabled:opacity-30"
    :class="[
      props.color === 'default' &&
        'hover:bg-muted-100 dark:hover:bg-muted-700 text-muted-700 dark:text-muted-50',
      props.color === 'muted' &&
        'bg-muted-100 hover:bg-muted-50 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-700 dark:text-muted-50',
      props.color === 'primary' &&
        'bg-primary-500/10 hover:bg-primary-500/20 text-primary-500',
      shape && shapeStyle[shape],
    ]"
  >
    <IconClose class="h-4 w-4 fill-current" />
  </button>
</template>
