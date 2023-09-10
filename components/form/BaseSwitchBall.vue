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
  primary: 'nui-switch-ball-primary',
  info: 'nui-switch-ball-info',
  success: 'nui-switch-ball-success',
  warning: 'nui-switch-ball-warning',
  danger: 'nui-switch-ball-danger',
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
  <label :for="id" class="nui-switch-ball" :class="colorStyle[props.color]">
    <span class="nui-switch-ball-outer">
      <input
        :id="id"
        ref="inputRef"
        :checked="value"
        v-bind="$attrs"
        type="checkbox"
        class="nui-switch-ball-input peer"
        @change="value = !value"
      />
      <span class="nui-switch-ball-handle"></span>
      <span class="nui-switch-ball-track"></span>
      <IconCheck class="nui-switch-ball-icon" />
    </span>
    <span v-if="!props.sublabel" class="nui-switch-ball-single-label">
      {{ props.label }}
    </span>
    <span v-else class="nui-switch-ball-dual-label">
      <span class="nui-switch-ball-label">
        {{ props.label }}
      </span>
      <span class="nui-switch-ball-sublabel">
        {{ props.sublabel }}
      </span>
    </span>
  </label>
</template>
