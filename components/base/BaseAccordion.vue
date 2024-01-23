<script setup lang="ts" generic="T extends any">
const props = withDefaults(
  defineProps<{
    /**
     * Define the radius of the accordion
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg'

    /**
     * Define the icon used for accordion item toggle action
     *
     * @default 'dot'
     */
    action?: 'dot' | 'chevron' | 'plus'

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
  }>(),
  {
    openItems: () => [],
    rounded: undefined,
    action: 'dot',
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
const rounded = useNuiDefaultProperty(props, 'BaseAccordion', 'rounded')
const action = useNuiDefaultProperty(props, 'BaseAccordion', 'action')

const radiuses = {
  none: '',
  sm: 'nui-accordion-rounded',
  md: 'nui-accordion-smooth',
  lg: 'nui-accordion-curved',
} as Record<string, string>

const actions = {
  dot: 'nui-accordion-dot',
  chevron: 'nui-accordion-chevron',
  plus: 'nui-accordion-plus',
} as Record<string, string>

const internalOpenItems = ref(props.openItems)
const toggle = (key: number) => {
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
  } else {
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
      :class="[rounded && radiuses[rounded], action && actions[action]]"
    >
      <details
        :open="internalOpenItems?.includes(key) ?? undefined"
        class="nui-accordion-detail"
      >
        <slot name="accordion-item" :item="item" :index="key" :toggle="toggle">
          <summary
            class="nui-accordion-summary"
            tabindex="0"
            @click.prevent="() => toggle(key)"
          >
            <slot
              name="accordion-item-summary"
              :item="item"
              :index="key"
              :toggle="toggle"
            >
              <div class="nui-accordion-header">
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
                ></div>
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
          <div class="nui-accordion-content">
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
