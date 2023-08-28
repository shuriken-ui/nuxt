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
    modelValue?: string
    /**
     * Controls the alignment of the tabs. Can be 'start', 'center', or 'end'.
     */
    justify?: 'start' | 'center' | 'end'
    /**
     * The size of the tabs.
     */
    size?: 'sm' | 'md'
    /**
     * Controls the shape of the tabs. Can be 'rounded' or 'full'.
     */
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'
    /**
     * Controls the size of the tabs. Can be condensed or default.
     */
    condensed?: boolean
  }>(),
  {
    modelValue: undefined,
    justify: undefined,
    size: 'md',
    shape: undefined,
  },
)
const emit = defineEmits<{
  (event: 'update:modelValue', value?: string): void
}>()
const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.tabSlider,
)

const justifyStyle = {
  start: '',
  center: 'nui-tabs-centered',
  end: 'nui-tabs-end',
}
const sizeStyle = {
  sm: 'nui-tabs-sm',
  md: 'nui-tabs-md',
}
const shapeStyle = {
  straight: '',
  rounded: 'nui-tabs-rounded',
  smooth: 'nui-tabs-smooth',
  curved: 'nui-tabs-curved',
  full: 'nui-tabs-full',
}

const tabsLength = computed(() => Math.min(3, Math.max(2, props.tabs.length)))
const lengthStyle = computed(() =>
  tabsLength.value === 2 ? 'nui-tabs-two-slots' : 'nui-tabs-three-slots',
)

const activeValue = ref<string | undefined>(
  props.modelValue ?? props.tabs[0]?.value,
)

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
  <div
    class="nui-tab-slider"
    :class="[
      props.justify && justifyStyle[props.justify],
      shape && shapeStyle[shape],
      sizeStyle[props.size],
      lengthStyle,
    ]"
  >
    <div class="nui-tab-slider-inner">
      <div class="nui-tab-slider-track">
        <button
          v-for="(tab, index) in tabs.slice(0, tabsLength)"
          :key="index"
          type="button"
          class="nui-tab-slider-item"
          :class="[activeValue === tab.value && 'nui-active']"
          @keydown.space="toggle(tab?.value)"
          @click="toggle(tab?.value)"
        >
          {{ tab?.label ?? tab?.value }}
        </button>
        <div v-show="activeValue" class="nui-tab-slider-naver"></div>
      </div>
    </div>

    <div class="nui-tab-content">
      <slot :active-value="activeValue"></slot>
    </div>
  </div>
</template>
