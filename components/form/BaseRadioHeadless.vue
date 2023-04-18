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
  <div class="group/nui-radio-headless relative">
    <label
      v-if="label"
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
        v-bind="$attrs"
        type="radio"
        :value="props.value"
        :name="props.name"
        class="peer absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
      />
      <slot v-bind="{ value }"></slot>
    </div>
  </div>
</template>
