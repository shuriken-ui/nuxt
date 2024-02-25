<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import { Float } from '@headlessui-float/vue'

const props = withDefaults(
  defineProps<{
    /**
     * The variant of the dropdown.
     *
     * @since 2.0.0
     * @default 'button'
     */
    variant?: 'button' | 'context' | 'text'

    /**
     * The color of the button.
     *
     * @default 'default'
     */
    buttonColor?:
      | 'default'
      | 'default-contrast'
      | 'muted'
      | 'muted-contrast'
      | 'light'
      | 'dark'
      | 'black'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'none'

    /**
     * The color of the dropdown.
     *
     * @default 'default'
     */
    color?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'none'

    /**
     * The radius of the dropdown button.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The orientation of the dropdown.
     *
     * @deprecated use placement instead
     */
    orientation?: 'start' | 'end'

    /**
     * The placement of the dropdown via floating-ui.
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
     * The size of the dropdown.
     *
     * @default 'md'
     */
    size?: 'md' | 'lg'

    /**
     * The label to display for the dropdown.
     */
    label?: string

    /**
     * The header label to display for the dropdown.
     */
    headerLabel?: string

    /**
     * Used a fixed strategy to float the component
     */
    fixed?: boolean

    /**
     * Optional CSS classes to apply to the component inner elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the menu element.
       */
      menu?: string | string[]

      /**
       * CSS classes to apply to the header element.
       */
      header?: string | string[]

      /**
       * CSS classes to apply to the content element.
       */
      content?: string | string[]
    }
  }>(),
  {
    variant: undefined,
    buttonColor: undefined,
    color: undefined,
    rounded: undefined,
    orientation: undefined,
    placement: undefined,
    size: undefined,
    label: '',
    headerLabel: undefined,
    fixed: false,
    classes: () => ({}),
  },
)

const variant = useNuiDefaultProperty(props, 'BaseDropdown', 'variant')
const buttonColor = useNuiDefaultProperty(props, 'BaseDropdown', 'buttonColor')
const color = useNuiDefaultProperty(props, 'BaseDropdown', 'color')
const rounded = useNuiDefaultProperty(props, 'BaseDropdown', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseDropdown', 'size')
const placement = useNuiDefaultProperty(props, 'BaseDropdown', 'placement')

const sizes = {
  md: 'nui-menu-md',
  lg: 'nui-menu-lg',
} as Record<string, string>

const radiuses = {
  none: '',
  sm: 'nui-menu-rounded-sm',
  md: 'nui-menu-rounded-md',
  lg: 'nui-menu-rounded-lg',
  full: 'nui-menu-rounded-lg',
} as Record<string, string>

const buttonColors = {
  none: '',
  default: 'nui-button-default',
  'default-contrast': 'nui-button-default-contrast',
  primary: 'nui-button-primary',
  info: 'nui-button-info',
  success: 'nui-button-success',
  warning: 'nui-button-warning',
  danger: 'nui-button-danger',
  muted: 'nui-button-muted',
  'muted-contrast': 'nui-button-muted-contrast',
  light: 'nui-button-light',
  dark: 'nui-button-dark',
  black: 'nui-button-black',
} as Record<string, string>

const colors = {
  default: 'nui-menu-default',
  'default-contrast': 'nui-menu-default-contrast',
  muted: 'nui-menu-muted',
  'muted-contrast': 'nui-menu-muted-contrast',
  primary: 'nui-menu-primary',
  info: 'nui-menu-info',
  success: 'nui-menu-success',
  warning: 'nui-menu-warning',
  danger: 'nui-menu-danger',
  none: '',
} as Record<string, string>

/**
 * fallback placement with old orientation value
 * @todo remove this on next major version
 */
const placementValue = computed(() => {
  if (placement.value) {
    return placement.value
  }

  return props.orientation === 'end' ? 'bottom-end' : 'bottom-start'
})
</script>

<template>
  <div class="nui-dropdown" :class="props.classes?.wrapper">
    <Menu
      v-slot="{ open, close }: { open: boolean; close: () => void }"
      as="div"
      class="nui-menu"
    >
      <Float
        enter="transition duration-100 ease-out"
        enter-from="transform scale-95 opacity-0"
        enter-to="transform scale-100 opacity-100"
        leave="transition duration-75 ease-in"
        leave-from="transform scale-100 opacity-100"
        leave-to="transform scale-95 opacity-0"
        flip
        :offset="props.variant === 'context' ? 6 : 4"
        :strategy="props.fixed ? 'fixed' : 'absolute'"
        :placement="placementValue"
        :adaptive-width="props.fixed"
        :z-index="20"
      >
        <MenuButton as="template">
          <slot name="button" v-bind="{ open, close }">
            <BaseButton
              v-if="variant === 'button' || props.variant === 'button'"
              :color="props.buttonColor ? props.buttonColor : buttonColor"
              :rounded="props.rounded ? props.rounded : rounded"
              class="!pe-3 !ps-4"
            >
              <slot name="label" v-bind="{ open, close }">
                <span>{{ props.label }}</span>
              </slot>
              <Icon
                name="lucide:chevron-down"
                class="nui-chevron"
                :class="open && 'rotate-180'"
              />
            </BaseButton>
            <button
              v-else-if="props.variant === 'context'"
              type="button"
              class="nui-context-button nui-focus"
            >
              <span class="nui-context-button-inner">
                <Icon
                  name="lucide:more-horizontal"
                  class="nui-context-icon"
                  :class="open && 'rotate-90'"
                />
              </span>
            </button>
            <button
              v-else-if="props.variant === 'text'"
              type="button"
              class="nui-text-button nui-focus"
            >
              <slot name="label" v-bind="{ open, close }">
                <span class="nui-text-button-inner">{{ props.label }}</span>
              </slot>

              <Icon
                name="lucide:chevron-down"
                class="nui-chevron"
                :class="open && 'rotate-180'"
              />
            </button>
          </slot>
        </MenuButton>

        <MenuItems
          class="nui-dropdown-menu"
          :class="[
            size && sizes[size],
            rounded && radiuses[rounded],
            color && colors[color],
            props.classes?.menu,
          ]"
        >
          <div
            v-if="props.headerLabel"
            class="nui-menu-header"
            :class="props.classes?.header"
          >
            <div class="nui-menu-header-inner">
              <h4 class="nui-menu-header-title">
                {{ props.headerLabel }}
              </h4>
            </div>
          </div>
          <div class="nui-menu-content" :class="props.classes?.content">
            <slot v-bind="{ open, close }"></slot>
          </div>
        </MenuItems>
      </Float>
    </Menu>
  </div>
</template>

<style scoped>
.nui-dropdown .nui-dropdown-menu {
  position: unset;
  margin-top: unset;
}
</style>
