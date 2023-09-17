<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'

const props = withDefaults(
  defineProps<{
    /**
     * The items to display in the multiselect.
     */
    items: any[]

    /**
     * The model value of the multiselect.
     *
     * @modifiers
     * `v-model="value"`
     *
     * @modifiers
     * the value property of an object (as defined in properties.value) rather than the object itself
     * `v-model.prop="value"`
     */
    modelValue?: any

    /**
     * Used internaly to allow v-model.number and v-model.trim
     */
    modelModifiers?: any

    /**
     * The shape of the multiselect.
     */
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'

    /**
     * The label to display for the multiselect.
     */
    label?: string

    /**
     * If the label should be floating.
     */
    labelFloat?: boolean

    /**
     * Whether the multiselect is in a loading state.
     */
    loading?: boolean

    /**
     * An error message or boolean value indicating whether the input is in an error state.
     */
    error?: string | boolean

    /**
     * Whether the multiselect is disabled.
     */
    disabled?: boolean

    /**
     * The icon to display for the multiselect.
     */
    icon?: string

    /**
     * The icon to show when the component is selected.
     */
    selectedIcon?: string

    /**
     * Whether the multiselect allows multiple selections.
     */
    multiple?: boolean

    /**
     * The label to display for multiple selections, or a function that returns the label.
     */
    multipleLabel?: string | ((value: any[], labelProperty?: string) => string)

    /**
     * The placeholder text to display when no selection has been made.
     */
    placeholder?: string

    /**
     * The size of the listbox.
     */
    size?: 'sm' | 'md' | 'lg'

    /**
     * The contrast of the listbox.
     */
    contrast?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'

    /**
     * The properties to use for the value, label, sublabel, media, and icon of the options items.
     */
    properties?: {
      /**
       * The property to use for the value of the options.
       */
      value?: string

      /**
       * The property to use for the label of the options.
       */
      label?: string

      /**
       * The property to use for the sublabel of the options.
       */
      sublabel?: string

      /**
       * The property to use for the media of the options.
       */
      media?: string

      /**
       * The property to use for the icon of the options.
       */
      icon?: string
    }
  }>(),
  {
    icon: '',
    modelValue: undefined,
    modelModifiers: () => ({}),
    selectedIcon: 'lucide:check',
    label: '',
    placeholder: '',
    size: 'md',
    contrast: 'default',
    shape: undefined,
    error: false,
    multipleLabel: () => {
      return (value: any[], labelProperty?: string): string => {
        if (value.length === 0) {
          return 'No elements selected'
        } else if (value.length > 1) {
          return `${value.length} elements selected`
        }
        return labelProperty
          ? String(value?.[0]?.[labelProperty])
          : String(value?.[0])
      }
    },
    multiple: false,
    loading: false,
    disabled: false,
    properties: () => ({}),
  },
)
const emits = defineEmits<{
  (event: 'update:modelValue', value?: any): void
}>()
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input)

const shapeStyle = {
  straight: '',
  rounded: 'nui-listbox-rounded',
  smooth: 'nui-listbox-smooth',
  curved: 'nui-listbox-curved',
  full: 'nui-listbox-full',
}
const sizeStyle = {
  sm: 'nui-listbox-sm',
  md: 'nui-listbox-md',
  lg: 'nui-listbox-lg',
}
const contrastStyle = {
  default: 'nui-listbox-default',
  'default-contrast': 'nui-listbox-default-contrast',
  muted: 'nui-listbox-muted',
  'muted-contrast': 'nui-listbox-muted-contrast',
}

const vmodel = useVModel(props, 'modelValue', emits, {
  passive: true,
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

const value = computed(() => {
  if (props.modelModifiers.prop && props.properties.value) {
    const attr = props.properties.value
    return props.items.find((i) => i[attr] === vmodel.value)
  }
  return vmodel.value
})
</script>

<template>
  <div
    class="nui-listbox"
    :class="[
      contrastStyle[props.contrast],
      sizeStyle[props.size],
      shape && shapeStyle[shape],
      props.error && !props.loading && 'nui-listbox-error',
      props.loading && 'nui-listbox-loading',
      props.labelFloat && 'nui-listbox-label-float',
      props.icon && 'nui-has-icon',
    ]"
  >
    <Listbox
      v-slot="{ open }: { open: boolean }"
      v-model="vmodel"
      :by="props.modelModifiers.prop ? undefined : props.properties.value"
      :multiple="props.multiple"
      :disabled="props.disabled"
    >
      <ListboxLabel
        v-if="
          ('label' in $slots && !props.labelFloat) ||
          (props.label && !props.labelFloat)
        "
        class="nui-listbox-label"
      >
        <slot name="label">{{ props.label }}</slot>
      </ListboxLabel>

      <div class="nui-listbox-outer">
        <ListboxButton :disabled="props.disabled" class="nui-listbox-button">
          <slot name="listbox-button" :value="value" :open="open">
            <div class="nui-listbox-button-inner">
              <BaseIconBox
                v-if="props.icon"
                size="xs"
                shape="rounded"
                class="nui-icon-box"
              >
                <Icon :name="props.icon" class="nui-icon-box-inner" />
              </BaseIconBox>

              <template v-if="Array.isArray(value)">
                <div
                  v-if="value.length === 0 && placeholder"
                  class="nui-listbox-placeholder"
                  :class="props.loading && 'text-transparent select-none'"
                >
                  {{ placeholder }}azeaze
                </div>
                <div
                  class="block truncate text-left"
                  :class="[
                    props.loading && 'select-none text-transparent',
                    value.length === 0 && 'text-muted-300 dark:text-muted-500',
                  ]"
                >
                  {{
                    typeof props.multipleLabel === 'function'
                      ? props.multipleLabel(value, props.properties.label)
                      : props.multipleLabel
                  }}
                </div>
              </template>

              <template v-else-if="value">
                <BaseAvatar
                  v-if="props.properties.media && value[props.properties.media]"
                  :src="value[props.properties.media]"
                  size="xs"
                  class="-ms-2 me-2"
                />
                <BaseIconBox
                  v-else-if="
                    props.properties.icon && value[props.properties.icon]
                  "
                  size="xs"
                  shape="rounded"
                  class="-ms-2 me-2"
                >
                  <Icon :name="value[props.properties.icon]" class="h-4 w-4" />
                </BaseIconBox>
                <div
                  class="truncate text-left"
                  :class="props.loading && 'text-transparent select-none'"
                >
                  {{
                    props.properties.label
                      ? value[props.properties.label]
                      : props.properties.value
                      ? value[props.properties.value]
                      : value
                  }}
                </div>
              </template>

              <template v-else>
                <div
                  class="nui-listbox-placeholder"
                  :class="props.loading && 'text-transparent select-none'"
                >
                  {{ placeholder }}
                </div>
              </template>

              <span class="nui-listbox-chevron">
                <Icon
                  name="lucide:chevron-down"
                  class="nui-listbox-chevron-inner"
                  :class="[open && 'rotate-180']"
                />
              </span>

              <div v-if="props.loading" class="nui-listbox-placeload">
                <BasePlaceload class="nui-placeload" />
              </div>
            </div>
          </slot>
        </ListboxButton>

        <Transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions class="nui-listbox-options">
            <ListboxOption
              v-for="item in props.items"
              v-slot="{ active, selected }"
              :key="
                props.properties.value ? item[props.properties.value] : item
              "
              :value="
                props.modelModifiers.prop && props.properties.value
                  ? item[props.properties.value]
                  : item
              "
              as="template"
            >
              <li
                class="nui-listbox-option group/nui-listbox-option"
                :class="[active && 'nui-active']"
              >
                <slot
                  name="listbox-item"
                  :item="item"
                  :open="open"
                  :active="active"
                  :selected="selected"
                >
                  <BaseAvatar
                    v-if="
                      props.properties.media && item[props.properties.media]
                    "
                    :src="item[props.properties.media]"
                    size="xs"
                  />
                  <BaseIconBox
                    v-else-if="
                      props.properties.icon && item[props.properties.icon]
                    "
                    size="sm"
                    shape="rounded"
                  >
                    <Icon
                      :name="item[props.properties.icon]"
                      class="text-muted-400 group-hover/nui-listbox-option:text-primary-500 h-5 w-5 transition-colors duration-200"
                    />
                  </BaseIconBox>

                  <div class="nui-listbox-option-inner">
                    <BaseHeading
                      as="h4"
                      :weight="selected ? 'semibold' : 'normal'"
                      size="sm"
                      class="nui-listbox-heading"
                    >
                      {{
                        props.properties.label
                          ? item[props.properties.label]
                          : props.properties.value
                          ? item[props.properties.value]
                          : item
                      }}
                    </BaseHeading>
                    <BaseText
                      v-if="
                        props.properties.sublabel &&
                        item[props.properties.sublabel]
                      "
                      size="xs"
                      class="nui-listbox-text"
                    >
                      {{ item[props.properties.sublabel] }}
                    </BaseText>
                  </div>
                  <span v-if="selected" class="nui-listbox-selected-icon">
                    <Icon
                      :name="selectedIcon"
                      class="nui-listbobx-selected-icon-inner"
                    />
                  </span>
                </slot>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </Transition>

        <ListboxLabel
          v-if="
            ('label' in $slots && props.labelFloat) ||
            (props.label && props.labelFloat)
          "
          class="nui-label-float"
        >
          <slot name="label">{{ props.label }}</slot>
        </ListboxLabel>

        <span
          v-if="props.error && typeof props.error === 'string'"
          class="text-danger-600 mt-1 block font-sans text-[0.65rem] font-medium leading-none"
        >
          {{ props.error }}
        </span>
      </div>
    </Listbox>
  </div>
</template>
