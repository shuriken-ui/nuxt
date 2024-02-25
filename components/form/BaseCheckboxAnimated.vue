<script setup lang="ts" generic="T extends unknown = boolean">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    /**
     * The value of the component.
     */
    value?: T

    /**
     * The value to set when the component is checked.
     */
    trueValue?: T

    /**
     * The value to set when the component is unchecked.
     */
    falseValue?: T

    /**
     * The form input identifier.
     */
    id?: string

    /** The color of the checkbox.
     *
     * @default 'primary'
     */
    color?:
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'muted'
      | 'light'
      | 'dark'
      | 'black'

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
    value: undefined,
    trueValue: true as any,
    falseValue: false as any,
    id: undefined,
    color: undefined,
    classes: () => ({
      wrapper: [],
      label: [],
      input: [],
    }),
  },
)

const [modelValue] = defineModel<T | T[]>()

const id = useNinjaId(() => props.id)

const color = useNuiDefaultProperty(props, 'BaseCheckboxAnimated', 'color')

const element = ref<HTMLElement>()
const inputRef = ref<HTMLInputElement>()
const innerElement = ref<HTMLElement>()
const checked = computed(() => {
  if (modelValue.value === props.trueValue) {
    return true
  }
  if (modelValue.value === props.falseValue) {
    return false
  }

  return props.value === undefined
    ? false
    : Array.isArray(modelValue.value)
      ? modelValue.value.includes(props.value)
      : modelValue.value === props.value
})

const colors = {
  primary: 'text-primary-500',
  info: 'text-info-500',
  success: 'text-success-500',
  warning: 'text-warning-500',
  danger: 'text-danger-500',
  light: 'text-light-100',
  muted: 'text-muted-400',
  dark: 'text-muted-900 dark:text-muted-100',
  black: 'text-black dark:text-white',
} as Record<string, string>

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
  if (Array.isArray(modelValue.value)) {
    const values = [...modelValue.value]
    const trueValue = props.value ?? props.trueValue
    if (trueValue === undefined) {
      return
    }

    if (checked.value) {
      values.splice(values.indexOf(trueValue), 1)
    } else {
      values.push(trueValue)
    }

    modelValue.value = values
    return
  }

  if (modelValue.value === props.trueValue) {
    modelValue.value = props.falseValue
    return
  }

  modelValue.value = props.trueValue
}

watchEffect(updateCheckbox)
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
      :class="[color && colors[color], props.classes?.label]"
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
