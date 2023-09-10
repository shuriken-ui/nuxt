<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    /**
     * The form input identifier.
     */
    id?: string

    /**
     * The model value of the switch.
     */
    modelValue?: boolean

    /**
     * Accessible label of the switch.
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
    modelValue: undefined,
    label: undefined,
    sublabel: undefined,
    color: 'primary',
  },
)
const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
const value = useVModel(props, 'modelValue', emits, {
  passive: true,
})

const id = useNinjaId(() => props.id)

const colorStyle = {
  primary: 'nui-switch-thin-primary',
  info: 'nui-switch-thin-info',
  success: 'nui-switch-thin-success',
  warning: 'nui-switch-thin-warning',
  danger: 'nui-switch-thin-danger',
}

const inputRef = ref<HTMLInputElement>()
defineExpose({
  /**
   * The underlying HTMLInputElement element.
   */
  el: inputRef,
})
</script>

<template>
  <label :for="id" class="nui-switch-thin" :class="colorStyle[props.color]">
    <span class="nui-switch-thin-outer">
      <input
        :id="id"
        ref="inputRef"
        :checked="value"
        v-bind="$attrs"
        type="checkbox"
        class="nui-switch-thin-input peer"
        @change="value = !value"
      />
      <span class="nui-switch-thin-handle"></span>
      <span class="nui-switch-thin-track"></span>
    </span>
    <span v-if="!props.sublabel" class="nui-switch-thin-single-label">
      {{ props.label }}
    </span>
    <span v-else class="nui-switch-thin-dual-label">
      <span class="nui-switch-thin-label">
        {{ props.label }}
      </span>
      <span class="nui-switch-thin-sublabel">
        {{ props.sublabel }}
      </span>
    </span>
  </label>
</template>
