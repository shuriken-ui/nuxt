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
  }>(),
  {
    value: undefined,
    trueValue: true as any,
    falseValue: false as any,
    id: undefined,
    label: undefined,
  },
)

defineSlots<{
  default: (props: { value: T | T[] | undefined }) => any
}>()

const [modelValue] = defineModel<T | T[]>()

const inputRef = ref<HTMLInputElement>()
const id = useNinjaId(() => props.id)

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
  <div class="group/nui-checkbox-headless relative">
    <label
      v-if="props.label"
      :for="id"
      class="text-muted-400 mb-1 inline-block cursor-pointer select-none font-sans text-sm"
    >
      {{ props.label }}
    </label>
    <div class="relative">
      <input
        :id="id"
        ref="inputRef"
        v-model="modelValue"
        :value="props.value"
        :true-value="props.trueValue"
        :false-value="props.falseValue"
        v-bind="$attrs"
        class="peer absolute inset-0 z-20 size-full cursor-pointer appearance-none"
        type="checkbox"
      >
      <slot v-bind="{ value: modelValue }" />
    </div>
  </div>
</template>
