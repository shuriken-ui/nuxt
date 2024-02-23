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
     * The radius of the select input.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The size of the select input.
     *
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg'

    /**
     * The contrast of the select input.
     *
     * @default 'default'
     */
    contrast?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'

    /**
     * The label text for the select input.
     */
    label?: string

    /**
     * If the label should be floating.
     */
    labelFloat?: boolean

    /**
     * An icon to display in the select input.
     */
    icon?: string

    /**
     * The placeholder to display for the select input.
     */
    placeholder?: string

    /**
     * Whether the select input is in a loading state.
     */
    loading?: boolean

    /**
     * Whether the select input is disabled.
     */
    disabled?: boolean

    /**
     * Whether the color of the input should change when it is focused.
     */
    colorFocus?: boolean

    /**
     * An error message to display, or a boolean indicating whether there is an error.
     */
    error?: string | boolean

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
    rounded: undefined,
    size: undefined,
    contrast: undefined,
    label: '',
    icon: undefined,
    placeholder: '',
    error: false,
    classes: () => ({}),
  },
)

const [modelValue] = defineModel<any>()

const rounded = useNuiDefaultProperty(props, 'BaseSelect', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseSelect', 'size')
const contrast = useNuiDefaultProperty(props, 'BaseSelect', 'contrast')

const selectRef = ref<HTMLSelectElement>()
const id = useNinjaId(() => props.id)

const radiuses = {
  none: '',
  sm: 'nui-select-rounded-sm',
  md: 'nui-select-rounded-md',
  lg: 'nui-select-rounded-lg',
  full: 'nui-select-rounded-full',
} as Record<string, string>

const sizes = {
  sm: 'nui-select-sm',
  md: 'nui-select-md',
  lg: 'nui-select-lg',
} as Record<string, string>

const contrasts = {
  default: 'nui-select-default',
  'default-contrast': 'nui-select-default-contrast',
  muted: 'nui-select-muted',
  'muted-contrast': 'nui-select-muted-contrast',
} as Record<string, string>

defineExpose({
  /**
   * The underlying HTMLInputElement element.
   */
  el: selectRef,

  /**
   * The internal id of the radio input.
   */
  id,
})

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
  <div
    class="nui-select-wrapper"
    :class="[
      contrast && contrasts[contrast],
      size && sizes[size],
      rounded && radiuses[rounded],
      props.error && !props.loading && 'nui-select-error',
      props.loading && 'nui-select-loading',
      props.labelFloat && 'nui-select-label-float',
      props.icon && 'nui-has-icon',
      props.colorFocus && 'nui-select-focus',
      props.classes?.wrapper,
    ]"
  >
    <label
      v-if="
        ('label' in $slots && !props.labelFloat) ||
        (props.label && !props.labelFloat)
      "
      class="nui-select-label"
      :for="id"
      :class="props.classes?.label"
    >
      <slot name="label">{{ props.label }}</slot>
    </label>
    <div class="nui-select-outer">
      <select
        :id="id"
        ref="selectRef"
        v-model="modelValue"
        v-bind="$attrs"
        :disabled="props.disabled"
        class="nui-select"
        :class="props.classes?.select"
      >
        <option v-if="placeholder" value="" disabled hidden>
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
        class="nui-label-float"
        :class="props.classes?.label"
      >
        <slot name="label">{{ props.label }}</slot>
      </label>
      <div v-if="props.loading" class="nui-select-placeload">
        <BasePlaceload class="nui-placeload" />
      </div>
      <div
        v-if="props.icon"
        class="nui-select-icon"
        :class="props.classes?.icon"
      >
        <slot name="icon">
          <Icon class="nui-select-icon-inner" :name="props.icon" />
        </slot>
      </div>
      <div
        class="nui-select-chevron nui-chevron"
        :class="props.classes?.chevron"
      >
        <IconChevronDown class="nui-select-chevron-inner" />
      </div>
      <span
        v-if="props.error && typeof props.error === 'string'"
        class="nui-select-error-text"
        :class="props.classes?.error"
      >
        {{ props.error }}
      </span>
    </div>
  </div>
</template>
