<script setup lang="ts" generic="T extends unknown = boolean">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    /**
     * The value of the radio input.
     */
    value?: T

    /**
     * The form input identifier.
     */
    id?: string

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
    value: undefined,
    id: undefined,
    name: undefined,
    label: undefined,
  },
)

defineSlots<{
  default: (props: { value: T | undefined }) => any
}>()

const [modelValue] = defineModel<T>()

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
        v-model="modelValue"
        v-bind="$attrs"
        type="radio"
        :value="props.value"
        :name="props.name"
        class="peer absolute inset-0 z-20 size-full cursor-pointer appearance-none"
      >
      <slot v-bind="{ value: modelValue }" />
    </div>
  </div>
</template>
