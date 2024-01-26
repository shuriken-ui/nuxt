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
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'light'
      | 'muted'
      | 'none'

    /**
     * The color of the dropdown.
     *
     * @default 'white'
     */
    color?: 'white' | 'white-contrast' | 'muted' | 'muted-contrast' | 'none'

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
  sm: 'nui-menu-rounded',
  md: 'nui-menu-smooth',
  lg: 'nui-menu-curved',
  full: 'nui-menu-curved',
} as Record<string, string>

const buttonColors = {
  none: '',
  default: 'nui-button-default',
  primary: 'nui-button-primary',
  info: 'nui-button-info',
  success: 'nui-button-success',
  warning: 'nui-button-warning',
  danger: 'nui-button-danger',
  light: 'nui-button-light',
  muted: 'nui-button-muted',
} as Record<string, string>

const colors = {
  white: 'nui-menu-white',
  'white-contrast': 'nui-menu-white-contrast',
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
  <div class="nui-dropdown">
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
          ]"
        >
          <div v-if="props.headerLabel" class="nui-menu-header">
            <div class="nui-menu-header-inner">
              <h4 class="nui-menu-header-title">
                {{ props.headerLabel }}
              </h4>
            </div>
          </div>
          <div class="nui-menu-content">
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
