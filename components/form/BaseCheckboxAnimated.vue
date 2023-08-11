<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The value of the component.
     */
    value?: any

    /**
     * The form input identifier.
     */
    id?: string

    /**
     * The model value of the component.
     */
    modelValue?: any

    /**
     * The value to set when the component is checked.
     */
    trueValue?: any

    /**
     * The value to set when the component is unchecked.
     */
    falseValue?: any

    /** The color of the checkbox. Can be 'default', 'primary', 'info', 'success', 'warning', or 'danger' */
    color?:
      | 'default'
      | 'primary'
      | 'muted'
      | 'light'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'

    /**
     * Optional CSS classes to apply to the wrapper, label, and input elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the label element.
       */
      label?: string | string[]

      /**
       * CSS classes to apply to the input element.
       */
      input?: string | string[]
    }
  }>(),
  {
    id: undefined,
    value: undefined,
    trueValue: true,
    falseValue: false,
    modelValue: false,
    color: undefined,
    classes: () => ({
      wrapper: [],
      label: [],
      input: [],
    }),
  }
)
const emits = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()
const value = useVModel(props, 'modelValue', emits)

const element = ref<HTMLElement>()
const inputRef = ref<HTMLInputElement>()
const innerElement = ref<HTMLElement>()
const checked = computed(() => {
  if (value.value === props.trueValue) {
    return true
  }
  if (value.value === props.falseValue) {
    return false
  }

  return props.value === undefined ? false : value.value.includes(props.value)
})

const colorStyle = {
  default: 'nui-checkbox-animated-default',
  light: 'nui-checkbox-animated-light',
  muted: 'nui-checkbox-animated-muted',
  primary: 'nui-checkbox-animated-primary',
  info: 'nui-checkbox-animated-info',
  success: 'nui-checkbox-animated-success',
  warning: 'nui-checkbox-animated-warning',
  danger: 'nui-checkbox-animated-danger',
}

const updateCheckbox = () => {
  if (element.value && innerElement.value) {
    if (checked.value) {
      element.value.classList.add('nui-checked')
      innerElement.value.classList.add('nui-is-opaque')
      setTimeout(() => {
        element.value?.classList.remove('nui-unchecked')
      }, 150)
    } else {
      element.value.classList.add('nui-unchecked')
      element.value.classList.remove('nui-checked')
      setTimeout(() => {
        innerElement.value?.classList.remove('nui-is-opaque')
      }, 150)
    }
  }
}

function change() {
  if (Array.isArray(value.value)) {
    const values = [...value.value]
    if (checked.value) {
      values.splice(values.indexOf(props.value ?? props.trueValue), 1)
    } else {
      values.push(props.value ?? props.trueValue)
    }
    value.value = values
    return
  }

  if (value.value === props.trueValue) {
    value.value = props.falseValue
    return
  }

  value.value = props.trueValue
}

watchEffect(updateCheckbox)

const id = useNinjaId(() => props.id)
</script>

<template>
  <div
    ref="element"
    class="nui-checkbox-animated"
    :class="[props.classes?.wrapper, props.color && colorStyle[props.color]]"
  >
    <input
      :id="id"
      ref="inputRef"
      type="checkbox"
      class="nui-checkbox-animated-input"
      :true-value="props.trueValue"
      :false-value="props.falseValue"
      :checked="checked"
      :value="props.value"
      :class="props.classes?.input"
      v-bind="$attrs"
      @change="change"
    />
    <label
      class="nui-checkbox-animated-label"
      :for="id"
      :class="props.classes?.label"
    >
      <div ref="innerElement" class="nui-checkbox-animated-label-inner"></div>
      <IconCheckCircle />
    </label>
  </div>
</template>

<style scoped>
.nui-checkbox-animated-label:deep(svg circle) {
  height: 32px;
  width: 32px;
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: currentColor;
  fill: none;
}

.nui-checkbox-animated-label:deep(svg) {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  color: currentColor;
  stroke: currentColor;
  stroke-miterlimit: 10;
  margin: 0 auto;
  box-shadow: inset 0 0 0 currentColor;
}

.nui-checkbox-animated-label:deep(svg path) {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  stroke: currentColor;
}

.nui-checkbox-animated.nui-checked label:deep(svg circle) {
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) both;
}
.nui-checkbox-animated.nui-checked label:deep(svg path) {
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s both;
}
.nui-checkbox-animated.nui-unchecked label:deep(svg circle) {
  animation: reverseCircle 0.6s cubic-bezier(0.65, 0, 0.45, 1) 0.2s both;
}
.nui-checkbox-animated.nui-unchecked label:deep(svg path) {
  animation: reverseCheck 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.1s both;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes reverseCircle {
  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: 166;
  }
}
@keyframes reverseCheck {
  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: 48;
  }
}
</style>
