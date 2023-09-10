<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The items to display in accordion.
     */
    items: {
      /**
       * The title of the accordion item.
       */
      title: string
      /**
       * The content of the accordion item.
       */
      content: string
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
     * Define the shape of the accordion
     */
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved'
    /**
     * Define the icon used for accordion item toggle action
     */
    action?: 'dot' | 'chevron' | 'plus'
  }>(),
  {
    openItems: () => [],
    shape: undefined,
    action: 'dot',
    exclusive: false,
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
      content: string
    },
  ): void
}>()
const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.accordion,
)

const shapeStyle = {
  straight: '',
  rounded: 'nui-accordion-rounded',
  smooth: 'nui-accordion-smooth',
  curved: 'nui-accordion-curved',
}
const actionStyle = {
  dot: 'nui-accordion-dot',
  chevron: 'nui-accordion-chevron',
  plus: 'nui-accordion-plus',
}

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
      :class="[actionStyle[props.action], shape && shapeStyle[shape]]"
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
                  weight="semibold"
                  lead="none"
                  class="nui-accordion-header-inner"
                >
                  {{ item.title }}
                </BaseHeading>

                <div
                  v-if="props.action === 'dot'"
                  class="nui-accordion-dot"
                ></div>
                <div
                  v-else-if="props.action === 'chevron'"
                  class="nui-icon-outer"
                >
                  <IconChevronDown class="nui-chevron-icon" />
                </div>
                <div v-else-if="props.action === 'plus'" class="nui-icon-outer">
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
              <BaseParagraph size="md" lead="tight">
                {{ item.content }}
              </BaseParagraph>
            </slot>
          </div>
        </slot>
      </details>
    </div>
  </BaseFocusLoop>
</template>
