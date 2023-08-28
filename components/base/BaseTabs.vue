<script setup lang="ts">
const props = withDefaults(
  defineProps<{
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
     * The type of tabs to display. Can be either "tabs" or "box".
     */
    type?: 'tabs' | 'box'
    /**
     * The horizontal alignment of the tabs. Can be "start", "center", or "end".
     */
    justify?: 'start' | 'center' | 'end'
    /**
     * Whether or not to display the tabs as boxes.
     */
    boxed?: boolean
    /**
     * Whether or not to hide the label for the tab.
     */
    hideLabel?: boolean
  }>(),
  {
    modelValue: undefined,
    type: 'tabs',
    justify: undefined,
  },
)

const emit = defineEmits<{
  (event: 'update:modelValue', value?: string): void
}>()
const justifyStyle = {
  start: '',
  center: 'nui-tabs-centered',
  end: 'nui-tabs-end',
}
const typeStyle = {
  tabs: 'nui-tab-item',
  box: 'nui-pill-item',
}

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
  <div class="nui-tabs" :class="props.justify && justifyStyle[props.justify]">
    <div class="nui-tabs-inner">
      <a
        v-for="(tab, key) in tabs"
        :key="key"
        :class="[
          typeStyle[props.type],
          activeValue === tab.value && 'nui-active',
          tab.icon && 'nui-has-icon',
        ]"
        tabindex="0"
        @click="toggle(tab.value)"
      >
        <Icon v-if="tab.icon" :name="tab.icon" class="me-1 block h-5 w-5" />
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
