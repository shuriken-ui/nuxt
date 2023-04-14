<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The items to display in the component.
     */
    value?: {
      /**
       * The name of the item.
       */
      name?: string

      /**
       * Optional text to display for the item.
       */
      text?: string

      /**
       * Optional media (such as an image URL) to display for the item.
       */
      media?: string

      /**
       * Optional icon to display for the item.
       */
      icon?: string
    }

    /**
     * The level in the tree of the item.
     */
    level?: number

    /**
     * Action triggered when the item is clicked.
     */
    toggle?: () => void

    /**
     * The shape of the component.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'
  }>(),
  {
    level: 1,
    shape: undefined,
    value: () => ({}),
    toggle: undefined,
  }
)

const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui?.defaultShapes?.autocompleteItem
)

const wrapperTag = computed(() => {
  if (!props.toggle) {
    return 'div'
  }

  return 'button'
})

const wrapperProps = computed(() => {
  if (!props.toggle) {
    return {}
  }

  return {
    type: 'button',
    onClick: props.toggle,
    class: 'nui-focus',
  }
})
</script>

<template>
  <div
    class="flex items-center p-2 ps-0"
    :class="[
      shape === 'rounded' && 'rounded-md',
      shape === 'curved' && 'rounded-lg',
      shape === 'full' && 'rounded-xl',
    ]"
  >
    <slot></slot>

    <component :is="wrapperTag" class="flex items-center" v-bind="wrapperProps">
      <BaseAvatar
        v-if="props.value.media && !props.value.icon"
        :src="props.value.media"
        size="xs"
        class="me-2"
      />
      <BaseIconBox
        v-else-if="props.value.icon && !props.value.media"
        size="xs"
        shape="full"
      >
        <Icon :name="props.value.icon" class="h-4 w-4" />
      </BaseIconBox>
      <div class="flex flex-col items-start">
        <div
          class="text-muted-800 font-heading text-sm font-medium leading-none dark:text-white"
        >
          {{ props.value.name }}
        </div>
        <BaseText v-if="value.text" size="xs" class="text-muted-400">
          {{ props.value.text }}
        </BaseText>
      </div>
    </component>
  </div>
</template>
