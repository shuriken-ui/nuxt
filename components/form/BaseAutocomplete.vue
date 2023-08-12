<script
  setup
  lang="ts"
  generic="T extends object | string | boolean | number | null | undefined"
>
import {
  Combobox,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
  TransitionRoot,
} from '@headlessui/vue'

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
    error?: string

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
     * Whether the component allows multiple selections.
     */
    multiple?: boolean

    /**
     * A function used to render the items as strings in either the input or the tag when multiple is true.
     */
    displayValue?: (item?: T) => string

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
    multiple: false,
    displayValue: (item: any) => item,
    filterDebounce: 0,
    filterItems: (query?: string, items?: any[]) => {
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
  }
)

const emits = defineEmits<{
  (event: 'update:modelValue', value?: T | T[]): void
}>()
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input)

const value = useVModel(props, 'modelValue', emits) as Ref<T | T[]>

const items = shallowRef(props.items)
const query = ref('')
const debounced = refDebounced(query, props.filterDebounce)
const filteredItems = shallowRef<Awaited<ReturnType<typeof props.filterItems>>>(
  []
)
const pendingFilter = ref(false)
const pendingDebounce = computed(() => query.value !== debounced.value)
const pending = computed(() => pendingFilter.value || pendingDebounce.value)

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

const wrapperStyle = computed(() =>
  props.classes?.wrapper
    ? Array.isArray(props.classes?.wrapper)
      ? [...props.classes?.wrapper]
      : props.classes?.wrapper
    : ''
)
const labelStyle = computed(() =>
  props.classes?.label
    ? Array.isArray(props.classes?.label)
      ? [...props.classes?.label]
      : props.classes?.label
    : ''
)
const inputStyle = computed(() =>
  props.classes?.input
    ? Array.isArray(props.classes?.input)
      ? [...props.classes?.input]
      : props.classes?.input
    : ''
)
const iconStyle = computed(() =>
  props.classes?.icon
    ? Array.isArray(props.classes?.icon)
      ? [...props.classes?.icon]
      : props.classes?.icon
    : ''
)

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
  })
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
  value.value = props.clearValue
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

function isAutocompleteItem(
  item: unknown
): item is Record<'name' | 'text' | 'media' | 'icon', string> {
  if (
    item &&
    typeof item === 'object' &&
    (('name' in item && typeof item.name === 'string') ||
      ('text' in item && typeof item.text === 'string') ||
      ('media' in item && typeof item.media === 'string') ||
      ('icon' in item && typeof item.icon === 'string'))
  ) {
    return true
  }
  return false
}

function removeItem(item: T) {
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
</script>

<template>
  <Combobox
    v-model="value"
    :multiple="multiple"
    :disabled="disabled"
    :class="[
      'nui-autocomplete',
      ...wrapperStyle,
      sizeStyle[size],
      contrastStyle[contrast],
      shape && shapeStyle[shape],
      icon && 'nui-has-icon',
      labelFloat && 'nui-autocomplete-label-float',
      loading && 'nui-autocomplete-loading',
    ]"
    as="div"
  >
    <ComboboxLabel
      v-if="('label' in $slots && !labelFloat) || (label && !labelFloat)"
      class="nui-autocomplete-label"
      :class="labelStyle"
    >
      <slot name="label" v-bind="{ query, filteredItems, pending, items }">
        {{ label }}
      </slot>
    </ComboboxLabel>

    <div v-if="multiple" class="nui-autocomplete-multiple">
      <ul
        v-if="Array.isArray(value) && value.length > 0"
        class="nui-autocomplete-multiple-list"
      >
        <li v-for="item in value" :key="String(item)">
          <div class="nui-autocomplete-multiple-list-item">
            {{ displayValue(item) }}
            <button type="button" @click="removeItem(item)">
              <Icon
                :name="chipClearIcon"
                class="nui-autocomplete-multiple-list-item-icon"
              />
            </button>
          </div>
        </li>
      </ul>
    </div>

    <div class="nui-autocomplete-outer">
      <ComboboxInput
        class="nui-autocomplete-input"
        :class="inputStyle"
        :display-value="multiple ? undefined : (displayValue as any)"
        :placeholder="placeholder"
        :disabled="disabled"
        @change="query = $event.target.value"
      />
      <ComboboxLabel
        v-if="('label' in $slots && labelFloat) || (label && labelFloat)"
        class="nui-label-float"
        :class="labelStyle"
      >
        <slot name="label" v-bind="{ query, filteredItems, pending, items }">
          {{ label }}
        </slot>
      </ComboboxLabel>
      <div v-if="iconResolved" class="nui-autocomplete-icon">
        <Icon :name="iconResolved" class="nui-autocomplete-icon-inner" />
      </div>
      <button
        v-if="clearable && value"
        type="button"
        class="nui-autocomplete-clear"
        :class="iconStyle"
        @click="clear"
      >
        <Icon :name="clearIcon" class="nui-autocomplete-clear-inner" />
      </button>
      <div v-if="loading" class="nui-autocomplete-placeload">
        <BasePlaceload class="nui-placeload" :class="icon && 'ms-6'" />
      </div>
    </div>

    <span
      v-if="error && typeof error === 'string'"
      class="nui-autocomplete-error-text"
    >
      {{ error }}
    </span>

    <TransitionRoot
      leave="transition ease-in duration-100"
      leave-from="opacity-100"
      leave-to="opacity-0"
      @after-leave="query = ''"
    >
      <ComboboxOptions as="div" class="nui-autocomplete-results">
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
              {{ i18n.pending }}
            </span>
          </slot>
        </div>
        <div
          v-else-if="filteredItems.length === 0"
          class="nui-autocomplete-results-placeholder"
        >
          <slot name="empty" v-bind="{ query, filteredItems, pending, items }">
            <span class="nui-autocomplete-results-placeholder-text">
              {{ i18n.empty }}
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
            v-for="item in filteredItems"
            v-slot="{ active, selected }"
            :key="String(item)"
            class="nui-autocomplete-results-item"
            as="div"
            :value="item"
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
                :value="
                  isAutocompleteItem(item)
                    ? item
                    : {
                        name: displayValue(item),
                      }
                "
                :active="active"
                :selected="selected"
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
    </TransitionRoot>
  </Combobox>
</template>
