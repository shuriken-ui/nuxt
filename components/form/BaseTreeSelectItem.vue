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
     * The radius of the component.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  }>(),
  {
    value: () => ({}),
    level: 1,
    toggle: undefined,
    rounded: undefined,
  },
)

const rounded = useNuiDefaultProperty(props, 'BaseTreeSelectItem', 'rounded')

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
      rounded === 'none' && 'rounded-none',
      rounded === 'sm' && 'rounded',
      rounded === 'md' && 'rounded-md',
      rounded === 'lg' && 'rounded-lg',
      rounded === 'full' && 'rounded-xl',
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
        rounded="full"
        class="me-2"
      >
        <slot name="item-icon">
          <Icon :name="props.value.icon" class="size-4" />
        </slot>
      </BaseIconBox>
      <div class="flex flex-col items-start">
        <div
          class="text-muted-800 font-sans text-sm font-medium leading-none dark:text-white"
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
