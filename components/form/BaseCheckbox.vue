<script setup lang="ts" generic="T extends unknown = boolean">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    /**
     * Defines the value of the checkbox when it's checked.
     */
    value?: T

    /**
     * The value to set when the checkbox is checked.
     */
    trueValue?: T

    /**
     * The value to set when the checkbox is unchecked.
     */
    falseValue?: T

    /**
     * The form input identifier.
     */
    id?: string

    /**
     * The label to display for the checkbox.
     */
    label?: string

    /**
     * An error message to display below the checkbox label.
     */
    error?: string | boolean

    /**
     * Whether the checkbox is disabled.
     */
    disabled?: boolean

    /**
     * Whether the checkbox is in indeterminate state.
     */
    indeterminate?: boolean

    /**
     * The radius of the checkbox.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /** The color of the checkbox.
     *
     * @default 'default'
     */
    color?:
      | 'default'
      | 'muted'
      | 'light'
      | 'dark'
      | 'black'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'

    /**
     * Optional CSS classes to apply to the wrapper, label, and input elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the label element.
       */
      label?: string | string[]

      /**
       * CSS classes to apply to the input element.
       */
      input?: string | string[]
    }
  }>(),
  {
    value: undefined,
    trueValue: true as any,
    falseValue: false as any,
    id: undefined,
    label: undefined,
    error: '',
    rounded: undefined,
    color: undefined,
    classes: () => ({}),
  },
)

defineSlots<{
  default(): any
}>()

const [modelValue] = defineModel<T | T[]>()

const rounded = useNuiDefaultProperty(props, 'BaseCheckbox', 'rounded')
const color = useNuiDefaultProperty(props, 'BaseCheckbox', 'color')

const inputRef = ref<HTMLInputElement>()
const id = useNinjaId(() => props.id)

const radiuses = {
  none: '',
  sm: 'nui-checkbox-rounded-sm',
  md: 'nui-checkbox-rounded-md',
  lg: 'nui-checkbox-rounded-lg',
  full: 'nui-checkbox-rounded-full',
} as Record<string, string>

const colors = {
  default: 'nui-checkbox-default',
  muted: 'nui-checkbox-muted',
  light: 'nui-checkbox-light',
  dark: 'nui-checkbox-dark',
  black: 'nui-checkbox-black',
  primary: 'nui-checkbox-primary',
  info: 'nui-checkbox-info',
  success: 'nui-checkbox-success',
  warning: 'nui-checkbox-warning',
  danger: 'nui-checkbox-danger',
} as Record<string, string>

watchEffect(() => {
  if (inputRef.value) {
    inputRef.value.indeterminate = props.indeterminate ?? false
  }
})

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
</script>

<template>
  <div
    class="nui-checkbox"
    :class="[
      props.disabled && 'opacity-50',
      rounded && radiuses[rounded],
      color && colors[color],
      props.classes?.wrapper,
    ]"
  >
    <div class="nui-checkbox-outer">
      <input
        :id="id"
        ref="inputRef"
        v-model="modelValue"
        :value="props.value"
        :true-value="props.trueValue"
        :false-value="props.falseValue"
        :class="props.classes?.input"
        :disabled="props.disabled"
        v-bind="$attrs"
        class="nui-checkbox-input"
        type="checkbox"
      />
      <div class="nui-checkbox-inner"></div>
      <IconCheck class="nui-icon-check" />
      <IconIndeterminate class="nui-icon-indeterminate" />
    </div>
    <div class="nui-checkbox-label-wrapper">
      <label
        v-if="props.label || 'default' in $slots"
        :for="id"
        class="nui-checkbox-label-text"
        :class="props.classes?.label"
      >
        <slot>{{ props.label }}</slot>
      </label>
      <div
        v-if="props.error && typeof props.error === 'string'"
        class="nui-checkbox-error"
      >
        {{ props.error }}
      </div>
    </div>
  </div>
</template>
