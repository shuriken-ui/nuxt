<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * An array of objects representing each tab. Each object should have a 'label' and a 'value' property.
     */
    tabs: {
      /** The label displayed for the tab. */
      label?: string
      /** The value associated with the tab. */
      value: string
    }[]
    /**
     * The value of the currently selected tab.
     */
    selected?: string
    /**
     * Controls the alignment of the tabs. Can be 'start', 'center', or 'end'.
     */
    justify?: 'start' | 'center' | 'end'
    /**
     * Controls the number of tabs displayed in a row. Can be 2 or 3.
     */
    size?: 2 | 3
    /**
     * Controls the shape of the tabs. Can be 'rounded' or 'full'.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'
    /**
     * Controls the size of the tabs. Can be condensed or default.
     */
    condensed?: boolean
  }>(),
  {
    selected: undefined,
    justify: undefined,
    size: 2,
    shape: undefined,
  }
)
const emit = defineEmits<{
  (event: 'update:selected', value?: string): void
}>()
const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.tabSlider
)

const activeValue = ref<string | undefined>(
  props.selected ?? props.tabs[0]?.value
)

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
      <div
        class="bg-muted-100 dark:bg-muted-700 relative flex w-full items-center font-sans"
        :class="[
          shape === 'rounded' && 'rounded-md',
          shape === 'curved' && 'rounded-xl',
          shape === 'full' && 'rounded-full',
          props.condensed ? 'h-8 text-xs' : 'h-10 text-sm',
          props.size === 2 && !props.condensed
            ? 'max-w-[250px]'
            : 'max-w-[320px]',
          props.size === 2 && props.condensed
            ? 'max-w-[140px]'
            : 'max-w-[210px]',
        ]"
      >
        <button
          v-for="(tab, index) in tabs.slice(0, props.size)"
          :key="index"
          type="button"
          class="relative z-20 flex h-full flex-1 items-center justify-center p-6"
          :class="[
            activeValue === tab.value ? 'text-white' : 'text-muted-400',
            props.size === 2 ? 'w-1/2' : 'w-1/3',
          ]"
          @keydown.space="toggle(tab?.value)"
          @click="toggle(tab?.value)"
        >
          <span>{{ tab?.label ?? tab?.value }}</span>
        </button>
        <div
          v-show="activeValue"
          class="bg-primary-600 absolute start-0 top-0 z-10 h-full transition-all duration-300"
          :class="[
            activeValue === tabs?.[0]?.value && 'ms-0',
            activeValue === tabs?.[1]?.value && props.size === 2 && 'ms-[50%]',
            activeValue === tabs?.[1]?.value &&
              props.size === 3 &&
              'ms-[33.3%]',
            activeValue === tabs?.[2]?.value && 'ms-[66.6%]',
            props.size === 2 ? 'w-1/2' : 'w-1/3',
            shape === 'rounded' && 'rounded-md',
            shape === 'curved' && 'rounded-xl',
            shape === 'full' && 'rounded-full',
          ]"
        ></div>
      </div>
    </div>

    <div class="relative block">
      <slot name="tab" :active-value="activeValue"></slot>
    </div>
  </div>
</template>
