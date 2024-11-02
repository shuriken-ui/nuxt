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
     * Defines the color of the active tab
     *
     * @since 3.0.0
     * @default 'default'
     */
    color?:
      | 'default'
      | 'default-contrast'
      | 'primary'
      | 'light'
      | 'dark'
      | 'black'

    /**
     * Controls the alignment of the tabs. Can be 'start', 'center', or 'end'.
     *
     * @default 'start'
     */
    justify?: 'start' | 'center' | 'end'

    /**
     * Controls the radius of the tabs.
     *
     * @default 'lg'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The size of the tabs.
     *
     * @default 'md'
     */
    size?: 'sm' | 'md'

    /**
     * Optional CSS classes to apply to the component inner elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the inner element.
       */
      inner?: string | string[]

      /**
       * CSS classes to apply to the track element.
       */
      track?: string | string[]

      /**
       * CSS classes to apply to the item element.
       */
      item?: string | string[]

      /**
       * CSS classes to apply to the naver element.
       */
      naver?: string | string[]

      /**
       * CSS classes to apply to the content element.
       */
      content?: string | string[]
    }
  }>(),
  {
    color: undefined,
    justify: undefined,
    size: undefined,
    rounded: undefined,
    classes: () => ({}),
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

const color = useNuiDefaultProperty(props, 'BaseTabSlider', 'color')
const justify = useNuiDefaultProperty(props, 'BaseTabSlider', 'justify')
const rounded = useNuiDefaultProperty(props, 'BaseTabSlider', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseTabSlider', 'size')

const justifies = {
  start: '',
  center: 'nui-tabs-centered',
  end: 'nui-tabs-end',
}

const sizes = {
  sm: 'nui-tabs-sm',
  md: 'nui-tabs-md',
}

const radiuses = {
  none: '',
  sm: 'nui-tabs-rounded-sm',
  md: 'nui-tabs-rounded-md',
  lg: 'nui-tabs-rounded-lg',
  full: 'nui-tabs-rounded-full',
}

const colors = {
  'default': 'nui-tabs-default',
  'default-contrast': 'nui-tabs-default-contrast',
  'primary': 'nui-tabs-primary',
  'light': 'nui-tabs-light',
  'dark': 'nui-tabs-dark',
  'black': 'nui-tabs-black',
}

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
      color && colors[color],
      justify && justifies[justify],
      rounded && radiuses[rounded],
      size && sizes[size],
      lengthStyle,
      props.classes?.wrapper,
    ]"
  >
    <div class="nui-tab-slider-inner" :class="props.classes?.inner">
      <div class="nui-tab-slider-track" :class="props.classes?.track">
        <button
          v-for="(tab, index) in tabs.slice(0, tabsLength)"
          :key="index"
          type="button"
          class="nui-tab-slider-item"
          :class="[
            modelValue === tab.value && 'nui-active',
            props.classes?.item,
          ]"
          @keydown.space="toggle(tab?.value)"
          @click="toggle(tab?.value)"
        >
          {{ tab?.label ?? tab?.value }}
        </button>
        <div v-show="modelValue" class="nui-tab-slider-naver" />
      </div>
    </div>

    <div class="nui-tab-content" :class="props.classes?.content">
      <slot :active-value="modelValue" :toggle="toggle" />
    </div>
  </div>
</template>
