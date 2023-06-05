<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

const props = withDefaults(
  defineProps<{
    /**
     * The flavor of the dropdown.
     */
    flavor?: 'button' | 'context' | 'text'

    /**
     * The color of the button.
     */
    buttonColor?:
      | 'default'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'light'
      | 'muted'
      | 'none'

    /**
     * The shape of the dropdown.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

    /**
     * The orientation of the dropdown.
     */
    orientation?: 'start' | 'end'

    /**
     * The label to display for the dropdown.
     */
    label?: string

    /**
     * The header label to display for the dropdown.
     */
    headerLabel?: string

    /**
     * Whether the dropdown is condensed.
     */
    condensed?: boolean
  }>(),
  {
    flavor: 'button',
    buttonColor: 'default',
    shape: undefined,
    orientation: 'start',
    label: '',
    headerLabel: undefined,
    condensed: false,
  }
)
const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.dropdown
)
</script>

<template>
  <div
    class="group/nui-dropdown inline-flex items-center justify-center text-right"
  >
    <Menu
      v-slot="{ open, close }: { open: boolean, close: () => void }"
      as="div"
      class="relative text-left"
      :class="props.flavor === 'context' && 'w-9 h-9'"
    >
      <MenuButton as="template">
        <div>
          <BaseButton
            v-if="props.flavor === 'button'"
            :color="props.buttonColor"
            :shape="shape"
            class="!pe-3 !ps-4"
          >
            <slot name="label" v-bind="{ open, close }">
              <span>{{ props.label }}</span>
            </slot>
            <Icon
              name="lucide:chevron-down"
              class="h-4 w-4 transition-transform duration-300"
              :class="[
                open && 'rotate-180',
                props.buttonColor === 'default'
                  ? 'text-muted-400'
                  : 'text-white',
              ]"
            />
          </BaseButton>
          <button
            v-else-if="props.flavor === 'context'"
            type="button"
            class="group-hover/nui-dropdown:ring-muted-200 dark:group-hover/nui-dropdown:ring-muted-700/70 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover/nui-dropdown:ring-offset-4"
          >
            <span
              class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex h-9 w-9 items-center justify-center rounded-full border bg-white"
            >
              <Icon
                name="lucide:more-horizontal"
                class="text-muted-400 h-5 w-5 transition-transform duration-300"
                :class="open && 'rotate-90'"
              />
            </span>
          </button>
          <button
            v-else-if="props.flavor === 'text'"
            type="button"
            class="flex items-center space-x-1"
          >
            <slot name="label" v-bind="{ open, close }">
              <span class="text-muted-400 font-sans">{{ props.label }}</span>
            </slot>

            <Icon
              name="lucide:chevron-down"
              class="text-muted-400 h-4 w-4 transition-transform duration-300"
              :class="open && 'rotate-180'"
            />
          </button>
        </div>
      </MenuButton>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute z-10 mt-2 border bg-white shadow-lg focus:outline-none"
          :class="[
            props.orientation === 'start'
              ? 'start-0 origin-top-left'
              : 'end-0 origin-top-right',
            shape === 'rounded' && 'rounded-md',
            shape === 'curved' && 'rounded-xl',
            shape === 'full' && 'rounded-xl',
            props.condensed ? 'w-56' : 'w-72',
          ]"
        >
          <div v-if="props.headerLabel" class="px-4 pt-5">
            <div class="relative flex items-center justify-between">
              <h4
                class="font-heading text-muted-500 dark:text-muted-200 text-xs uppercase"
              >
                {{ props.headerLabel }}
              </h4>
            </div>
          </div>
          <div class="p-2">
            <slot v-bind="{ open, close }"></slot>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>
