<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
export interface TextareaEmits {
  (event: 'update:modelValue', value?: any): void
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
  modelValue: any

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
  shape?: 'straight' | 'rounded' | 'curved' | 'full'

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
   * Whether the input is condensed.
   */
  condensed?: boolean

  /**
   * Whether the textarea is read-only.
   */
  readonly?: boolean

  /**
   * The error message for the textarea, or whether it is in an error state.
   */
  error?: boolean | string

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

const props = withDefaults(defineProps<TextareaProps>(), {
  id: undefined,
  modelModifiers: () => ({}),
  label: undefined,
  name: undefined,
  shape: undefined,
  placeholder: '',
  rows: 4,
  error: false,
  classes: () => ({}),
})
const emits = defineEmits<TextareaEmits>()
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input)

const value = useVModel(props, 'modelValue', (_, val) => {
  if (props.modelModifiers.trim) {
    emits('update:modelValue', typeof val === 'string' ? val.trim() : val)
  } else {
    emits('update:modelValue', val)
  }
})

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
  }
)

defineExpose({
  /**
   * The underlying HTMLTextAreaElement element.
   */
  el: textareaRef,
})

const id = useNinjaId(() => props.id)
</script>

<template>
  <div class="relative" :class="props.classes?.wrapper">
    <label
      v-if="props.label && !props.labelFloat"
      :for="id"
      class="nui-label pb-1 text-[0.825rem]"
      :class="[
        ...(props.classes?.label && Array.isArray(props.classes.label)
          ? props.classes.label
          : [props.classes?.label]),
      ]"
    >
      {{ props.label }}
    </label>
    <div class="group/nui-textarea relative flex flex-col">
      <textarea
        :id="id"
        ref="textareaRef"
        v-model="value"
        v-bind="$attrs"
        class="nui-focus border-muted-300 placeholder:text-muted-300 focus:border-muted-300 focus:shadow-muted-300/50 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 dark:focus:shadow-muted-800/50 peer w-full border bg-white font-sans transition-all duration-300 focus:shadow-lg disabled:cursor-not-allowed disabled:opacity-75"
        :class="[
          props.condensed
            ? 'min-h-[2rem] text-xs'
            : 'min-h-[2.5rem] text-sm leading-[1.6]',
          shape === 'rounded' && 'rounded',
          shape === 'curved' && 'rounded-xl',
          shape === 'full' && 'rounded-full',
          props.colorFocus &&
            'focus:!border-primary-500 transition-colors duration-300',
          props.loading &&
            'text-transparent placeholder:text-transparent dark:placeholder:text-transparent',
          props.labelFloat &&
            'placeholder:text-transparent dark:placeholder:text-transparent',
          props.error && !props.loading && '!border-danger-500',
          !props.resize && 'resize-none',
          props.addon ? 'px-2 pb-14 pt-2' : 'p-2',
          ...(props.classes?.textarea && Array.isArray(props.classes.textarea)
            ? props.classes.textarea
            : [props.classes?.textarea]),
        ]"
        :name="props.name"
        :placeholder="props.placeholder"
        :readonly="props.readonly"
        :disabled="props.disabled"
        :rows="props.rows"
      ></textarea>
      <label
        v-if="props.label && props.labelFloat"
        class="nui-label text-primary-500 peer-focus-visible:text-primary-500 dark:peer-focus-visible:text-primary-500 pointer-events-none absolute inline-flex h-5 select-none items-center leading-none transition-all duration-300"
        :for="id"
        :class="[
          ...(props.classes?.label && Array.isArray(props.classes.label)
            ? props.classes.label
            : [props.classes?.label]),
          props.loading
            ? 'peer-placeholder-shown:text-transparent'
            : 'peer-placeholder-shown:text-muted-300 dark:peer-placeholder-shown:text-muted-600',
          !props.condensed &&
            'start-3 -ms-3  -mt-8 text-xs peer-placeholder-shown:ms-0 peer-placeholder-shown:mt-0 peer-placeholder-shown:text-[0.825rem] peer-focus-visible:-ms-3 peer-focus-visible:-mt-8 peer-focus-visible:text-xs',
          props.condensed &&
            'start-3 -ms-3  -mt-7 text-xs peer-placeholder-shown:ms-0 peer-placeholder-shown:mt-0 peer-focus-visible:-ms-3 peer-focus-visible:-mt-7',
          props.condensed ? 'top-1.5' : 'top-2.5',
        ]"
      >
        <slot name="label">{{ props.label }}</slot>
      </label>
      <div
        v-if="props.loading"
        class="absolute start-0 top-4 flex h-full w-full flex-col space-y-2 px-3"
      >
        <BasePlaceload class="h-3 w-full max-w-[85%] rounded" />
        <BasePlaceload class="h-3 w-full max-w-[65%] rounded" />
        <BasePlaceload class="h-3 w-full max-w-[35%] rounded" />
      </div>
      <div
        v-if="props.addon"
        class="border-muted-300 bg-muted-50 dark:border-muted-700 dark:bg-muted-900/50 absolute bottom-0 start-0 flex w-full items-center justify-between border p-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-75"
        :class="[
          shape === 'rounded' && 'rounded-b',
          shape === 'curved' && 'rounded-b-xl',
          ...(props.classes?.addon && Array.isArray(props.classes.addon)
            ? props.classes.addon
            : [props.classes?.addon]),
        ]"
      >
        <slot name="addon"></slot>
      </div>
      <span
        v-if="props.error && typeof props.error === 'string'"
        class="text-danger-600 mt-1 block font-sans text-[0.65rem] font-medium leading-none"
        :class="props.classes?.error"
      >
        {{ props.error }}
      </span>
    </div>
  </div>
</template>
