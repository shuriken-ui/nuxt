<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    /**
     * The model value of the file input.
     */
    modelValue?: FileList | null

    /**
     * The form input identifier.
     */
    id?: string

    /**
     * The shape of the file input.
     */
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'

    /**
     * The label to display for the file input.
     */
    label?: string

    /**
     * The placeholder to display for the file input.
     */
    placeholder?: string

    /**
     * The icon to display for the file input.
     */
    icon?: string

    /**
     * Whether the color of the file input should change when it is focused.
     */
    colorFocus?: boolean

    /**
     * Whether the file input is in a loading state.
     */
    loading?: boolean

    /**
     * The size of the input.
     */
    size?: 'sm' | 'md' | 'lg'

    /**
     * The contrast of the input.
     */
    contrast?: 'white' | 'white-contrast'

    /**
     * An error message or boolean value indicating whether the file input is in an error state.
     */
    error?: string | boolean

    /**
     * Method to return the text value of the file input.
     */
    textValue?: (fileList?: FileList | null) => string

    /**
     * Optional CSS classes to apply to the wrapper, label, input, text, error, and icon elements.
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

      /**
       * CSS classes to apply to the text element.
       */
      text?: string | string[]

      /**
       * CSS classes to apply to the error element.
       */
      error?: string | string[]

      /**
       * CSS classes to apply to the icon element.
       */
      icon?: string | string[]
    }
  }>(),
  {
    id: undefined,
    modelValue: undefined,
    type: 'text',
    size: 'md',
    contrast: 'white',
    shape: undefined,
    placeholder: 'Choose file',
    label: undefined,
    icon: undefined,
    error: false,
    textValue: (fileList?: FileList | null) => {
      if (!fileList?.item?.length) {
        return 'No file chosen'
      }

      return fileList?.item.length === 1
        ? fileList.item(0)?.name ?? 'Invalid file selected'
        : `${fileList?.item?.length ?? 0} files selected`
    },
    classes: () => ({}),
  },
)
const emits = defineEmits<{
  (event: 'update:modelValue', value?: FileList | null): void
}>()
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input)

const shapeStyle = {
  straight: '',
  rounded: 'nui-input-rounded',
  smooth: 'nui-input-smooth',
  curved: 'nui-input-curved',
  full: 'nui-input-full',
}
const sizeStyle = {
  sm: 'nui-input-sm',
  md: 'nui-input-md',
  lg: 'nui-input-lg',
}
const contrastStyle = {
  white: 'nui-input-white',
  'white-contrast': 'nui-input-white-contrast',
}

// const value = ref(props.modelValue)
const inputRef = ref<HTMLInputElement>()
const value = useVModel(props, 'modelValue', emits, {
  passive: true,
})

const textValue = computed(() => {
  return props.textValue?.(value.value)
})

defineExpose({
  /**
   * The underlying HTMLInputElement element.
   */
  el: inputRef,
})

const id = useNinjaId(() => props.id)
</script>

<template>
  <div
    class="nui-input-file-regular"
    :class="[
      contrastStyle[props.contrast],
      sizeStyle[props.size],
      shape && shapeStyle[shape],
      props.error && !props.loading && 'nui-input-file-error',
      props.loading && 'nui-input-file-loading',
      props.icon && 'nui-has-icon',
      props.classes.wrapper,
    ]"
  >
    <label
      v-if="'label' in $slots || props.label"
      class="nui-input-file-label"
      :for="id"
      :class="props.classes.label"
    >
      <slot name="label">{{ props.label }}</slot>
    </label>
    <div class="nui-input-file-outer">
      <label
        tabindex="0"
        class="nui-input-file-inner"
        :for="id"
        :class="[props.colorFocus && 'nui-color-focus', props.classes.input]"
      >
        <div class="nui-input-file-addon" :class="props.classes.text">
          <span class="text-xs">{{ props.placeholder }}</span>
          <slot name="icon">
            <Icon
              v-if="props.icon"
              :name="props.icon"
              :class="props.classes.icon"
            />
          </slot>
        </div>

        <div class="nui-input-file-text">
          {{ textValue }}
        </div>
        <input
          :id="id"
          ref="inputRef"
          type="file"
          v-bind="$attrs"
          class="hidden"
          @change="
            (event) => (value = (event.target as HTMLInputElement).files)
          "
        />
      </label>

      <div v-if="props.loading" class="nui-input-file-placeload">
        <BasePlaceload class="nui-placeload" />
      </div>
      <span
        v-if="props.error && typeof props.error === 'string'"
        class="nui-input-file-error-text"
        :class="props.classes?.error"
      >
        {{ props.error }}
      </span>
    </div>
  </div>
</template>
