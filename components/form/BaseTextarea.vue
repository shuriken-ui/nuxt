<script setup lang="ts">
export interface TextareaEmits {
  (event: 'update:modelValue', value?: string): void
}

export interface TextareaProps {
  /**
   * The model value of the textarea.
   *
   * @example
   * `v-model="value"`
   *
   * @example
   * `v-model.trim="value"`
   */
  modelValue?: string

  /**
   * Used internaly to allow v-model.trim
   */
  modelModifiers?: any

  /**
   * The form input identifier.
   */
  id?: string

  /**
   * The name of the textarea.
   */
  name?: string

  /**
   * The shape of the textarea.
   */
  shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'

  /**
   * The label for the textarea.
   */
  label?: string

  /**
   * If the label should be floating.
   */
  labelFloat?: boolean

  /**
   * Whether to apply the focus color to the textarea.
   */
  colorFocus?: boolean

  /**
   * The placeholder text for the textarea.
   */
  placeholder?: string

  /**
   * Whether the textarea is in a loading state.
   */
  loading?: boolean

  /**
   * Whether the textarea is disabled.
   */
  disabled?: boolean

  /**
   * The size of the textarea.
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * The contrast of the textarea.
   */
  contrast?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'

  /**
   * Whether the textarea is read-only.
   */
  readonly?: boolean

  /**
   * The error message for the textarea, or whether it is in an error state.
   */
  error?: string | boolean

  /**
   * Whether to display an addon element in the textarea.
   */
  addon?: boolean

  /**
   * The number of rows to display in the textarea.
   */
  rows?: number | string

  /**
   * Whether to allow the user to resize the textarea.
   */
  resize?: boolean

  /**
   * Whether to automatically grow the textarea as text is entered.
   */
  autogrow?: boolean

  /**
   * A set of classes to apply to the various elements of the textarea.
   */
  classes?: {
    /**
     * A class or list of classes to be applied to the textarea wrapper element.
     */
    wrapper?: string | string[]
    /**
     * A class or list of classes to be applied to the label element.
     */
    label?: string | string[]
    /**
     * A class or list of classes to be applied to the textarea element.
     */
    textarea?: string | string[]
    /**
     * A class or list of classes to be applied to the addon element.
     */
    addon?: string | string[]
    /**
     * A class or list of classes to be applied to the error element.
     */
    error?: string | string[]
  }
}

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<TextareaProps>(), {
  id: undefined,
  modelValue: undefined,
  modelModifiers: () => ({}),
  label: undefined,
  name: undefined,
  shape: undefined,
  placeholder: '',
  size: 'md',
  contrast: 'default',
  rows: 4,
  error: false,
  classes: () => ({}),
})
const emits = defineEmits<TextareaEmits>()
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input)

const shapeStyle = {
  straight: '',
  rounded: 'nui-textarea-rounded',
  smooth: 'nui-textarea-smooth',
  curved: 'nui-textarea-curved',
  full: 'nui-textarea-full',
}
const sizeStyle = {
  sm: 'nui-textarea-sm',
  md: 'nui-textarea-md',
  lg: 'nui-textarea-lg',
}
const contrastStyle = {
  default: 'nui-textarea-default',
  'default-contrast': 'nui-textarea-default-contrast',
  muted: 'nui-textarea-muted',
  'muted-contrast': 'nui-textarea-muted-contrast',
}

const value = useVModel(
  props,
  'modelValue',
  (_, val) => {
    if (props.modelModifiers.trim) {
      emits('update:modelValue', typeof val === 'string' ? val.trim() : val)
    } else {
      emits('update:modelValue', val)
    }
  },
  {
    passive: true,
  },
)

const textareaRef = ref<HTMLTextAreaElement>()

function fitSize() {
  if (!textareaRef.value) {
    return
  }

  if (props.autogrow) {
    textareaRef.value.style.height = 'auto'
    textareaRef.value.style.height = textareaRef.value.scrollHeight + 'px'
  }
}

watch(
  () => props.modelValue,
  async () => {
    await nextTick()
    fitSize()
  },
)

defineExpose({
  /**
   * The underlying HTMLTextAreaElement element.
   */
  el: textareaRef,

  /**
   * A method to resize the textarea to fit its content.
   */
  fitSize,
})

const id = useNinjaId(() => props.id)
</script>

<template>
  <div
    class="nui-textarea-wrapper"
    :class="[
      contrastStyle[props.contrast],
      sizeStyle[props.size],
      shape && shapeStyle[shape],
      props.error && !props.loading && 'nui-textarea-error',
      props.loading && 'nui-textarea-loading',
      props.labelFloat && 'nui-textarea-label-float',
      !props.resize && 'nui-textarea-not-resize',
      props.addon && 'nui-has-addon',
      props.classes?.wrapper,
    ]"
  >
    <label
      v-if="props.label && !props.labelFloat"
      :for="id"
      class="nui-textarea-label"
      :class="props.classes.label"
    >
      {{ props.label }}
    </label>
    <div class="nui-textarea-outer">
      <textarea
        :id="id"
        ref="textareaRef"
        v-model="value"
        v-bind="$attrs"
        class="nui-textarea"
        :class="[
          props.colorFocus && 'nui-textarea-focus',
          props.classes.textarea,
        ]"
        :name="props.name"
        :placeholder="props.placeholder"
        :readonly="props.readonly"
        :disabled="props.disabled"
        :rows="props.rows"
      ></textarea>
      <label
        v-if="props.label && props.labelFloat"
        class="nui-label-float"
        :for="id"
        :class="props.classes.label"
      >
        <slot name="label">{{ props.label }}</slot>
      </label>
      <div v-if="props.loading" class="nui-textarea-placeload">
        <BasePlaceload class="nui-placeload" />
        <BasePlaceload class="nui-placeload" />
        <BasePlaceload class="nui-placeload" />
      </div>
      <div
        v-if="props.addon"
        class="nui-textarea-addon"
        :class="props.classes.addon"
      >
        <slot name="addon"></slot>
      </div>
      <span
        v-if="props.error && typeof props.error === 'string'"
        class="nui-textarea-error-text"
        :class="props.classes?.error"
      >
        {{ props.error }}
      </span>
    </div>
  </div>
</template>
