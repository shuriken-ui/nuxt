<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The shape of the card.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

    /**
     * Whether the card is elevated.
     */
    elevated?: boolean

    /**
     * Whether the card is elevated on hover.
     */
    elevatedHover?: boolean
  }>(),
  {
    shape: undefined,
    elevated: false,
    elevatedHover: false,
  }
)
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.card)
</script>

<template>
  <div
    class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300"
    :class="[
      shape === 'rounded' && 'rounded-md',
      shape === 'curved' && 'rounded-xl',
      shape === 'full' && 'rounded-full',
      props.elevated &&
        !props.elevatedHover &&
        'shadow-muted-300/30 dark:shadow-muted-800/30 shadow-xl',
      props.elevatedHover &&
        !props.elevated &&
        'hover:shadow-muted-300/30 dark:hover:shadow-muted-800/30 hover:shadow-xl',
    ]"
  >
    <slot></slot>
  </div>
</template>
