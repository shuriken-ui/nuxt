<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
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
    modelValue: any

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
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

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
     * Whether the input is condensed.
     */
    condensed?: boolean

    /**
     * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
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
    modelModifiers: () => ({}),
    type: 'text',
    shape: undefined,
    label: undefined,
    icon: undefined,
    error: false,
    placeholder: undefined,
    classes: () => ({}),
  }
)
const emits = defineEmits<{
  (event: 'update:modelValue', value?: any): void
}>()
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input)

function looseToNumber(val: any) {
  const n = Number.parseFloat(val)
  return Number.isNaN(n) ? val : n
}

const value = useVModel(props, 'modelValue', (_, val) => {
  if (props.modelModifiers.number) {
    emits('update:modelValue', looseToNumber(val))
  } else if (props.modelModifiers.trim) {
    emits('update:modelValue', typeof val === 'string' ? val.trim() : val)
  } else {
    emits('update:modelValue', val)
  }
})

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
      '[ninja-ui][base-input] The "label-float" property is not compatible with the label slot, use the label property instead.'
    )
  }
}
</script>

<template>
  <div class="relative" :class="props.classes?.wrapper">
    <label
      v-if="
        ('label' in $slots && !props.labelFloat) ||
        (props.label && !props.labelFloat)
      "
      class="nui-label w-full"
      :for="id"
      :class="[
        props.condensed && 'pb-1 text-xs',
        !props.condensed && 'pb-1 text-[0.825rem]',
        ...(props.classes?.label && Array.isArray(props.classes.label)
          ? props.classes.label
          : [props.classes?.label]),
      ]"
    >
      <slot name="label">{{ props.label }}</slot>
    </label>
    <div class="group/nui-input relative">
      <input
        :id="id"
        ref="inputRef"
        v-model="value"
        :type="props.type"
        v-bind="$attrs"
        class="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer w-full border bg-white font-sans transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-75"
        :class="[
          props.condensed && 'h-8 py-1 text-xs leading-4',
          props.condensed && props.icon !== undefined ? 'pe-3 ps-7' : 'px-2',
          !props.condensed && 'h-10 py-2 text-sm leading-5',
          !props.condensed && props.icon !== undefined ? 'pe-4 ps-9' : 'px-3',
          shape === 'rounded' && 'rounded',
          shape === 'curved' && 'rounded-xl',
          shape === 'full' && 'rounded-full',
          props.colorFocus && 'focus:border-primary-500',
          props.loading &&
            'text-transparent placeholder:text-transparent dark:placeholder:text-transparent',
          props.labelFloat &&
            'placeholder:text-transparent dark:placeholder:text-transparent',
          props.error &&
            !props.loading &&
            '!border-danger-500 dark:!border-danger-500',
          ...(props.classes?.input && Array.isArray(props.classes.input)
            ? props.classes.input
            : [props.classes?.input]),
        ]"
        :placeholder="placeholder"
      />
      <label
        v-if="
          ('label' in $slots && props.labelFloat) ||
          (props.label && props.labelFloat)
        "
        class="nui-label text-primary-500 peer-focus-visible:text-primary-500 dark:peer-focus-visible:text-primary-500 pointer-events-none absolute inline-flex h-5 select-none items-center leading-none transition-all duration-300"
        :for="id"
        :class="[
          ...(props.classes?.label && Array.isArray(props.classes.label)
            ? props.classes.label
            : [props.classes?.label]),
          props.loading
            ? 'peer-placeholder-shown:text-transparent'
            : 'peer-placeholder-shown:text-muted-300 dark:peer-placeholder-shown:text-muted-600',
          props.icon !== undefined &&
            !props.condensed &&
            'start-10 -ms-10 -mt-8 text-xs peer-placeholder-shown:ms-0 peer-placeholder-shown:mt-0 peer-placeholder-shown:text-[0.825rem] peer-focus-visible:-ms-10 peer-focus-visible:-mt-8 peer-focus-visible:text-xs',
          props.icon !== undefined &&
            props.condensed &&
            'start-8 -ms-8 -mt-7 text-xs peer-placeholder-shown:ms-0 peer-placeholder-shown:mt-0 peer-focus-visible:-ms-8 peer-focus-visible:-mt-7',
          props.icon === undefined &&
            !props.condensed &&
            'start-3 -ms-3  -mt-8 text-xs peer-placeholder-shown:ms-0 peer-placeholder-shown:mt-0 peer-placeholder-shown:text-[0.825rem] peer-focus-visible:-ms-3 peer-focus-visible:-mt-8 peer-focus-visible:text-xs',
          props.icon === undefined &&
            props.condensed &&
            'start-3 -ms-3  -mt-7 text-xs peer-placeholder-shown:ms-0 peer-placeholder-shown:mt-0 peer-focus-visible:-ms-3 peer-focus-visible:-mt-7',
          props.condensed ? 'top-1.5' : 'top-2.5',
        ]"
      >
        <slot name="label">{{ props.label }}</slot>
      </label>
      <div
        v-if="props.loading"
        class="absolute start-0 top-0 flex w-full items-center px-4"
        :class="[props.condensed && 'h-8', !props.condensed && 'h-10']"
      >
        <BasePlaceload class="h-3 w-full max-w-[75%] rounded" />
      </div>
      <div
        v-if="props.icon"
        class="text-muted-400 group-focus-within/nui-input:text-primary-500 absolute start-0 top-0 flex items-center justify-center transition-colors duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-75"
        :class="[
          props.condensed && 'h-8 w-8',
          !props.condensed && 'h-10 w-10',
          props.loading && 'opacity-0',
          props.error && !props.loading && '!text-danger-500',
          ...(props.classes?.icon && Array.isArray(props.classes.icon)
            ? props.classes.icon
            : [props.classes?.icon]),
        ]"
      >
        <slot name="icon">
          <Icon
            :name="props.icon"
            :class="[
              props.condensed && 'h-[1rem] w-[1rem]',
              !props.condensed && 'h-[1.15rem] w-[1.15rem]',
            ]"
          />
        </slot>
      </div>
      <slot name="action"></slot>
      <span
        v-if="props.error && typeof props.error === 'string'"
        :class="props.classes?.error"
        class="text-danger-600 mt-1 block font-sans text-[0.65rem] font-medium leading-none"
      >
        {{ props.error }}
      </span>
    </div>
  </div>
</template>
