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
     * The shape of the component.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

    /**
     * The icon to show when the component is selected.
     */
    selectedIcon?: string

    /**
     * Whether the item is focus/hover or not.
     */
    active?: boolean

    /**
     * Whether the item is selected or not.
     */
    selected?: boolean

    /**
     * CSS Class applied to the matching part of the text.
     */
    mark?: string
  }>(),
  {
    shape: undefined,
    mark: 'nui-mark',
    selectedIcon: 'lucide:check',
    value: () => ({}),
  }
)

const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.autocompleteItem
)

const inputContext = inject('BaseAutocompleteContext', {
  query: '',
})

const query = computed(() => inputContext.query)
const mark = computed(() => props.mark)
const markedName = useNinjaMark(() => props.value?.name, query, mark)
const markedText = useNinjaMark(() => props.value?.text, query, mark)
</script>

<template>
  <div
    class="flex cursor-pointer items-center p-2 transition-colors duration-300"
    :class="[
      props.active ? 'bg-muted-100 dark:bg-muted-700' : '',
      shape === 'rounded' && 'rounded-md',
      shape === 'curved' && 'rounded-lg',
      shape === 'full' && 'rounded-xl',
    ]"
  >
    <BaseAvatar
      v-if="props.value.media && !props.value.icon"
      :src="props.value.media"
      size="xs"
      class="me-3"
    />
    <BaseIconBox
      v-else-if="props.value.icon && !props.value.media"
      size="sm"
      shape="rounded"
      class="me-1"
    >
      <Icon
        :name="props.value.icon"
        class="h-4 w-4"
        :class="[props.selected ? 'text-primary-500' : 'text-muted-500']"
      />
    </BaseIconBox>
    <div>
      <BaseHeading
        as="h4"
        :weight="props.selected ? 'semibold' : 'normal'"
        size="sm"
        class="text-muted-800 dark:text-white"
      >
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="markedName"></span>
      </BaseHeading>
      <BaseText v-if="value.text" size="xs" class="text-muted-400">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="markedText"></span>
      </BaseText>
    </div>
    <div
      v-show="props.selected"
      class="ms-auto flex items-center justify-center"
      :class="[props.value.media && 'h-8 w-8', props.value.icon && 'h-8 w-8']"
    >
      <Icon :name="selectedIcon" class="text-success-500 block h-4 w-4" />
    </div>
  </div>
</template>
