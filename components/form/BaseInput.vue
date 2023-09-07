<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    /**
     * The model value of the input.
     *
     * @modifiers
     * `v-model="value"`
     *
     * @modifiers
     * `v-model.number="value"`
     *
     * @modifiers
     * `v-model.trim="value"`
     */
    modelValue?: string | number

    /**
     * Used internaly to allow v-model.number and v-model.trim
     */
    modelModifiers?: any

    /**
     * The form input identifier.
     */
    id?: string

    /**
     * The type of input.
     */
    type?: string

    /**
     * The shape of the input.
     */
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'

    /**
     * The label to display for the input.
     */
    label?: string

    /**
     * If the label should be floating.
     */
    labelFloat?: boolean

    /**
     * The placeholder to display for the input.
     */
    placeholder?: string

    /**
     * The icon to display for the input.
     */
    icon?: string

    /**
     * Whether the color of the input should change when it is focused.
     */
    colorFocus?: boolean

    /**
     * Whether the input is in a loading state.
     */
    loading?: boolean

    /**
     * An error message or boolean value indicating whether the input is in an error state.
     */
    error?: string | boolean

    /**
     * The size of the input.
     */
    size?: 'sm' | 'md' | 'lg'

    /**
     * The contrast of the input.
     */
    contrast?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'

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
    modelValue: undefined,
    modelModifiers: () => ({}),
    type: 'text',
    size: 'md',
    contrast: 'default',
    shape: undefined,
    label: undefined,
    icon: undefined,
    error: false,
    placeholder: undefined,
    classes: () => ({}),
  },
)
const emits = defineEmits<{
  (event: 'update:modelValue', value?: string | number): void
}>()
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input)

const shapeStyle = {
  straight: '',
  rounded: 'nui-input-rounded',
  smooth: 'nui-input-smooth',
  curved: 'nui-input-curved',
  full: 'nui-input-full',
}
const sizeStyle = {
  sm: 'nui-input-sm',
  md: 'nui-input-md',
  lg: 'nui-input-lg',
}
const contrastStyle = {
  default: 'nui-input-default',
  'default-contrast': 'nui-input-default-contrast',
  muted: 'nui-input-muted',
  'muted-contrast': 'nui-input-muted-contrast',
}

function looseToNumber(val: any) {
  const n = Number.parseFloat(val)
  return Number.isNaN(n) ? val : n
}

const value = useVModel(
  props,
  'modelValue',
  (_, val) => {
    if (props.modelModifiers.number) {
      emits('update:modelValue', looseToNumber(val))
    } else if (props.modelModifiers.trim) {
      emits('update:modelValue', typeof val === 'string' ? val.trim() : val)
    } else {
      emits('update:modelValue', val)
    }
  },
  {
    passive: true,
  },
)

const inputRef = ref<HTMLInputElement>()
defineExpose({
  /**
   * The underlying HTMLInputElement element.
   */
  el: inputRef,
})

const id = useNinjaId(() => props.id)
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
      contrastStyle[props.contrast],
      sizeStyle[props.size],
      shape && shapeStyle[shape],
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
      :class="props.classes.label"
    >
      <slot name="label">{{ props.label }}</slot>
    </label>
    <div class="nui-input-outer" :class="props.classes?.outer">
      <div>
        <input
          :id="id"
          ref="inputRef"
          v-model="value"
          :type="props.type"
          v-bind="$attrs"
          class="nui-input"
          :class="props.classes.input"
          :placeholder="placeholder"
        />
        <label
          v-if="
            ('label' in $slots && props.labelFloat) ||
            (props.label && props.labelFloat)
          "
          class="nui-label-float"
          :for="id"
          :class="props.classes.label"
        >
          <slot name="label">{{ props.label }}</slot>
        </label>
        <div v-if="props.loading" class="nui-input-placeload">
          <BasePlaceload class="nui-placeload" />
        </div>
        <div
          v-if="props.icon"
          class="nui-input-icon"
          :class="props.classes.icon"
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
