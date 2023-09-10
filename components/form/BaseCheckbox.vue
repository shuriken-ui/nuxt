<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    /**
     * The label to display for the checkbox.
     */
    label?: string

    /**
     * The value to set when the checkbox is checked.
     */
    trueValue?: any

    /**
     * The value to set when the checkbox is unchecked.
     */
    falseValue?: any

    /**
     * The model value of the checkbox.
     */
    modelValue?: any

    /**
     * The form input identifier.
     */
    id?: string

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
     * The shape of the checkbox.
     */
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'

    /** The color of the checkbox. Can be 'default', 'primary', 'info', 'success', 'warning', or 'danger' */
    color?:
      | 'default'
      | 'light'
      | 'muted'
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
    modelValue: undefined,
    id: undefined,
    label: undefined,
    error: '',
    trueValue: true,
    falseValue: false,
    shape: undefined,
    color: undefined,
    classes: () => ({}),
  },
)
const emits = defineEmits<{
  (e: 'update:modelValue', value: string | number | boolean): void
}>()
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input)

const inputRef = ref<HTMLInputElement>()
const value = useVModel(props, 'modelValue', emits, {
  passive: true,
})

const shapeStyle = {
  straight: '',
  rounded: 'nui-checkbox-rounded',
  smooth: 'nui-checkbox-smooth',
  curved: 'nui-checkbox-curved',
  full: 'nui-checkbox-full',
}
const colorStyle = {
  default: 'nui-checkbox-default',
  light: 'nui-checkbox-light',
  muted: 'nui-checkbox-muted',
  primary: 'nui-checkbox-primary',
  info: 'nui-checkbox-info',
  success: 'nui-checkbox-success',
  warning: 'nui-checkbox-warning',
  danger: 'nui-checkbox-danger',
}

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
})

const id = useNinjaId(() => props.id)
</script>

<template>
  <div
    class="nui-checkbox"
    :class="[
      props.disabled && 'opacity-50',
      shape && shapeStyle[shape],
      props.color && colorStyle[props.color],
      props.classes?.wrapper,
    ]"
  >
    <div class="nui-checkbox-outer">
      <input
        :id="id"
        ref="inputRef"
        v-model="value"
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
