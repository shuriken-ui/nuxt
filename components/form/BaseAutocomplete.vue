<script setup lang="ts" generic="T extends any = string">
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue'
import { Float, FloatReference, FloatContent } from '@headlessui-float/vue'

const props = withDefaults(
  defineProps<{
    /**
     * The model value of the component.
     */
    modelValue?: T | T[]

    /**
     * The items to display in the component.
     */
    items?: T[]

    /**
     * The shape of the component.
     */
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'

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
     * The size of the autocomplete component.
     */
    size?: 'sm' | 'md' | 'lg'

    /**
     * The contrast of autocomplete component.
     */
    contrast?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'

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
     * Display a chevron icon to open suggestions
     */
    dropdown?: boolean

    /**
     * Whether the component allows multiple selections.
     */
    multiple?: boolean

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
    }
    /**
     * Allow custom entries by the user
     */
    allowCustom?: boolean

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
      key?: T extends object ? keyof T | ((arg: T) => string) : string
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
    modelValue: undefined,
    items: () => [],
    shape: undefined,
    icon: undefined,
    placeholder: '',
    label: '',
    error: '',
    size: 'md',
    contrast: 'default',
    i18n: () => ({
      pending: 'Loading ...',
      empty: 'Nothing found.',
    }),
    loading: false,
    disabled: false,
    clearable: false,
    clearValue: undefined,
    clearIcon: 'lucide:x',
    chipClearIcon: 'lucide:x',
    dropdownIcon: 'lucide:chevron-down',
    dropdown: false,
    multiple: false,
    displayValue: (item: any) => item,
    filterDebounce: 0,
    filterItems: (query?: string, items?: T[]) => {
      if (!query || !items) {
        return items ?? []
      }

      return items.filter((item) => {
        if (typeof item !== 'string') {
          return false
        }
        return item?.toLowerCase().includes(query.toLowerCase())
      })
    },
    classes: () => ({}),
    allowCustom: false,
    fixed: false,
    placement: 'bottom-start',
    properties: () => ({}),
  },
)

const emits = defineEmits<{
  (event: 'update:modelValue', value?: T | T[]): void
  (event: 'keydown', value: KeyboardEvent): void
}>()
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input)

const value = useVModel(props, 'modelValue', emits, {
  passive: true,
}) as Ref<any>

const items = shallowRef(props.items)
const query = ref('')
const debounced = refDebounced(query, props.filterDebounce)
const filteredItems = shallowRef<Awaited<ReturnType<typeof props.filterItems>>>(
  props.dropdown ? props.items : [],
)
const pendingFilter = ref(false)
const pendingDebounce = computed(() => query.value !== debounced.value)
const pending = computed(() => pendingFilter.value || pendingDebounce.value)

const queryCustom = computed(() => {
  return query.value === '' ? null : query.value
})

const shapeStyle = {
  straight: '',
  rounded: 'nui-autocomplete-rounded',
  smooth: 'nui-autocomplete-smooth',
  curved: 'nui-autocomplete-curved',
  full: 'nui-autocomplete-full',
}
const sizeStyle = {
  sm: 'nui-autocomplete-sm',
  md: 'nui-autocomplete-md',
  lg: 'nui-autocomplete-lg',
}
const contrastStyle = {
  default: 'nui-autocomplete-default',
  'default-contrast': 'nui-autocomplete-default-contrast',
  muted: 'nui-autocomplete-muted',
  'muted-contrast': 'nui-autocomplete-muted-contrast',
}

provide(
  'BaseAutocompleteContext',
  reactive({
    selected: value,
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
  selected: value,
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
watch(debounced, async (value) => {
  pendingFilter.value = true
  try {
    filteredItems.value = await props.filterItems(value, items.value)
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

function clear() {
  value.value = props.clearValue ?? []
}

const iconResolved = computed(() => {
  if (
    value.value &&
    typeof value.value === 'object' &&
    !Array.isArray(value.value) &&
    'icon' in value.value &&
    typeof value.value.icon === 'string'
  ) {
    return value.value.icon
  }
  return props.icon
})

function removeItem(item: any) {
  if (!Array.isArray(value.value)) {
    value.value = props.clearValue
    return
  }

  for (let i = value.value.length - 1; i >= 0; --i) {
    // eslint-disable-next-line eqeqeq
    if (value.value[i] == item) {
      value.value.splice(i, 1)
    }
  }
}

function key(item: T) {
  if (props.properties == null) return props.displayValue(item)
  if (typeof props.properties.key === 'string')
    return (item as any)[props.properties.key]
  if (typeof props.properties.key === 'function')
    //@ts-expect-error not sure why properties.key ends up undefined
    return props.properties.key(item as any)
  return props.displayValue(item)
}
</script>

<template>
  <Combobox
    v-model="value"
    :multiple="props.multiple"
    :disabled="props.disabled"
    :class="[
      'nui-autocomplete',
      props.classes?.wrapper,
      sizeStyle[props.size],
      contrastStyle[props.contrast],
      shape && shapeStyle[shape],
      props.icon && 'nui-has-icon',
      props.labelFloat && 'nui-autocomplete-label-float',
      props.loading && 'nui-autocomplete-loading',
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
      :z-index="20"
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
          v-if="Array.isArray(value) && value.length > 0"
          class="nui-autocomplete-multiple-list"
        >
          <li v-for="item in value" :key="String(item)">
            <div class="nui-autocomplete-multiple-list-item">
              {{ props.displayValue(item) }}
              <button type="button" @click="removeItem(item)">
                <slot name="chip-clear-icon">
                  <Icon
                    :name="chipClearIcon"
                    class="nui-autocomplete-multiple-list-item-icon"
                  />
                </slot>
              </button>
            </div>
          </li>
        </ul>
      </div>
      <FloatReference>
        <div class="nui-autocomplete-outer">
          <ComboboxInput
            class="nui-autocomplete-input"
            :class="classes?.input"
            :display-value="
              props.multiple ? undefined : (props.displayValue as any)
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
            v-if="props.clearable && value"
            type="button"
            class="nui-autocomplete-clear"
            :class="[props.classes?.icon, props.dropdown && 'me-6']"
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
            class="nui-autocomplete-clear"
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
      >
        {{ props.error }}
      </span>
      <FloatContent :class="!props.fixed && 'w-full'">
        <ComboboxOptions
          as="div"
          :class="{
            'nui-autocomplete-results':
              filteredItems.length > 0 || !allowCustom,
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
            v-else-if="filteredItems.length === 0 && !allowCustom"
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
              v-if="allowCustom && queryCustom"
              :value="queryCustom"
              class="hidden"
              as="div"
            >
              Create {{ query }}
            </ComboboxOption>
            <ComboboxOption
              v-for="item in filteredItems"
              v-slot="{ active, selected }"
              :key="key(item)"
              class="nui-autocomplete-results-item"
              as="div"
              :value="item as any"
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
                  :shape="shape"
                  :item="
                    properties
                      ? item
                      : ({
                          label: props.displayValue(item),
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

<style scoped>
.nui-autocomplete .nui-autocomplete-results {
  position: unset;
  margin-top: unset;
}
</style>
