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
     */
    modelValue: any

    /**
     * The shape of the multiselect.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

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
     * Whether the input is condensed.
     */
    condensed?: boolean

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
    selectedIcon: 'lucide:check',
    label: '',
    placeholder: '',
    shape: undefined,
    error: false,
    multipleLabel: (value: any[], labelProperty?: string): string => {
      if (value.length === 0) {
        return 'No elements selected'
      } else if (value.length > 1) {
        return `${value.length} elements selected`
      }
      return labelProperty ? String(value[0][labelProperty]) : String(value[0])
    },
    multiple: false,
    loading: false,
    disabled: false,
    properties: () => ({}),
  }
)
const emits = defineEmits<{
  (event: 'update:modelValue', value?: any): void
}>()
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input)

const value = useVModel(props, 'modelValue', emits)

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
  <div class="relative w-full">
    <Listbox
      v-slot="{ open }: { open: boolean }"
      v-model="value"
      :by="props.properties.value"
      :multiple="props.multiple"
      :disabled="props.disabled"
    >
      <ListboxLabel
        v-if="
          ('label' in $slots && !props.labelFloat) ||
          (props.label && !props.labelFloat)
        "
        class="nui-label"
        :class="[
          props.condensed && 'pb-1 text-xs',
          !props.condensed && 'pb-1 text-[0.825rem]',
        ]"
      >
        <slot name="label">{{ props.label }}</slot>
      </ListboxLabel>
      <div class="relative">
        <ListboxButton
          :disabled="props.disabled"
          class="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 focus:border-muted-300 focus:shadow-muted-300/50 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 dark:focus:shadow-muted-800/50 peer/input relative w-full border bg-white pe-12 ps-4 font-sans text-sm leading-5 focus:shadow-lg disabled:cursor-not-allowed disabled:opacity-75"
          :class="[
            shape === 'rounded' && 'rounded',
            shape === 'curved' && 'rounded-xl',
            shape === 'full' && 'rounded-full',
            props.loading && 'pointer-events-none',
            props.error &&
              !props.loading &&
              '!border-danger-500 dark:!border-danger-500',
          ]"
        >
          <slot name="listbox-button" :value="value" :open="open">
            <div
              class="flex w-full items-center"
              :class="props.condensed ? 'h-8' : 'h-10'"
            >
              <BaseIconBox
                v-if="props.icon"
                size="xs"
                shape="rounded"
                class="-ms-2 me-2 !h-6 !w-6"
                :class="[props.error && !props.loading && '!text-danger-500']"
              >
                <Icon :name="props.icon" class="h-4 w-4" />
              </BaseIconBox>
              <template v-if="Array.isArray(value)">
                <div
                  v-if="value.length === 0 && placeholder"
                  class="text-muted-300 dark:text-muted-500 block truncate text-left"
                  :class="props.loading && 'text-transparent select-none'"
                >
                  {{ placeholder }}
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
                  :class="props.condensed ? '!h-5 !w-5' : '!h-6 !w-6'"
                />
                <BaseIconBox
                  v-else-if="
                    props.properties.icon && value[props.properties.icon]
                  "
                  size="xs"
                  shape="rounded"
                  class="-ms-2 me-2"
                  :class="props.condensed ? '!h-5 !w-5' : '!h-6 !w-6'"
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
                  class="text-muted-300 dark:text-muted-500 truncate text-left"
                  :class="[
                    props.loading && 'select-none text-transparent',
                    props.condensed && 'text-xs',
                  ]"
                >
                  {{ placeholder }}
                </div>
              </template>
              <span
                class="border-muted-300 dark:border-muted-700 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center border-l"
                :class="[props.condensed && 'w-8', !props.condensed && 'w-10']"
              >
                <Icon
                  name="lucide:chevron-down"
                  class="text-muted-400 transition-transform duration-300"
                  :class="[
                    open && 'rotate-180',
                    props.condensed ? 'h-3 w-3' : 'h-4 w-4',
                  ]"
                />
              </span>
              <div
                v-if="props.loading"
                class="absolute start-0 top-0 flex w-full items-center px-4"
                :class="[props.condensed && 'h-8', !props.condensed && 'h-10']"
              >
                <BasePlaceload class="h-3 w-full max-w-[75%] rounded" />
              </div>
            </div>
          </slot>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="nui-slimscroll peer/list border-muted-200 focus:ring-primary-500/50 dark:border-muted-600 dark:bg-muted-700 absolute z-10 mt-1 max-h-60 w-full overflow-auto border bg-white p-2 text-base shadow-lg focus:outline-none focus:ring-1 sm:text-sm"
            :class="[
              shape === 'rounded' && 'rounded-md',
              shape === 'curved' && 'rounded-xl',
              shape === 'full' && 'rounded-2xl',
            ]"
          >
            <ListboxOption
              v-for="item in props.items"
              v-slot="{ active, selected }"
              :key="
                props.properties.value ? item[props.properties.value] : item
              "
              :value="item"
              as="template"
            >
              <li
                class="relative flex cursor-pointer select-none items-center px-3 py-2"
                :class="[
                  active
                    ? 'bg-primary-100 text-primary-900 dark:bg-muted-800'
                    : '',
                  shape === 'rounded' && 'rounded',
                  shape === 'curved' && 'rounded-md',
                  shape === 'full' && 'rounded-lg',
                ]"
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
                    class="me-3"
                  />
                  <BaseIconBox
                    v-else-if="
                      props.properties.icon && item[props.properties.icon]
                    "
                    size="sm"
                    shape="rounded"
                    class="text-muted-500 dark:text-muted-400 -ms-2 me-1"
                  >
                    <Icon
                      :name="item[props.properties.icon]"
                      class="h-5 w-5"
                      :class="[active && 'text-primary-500']"
                    />
                  </BaseIconBox>
                  <div>
                    <BaseHeading
                      as="h4"
                      :weight="selected ? 'semibold' : 'normal'"
                      size="sm"
                      class="text-muted-800 block truncate dark:text-white"
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
                      class="text-muted-400"
                    >
                      {{ item[props.properties.sublabel] }}
                    </BaseText>
                  </div>
                  <span
                    v-if="selected"
                    class="text-primary-600 ms-auto flex items-center"
                  >
                    <Icon :name="selectedIcon" class="h-4 w-4" />
                  </span>
                </slot>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>

        <ListboxLabel
          v-if="
            ('label' in $slots && props.labelFloat) ||
            (props.label && props.labelFloat)
          "
          class="peer-focus-visible/input:text-primary-500 peer-focus/list:text-primary-500 pointer-events-none absolute inline-flex h-5 select-none items-center leading-none text-transparent transition-all duration-300"
          :class="[
            props.icon !== undefined &&
              !props.condensed &&
              'start-10 peer-focus/list:-ms-10 peer-focus/list:-mt-8 peer-focus-visible/input:-ms-10 peer-focus-visible/input:-mt-8',
            props.icon !== undefined &&
              props.condensed &&
              'start-8 peer-focus/list:-ms-8 peer-focus/list:-mt-7 peer-focus-visible/input:-ms-8 peer-focus-visible/input:-mt-7',
            props.icon === undefined &&
              !props.condensed &&
              'start-3 peer-focus/list:-ms-3 peer-focus/list:-mt-8 peer-focus-visible/input:-ms-3 peer-focus-visible/input:-mt-8',
            props.icon === undefined &&
              props.condensed &&
              'start-3 peer-focus/list:-ms-3 peer-focus/list:-mt-7 peer-focus-visible/input:-ms-3 peer-focus-visible/input:-mt-7',
            props.condensed
              ? 'top-1.5 text-xs'
              : 'top-2.5 text-[0.825rem] peer-focus/list:text-xs peer-focus-visible/input:text-xs',
          ]"
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
