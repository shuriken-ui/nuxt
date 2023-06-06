<script setup lang="ts">
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
    modelValue: any

    /**
     * The items to display in the component.
     */
    items?: any[]

    /**
     * The shape of the component.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

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
     * Whether the component is condensed.
     */
    condensed?: boolean

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
    displayValue?: (item?: any) => string

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
    items: () => [],
    shape: undefined,
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
  (event: 'update:modelValue', value?: any): void
}>()
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.input)

const value = useVModel(props, 'modelValue', emits)

const items = shallowRef(props.items)
const query = ref('')
const debounced = refDebounced(query, props.filterDebounce)
const filteredItems = shallowRef<Awaited<ReturnType<typeof props.filterItems>>>(
  []
)
const pendingFilter = ref(false)
const pendingDebounce = computed(() => query.value !== debounced.value)
const pending = computed(() => pendingFilter.value || pendingDebounce.value)

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

function removeItem(item: any) {
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
    class="relative w-full"
    :class="props.classes?.wrapper"
    as="div"
  >
    <ComboboxLabel
      v-if="
        ('label' in $slots && !props.labelFloat) ||
        (props.label && !props.labelFloat)
      "
      class="nui-label"
      :class="[
        props.condensed && 'pb-1 text-xs',
        !props.condensed && 'pb-1 text-[0.825rem]',
        ...(props.classes?.label && Array.isArray(props.classes.label)
          ? props.classes.label
          : [props.classes?.label]),
      ]"
    >
      <slot name="label" v-bind="{ query, filteredItems, pending, items }">
        {{ props.label }}
      </slot>
    </ComboboxLabel>

    <div v-if="props.multiple" class="block">
      <ul
        v-if="Array.isArray(value) && value.length > 0"
        class="my-2 flex flex-wrap gap-1"
      >
        <li v-for="item in value" :key="item.id">
          <div
            class="bg-muted-100 text-muted-400 dark:bg-muted-700 flex items-center py-2 pe-2 ps-3 font-sans text-xs font-medium"
            :class="[
              shape === 'rounded' && 'rounded-lg',
              shape === 'curved' && 'rounded-xl',
              shape === 'full' && 'rounded-full',
            ]"
          >
            {{ props.displayValue(item) }}
            <button type="button" @click="removeItem(item)">
              <Icon :name="chipClearIcon" class="ms-1 block h-3 w-3" />
            </button>
          </div>
        </li>
      </ul>
    </div>
    <div class="group/autocomplete relative">
      <ComboboxInput
        class="nui-focus border-muted-300 text-muted-600 placeholder:text-muted-300 focus:border-muted-300 focus:shadow-muted-300/50 dark:border-muted-700 dark:bg-muted-900/75 dark:text-muted-200 dark:placeholder:text-muted-500 dark:focus:border-muted-700 dark:focus:shadow-muted-800/50 peer w-full border bg-white font-sans leading-5 outline-transparent transition-all duration-300 focus:shadow-lg focus:ring-0 disabled:cursor-not-allowed disabled:opacity-75"
        :class="[
          props.condensed && 'h-8 py-1 text-xs leading-4',
          props.condensed && props.icon !== undefined ? 'pe-3 ps-7' : 'px-2',
          !props.condensed && 'h-10 py-2 text-sm leading-5',
          !props.condensed && props.icon !== undefined ? 'pe-4 ps-9' : 'px-3',
          props.labelFloat &&
            'placeholder:text-transparent dark:placeholder:!text-transparent',
          shape === 'rounded' && 'rounded',
          shape === 'curved' && 'rounded-xl',
          shape === 'full' && 'rounded-full',
          props.loading &&
            '!text-transparent placeholder:!text-transparent dark:!text-transparent dark:placeholder:!text-transparent',
          ...(props.classes?.input && Array.isArray(props.classes.input)
            ? props.classes.input
            : [props.classes?.input]),
        ]"
        :display-value="props.multiple ? undefined : props.displayValue"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        @change="query = $event.target.value"
      />
      <ComboboxLabel
        v-if="
          ('label' in $slots && props.labelFloat) ||
          (props.label && props.labelFloat)
        "
        class="text-primary-500 peer-focus-visible:text-primary-500 dark:peer-focus-visible:text-primary-500 pointer-events-none absolute inline-flex h-5 select-none items-center leading-none transition-all duration-300"
        :class="[
          props.loading
            ? 'peer-placeholder-shown:!text-transparent dark:peer-placeholder-shown:!text-transparent'
            : 'peer-placeholder-shown:text-muted-300 dark:peer-placeholder-shown:text-muted-600',
          props.icon !== undefined &&
            !props.condensed &&
            'start-10 -ms-10 -mt-8 text-xs peer-placeholder-shown:ms-0 peer-placeholder-shown:mt-0 peer-placeholder-shown:text-[0.825rem] peer-focus-visible:-ms-10 peer-focus-visible:-mt-8 peer-focus-visible:text-xs',
          props.icon !== undefined &&
            props.condensed &&
            'start-8 -ms-8 -mt-7 text-xs peer-placeholder-shown:ms-0 peer-placeholder-shown:mt-0 peer-focus-visible:-ms-8 peer-focus-visible:-mt-7',
          props.icon === undefined &&
            !props.condensed &&
            'start-3 -ms-3  -mt-8 text-xs peer-placeholder-shown:ms-0 peer-placeholder-shown:mt-0 peer-placeholder-shown:text-[0.825rem] peer-focus-visible:-ms-3 peer-focus-visible:-mt-8 peer-focus-visible:text-xs',
          props.icon === undefined &&
            props.condensed &&
            'start-3 -ms-3  -mt-7 text-xs peer-placeholder-shown:ms-0 peer-placeholder-shown:mt-0 peer-focus-visible:-ms-3 peer-focus-visible:-mt-7',
          props.condensed ? 'top-1.5' : 'top-2.5',
          ...(props.classes?.label && Array.isArray(props.classes.label)
            ? props.classes.label
            : [props.classes?.label]),
        ]"
      >
        <slot name="label" v-bind="{ query, filteredItems, pending, items }">
          {{ props.label }}
        </slot>
      </ComboboxLabel>
      <div
        v-if="props.icon || value?.icon"
        class="text-muted-400 group-focus-within/autocomplete:text-primary-500 absolute start-0 top-0 flex items-center justify-center transition-colors duration-300"
        :class="[props.condensed && 'h-8 w-8', !props.condensed && 'h-10 w-10']"
      >
        <Icon :name="value?.icon ?? props.icon" class="h-4 w-4" />
      </div>
      <button
        v-if="props.clearable && value"
        type="button"
        class="text-muted-400 hover:text-muted-700 dark:hover:text-muted-200 absolute end-0 top-0 z-10 flex items-center justify-center transition-colors duration-300"
        :class="[
          props.condensed && 'h-8 w-8',
          !props.condensed && 'h-10 w-10',
          ...(props.classes?.icon && Array.isArray(props.classes.icon)
            ? props.classes.icon
            : [props.classes?.icon]),
        ]"
        @click="clear"
      >
        <Icon :name="clearIcon" class="h-4 w-4" />
      </button>
      <div
        v-if="props.loading"
        class="absolute start-0 top-0 flex w-full items-center px-4"
        :class="[props.condensed && 'h-8', !props.condensed && 'h-10']"
      >
        <BasePlaceload
          class="h-3 w-full max-w-[75%] rounded"
          :class="props.icon && 'ms-6'"
        />
      </div>
    </div>
    <span
      v-if="props.error && typeof props.error === 'string'"
      class="inline-block font-sans text-[.8rem] text-pink-600"
    >
      {{ props.error }}
    </span>
    <TransitionRoot
      leave="transition ease-in duration-100"
      leave-from="opacity-100"
      leave-to="opacity-0"
      @after-leave="query = ''"
    >
      <ComboboxOptions
        as="div"
        class="nui-slimscroll border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute z-20 mt-1 max-h-[265px] w-full overflow-auto border bg-white py-1 text-base shadow-lg outline-none sm:text-sm"
        :class="[
          shape === 'rounded' && 'rounded-lg',
          shape === 'curved' && 'rounded-xl',
          shape === 'full' && 'rounded-2xl',
        ]"
      >
        <!-- Placeholder -->
        <div
          v-if="filteredItems.length === 0 && pending"
          class="relative px-4 py-2"
        >
          <slot
            name="pending"
            v-bind="{ query, filteredItems, pending, items }"
          >
            <span
              class="text-muted-700 dark:text-muted-400 cursor-default select-none"
            >
              {{ props.i18n.pending }}
            </span>
          </slot>
        </div>
        <div v-else-if="filteredItems.length === 0" class="relative px-4 py-2">
          <slot name="empty" v-bind="{ query, filteredItems, pending, items }">
            <span
              class="text-muted-700 dark:text-muted-400 cursor-default select-none"
            >
              {{ props.i18n.empty }}
            </span>
          </slot>
        </div>
        <template v-else>
          <div v-if="'start-item' in $slots" class="relative px-2 py-1">
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
            v-slot="{ selected }"
            :key="item.name"
            class="px-2 py-1"
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
                selected,
              }"
            >
              <BaseAutocompleteItem
                :shape="shape"
                :value="
                  typeof item !== 'string'
                    ? item
                    : {
                        name: props.displayValue(item),
                      }
                "
                :selected="selected"
              />
            </slot>
          </ComboboxOption>
          <div v-if="'end-item' in $slots" class="relative px-2 py-1">
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
