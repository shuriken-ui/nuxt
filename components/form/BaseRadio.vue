<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts" generics="T extends string | number | undefined">
const props = withDefaults(
  defineProps<{
    /**
     * The form input identifier.
     */
    id?: string

    /**
     * The value of the radio input.
     */
    value?: any

    /**
     * The model value of the radio input.
     */
    modelValue: any

    /**
     * The label for the radio input.
     */
    label?: string

    /**
     * An error message to display below the radio label.
     */
    error?: string

    /** The color of the radio. Can be 'default', 'primary', 'info', 'success', 'warning', or 'danger' */
    color?:
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'light'
      | 'muted'

    /**
     * Classes to apply to the various parts of the radio input.
     */
    classes?: {
      /**
       * Classes to apply to the wrapper element of the radio input.
       */
      wrapper?: string | string[]

      /**
       * Classes to apply to the label element of the radio input.
       */
      label?: string | string[]

      /**
       * Classes to apply to the dot element inside the radio input.
       */
      inputDot?: string | string[]

      /**
       * Classes to apply to the background element inside the radio input.
       */
      inputBg?: string | string[]
    }
  }>(),
  {
    id: undefined,
    value: undefined,
    label: undefined,
    error: undefined,
    name: undefined,
    color: undefined,
    classes: () => ({}),
  }
)
const emits = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()
const inputRef = ref<HTMLInputElement>()
const value = useVModel(props, 'modelValue', emits)

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
      class="nui-focus group/nui-radio relative flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-full"
    >
      <input
        :id="id"
        ref="inputRef"
        v-model="value"
        v-bind="$attrs"
        type="radio"
        :value="props.value"
        class="peer absolute z-20 h-5 w-5 cursor-pointer opacity-0"
      />
      <div
        :class="props.classes?.inputBg"
        class="border-muted-400 dark:border-muted-600 dark:bg-muted-700 absolute start-0 top-0 z-0 h-full w-full rounded-full border-2 bg-white peer-checked:border-current"
      ></div>
      <div
        :class="props.classes?.inputDot"
        class="pointer-events-none z-10 block h-1 w-1 scale-0 rounded-full bg-current transition duration-300 peer-checked:scale-100"
      ></div>
    </div>
    <div class="inline-flex flex-col">
      <label
        v-if="props.label || 'default' in $slots"
        :for="id"
        :class="props.classes?.label"
        class="text-muted-400 ms-1 cursor-pointer select-none font-sans text-sm"
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
