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
     * The value of the currently selected tab. This should match the value of one of the tabs in the tabs array.
     */

    modelValue?: string
    /**
     * Whether or not to hide the label for the tab.
     */
    hideLabel?: boolean
  }>(),
  {
    type: undefined,
    justify: undefined,
    modelValue: undefined,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value?: string]
}>()

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

const activeValue = ref(props.modelValue)

function toggle(value: string) {
  activeValue.value = value
}

watch(
  () => props.modelValue,
  (value) => {
    activeValue.value = value
  },
)
watch(activeValue, (value) => {
  emit('update:modelValue', value)
})
</script>

<template>
  <div class="nui-tabs" :class="props.justify && justifies[justify]">
    <div class="nui-tabs-inner">
      <a
        v-for="(tab, key) in tabs"
        :key="key"
        :class="[
          type && types[type],
          activeValue === tab.value && 'nui-active',
          tab.icon && 'nui-has-icon',
        ]"
        tabindex="0"
        @click="toggle(tab.value)"
      >
        <slot v-if="tab.icon" name="icon" :icon-name="tab.icon">
          <Icon :name="tab.icon" class="me-1 block h-5 w-5" />
        </slot>
        <span
          :class="[
            props.type === 'box' && tab.icon && 'text-[.85rem]',
            props.type === 'tabs' && 'text-sm',
          ]"
        >
          {{ tab.label }}
        </span>
      </a>
    </div>

    <div class="relative block">
      <slot name="tab" :active-value="activeValue"></slot>
    </div>
  </div>
</template>
