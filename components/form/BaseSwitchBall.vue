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
     * The model value of the switch.
     */
    modelValue: any

    /**
     * Accessible label for the switch.
     */
    label?: string

    /**
     * The sublabel of the switch.
     */
    sublabel?: string

    /**
     * Main color of the switch.
     */
    color?: 'primary' | 'info' | 'success' | 'warning' | 'danger'
  }>(),
  {
    id: undefined,
    label: undefined,
    sublabel: undefined,
    color: 'primary',
  }
)
const emits = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()
const value = useVModel(props, 'modelValue', emits)

const id = useNinjaId(() => props.id)

const inputRef = ref<HTMLInputElement>()
defineExpose({
  /**
   * The underlying HTMLInputElement element.
   */
  el: inputRef,
})
</script>

<template>
  <label :for="id" class="flex cursor-pointer items-center">
    <span class="relative block">
      <input
        :id="id"
        ref="inputRef"
        :checked="value"
        v-bind="$attrs"
        type="checkbox"
        class="peer absolute z-0 h-full w-full cursor-pointer opacity-0"
        @change="value = !value"
      />
      <span
        class="border-muted-300 dark:border-muted-600 dark:bg-muted-700 absolute start-0.5 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full border bg-white shadow transition focus:w-6 peer-checked:-translate-y-1/2 peer-checked:translate-x-full rtl:peer-checked:-translate-x-full"
      ></span>
      <span
        class="bg-muted-300 peer-focus:outline-muted-300 dark:bg-muted-600 dark:peer-focus:outline-muted-600 block h-6 w-11 rounded-full shadow-inner outline-1 outline-transparent transition-all duration-300 peer-focus:outline-dashed peer-focus:outline-offset-2 peer-focus:ring-0"
        :class="[
          props.color === 'primary' && 'peer-checked:bg-primary-400',
          props.color === 'info' && 'peer-checked:bg-info-400',
          props.color === 'success' && 'peer-checked:bg-success-400',
          props.color === 'warning' && 'peer-checked:bg-warning-400',
          props.color === 'danger' && 'peer-checked:bg-danger-400',
        ]"
      ></span>
      <IconCheck
        class="pointer-events-none absolute start-2 top-1/2 z-10 h-2.5 w-2.5 translate-y-0 fill-current text-white opacity-0 transition duration-300 peer-checked:-translate-y-1/2 peer-checked:opacity-100"
      />
    </span>
    <span
      v-if="!props.sublabel"
      class="text-muted-400 relative ms-3 cursor-pointer select-none font-sans text-sm"
    >
      {{ props.label }}
    </span>
    <span v-else class="ms-3">
      <span
        class="font-heading text-muted-800 block text-sm font-medium dark:text-white"
      >
        {{ props.label }}
      </span>
      <span class="text-muted-400 block font-sans text-xs">
        {{ props.sublabel }}
      </span>
    </span>
  </label>
</template>
