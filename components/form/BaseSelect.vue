<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    /**
     * The value of the selected option.
     */
    modelValue?: any

    /**
     * The form input identifier.
     */
    id?: string

    /**
     * The shape of the select input.
     * Can be one of 'straight', 'rounded', 'curved', or 'full'.
     */
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'

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
     * The size of the select input.
     */
    size?: 'sm' | 'md' | 'lg'

    /**
     * The contrast of the select input.
     */
    contrast?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'

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
    modelValue: undefined,
    label: '',
    size: 'md',
    contrast: 'default',
    shape: undefined,
    icon: undefined,
    placeholder: '',
    error: false,
    classes: () => ({}),
  },
)
const emits = defineEmits<{
  (event: 'update:modelValue', value?: any): void
}>()
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input)

const shapeStyle = {
  straight: '',
  rounded: 'nui-select-rounded',
  smooth: 'nui-select-smooth',
  curved: 'nui-select-curved',
  full: 'nui-select-full',
}
const sizeStyle = {
  sm: 'nui-select-sm',
  md: 'nui-select-md',
  lg: 'nui-select-lg',
}
const contrastStyle = {
  default: 'nui-select-default',
  'default-contrast': 'nui-select-default-contrast',
  muted: 'nui-select-muted',
  'muted-contrast': 'nui-select-muted-contrast',
}

const selectRef = ref<HTMLSelectElement>()
const value = useVModel(props, 'modelValue', emits, {
  passive: true,
})

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
  <div
    class="nui-select-wrapper"
    :class="[
      contrastStyle[props.contrast],
      sizeStyle[props.size],
      shape && shapeStyle[shape],
      props.error && !props.loading && 'nui-select-error',
      props.loading && 'nui-select-loading',
      props.labelFloat && 'nui-select-label-float',
      props.icon && 'nui-has-icon',
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
      :class="props.classes.label"
    >
      <slot name="label">{{ props.label }}</slot>
    </label>
    <div class="nui-select-outer">
      <select
        :id="id"
        ref="selectRef"
        v-model="value"
        v-bind="$attrs"
        :disabled="props.disabled"
        :readonly="props.readonly"
        class="nui-select"
        :class="props.classes.select"
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
        :class="props.classes.label"
      >
        <slot name="label">{{ props.label }}</slot>
      </label>
      <div v-if="props.loading" class="nui-select-placeload">
        <BasePlaceload class="nui-placeload" />
      </div>
      <div
        v-if="props.icon"
        class="nui-select-icon"
        :class="props.classes.icon"
      >
        <slot name="icon">
          <Icon class="nui-select-icon-inner" :name="props.icon" />
        </slot>
      </div>
      <div class="nui-select-chevron" :class="props.classes?.chevron">
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
