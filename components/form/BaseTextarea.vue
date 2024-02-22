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
     * The name of the textarea.
     */
    name?: string

    /**
     * The radius of the textarea.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The size of the textarea.
     *
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg'

    /**
     * The contrast of the textarea.
     *
     * @default 'default'
     */
    contrast?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'

    /**
     * The label for the textarea.
     */
    label?: string

    /**
     * If the label should be floating.
     */
    labelFloat?: boolean

    /**
     * The placeholder text for the textarea.
     */
    placeholder?: string

    /**
     * Whether to apply the focus color to the textarea.
     */
    colorFocus?: boolean

    /**
     * Whether the textarea is in a loading state.
     */
    loading?: boolean

    /**
     * Whether the textarea is disabled.
     */
    disabled?: boolean

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
     * The maximum height of the textarea when autogrow is enabled.
     */
    maxHeight?: number

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
  }>(),
  {
    id: undefined,
    name: undefined,
    rounded: undefined,
    size: undefined,
    contrast: undefined,
    label: undefined,
    placeholder: '',
    error: false,
    rows: 4,
    maxHeight: undefined,
    classes: () => ({}),
  },
)

const [modelValue, modelModifiers] = defineModel<string, 'lazy' | 'trim'>({
  set(value) {
    if (modelModifiers.trim && typeof value === 'string') {
      return value.trim()
    }

    return value
  },
})

const rounded = useNuiDefaultProperty(props, 'BaseTextarea', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseTextarea', 'size')
const contrast = useNuiDefaultProperty(props, 'BaseTextarea', 'contrast')

const textareaRef = ref<HTMLTextAreaElement>()
const id = useNinjaId(() => props.id)

const radiuses = {
  none: '',
  sm: 'nui-textarea-rounded-sm',
  md: 'nui-textarea-rounded-md',
  lg: 'nui-textarea-rounded-lg',
  full: 'nui-textarea-rounded-lg',
} as Record<string, string>

const sizes = {
  sm: 'nui-textarea-sm',
  md: 'nui-textarea-md',
  lg: 'nui-textarea-lg',
} as Record<string, string>

const contrasts = {
  default: 'nui-textarea-default',
  'default-contrast': 'nui-textarea-default-contrast',
  muted: 'nui-textarea-muted',
  'muted-contrast': 'nui-textarea-muted-contrast',
} as Record<string, string>

function fitSize() {
  if (!textareaRef.value) {
    return
  }

  if (props.autogrow) {
    textareaRef.value.style.height = 'auto'
    textareaRef.value.style.height =
      Math.min(
        props.maxHeight ?? Number.POSITIVE_INFINITY,
        1 + textareaRef.value.scrollHeight,
      ) + 'px'
  }
}

watch(
  [() => props.autogrow, () => props.maxHeight, textareaRef, modelValue],
  async () => {
    await nextTick()
    fitSize()
  },
  {
    immediate: true,
  },
)

defineExpose({
  /**
   * The underlying HTMLTextAreaElement element.
   */
  el: textareaRef,

  /**
   * The internal id of the radio input.
   */
  id,

  /**
   * A method to resize the textarea to fit its content.
   */
  fitSize,
})
</script>

<template>
  <div
    class="nui-textarea-wrapper"
    :class="[
      contrast && contrasts[contrast],
      size && sizes[size],
      rounded && radiuses[rounded],
      props.error && !props.loading && 'nui-textarea-error',
      props.loading && 'nui-textarea-loading',
      props.labelFloat && 'nui-textarea-label-float',
      !props.resize && 'nui-textarea-not-resize',
      props.addon && 'nui-has-addon',
      props.colorFocus && 'nui-textarea-focus',
      props.classes?.wrapper,
    ]"
  >
    <label
      v-if="props.label && !props.labelFloat"
      :for="id"
      class="nui-textarea-label"
      :class="props.classes?.label"
    >
      {{ props.label }}
    </label>
    <div class="nui-textarea-outer">
      <textarea
        v-if="modelModifiers.lazy"
        :id="id"
        ref="textareaRef"
        v-model.lazy="modelValue"
        v-bind="$attrs"
        class="nui-textarea"
        :class="[props.classes?.textarea]"
        :name="props.name"
        :placeholder="props.placeholder"
        :readonly="props.readonly"
        :disabled="props.disabled"
        :rows="props.rows"
      ></textarea>
      <textarea
        v-else
        :id="id"
        ref="textareaRef"
        v-model="modelValue"
        v-bind="$attrs"
        class="nui-textarea"
        :class="[
          props.colorFocus && 'nui-textarea-focus',
          props.classes?.textarea,
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
        :class="props.classes?.label"
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
        :class="props.classes?.addon"
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
