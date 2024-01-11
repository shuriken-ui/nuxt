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
     * Accessible label for the switch.
     */
    label?: string

    /**
     * The sublabel of the switch.
     */
    sublabel?: string

    /**
     * Main color of the switch.
     *
     * @default 'primary'
     */
    color?: 'primary' | 'info' | 'success' | 'warning' | 'danger'
  }>(),
  {
    id: undefined,
    label: undefined,
    sublabel: undefined,
    color: undefined,
  },
)

const [modelValue] = defineModel<boolean>()

const inputRef = ref<HTMLInputElement>()
const id = useNinjaId(() => props.id)

const color = useNuiDefaultProperty(props, 'BaseSwitchBall', 'color')

const colors = {
  primary: 'nui-switch-ball-primary',
  info: 'nui-switch-ball-info',
  success: 'nui-switch-ball-success',
  warning: 'nui-switch-ball-warning',
  danger: 'nui-switch-ball-danger',
} as Record<string, string>

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
  <label :for="id" class="nui-switch-ball" :class="color && colors[color]">
    <span class="nui-switch-ball-outer">
      <input
        :id="id"
        ref="inputRef"
        :checked="modelValue"
        v-bind="$attrs"
        type="checkbox"
        class="nui-switch-ball-input peer"
        @change="modelValue = !modelValue"
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
