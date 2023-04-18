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
    shape?: 'straight' | 'rounded' | 'curved'
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
  }
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
    }
  ): void
}>()
const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.accordion
)

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
  <BaseFocusLoop
    class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 block overflow-hidden border bg-white"
    :class="[
      exclusive && 'is-exclusive',
      shape === 'rounded' && 'rounded-md',
      shape === 'curved' && 'rounded-xl',
    ]"
  >
    <details
      v-for="(item, key) in items"
      :key="key"
      :open="internalOpenItems?.includes(key) ?? undefined"
      :class="[
        internalOpenItems?.includes(key) && 'is-active',
        key > 0 && 'border-muted-200 dark:border-muted-700 border-t',
      ]"
    >
      <slot name="accordion-item" :item="item" :index="key" :toggle="toggle">
        <summary
          class="group/nui-accordion cursor-pointer list-none outline-none"
          tabindex="0"
          @click.prevent="() => toggle(key)"
        >
          <slot
            name="accordion-item-summary"
            :item="item"
            :index="key"
            :toggle="toggle"
          >
            <div
              class="flex items-center justify-between"
              :class="[
                props.action === 'dot' && 'p-5',
                props.action === 'chevron' && 'px-5 py-3',
                props.action === 'plus' && 'px-5 py-3',
              ]"
            >
              <BaseHeading
                as="h4"
                size="sm"
                weight="semibold"
                lead="none"
                class="text-muted-800 dark:text-white"
              >
                {{ item.title }}
              </BaseHeading>

              <div
                v-if="props.action === 'dot'"
                class="group-focus/nui-accordion:outline-muted-200 dark:group-focus/nui-accordion:outline-muted-700 ms-2 h-3 w-3 rounded-full transition-colors duration-300 group-focus/nui-accordion:outline-dashed group-focus/nui-accordion:outline-offset-2"
                :class="
                  internalOpenItems?.includes(key)
                    ? 'bg-primary-500'
                    : 'bg-muted-200 dark:bg-muted-700'
                "
              ></div>
              <div
                v-else-if="props.action === 'chevron'"
                class="group-focus/nui-accordion:outline-muted-200 dark:group-focus/nui-accordion:outline-muted-700 border-muted-200 dark:border-muted-700 dark:bg-muted-700/60 ms-2 flex h-8 w-8 items-center justify-center rounded-full border bg-white transition-all duration-300 group-focus/nui-accordion:outline-dashed group-focus/nui-accordion:outline-offset-2"
                :class="
                  internalOpenItems?.includes(key)
                    ? 'text-primary-500 rotate-180'
                    : 'text-muted-400'
                "
              >
                <IconChevronDown class="h-4 w-4" />
              </div>
              <div
                v-else-if="props.action === 'plus'"
                class="group-focus/nui-accordion:outline-muted-200 dark:group-focus/nui-accordion:outline-muted-700 border-muted-200 dark:border-muted-700 dark:bg-muted-700/60 ms-2 flex h-8 w-8 items-center justify-center rounded-full border bg-white transition-all duration-300 group-focus/nui-accordion:outline-dashed group-focus:outline-offset-2"
                :class="
                  internalOpenItems?.includes(key)
                    ? 'text-primary-500 rotate-45'
                    : 'text-muted-400'
                "
              >
                <IconPlus class="h-4 w-4" />
              </div>
            </div>
          </slot>
        </summary>
        <div class="px-5 pb-5">
          <slot
            name="accordion-item-content"
            :item="item"
            :index="key"
            :toggle="toggle"
          >
            <BaseParagraph
              size="md"
              lead="tight"
              class="text-muted-500 dark:text-muted-400"
            >
              {{ item.content }}
            </BaseParagraph>
          </slot>
        </div>
      </slot>
    </details>
  </BaseFocusLoop>
</template>
