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
     * Accessible label of the switch.
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
    color?:
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'dark'
      | 'black'

    /**
     * Optional CSS classes to apply to the component inner elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the outer element.
       */
      outer?: string | string[]

      /**
       * CSS classes to apply to the input element.
       */
      input?: string | string[]

      /**
       * CSS classes to apply to the handle element.
       */
      handle?: string | string[]

      /**
       * CSS classes to apply to the track element.
       */
      track?: string | string[]
    }
  }>(),
  {
    id: undefined,
    label: undefined,
    sublabel: undefined,
    color: undefined,
    classes: () => ({}),
  },
)

const [modelValue] = defineModel<boolean>()

const inputRef = ref<HTMLInputElement>()
const id = useNinjaId(() => props.id)

const color = useNuiDefaultProperty(props, 'BaseSwitchThin', 'color')

const colors = {
  primary: 'nui-switch-thin-primary',
  info: 'nui-switch-thin-info',
  success: 'nui-switch-thin-success',
  warning: 'nui-switch-thin-warning',
  danger: 'nui-switch-thin-danger',
  dark: 'nui-switch-thin-dark',
  black: 'nui-switch-thin-black',
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
  <label
    :for="id"
    class="nui-switch-thin"
    :class="[color && colors[color], props.classes?.wrapper]"
  >
    <span class="nui-switch-thin-outer" :class="props.classes?.outer">
      <input
        :id="id"
        ref="inputRef"
        :checked="modelValue"
        v-bind="$attrs"
        type="checkbox"
        class="nui-switch-thin-input peer"
        :class="props.classes?.input"
        @change="modelValue = !modelValue"
      />
      <span
        class="nui-switch-thin-handle"
        :class="props.classes?.handle"
      ></span>
      <span class="nui-switch-thin-track" :class="props.classes?.track"></span>
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
