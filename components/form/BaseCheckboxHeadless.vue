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
  <div class="nui-checkbox-headless">
    <label v-if="props.label" :for="id" class="nui-checkbox-headless-label">
      {{ props.label }}
    </label>
    <div class="nui-checkbox-headless-inner">
      <input
        :id="id"
        ref="inputRef"
        v-model="value"
        :true-value="props.trueValue"
        :false-value="props.falseValue"
        v-bind="$attrs"
        class="nui-checkbox-headless-input peer"
        type="checkbox"
      />
      <slot v-bind="{ value }"></slot>
    </div>
  </div>
</template>
