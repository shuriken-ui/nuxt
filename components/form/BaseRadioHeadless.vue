<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
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
     * The name of the radio input.
     */
    name?: string

    /**
     * The label for the radio input.
     */
    label?: string
  }>(),
  {
    id: undefined,
    value: undefined,
    label: undefined,
    name: undefined,
  }
)
const emits = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()
const value = useVModel(props, 'modelValue', emits)

const inputRef = ref<HTMLInputElement>()
defineExpose({
  /**
   * The underlying HTMLInputElement element.
   */
  el: inputRef,
})

const id = useNinjaId(() => props.id)
</script>

<template>
  <div class="group/nui-radio-headless nui-radio-headless">
    <label v-if="label" :for="id" class="nui-radio-headless-label">
      {{ props.label }}
    </label>
    <div class="nui-radio-headless-inner">
      <input
        :id="id"
        ref="inputRef"
        v-model="value"
        v-bind="$attrs"
        type="radio"
        :value="props.value"
        :name="props.name"
        class="nui-radio-headless-input peer"
      />
      <slot v-bind="{ value }"></slot>
    </div>
  </div>
</template>
