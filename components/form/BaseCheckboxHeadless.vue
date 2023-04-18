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
    trueValue?: string | number | boolean

    /**
     * The value to set when the checkbox is unchecked.
     */
    falseValue?: string | number | boolean

    /**
     * The model value of the checkbox.
     */
    modelValue: any

    /**
     * The form input identifier.
     */
    id?: string
  }>(),
  {
    id: undefined,
    label: undefined,
    trueValue: true,
    falseValue: false,
  }
)
const emits = defineEmits<{
  (e: 'update:modelValue', value: string | number | boolean): void
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
        v-model="value"
        :true-value="props.trueValue"
        :false-value="props.falseValue"
        v-bind="$attrs"
        class="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
        type="checkbox"
      />
      <slot v-bind="{ value }"></slot>
    </div>
  </div>
</template>
