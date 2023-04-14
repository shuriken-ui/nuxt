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
    selected?: string
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
    selected: undefined,
    type: 'tabs',
    justify: undefined,
  }
)
const emit = defineEmits<{
  (event: 'update:selected', value?: string): void
}>()
const activeValue = ref(props.selected)

function toggle(value: string) {
  activeValue.value = value
}

watch(
  () => props.selected,
  (value) => {
    activeValue.value = value
  }
)

watch(activeValue, (value) => {
  emit('update:selected', value)
})
</script>

<template>
  <div class="relative">
    <div
      class="font-alt mb-6 flex"
      :class="[
        props.justify === 'center' && 'justify-center',
        props.justify === 'end' && 'justify-end',
      ]"
    >
      <a
        v-for="(tab, key) in tabs"
        :key="key"
        class="cursor-pointer text-base transition-all duration-300"
        :class="[
          activeValue === tab.value && props.type === 'tabs'
            ? 'border-primary-500 text-muted-800 dark:text-muted-100'
            : 'text-muted-400 border-transparent',
          activeValue === tab.value && props.type === 'box'
            ? 'bg-primary-500 shadow-primary-500/50 !text-white shadow-lg'
            : 'text-muted-400',
          tab.icon && 'flex items-center',
          props.type === 'tabs' && 'border-b-2 px-4 py-3',
          props.type === 'box' && 'flex flex-col rounded-xl px-5 text-center',
          props.type === 'box' && tab.icon && 'py-3',
          props.type === 'box' && !tab.icon && 'py-2',
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
