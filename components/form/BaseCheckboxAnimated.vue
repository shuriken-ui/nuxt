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
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'muted'
      | 'light'

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

const updateCheckbox = () => {
  if (element.value && innerElement.value) {
    if (checked.value) {
      element.value.classList.add('is-checked')
      innerElement.value.classList.add('is-opaque')
      setTimeout(() => {
        element.value?.classList.remove('is-unchecked')
      }, 150)
    } else {
      element.value.classList.add('is-unchecked')
      element.value.classList.remove('is-checked')
      setTimeout(() => {
        innerElement.value?.classList.remove('is-opaque')
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
    class="nui-focus block focus-within:outline-current"
    :class="props.classes?.wrapper"
  >
    <input
      :id="id"
      ref="inputRef"
      type="checkbox"
      class="peer cursor-pointer disabled:cursor-not-allowed"
      :true-value="props.trueValue"
      :false-value="props.falseValue"
      :checked="checked"
      :value="props.value"
      :class="props.classes?.input"
      v-bind="$attrs"
      @change="change"
    />
    <label
      class="peer-disabled:opacity-75"
      :for="id"
      :class="[
        props.color === 'primary' && 'text-primary-500',
        props.color === 'info' && 'text-info-500',
        props.color === 'success' && 'text-success-500',
        props.color === 'warning' && 'text-warning-500',
        props.color === 'danger' && 'text-danger-500',
        props.color === 'light' && 'text-muted-100',
        props.color === 'muted' && 'text-muted-400',
        props.classes?.label,
      ]"
    >
      <div ref="innerElement"></div>
      <IconCheckCircle />
    </label>
  </div>
</template>

<style>
:root {
  --animated-checkbox-border: #cfcfcf;
}

.dark {
  --animated-checkbox-border: #3c4c69;
}
</style>

<style scoped>
.block {
  position: relative;
  height: 32px;
  width: 32px;
  border-radius: 50%;
}

.block input {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  z-index: 1;
}

.block label {
  position: relative;
  height: 32px;
  width: 32px;
}

.block label > div {
  position: absolute;
  top: 0;
  left: 0;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 1px solid var(--animated-checkbox-border);
  z-index: 0;
  opacity: 1;
  transition: all 0.2s;
}

.block label > div.is-opaque {
  opacity: 0;
}

.block label:deep(svg circle) {
  height: 32px;
  width: 32px;
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: currentColor;
  fill: none;
}

.block label:deep(svg) {
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

.block label:deep(svg path) {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  stroke: currentColor;
}

.block.is-checked label:deep(svg circle) {
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) both;
}

.block.is-checked label:deep(svg path) {
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s both;
}

.block.is-unchecked label:deep(svg circle) {
  animation: reverseCircle 0.6s cubic-bezier(0.65, 0, 0.45, 1) 0.2s both;
}

.block.is-unchecked label:deep(svg path) {
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
