<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The model value of the file input.
     */
    modelValue: FileList | null

    /**
     * The form input identifier.
     */
    id?: string

    /**
     * The shape of the file input.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

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
     * Whether the file input is condensed.
     */
    condensed?: boolean

    /**
     * An error message or boolean value indicating whether the file input is in an error state.
     */
    error?: string | boolean

    /**
     * Method to return the text value of the file input.
     */
    textValue?: (fileList: FileList | null) => string

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
    type: 'text',
    shape: undefined,
    placeholder: 'Choose file',
    label: undefined,
    icon: undefined,
    error: false,
    textValue: (fileList: FileList | null) => {
      if (!fileList?.item?.length) {
        return 'No file chosen'
      }

      return fileList?.item.length === 1
        ? fileList.item(0)?.name ?? 'Invalid file selected'
        : `${fileList?.item?.length ?? 0} files selected`
    },
    classes: () => ({}),
  }
)
const emits = defineEmits<{
  (event: 'update:modelValue', value?: FileList | null): void
}>()
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input)

// const value = ref(props.modelValue)
const inputRef = ref<HTMLInputElement>()
const value = useVModel(props, 'modelValue', emits)

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
  <div class="relative" :class="props.classes?.wrapper">
    <label
      v-if="'label' in $slots || props.label"
      class="nui-label w-full"
      :for="id"
      :class="[
        props.condensed && 'pb-1 text-xs',
        !props.condensed && 'pb-1 text-[0.825rem]',
        ...(props.classes?.label && Array.isArray(props.classes.label)
          ? props.classes.label
          : [props.classes?.label]),
      ]"
    >
      <slot name="label">{{ props.label }}</slot>
    </label>
    <div class="group/nui-input-file relative">
      <label
        tabindex="0"
        class="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 peer flex w-full cursor-pointer items-center overflow-hidden border bg-white font-sans transition-colors duration-300 focus-within:outline-1 disabled:cursor-not-allowed disabled:opacity-75"
        :for="id"
        :class="[
          props.condensed && 'h-8 py-2 text-xs leading-4',
          props.condensed && props.icon !== undefined && 'pe-3 ps-[6.5rem]',
          props.condensed && props.icon === undefined && 'gap-1',
          !props.condensed && 'h-10 text-[0.825rem] leading-5',
          !props.condensed && props.icon !== undefined && 'pe-4 ps-[7.25rem]',
          !props.condensed && props.icon === undefined && 'gap-2',
          shape === 'rounded' && 'rounded',
          shape === 'curved' && 'rounded-xl',
          shape === 'full' && 'rounded-full',
          props.colorFocus && 'focus:border-primary-500',
          props.loading && 'text-transparent placeholder:text-transparent',
          props.error && !props.loading && 'border-danger-500',
          ...(props.classes?.input && Array.isArray(props.classes.input)
            ? props.classes.input
            : [props.classes?.input]),
        ]"
      >
        <div
          class="group-hover/nui-input-file:text-primary-500 bg-muted-50 border-muted-300 dark:border-muted-700 dark:bg-muted-800 text-muted-400 group-focus-within/nui-input-file:text-primary-500 pointer-events-none flex shrink-0 items-center justify-center gap-1 border border-s-0 transition-colors duration-100 group-disabled/nui-input-file:cursor-not-allowed peer-disabled:opacity-75"
          :class="[
            props.condensed && 'h-8 px-2',
            !props.condensed && 'h-10 px-3',
            shape === 'rounded' && 'rounded-l',
            shape === 'curved' && 'rounded-s-xl',
            shape === 'full' && 'rounded-s-full',
            props.error && !props.loading && '!text-danger-500',
            props.error &&
              !props.loading &&
              ' border-danger-500 border-e-danger-200 bg-danger-50',
            ...(props.classes?.text && Array.isArray(props.classes.text)
              ? props.classes.text
              : [props.classes?.text]),
          ]"
        >
          <span class="text-xs">{{ props.placeholder }}</span>
          <slot name="icon">
            <Icon
              v-if="props.icon"
              :name="props.icon"
              :class="[
                props.condensed && 'h-[1rem] w-[1rem]',
                !props.condensed && 'h-[1.15rem] w-[1.15rem]',
                ...(props.classes?.icon && Array.isArray(props.classes.icon)
                  ? props.classes.icon
                  : [props.classes?.icon]),
              ]"
            />
          </slot>
        </div>

        <div
          class="inline-flex truncate"
          :class="
            value?.item?.length ? '' : 'text-muted-300 dark:text-muted-500'
          "
        >
          {{ textValue }}
        </div>
        <input
          :id="id"
          ref="inputRef"
          type="file"
          v-bind="$attrs"
          class="hidden"
          @change="(event) => value = (event.target as HTMLInputElement).files"
        />
      </label>

      <div
        v-if="props.loading"
        class="absolute start-0 flex h-10 w-full items-center"
        :class="[
          props.condensed && '-top-1 ps-24',
          !props.condensed && 'top-0 ps-28',
        ]"
      >
        <BasePlaceload class="h-3 w-full max-w-[75%] rounded" />
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
