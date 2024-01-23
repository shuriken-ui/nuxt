<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * Controls the alignment of the tabs. Can be 'start', 'center', or 'end'.
     */
    justify?: 'start' | 'center' | 'end'
    /**
     * The size of the tabs.
     */
    size?: 'sm' | 'md'
    /**
     * Controls the radius of the tabs.
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
    /**
     * An array of objects representing each tab. Each object should have a 'label' and a 'value' property.
     */
    tabs: {
      /** The label displayed for the tab. */
      label?: string
      /** The value associated with the tab. */
      value: string
    }[]
  }>(),
  {
    justify: undefined,
    size: undefined,
    rounded: undefined,
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

const justify = useNuiDefaultProperty(props, 'BaseTabSlider', 'justify')
const size = useNuiDefaultProperty(props, 'BaseTabSlider', 'size')
const rounded = useNuiDefaultProperty(props, 'BaseTabSlider', 'rounded')

const justifies = {
  start: '',
  center: 'nui-tabs-centered',
  end: 'nui-tabs-end',
} as Record<string, string>

const sizes = {
  sm: 'nui-tabs-sm',
  md: 'nui-tabs-md',
} as Record<string, string>

const radiuses = {
  none: '',
  sm: 'nui-tabs-rounded',
  md: 'nui-tabs-smooth',
  lg: 'nui-tabs-curved',
  full: 'nui-tabs-full',
} as Record<string, string>

const tabsLength = computed(() => Math.min(3, Math.max(2, props.tabs.length)))
const lengthStyle = computed(() =>
  tabsLength.value === 2 ? 'nui-tabs-two-slots' : 'nui-tabs-three-slots',
)

function toggle(value: string) {
  modelValue.value = value
}
</script>

<template>
  <div
    class="nui-tab-slider"
    :class="[
      justify && justifies[justify],
      rounded && radiuses[rounded],
      size && sizes[size],
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
          :class="[modelValue === tab.value && 'nui-active']"
          @keydown.space="toggle(tab?.value)"
          @click="toggle(tab?.value)"
        >
          {{ tab?.label ?? tab?.value }}
        </button>
        <div v-show="modelValue" class="nui-tab-slider-naver"></div>
      </div>
    </div>

    <div class="nui-tab-content">
      <slot :active-value="modelValue" :toggle="toggle"></slot>
    </div>
  </div>
</template>
