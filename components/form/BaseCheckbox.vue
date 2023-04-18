<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
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
    modelValue: any

    /**
     * The form input identifier.
     */
    id?: string

    /**
     * An error message to display below the checkbox label.
     */
    error?: string

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
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

    /** The color of the checkbox. Can be 'default', 'primary', 'info', 'success', 'warning', or 'danger' */
    color?:
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'light'
      | 'muted'

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
    id: undefined,
    label: undefined,
    error: '',
    trueValue: true,
    falseValue: false,
    shape: undefined,
    color: undefined,
    classes: () => ({}),
  }
)
const emits = defineEmits<{
  (e: 'update:modelValue', value: string | number | boolean): void
}>()
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input)

const inputRef = ref<HTMLInputElement>()
const value = useVModel(props, 'modelValue', emits)

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
    class="relative inline-flex items-start gap-1"
    :class="[
      props.disabled && 'opacity-50',
      props.color === 'primary' && 'text-primary-500',
      props.color === 'info' && 'text-info-500',
      props.color === 'success' && 'text-success-500',
      props.color === 'warning' && 'text-warning-500',
      props.color === 'danger' && 'text-danger-500',
      props.color === 'light' && 'text-muted-100',
      props.color === 'muted' && 'text-muted-400',
      props.classes?.wrapper,
    ]"
  >
    <div
      class="nui-focus group/nui-checkbox relative flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center overflow-hidden"
      :class="[
        shape === 'rounded' && 'rounded',
        shape === 'curved' && 'rounded-md',
        shape === 'full' && 'rounded-full',
      ]"
    >
      <input
        :id="id"
        ref="inputRef"
        v-model="value"
        :true-value="props.trueValue"
        :false-value="props.falseValue"
        :class="props.classes?.input"
        v-bind="$attrs"
        class="peer absolute z-20 h-5 w-5 cursor-pointer opacity-0"
        type="checkbox"
      />
      <div
        class="border-muted-400 dark:border-muted-700 dark:bg-muted-700 absolute start-0 top-0 z-0 h-full w-full border-2 bg-white peer-checked:border-current peer-indeterminate:border-current peer-checked:dark:border-current peer-indeterminate:dark:border-current"
        :class="[
          shape === 'rounded' && 'rounded',
          shape === 'curved' && 'rounded-md',
          shape === 'full' && 'rounded-full',
        ]"
      ></div>
      <IconCheck
        class="pointer-events-none absolute z-10 h-2.5 w-2.5 translate-y-6 fill-current opacity-0 transition duration-300 peer-checked:translate-y-0 peer-checked:opacity-100 peer-indeterminate:!translate-y-6"
      />
      <IconIndeterminate
        class="pointer-events-none absolute z-10 h-2.5 w-2.5 translate-y-6 fill-current opacity-0 transition duration-300 peer-indeterminate:translate-y-0 peer-indeterminate:opacity-100"
      />
    </div>
    <div class="inline-flex flex-col">
      <label
        v-if="props.label || 'default' in $slots"
        :for="id"
        class="text-muted-400 ms-1 cursor-pointer select-none font-sans text-sm"
        :class="props.classes?.label"
      >
        <slot>{{ props.label }}</slot>
      </label>
      <div
        v-if="props.error"
        class="text-danger-600 ms-1 inline-block font-sans text-xs"
      >
        {{ props.error }}
      </div>
    </div>
  </div>
</template>
