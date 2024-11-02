<script setup lang="ts" generic="T extends unknown">
const props = withDefaults(
  defineProps<{
    /**
     * The items to display in the accordion.
     */
    items: {
      /**
       * The title of the accordion item.
       */
      title: string
      /**
       * The content of the accordion item.
       */
      content: T
    }[]

    /**
     * Indexes of the items that should be opened by default.
     */
    openItems?: number[]

    /**
     * Whether if multiple elements in the accordion can be opened at same time or not.
     */
    exclusive?: boolean

    /**
     * Defines the icon used for accordion item toggle action
     *
     * @default 'dot'
     */
    action?: 'dot' | 'chevron' | 'plus'

    /**
     * Defines the color of the accordion
     *
     * @since 3.0.0
     * @default 'default'
     */
    color?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'

    /**
     * Defines the color of the accordion dot
     *
     * @since 3.0.0
     * @default 'primary'
     */
    dotColor?:
      | 'default'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'dark'
      | 'black'

    /**
     * Defines the radius of the accordion
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg'

    /**
     * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the details element.
       */
      details?: string | string[]

      /**
       * CSS classes to apply to the summary element.
       */
      summary?: string | string[]

      /**
       * CSS classes to apply to the header element.
       */
      header?: string | string[]

      /**
       * CSS classes to apply to the content element.
       */
      content?: string | string[]
    }
  }>(),
  {
    openItems: () => [],
    rounded: undefined,
    color: undefined,
    dotColor: undefined,
    action: 'dot',
    classes: () => ({}),
  },
)
const emits = defineEmits<{
  (
    event: 'open',
    item: {
      /**
       * The title of the accordion item.
       */
      title: string
      /**
       * The content of the accordion item.
       */
      content: T
    },
  ): void
}>()

defineSlots<{
  'accordion-item': (props: {
    index: number
    item: { title: string, content: T }
    toggle: (index: number) => void
  }) => any
  'accordion-item-summary': (props: {
    index: number
    item: { title: string, content: T }
    toggle: (index: number) => void
  }) => any
  'accordion-item-content': (props: {
    index: number
    item: { title: string, content: T }
    toggle: (index: number) => void
  }) => any
}>()
const action = useNuiDefaultProperty(props, 'BaseAccordion', 'action')
const color = useNuiDefaultProperty(props, 'BaseAccordion', 'color')
const dotColor = useNuiDefaultProperty(props, 'BaseAccordion', 'dotColor')
const rounded = useNuiDefaultProperty(props, 'BaseAccordion', 'rounded')

const colors = {
  'default': 'nui-accordion-default',
  'default-contrast': 'nui-accordion-default-contrast',
  'muted': 'nui-accordion-muted',
  'muted-contrast': 'nui-accordion-muted-contrast',
}

const dotColors = {
  default: 'nui-dot-default',
  primary: 'nui-dot-primary',
  info: 'nui-dot-info',
  success: 'nui-dot-success',
  warning: 'nui-dot-warning',
  danger: 'nui-dot-danger',
  dark: 'nui-dot-dark',
  black: 'nui-dot-black',
}

const radiuses = {
  none: '',
  sm: 'nui-accordion-rounded-sm',
  md: 'nui-accordion-rounded-md',
  lg: 'nui-accordion-rounded-lg',
}

const actions = {
  dot: 'nui-accordion-dot',
  chevron: 'nui-accordion-chevron',
  plus: 'nui-accordion-plus',
}

const internalOpenItems = ref(props.openItems)
function toggle(key: number) {
  const wasOpen = internalOpenItems.value.includes(key)

  if (props.exclusive) {
    internalOpenItems.value.splice(0, internalOpenItems.value.length)

    if (!wasOpen) {
      emits('open', props.items[key])
      internalOpenItems.value.push(key)
    }

    return
  }

  if (wasOpen) {
    internalOpenItems.value.splice(internalOpenItems.value.indexOf(key), 1)
  }
  else {
    emits('open', props.items[key])
    internalOpenItems.value.push(key)
  }
}
</script>

<template>
  <BaseFocusLoop>
    <div
      v-for="(item, key) in items"
      :key="key"
      class="nui-accordion"
      :class="[
        rounded && radiuses[rounded],
        color && colors[color],
        dotColor && dotColors[dotColor],
        action && actions[action],
        props.classes?.wrapper,
      ]"
    >
      <details
        :open="internalOpenItems?.includes(key) ?? undefined"
        class="nui-accordion-detail"
        :class="props.classes?.details"
      >
        <slot name="accordion-item" :item="item" :index="key" :toggle="toggle">
          <summary
            class="nui-accordion-summary"
            :class="props.classes?.summary"
            tabindex="0"
            @click.prevent="() => toggle(key)"
          >
            <slot
              name="accordion-item-summary"
              :item="item"
              :index="key"
              :toggle="toggle"
            >
              <div class="nui-accordion-header" :class="props.classes?.header">
                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="medium"
                  lead="none"
                  class="nui-accordion-header-inner"
                >
                  {{ item.title }}
                </BaseHeading>

                <div
                  v-if="props.action === 'dot' || action === 'dot'"
                  class="nui-accordion-dot"
                />
                <div
                  v-else-if="props.action === 'chevron' || action === 'chevron'"
                  class="nui-icon-outer"
                >
                  <IconChevronDown class="nui-chevron-icon" />
                </div>
                <div
                  v-else-if="props.action === 'plus' || action === 'plus'"
                  class="nui-icon-outer"
                >
                  <IconPlus class="nui-plus-icon" />
                </div>
              </div>
            </slot>
          </summary>
          <div class="nui-accordion-content" :class="props.classes?.content">
            <slot
              name="accordion-item-content"
              :item="item"
              :index="key"
              :toggle="toggle"
            >
              <BaseParagraph size="sm" lead="tight">
                {{ item.content }}
              </BaseParagraph>
            </slot>
          </div>
        </slot>
      </details>
    </div>
  </BaseFocusLoop>
</template>
