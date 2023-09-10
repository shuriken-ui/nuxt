<script setup lang="ts">
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
  TransitionRoot,
} from '@headlessui/vue'

const props = withDefaults(
  defineProps<{
    // Temporary fix to allow attributes inheritance with generic components
    // @see https://github.com/vuejs/core/issues/8372
    [attrs: string]: any

    /**
     * The model value of the component.
     */
    modelValue?: any[]

    /**
     * The items to display in the component.
     */
    items?: any[]

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
    displayValue?: (item: any) => string

    /**
     * The debounce time for the filterItems method.
     */
    filterDebounce?: number

    /**
     * A function to filter the items when query is changed.
     *
     * You can use this method to implement your own filtering logic or to fetch items from an API.
     */
    filterItems?: (query?: string, items?: any[]) => Promise<any[]> | any[]

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
    dropdownIcon: 'lucide:chevron-down',
    dropdown: false,
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
  },
)

const emits = defineEmits<{
  (event: 'update:modelValue', value?: any | any[]): void
}>()
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input)

const value = useVModel(props, 'modelValue', emits, {
  passive: true,
}) as Ref<any | any[]>

const items = shallowRef(props.items)
const query = ref('')
const debounced = refDebounced(query, props.filterDebounce)
const filteredItems = shallowRef<Awaited<ReturnType<typeof props.filterItems>>>(
  props.dropdown ? props.items : [],
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
  item: unknown,
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
    <ComboboxLabel
      v-if="
        ('label' in $slots && !labelFloat) || (props.label && !props.labelFloat)
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
        :class="classes?.input"
        :display-value="
          props.multiple ? undefined : (props.displayValue as any)
        "
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        @change="query = $event.target.value"
      />
      <ComboboxLabel
        v-if="
          ('label' in $slots && props.labelFloat) ||
          (props.label && props.labelFloat)
        "
        class="nui-label-float"
        :class="props.classes?.label"
      >
        <slot name="label" v-bind="{ query, filteredItems, pending, items }">
          {{ props.label }}
        </slot>
      </ComboboxLabel>
      <div v-if="iconResolved" class="nui-autocomplete-icon">
        <Icon :name="iconResolved" class="nui-autocomplete-icon-inner" />
      </div>
      <button
        v-if="props.clearable && value"
        type="button"
        class="nui-autocomplete-clear"
        :class="[props.classes?.icon, props.dropdown && 'me-6']"
        @click="clear"
      >
        <Icon :name="props.clearIcon" class="nui-autocomplete-clear-inner" />
      </button>
      <ComboboxButton
        v-if="props.dropdown"
        v-slot="{ open }: { open: boolean }"
        class="nui-autocomplete-clear"
      >
        <Icon
          :name="props.dropdownIcon"
          class="nui-autocomplete-clear-inner transition-transform duration-300"
          :class="[props.classes?.icon, open && 'rotate-180']"
        />
      </ComboboxButton>

      <div v-if="props.loading" class="nui-autocomplete-placeload">
        <BasePlaceload class="nui-placeload" :class="props.icon && 'ms-6'" />
      </div>
    </div>

    <span
      v-if="props.error && typeof props.error === 'string'"
      class="nui-autocomplete-error-text"
    >
      {{ props.error }}
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
              {{ props.i18n.pending }}
            </span>
          </slot>
        </div>
        <div
          v-else-if="filteredItems.length === 0"
          class="nui-autocomplete-results-placeholder"
        >
          <slot name="empty" v-bind="{ query, filteredItems, pending, items }">
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
                        name: props.displayValue(item),
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
