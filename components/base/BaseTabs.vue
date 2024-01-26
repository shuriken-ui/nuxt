<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The type of tabs to display..
     *
     * @default 'tabs'
     */
    type?: 'tabs' | 'box'

    /**
     * The horizontal alignment of the tabs.
     *
     * @default 'start'
     */
    justify?: 'start' | 'center' | 'end'

    /**
     * An array of tab objects that contain a label and value
     */
    tabs: {
      /**
       * The label to display for the tab
       */
      label: string
      /**
       * The value of the tab. This value will be used to identify the tab when it is selected.
       */
      value: string
      /**
       * An optional icon to display next to the tab label
       */
      icon?: string
    }[]

    /**
     * Whether or not to hide the label for the tab.
     */
    hideLabel?: boolean
  }>(),
  {
    type: undefined,
    justify: undefined,
  },
)

const [modelValue] = defineModel<string>({
  default: null,
})

onBeforeMount(() => {
  if (modelValue.value === null) {
    modelValue.value = props.tabs[0]?.value
  }
})

const justify = useNuiDefaultProperty(props, 'BaseTabs', 'justify')
const type = useNuiDefaultProperty(props, 'BaseTabs', 'type')

const justifies = {
  start: '',
  center: 'nui-tabs-centered',
  end: 'nui-tabs-end',
} as Record<string, string>

const types = {
  tabs: 'nui-tab-item',
  box: 'nui-pill-item',
} as Record<string, string>

function toggle(value: string) {
  modelValue.value = value
}
</script>

<template>
  <div class="nui-tabs" :class="justify && justifies[justify]">
    <div class="nui-tabs-inner">
      <a
        v-for="(tab, key) in tabs"
        :key="key"
        :class="[
          type && types[type],
          modelValue === tab.value && 'nui-active',
          tab.icon && 'nui-has-icon',
        ]"
        tabindex="0"
        @click="toggle(tab.value)"
      >
        <slot
          v-if="tab.icon"
          name="icon"
          :icon-name="tab.icon"
          :toggle="toggle"
        >
          <Icon :name="tab.icon" class="me-1 block size-5" />
        </slot>
        <span
          :class="[
            props.type === 'box' && tab.icon && 'text-[.85rem]',
            props.type === 'box' && !tab.icon && 'text-sm',
            props.type === 'tabs' && 'text-sm',
          ]"
        >
          {{ tab.label }}
        </span>
      </a>
    </div>

    <div class="relative block">
      <slot name="tab" :active-value="modelValue" :toggle="toggle"></slot>
    </div>
  </div>
</template>
