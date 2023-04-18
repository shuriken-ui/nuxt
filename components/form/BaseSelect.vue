<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The value of the selected option.
     */
    modelValue: any

    /**
     * The form input identifier.
     */
    id?: string

    /**
     * The shape of the select input.
     * Can be one of 'straight', 'rounded', 'curved', or 'full'.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

    /**
     * The label text for the select input.
     */
    label?: string

    /**
     * Empty option text added to the beginning of the select input.
     */
    placeholder?: string

    /**
     * If the label should be floating.
     */
    labelFloat?: boolean

    /**
     * An icon to display in the select input.
     */
    icon?: string

    /**
     * Whether the select input is in a loading state.
     */
    loading?: boolean

    /**
     * Whether the select input is disabled.
     */
    disabled?: boolean

    /**
     * Whether the select input is read-only.
     */
    readonly?: boolean

    /**
     * An error message to display, or a boolean indicating whether there is an error.
     */
    error?: string | boolean

    /**
     * Whether the select is condensed.
     */
    condensed?: boolean

    /**
     * Classes to apply to the select input.
     */
    classes?: {
      /**
       * A class or classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * A class or classes to apply to the label element.
       */
      label?: string | string[]

      /**
       * A class or classes to apply to the select element.
       */
      select?: string | string[]

      /**
       * A class or classes to apply to the chevron element.
       */
      chevron?: string | string[]

      /**
       * A class or classes to apply to the icon element.
       */
      icon?: string | string[]

      /**
       * A class or classes to apply to the error element.
       */
      error?: string | string[]
    }
  }>(),
  {
    id: undefined,
    label: '',
    shape: undefined,
    icon: undefined,
    placeholder: '',
    error: false,
    classes: () => ({}),
  }
)
const emits = defineEmits<{
  (event: 'update:modelValue', value?: any): void
}>()
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input)

const selectRef = ref<HTMLSelectElement>()
const value = useVModel(props, 'modelValue', emits)

defineExpose({
  /**
   * The underlying HTMLInputElement element.
   */
  el: selectRef,
})

const id = useNinjaId(() => props.id)
const placeholder = computed(() => {
  if (props.loading) {
    return
  }
  if (props.labelFloat) {
    return props.label
  }

  return props.placeholder
})
</script>

<template>
  <div class="relative" :class="props.classes?.wrapper">
    <label
      v-if="
        ('label' in $slots && !props.labelFloat) ||
        (props.label && !props.labelFloat)
      "
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
    <div class="group/nui-select relative">
      <select
        :id="id"
        ref="selectRef"
        v-model="value"
        v-bind="$attrs"
        :disabled="props.disabled"
        :readonly="props.readonly"
        class="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 focus:border-muted-300 focus:shadow-muted-300/50 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-600 dark:focus:border-muted-700 dark:focus:shadow-muted-800/50 peer w-full cursor-pointer appearance-none border bg-white font-sans focus:shadow-lg"
        :class="[
          props.condensed && 'h-8 py-1 text-xs leading-4',
          props.condensed && props.icon !== undefined
            ? 'pe-3 ps-7'
            : 'px-2 pe-9',
          !props.condensed && 'h-10 py-2 text-sm leading-5',
          !props.condensed && props.icon !== undefined
            ? 'pe-4 ps-9'
            : 'px-3 pe-6',
          shape === 'rounded' && 'rounded',
          shape === 'curved' && 'rounded-xl',
          shape === 'full' && 'rounded-full',
          props.icon !== undefined ? 'pe-4 ps-9' : 'px-3',
          props.loading &&
            '!text-transparent placeholder:!text-transparent dark:!text-transparent dark:placeholder:!text-transparent',
          props.error && !props.loading && '!border-danger-500',
          ...(props.classes?.select && Array.isArray(props.classes.select)
            ? props.classes.select
            : [props.classes?.select]),
        ]"
      >
        <option
          v-if="placeholder"
          value=""
          disabled
          hidden
          class="text-muted-300 dark:text-muted-700"
        >
          {{ placeholder }}
        </option>
        <slot></slot>
      </select>
      <label
        v-if="
          ('label' in $slots && props.labelFloat) ||
          (props.label && props.labelFloat)
        "
        :for="id"
        class="nui-label peer-focus-visible:text-primary-500 pointer-events-none absolute inline-flex h-5 select-none items-center leading-none text-transparent transition-all duration-300 dark:text-transparent"
        :class="[
          ...(props.classes?.label && Array.isArray(props.classes.label)
            ? props.classes.label
            : [props.classes?.label]),
          props.icon !== undefined &&
            !props.condensed &&
            'start-10 peer-focus-visible:-ms-10 peer-focus-visible:-mt-8',
          props.icon !== undefined &&
            props.condensed &&
            'start-8 peer-focus-visible:-ms-8 peer-focus-visible:-mt-7',
          props.icon === undefined &&
            !props.condensed &&
            'start-3 peer-focus-visible:-ms-3 peer-focus-visible:-mt-8',
          props.icon === undefined &&
            props.condensed &&
            'start-3 peer-focus-visible:-ms-3 peer-focus-visible:-mt-7',
          props.condensed
            ? 'top-1.5 text-xs'
            : 'top-2.5 text-[0.825rem] peer-focus-visible:text-xs',
        ]"
      >
        <slot name="label">{{ props.label }}</slot>
      </label>
      <div
        v-if="props.loading"
        class="absolute start-0 top-0 flex w-full items-center px-4"
        :class="[props.condensed && 'h-8', !props.condensed && 'h-10']"
      >
        <BasePlaceload class="h-3 w-full max-w-[75%] rounded" />
      </div>
      <div
        v-if="props.icon"
        class="text-muted-400 group-focus-within/nui-select:text-primary-500 absolute start-0 top-0 flex items-center justify-center transition-colors duration-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-75"
        :class="[
          props.loading && 'opacity-0',
          props.condensed ? 'h-8 w-8' : 'h-10 w-10',
          props.error && !props.loading && '!text-danger-500',
          ...(props.classes?.icon && Array.isArray(props.classes.icon)
            ? props.classes.icon
            : [props.classes?.icon]),
        ]"
      >
        <slot name="icon">
          <Icon
            :name="props.icon"
            :class="[
              props.condensed && 'h-[1rem] w-[1rem]',
              !props.condensed && 'h-[1.15rem] w-[1.15rem]',
            ]"
          />
        </slot>
      </div>
      <div
        class="text-muted-400 pointer-events-none absolute end-0 top-0 flex items-center justify-center transition-transform duration-300 group-focus-within/nui-select:-rotate-180"
        :class="[
          props.classes?.chevron,
          props.condensed ? 'h-8 w-8' : 'h-10 w-10',
        ]"
      >
        <IconChevronDown class="h-4 w-4" />
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
