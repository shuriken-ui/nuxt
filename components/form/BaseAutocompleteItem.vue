<script setup lang="ts" generic="T extends object">
const props = withDefaults(
  defineProps<{
    /**
     * The items to display in the component.
     */
    item?: T

    /**
     * The radius of the component.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

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
    /**
     * The properties to use for the value, label, sublabel, media, and icon of the options items.
     */
    properties?: {
      /**
       * The property to use for the label of the options.
       */
      label?: T extends object ? keyof T | ((arg: T) => string) : string

      /**
       * The property to use for the sublabel of the options.
       */
      sublabel?: T extends object ? keyof T | ((arg: T) => string) : string

      /**
       * The property to use for the media of the options.
       */
      media?: T extends object ? keyof T | ((arg: T) => string) : string

      /**
       * The property to use for the icon of the options.
       */
      icon?: T extends object ? keyof T | ((arg: T) => string) : string
    }
  }>(),
  {
    item: undefined,
    rounded: undefined,
    mark: 'nui-mark',
    selectedIcon: 'lucide:check',
    properties: () =>
      ({
        label: 'label',
        sublabel: 'sublabel',
        media: 'media',
        icon: 'icon',
      }) as any,
  },
)

defineSlots<{
  'selected-icon'(): any
}>()

const rounded = useNuiDefaultProperty(props, 'BaseAutocompleteItem', 'rounded')

const radiuses = {
  none: '',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  full: 'rounded-xl',
} as Record<string, string>

const inputContext = inject('BaseAutocompleteContext', {
  query: '',
})

const label = computed(() => {
  if (props.item == null || props.properties == null) return
  if (typeof props.properties.label === 'string')
    return (props.item as any)[props.properties.label]
  if (typeof props.properties.label === 'function')
    return props.properties.label(props.item)
  return
})

const sublabel = computed(() => {
  if (props.item == null || props.properties == null) return
  if (typeof props.properties.sublabel === 'string')
    return (props.item as any)[props.properties.sublabel]
  if (typeof props.properties.sublabel === 'function')
    return props.properties.sublabel(props.item)
  return
})

const media = computed(() => {
  if (props.item == null || props.properties == null) return
  if (typeof props.properties.media === 'string')
    return (props.item as any)[props.properties.media]
  if (typeof props.properties.media === 'function')
    return props.properties.media(props.item)
  return
})

const icon = computed(() => {
  if (props.item == null || props.properties == null) return
  if (typeof props.properties.icon === 'string')
    return (props.item as any)[props.properties.icon]
  if (typeof props.properties.icon === 'function')
    return props.properties.icon(props.item)
  return
})

const query = computed(() => inputContext.query)
const mark = computed(() => props.mark)
const markedLabel = useNinjaMark(() => label.value, query, mark)
const markedSublabel = useNinjaMark(() => sublabel.value, query, mark)
</script>

<template>
  <div
    class="flex cursor-pointer items-center p-2 transition-colors duration-300"
    :class="[
      props.active ? 'bg-muted-100 dark:bg-muted-700' : '',
      rounded && radiuses[rounded],
    ]"
  >
    <BaseAvatar v-if="media && !icon" :src="media" size="xs" class="me-3" />
    <BaseIconBox
      v-else-if="icon && !media"
      size="sm"
      rounded="sm"
      color="none"
      class="me-1"
    >
      <Icon
        :name="icon"
        class="size-4"
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
        <span v-html="markedLabel"></span>
      </BaseHeading>
      <BaseText v-if="sublabel" size="xs" class="text-muted-400">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="markedSublabel"></span>
      </BaseText>
    </div>
    <div
      v-show="props.selected"
      class="ms-auto flex items-center justify-center"
      :class="[media && 'size-8', icon && 'size-8']"
    >
      <slot name="selected-icon">
        <Icon :name="selectedIcon" class="text-success-500 block size-4" />
      </slot>
    </div>
  </div>
</template>
