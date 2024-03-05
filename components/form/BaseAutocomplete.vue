<script setup lang="ts" generic="T extends unknown = string">
import { Float, FloatContent, FloatReference } from '@headlessui-float/vue'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue'

const props = withDefaults(
  defineProps<{
    /**
     * The items to display in the component.
     */
    items?: T[]

    /**
     * The radius of the component.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The size of the autocomplete component.
     *
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg'

    /**
     * The contrast of autocomplete component.
     *
     * @default 'default'
     */
    contrast?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'

    /**
     * The label to display for the component.
     */
    label?: string

    /**
     * If the label should be floating.
     */
    labelFloat?: boolean

    /**
     * An icon to display for the component.
     */
    icon?: string

    /**
     * Translation strings.
     */
    i18n?: {
      pending: string
      empty: string
    }

    /**
     * Placeholder text to display when the component is empty.
     */
    placeholder?: string

    /**
     * Error text to display when the component is in an error state.
     */
    error?: string | boolean

    /**
     * Value used when clearing the component value.
     */
    clearValue?: any

    /**
     * The icon to show in the clear button
     */
    clearIcon?: string

    /**
     * The icon to show in the chip buttons
     */
    chipClearIcon?: string

    /**
     * The icon to show in the dropdown button
     */
    dropdownIcon?: string

    /**
     * A function used to render the items as strings in either the input or the tag when multiple is true.
     */
    displayValue?: (item: T) => string

    /**
     * The debounce time for the filterItems method.
     */
    filterDebounce?: number

    /**
     * A function to filter the items when query is changed.
     *
     * You can use this method to implement your own filtering logic or to fetch items from an API.
     */
    filterItems?: (query?: string, items?: T[]) => Promise<T[]> | T[]

    /**
     * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
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
       * CSS classes to apply to the icon element.
       */
      icon?: string | string[]

      /**
       * CSS classes to apply to the error element.
       */
      error?: string | string[]
    }

    /**
     * Allow custom entries by the user
     */
    allowCreate?: boolean

    /**
     * Hide the create custom prompt (just set the model to the value entered)
     */
    hideCreatePrompt?: boolean

    /**
     * Whether the component is in a loading state.
     */
    loading?: boolean

    /**
     * Whether the component is disabled.
     */
    disabled?: boolean

    /**
     * Whether the component can be cleared by the user.
     */
    clearable?: boolean

    /**
     * Wether the border should change color when focused
     */
    colorFocus?: boolean

    /**
     * Display a chevron icon to open suggestions
     */
    dropdown?: boolean

    /**
     * Whether the component allows multiple selections.
     */
    multiple?: boolean

    /**
     * Used a fixed strategy to float the component
     */
    fixed?: boolean

    /**
     * The placement of the component via floating-ui.
     */
    placement?:
      | 'top'
      | 'top-start'
      | 'top-end'
      | 'right'
      | 'right-start'
      | 'right-end'
      | 'bottom'
      | 'bottom-start'
      | 'bottom-end'
      | 'left'
      | 'left-start'
      | 'left-end'

    /**
     * The properties to use for the value, label, sublabel, media, and icon of the options items.
     */
    properties?: {
      /**
       * The property to use for the key of the options.
       */
      value?: T extends object ? keyof T | ((arg: T) => string) : string
      /**
       * The property to use for the label of the options.
       */
      label?: T extends object ? keyof T | ((arg: T) => string) : string

      /**
       * The property to use for the sublabel of the options.
       */
      sublabel?: T extends object ? keyof T | ((arg: T) => string) : string

      /**
       * The property to use for the media of the options.
       */
      media?: T extends object ? keyof T | ((arg: T) => string) : string

      /**
       * The property to use for the icon of the options.
       */
      icon?: T extends object ? keyof T | ((arg: T) => string) : string
    }
  }>(),
  {
    items: () => [],
    rounded: undefined,
    size: undefined,
    contrast: undefined,
    icon: undefined,
    placeholder: '',
    label: '',
    error: '',
    i18n: () => ({
      pending: 'Loading ...',
      empty: 'Nothing found.',
    }),
    loading: false,
    disabled: false,
    clearable: false,
    colorFocus: false,
    clearValue: undefined,
    clearIcon: 'lucide:x',
    chipClearIcon: 'lucide:x',
    dropdownIcon: 'lucide:chevron-down',
    dropdown: false,
    multiple: false,
    displayValue: undefined,
    filterDebounce: 0,
    filterItems: undefined,
    classes: () => ({}),
    allowCreate: false,
    hideCreatePrompt: false,
    fixed: false,
    placement: 'bottom-start',
    properties: undefined,
  },
)

const emits = defineEmits<{
  keydown: [event: KeyboardEvent]
}>()

defineSlots<{
  item(props: {
    query: string
    filteredItems: T[]
    pending: boolean
    items: T[]
    item: T
    active: boolean
    selected: boolean
  }): any
  label(props: {
    query: string
    filteredItems: T[]
    pending: boolean
    items: T[]
  }): any
  pending(props: {
    query: string
    filteredItems: T[]
    pending: boolean
    items: T[]
  }): any
  empty(props: {
    query: string
    filteredItems: T[]
    pending: boolean
    items: T[]
  }): any
  'start-item'(props: {
    query: string
    filteredItems: T[]
    pending: boolean
    items: T[]
  }): any
  'end-item'(props: {
    query: string
    filteredItems: T[]
    pending: boolean
    items: T[]
  }): any
  'create-item'(props: {
    query: string
    filteredItems: T[]
    pending: boolean
    items: T[]
    active: boolean
    selected: boolean
  }): any
  'autocomplete-multiple-list-item'(props: {
    item: T
    displayValue: string
    removeItem: (item: T) => void
  }): any
  'icon'(props: { iconName: string }): any
  'clear-icon'(): any
  'dropdown-icon'(): any
}>()

const [modelValue, modelModifiers] = defineModel<T | T[], 'prop'>({
  set(value) {
    if (!props.multiple && modelModifiers.prop && props.properties?.value) {
      const attr = props.properties.value
      return (
        props.items.find(
          (item) =>
            item &&
            typeof item === 'object' &&
            attr in item &&
            (item as any)[attr] === value,
        ) as any
      )?.[attr]
    }
    return value
  },
  get(value) {
    if (!props.multiple && modelModifiers.prop && props.properties?.value) {
      const attr = props.properties.value
      return props.items.find(
        (item) =>
          item &&
          typeof item === 'object' &&
          attr in item &&
          (item as any)[attr] === value,
      )
    }
    return value
  },
})

const rounded = useNuiDefaultProperty(props, 'BaseAutocomplete', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseAutocomplete', 'size')
const contrast = useNuiDefaultProperty(props, 'BaseAutocomplete', 'contrast')

const defaultDisplayValue = (item: any): any => {
  if (modelModifiers.prop && props.properties?.value) {
    const attr = props.properties.value
    const result = items.value.find(
      (i) =>
        i && typeof i === 'object' && attr in i && (i as any)[attr] === item,
    )
    if (
      typeof result === 'object' &&
      result &&
      props.properties.label &&
      props.properties.label in result
    ) {
      return result[props.properties.label as keyof typeof result]
    }
  }
  if (item == null || typeof item === 'string') return item
  if (
    typeof item === 'object' &&
    props.properties?.label &&
    props.properties.label in item
  )
    return item[props.properties.label]

  return item
}

const defaultFilter = (query?: string, items?: T[]): T[] => {
  if (!query || !items) {
    return items ?? []
  }

  const lower = query.toLowerCase()

  return items.filter((item: any) => {
    if (typeof item === 'string') return item?.toLowerCase().includes(lower)
    if (
      typeof item === 'object' &&
      props.properties?.label &&
      props.properties.label in item
    )
      return item[props.properties.label].toLowerCase().includes(lower)
    if (
      typeof item === 'object' &&
      props.properties?.sublabel &&
      props.properties.sublabel in item
    )
      return item[props.properties.sublabel].toLowerCase().includes(lower)
  })
}

const filterResolved = computed(() => {
  if (props.filterItems === undefined) return defaultFilter
  return props.filterItems
})
const displayValueResolved = computed(() => {
  if (props.displayValue === undefined) return defaultDisplayValue
  return props.displayValue
})

const items = shallowRef(props.items)
const query = ref('')
const debounced = refDebounced(query, props.filterDebounce)
const filteredItems = shallowRef<
  Awaited<ReturnType<typeof filterResolved.value>>
>(props.dropdown ? props.items : [])
const pendingFilter = ref(false)
const pendingDebounce = computed(() => query.value !== debounced.value)
const pending = computed(() => pendingFilter.value || pendingDebounce.value)

const queryCreate = computed(() => {
  return query.value === '' ? null : query.value
})

const radiuses = {
  none: '',
  sm: 'nui-autocomplete-rounded-sm',
  md: 'nui-autocomplete-rounded-md',
  lg: 'nui-autocomplete-rounded-lg',
  full: 'nui-autocomplete-rounded-full',
} as Record<string, string>

const sizes = {
  sm: 'nui-autocomplete-sm',
  md: 'nui-autocomplete-md',
  lg: 'nui-autocomplete-lg',
} as Record<string, string>

const contrasts = {
  default: 'nui-autocomplete-default',
  'default-contrast': 'nui-autocomplete-default-contrast',
  muted: 'nui-autocomplete-muted',
  'muted-contrast': 'nui-autocomplete-muted-contrast',
} as Record<string, string>

provide(
  'BaseAutocompleteContext',
  reactive({
    selected: modelValue,
    items,
    filteredItems,
    query,
    pending,
    clear,
    removeItem,
  }),
)
defineExpose({
  /**
   * Current selected value.
   */
  selected: modelValue,
  /**
   * Resolved items list.
   */
  filteredItems,
  /**
   * Current search input query.
   */
  query,
  /**
   * The filterItems pending state.
   */
  pending,
  /**
   * Clears the selected value.
   */
  clear,
  /**
   * Removes an item from the selected value.
   */
  removeItem,
})
watch([debounced, items], async ([value, _items]) => {
  pendingFilter.value = true
  try {
    filteredItems.value = await filterResolved.value(value, _items)
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      // Ignore abort errors
      return
    }

    throw error
  } finally {
    pendingFilter.value = false
  }
})
watch(
  () => props.items,
  () => {
    items.value = props.items
  },
)

function clear() {
  modelValue.value = props.clearValue ?? (props.multiple ? [] : null)
}

const iconResolved = computed(() => {
  if (
    modelValue.value &&
    typeof modelValue.value === 'object' &&
    !Array.isArray(modelValue.value) &&
    'icon' in modelValue.value &&
    typeof modelValue.value.icon === 'string'
  ) {
    return modelValue.value.icon
  }
  return props.icon
})

function removeItem(item: any) {
  if (!Array.isArray(modelValue.value)) {
    modelValue.value = props.clearValue
    return
  }

  for (let i = modelValue.value.length - 1; i >= 0; --i) {
    if (props.properties?.value) {
      if (modelValue.value[i] === item) {
        modelValue.value.splice(i, 1)
      }
    }
    // eslint-disable-next-line eqeqeq
    else if (modelValue.value[i] === item) {
      modelValue.value.splice(i, 1)
    }
  }
}

function key(item: T) {
  if (props.properties == null) return displayValueResolved.value(item)
  if (typeof props.properties.value === 'string')
    return (item as any)[props.properties.value]
  if (typeof props.properties.value === 'function')
    //@ts-expect-error not sure why properties.value ends up undefined
    return props.properties.value(item as any)
  return displayValueResolved.value(item)
}

const internal = ref<any>(modelValue)
</script>

<template>
  <Combobox
    v-model="internal"
    :by="
      modelModifiers.prop && props.properties?.value
        ? undefined
        : props.properties?.value
    "
    :multiple="props.multiple"
    :disabled="props.disabled"
    :class="[
      'nui-autocomplete',
      props.classes?.wrapper,
      size && sizes[size],
      contrast && contrasts[contrast],
      rounded && radiuses[rounded],
      props.icon && 'nui-has-icon',
      props.labelFloat && 'nui-autocomplete-label-float',
      props.loading && 'nui-autocomplete-loading',
      props.colorFocus && 'nui-autocomplete-focus',
      props.error && 'nui-autocomplete-error',
    ]"
    as="div"
  >
    <Float
      composable
      leave="transition ease-in duration-100"
      leave-from="opacity-100"
      leave-to="opacity-0"
      @hide="query = ''"
      :flip="!props.multiple"
      :offset="5"
      :strategy="props.fixed ? 'fixed' : 'absolute'"
      :placement="props.placement"
      :adaptive-width="props.fixed"
      :z-index="200"
    >
      <ComboboxLabel
        v-if="
          ('label' in $slots && !labelFloat) ||
          (props.label && !props.labelFloat)
        "
        class="nui-autocomplete-label"
        :class="classes?.label"
      >
        <slot name="label" v-bind="{ query, filteredItems, pending, items }">
          {{ label }}
        </slot>
      </ComboboxLabel>

      <div v-if="props.multiple" class="nui-autocomplete-multiple">
        <ul
          v-if="Array.isArray(modelValue) && modelValue.length > 0"
          class="nui-autocomplete-multiple-list"
        >
          <li v-for="item in modelValue" :key="String(item)">
            <slot
              name="autocomplete-multiple-list-item"
              v-bind="{
                item,
                displayValue: displayValueResolved(item),
                removeItem,
              }"
            >
              <div class="nui-autocomplete-multiple-list-item">
                {{ displayValueResolved(item) }}
                <button type="button" @click="removeItem(item)">
                  <Icon
                    :name="chipClearIcon"
                    class="nui-autocomplete-multiple-list-item-icon"
                  />
                </button>
              </div>
            </slot>
          </li>
        </ul>
      </div>
      <FloatReference>
        <div class="nui-autocomplete-outer">
          <ComboboxInput
            class="nui-autocomplete-input"
            :class="[
              classes?.input,
              props.dropdown && !props.clearable && '!pe-12',
              props.dropdown && props.clearable && '!pe-[4.5rem]',
            ]"
            :display-value="
              props.multiple ? undefined : (displayValueResolved as any)
            "
            :placeholder="props.placeholder"
            :disabled="props.disabled"
            @change="query = $event.target.value"
            @keydown="(event: KeyboardEvent) => emits('keydown', event)"
          />
          <ComboboxLabel
            v-if="
              ('label' in $slots && props.labelFloat) ||
              (props.label && props.labelFloat)
            "
            class="nui-label-float"
            :class="props.classes?.label"
          >
            <slot
              name="label"
              v-bind="{ query, filteredItems, pending, items }"
            >
              {{ props.label }}
            </slot>
          </ComboboxLabel>
          <div v-if="iconResolved" class="nui-autocomplete-icon">
            <slot name="icon" :icon-name="iconResolved">
              <Icon :name="iconResolved" class="nui-autocomplete-icon-inner" />
            </slot>
          </div>
          <button
            v-if="
              props.clearable &&
              ((Array.isArray(modelValue) && modelValue?.length > 0) ||
                (!Array.isArray(modelValue) && modelValue != null))
            "
            type="button"
            tabindex="-1"
            class="nui-autocomplete-clear"
            :class="[props.classes?.icon, props.dropdown && 'me-10']"
            @click="clear"
          >
            <slot name="clear-icon">
              <Icon
                :name="props.clearIcon"
                class="nui-autocomplete-clear-inner"
              />
            </slot>
          </button>
          <ComboboxButton
            v-if="props.dropdown"
            v-slot="{ open }: { open: boolean }"
            class="nui-autocomplete-clear nui-autocomplete-chevron"
          >
            <slot name="dropdown-icon">
              <Icon
                :name="props.dropdownIcon"
                class="nui-autocomplete-clear-inner transition-transform duration-300"
                :class="[props.classes?.icon, open && 'rotate-180']"
              />
            </slot>
          </ComboboxButton>

          <div v-if="props.loading" class="nui-autocomplete-placeload">
            <BasePlaceload
              class="nui-placeload"
              :class="props.icon && 'ms-6'"
            />
          </div>
        </div>
      </FloatReference>

      <span
        v-if="props.error && typeof props.error === 'string'"
        class="nui-autocomplete-error-text"
        :class="props.classes?.error"
      >
        {{ props.error }}
      </span>
      <FloatContent :class="!props.fixed && 'w-full'">
        <ComboboxOptions
          as="div"
          :class="{
            'nui-autocomplete-results':
              filteredItems.length > 0 || !hideCreatePrompt,
          }"
        >
          <!-- Placeholder -->
          <div
            v-if="filteredItems.length === 0 && pending"
            class="nui-autocomplete-results-placeholder"
          >
            <slot
              name="pending"
              v-bind="{ query, filteredItems, pending, items }"
            >
              <span class="nui-autocomplete-results-placeholder-text">
                {{ props.i18n.pending }}
              </span>
            </slot>
          </div>
          <div
            v-else-if="filteredItems.length === 0 && !allowCreate"
            class="nui-autocomplete-results-placeholder"
          >
            <slot
              name="empty"
              v-bind="{ query, filteredItems, pending, items }"
            >
              <span class="nui-autocomplete-results-placeholder-text">
                {{ props.i18n.empty }}
              </span>
            </slot>
          </div>
          <template v-else>
            <div
              v-if="'start-item' in $slots"
              class="nui-autocomplete-results-header"
            >
              <slot
                name="start-item"
                v-bind="{
                  query,
                  filteredItems,
                  pending,
                  items,
                }"
              ></slot>
            </div>
            <ComboboxOption
              v-if="allowCreate && queryCreate"
              :value="queryCreate"
              v-slot="{ active, selected }"
              :class="
                hideCreatePrompt ? 'hidden' : 'nui-autocomplete-results-item'
              "
              as="div"
            >
              <slot
                name="create-item"
                v-bind="{
                  query,
                  filteredItems,
                  pending,
                  items,
                  active,
                  selected,
                }"
              >
                <BaseAutocompleteItem
                  :rounded="rounded"
                  :item="{
                    label: `Create '${query}'`,
                    value: query,
                  }"
                  :active="active"
                  :selected="selected"
                />
              </slot>
            </ComboboxOption>
            <ComboboxOption
              v-for="item in filteredItems"
              v-slot="{ active, selected }"
              :key="key(item)"
              class="nui-autocomplete-results-item"
              as="div"
              :value="
                modelModifiers.prop && props.properties?.value
                  ? (item as any)[props.properties.value]
                  : (item as any)
              "
            >
              <slot
                name="item"
                v-bind="{
                  query,
                  filteredItems,
                  pending,
                  items,
                  item,
                  active,
                  selected,
                }"
              >
                <BaseAutocompleteItem
                  :rounded="rounded"
                  :item="
                    properties
                      ? item
                      : ({
                          label: displayValueResolved(item),
                        } as T)
                  "
                  :active="active"
                  :selected="selected"
                  :properties="properties"
                />
              </slot>
            </ComboboxOption>
            <div
              v-if="'end-item' in $slots"
              class="nui-autocomplete-results-footer"
            >
              <slot
                name="end-item"
                v-bind="{
                  query,
                  filteredItems,
                  pending,
                  items,
                }"
              ></slot>
            </div>
          </template>
        </ComboboxOptions>
      </FloatContent>
    </Float>
  </Combobox>
</template>

<style>
.nui-autocomplete .nui-autocomplete-results {
  position: unset;
  margin-top: unset;
}
</style>
