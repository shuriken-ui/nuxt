<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    /**
     * The form input identifier.
     */
    id?: string

    /**
     * The type of input.
     */
    type?: string

    /**
     * The radius of the input.
     *
     * @since 2.0.0
     * @default 'rounded'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The size of the input.
     *
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg'

    /**
     * The contrast of the input.
     *
     * @default 'default'
     */
    contrast?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'

    /**
     * The label to display for the input.
     */
    label?: string

    /**
     * If the label should be floating.
     */
    labelFloat?: boolean

    /**
     * The icon to display for the input.
     */
    icon?: string

    /**
     * The placeholder to display for the input.
     */
    placeholder?: string

    /**
     * An error message or boolean value indicating whether the input is in an error state.
     */
    error?: string | boolean

    /**
     * Whether the color of the input should change when it is focused.
     */
    colorFocus?: boolean

    /**
     * Whether the input is in a loading state.
     */
    loading?: boolean

    /**
     * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the outer element.
       */
      outer?: string | string[]

      /**
       * CSS classes to apply to the label element.
       */
      label?: string | string[]

      /**
       * CSS classes to apply to the input element.
       */
      input?: string | string[]

      /**
       * CSS classes to apply to the addon element.
       */
      addon?: string | string[]

      /**
       * CSS classes to apply to the error element.
       */
      error?: string | string[]

      /**
       * CSS classes to apply to the icon element.
       */
      icon?: string | string[]
    }
  }>(),
  {
    id: undefined,
    type: 'text',
    rounded: undefined,
    size: undefined,
    contrast: undefined,
    label: undefined,
    icon: undefined,
    placeholder: undefined,
    error: false,
    classes: () => ({}),
  },
)

function looseToNumber(val: any) {
  const n = Number.parseFloat(val)
  return Number.isNaN(n) ? val : n
}

const [modelValue, modelModifiers] = defineModel<
  string | number,
  'lazy' | 'trim' | 'number'
>({
  set(value) {
    if (modelModifiers.number) {
      return looseToNumber(value)
    } else if (modelModifiers.trim && typeof value === 'string') {
      return value.trim()
    }

    return value
  },
})

const rounded = useNuiDefaultProperty(props, 'BaseInput', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseInput', 'size')
const contrast = useNuiDefaultProperty(props, 'BaseInput', 'contrast')

const inputRef = ref<HTMLInputElement>()
const id = useNinjaId(() => props.id)

const radiuses = {
  none: '',
  sm: 'nui-input-rounded-sm',
  md: 'nui-input-rounded-md',
  lg: 'nui-input-rounded-lg',
  full: 'nui-input-rounded-full',
} as Record<string, string>

const sizes = {
  sm: 'nui-input-sm',
  md: 'nui-input-md',
  lg: 'nui-input-lg',
} as Record<string, string>

const contrasts = {
  default: 'nui-input-default',
  'default-contrast': 'nui-input-default-contrast',
  muted: 'nui-input-muted',
  'muted-contrast': 'nui-input-muted-contrast',
} as Record<string, string>

defineExpose({
  /**
   * The underlying HTMLInputElement element.
   */
  el: inputRef,

  /**
   * The internal id of the radio input.
   */
  id,
})

const placeholder = computed(() => {
  if (props.loading) {
    return
  }
  if (props.labelFloat) {
    return props.label
  }

  return props.placeholder
})

if (process.dev) {
  const slots = useSlots()
  if (props.labelFloat && 'label' in slots) {
    // eslint-disable-next-line no-console
    console.warn(
      '[ninja-ui][base-input] The "label-float" property is not compatible with the label slot, use the label property instead.',
    )
  }
}
</script>

<template>
  <div
    class="nui-input-wrapper"
    :class="[
      contrast && contrasts[contrast],
      size && sizes[size],
      rounded && radiuses[rounded],
      props.error && !props.loading && 'nui-input-error',
      props.loading && 'nui-input-loading',
      props.labelFloat && 'nui-input-label-float',
      props.icon && 'nui-has-icon',
      props.colorFocus && 'nui-input-focus',
      props.classes?.wrapper,
    ]"
  >
    <label
      v-if="
        ('label' in $slots && !props.labelFloat) ||
        (props.label && !props.labelFloat)
      "
      class="nui-input-label"
      :for="id"
      :class="props.classes?.label"
    >
      <slot name="label">{{ props.label }}</slot>
    </label>
    <div class="nui-input-outer" :class="props.classes?.outer">
      <div>
        <input
          v-if="modelModifiers.lazy"
          :id="id"
          ref="inputRef"
          v-model.lazy="modelValue"
          :type="props.type"
          v-bind="$attrs"
          class="nui-input"
          :class="props.classes?.input"
          :placeholder="placeholder"
        />
        <input
          v-else
          :id="id"
          ref="inputRef"
          v-model="modelValue"
          :type="props.type"
          v-bind="$attrs"
          class="nui-input"
          :class="props.classes?.input"
          :placeholder="placeholder"
        />
        <label
          v-if="
            ('label' in $slots && props.labelFloat) ||
            (props.label && props.labelFloat)
          "
          class="nui-label-float"
          :for="id"
          :class="props.classes?.label"
        >
          <slot name="label">{{ props.label }}</slot>
        </label>
        <div v-if="props.loading" class="nui-input-placeload">
          <BasePlaceload class="nui-placeload" />
        </div>
        <div
          v-if="props.icon"
          class="nui-input-icon"
          :class="props.classes?.icon"
        >
          <slot name="icon">
            <Icon :name="props.icon" class="nui-input-icon-inner" />
          </slot>
        </div>
        <slot name="action"></slot>
      </div>
      <span
        v-if="props.error && typeof props.error === 'string'"
        :class="props.classes?.error"
        class="nui-input-error-text"
      >
        {{ props.error }}
      </span>
    </div>
  </div>
</template>
