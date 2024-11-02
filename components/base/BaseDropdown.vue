<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import { Float, type FloatProps } from '@headlessui-float/vue'

const props = withDefaults(
  defineProps<{
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
     * Used a fixed strategy to float the component
     */
    disabled?: boolean

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
     * The size of the button.
     *
     * @default 'md'
     */
    buttonSize?: 'sm' | 'md' | 'lg' | 'xl'

    /**
     * The color of the dropdown.buttonSize
     *
     * @default 'default'
     */
    color?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'none'

    /**
     * The placement of the dropdown via floating-ui.
     *
     * @default 'bottom-start'
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
     * The radius of the dropdown button.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The size of the dropdown.
     *
     * @default 'md'
     */
    size?: 'md' | 'lg'

    /**
     * The variant of the dropdown.
     *
     * @since 2.0.0
     * @default 'button'
     */
    variant?: 'button' | 'context' | 'text'

    /**
     * Optional CSS classes to apply to the component inner elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the headless ui menu element.
       */
      menuWrapper?: string | string[]

      /**
       * CSS classes to apply to the dropdown menu element.
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
    /**
     * Optional options for the underlying float component.
     */
    floatOptions?: FloatProps
  }>(),
  {
    variant: undefined,
    buttonColor: undefined,
    buttonSize: undefined,
    color: undefined,
    rounded: undefined,
    orientation: undefined,
    placement: undefined,
    size: undefined,
    label: '',
    headerLabel: undefined,
    fixed: false,
    classes: () => ({}),
    floatOptions: () => ({}),
  },
)

const buttonColor = useNuiDefaultProperty(props, 'BaseDropdown', 'buttonColor')
const buttonSize = useNuiDefaultProperty(props, 'BaseDropdown', 'buttonSize')
const color = useNuiDefaultProperty(props, 'BaseDropdown', 'color')
const placement = useNuiDefaultProperty(props, 'BaseDropdown', 'placement')
const rounded = useNuiDefaultProperty(props, 'BaseDropdown', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseDropdown', 'size')
const variant = useNuiDefaultProperty(props, 'BaseDropdown', 'variant')

const sizes = {
  md: 'nui-menu-md',
  lg: 'nui-menu-lg',
}

const radiuses = {
  none: '',
  sm: 'nui-menu-rounded-sm',
  md: 'nui-menu-rounded-md',
  lg: 'nui-menu-rounded-lg',
  full: 'nui-menu-rounded-lg',
}

const colors = {
  'default': 'nui-menu-default',
  'default-contrast': 'nui-menu-default-contrast',
  'muted': 'nui-menu-muted',
  'muted-contrast': 'nui-menu-muted-contrast',
  'primary': 'nui-menu-primary',
  'info': 'nui-menu-info',
  'success': 'nui-menu-success',
  'warning': 'nui-menu-warning',
  'danger': 'nui-menu-danger',
  'none': '',
}

const textColors = {
  'default': 'text-inherit',
  'default-contrast': 'text-inherit',
  'muted': 'text-muted-500',
  'muted-contrast': 'text-muted-500',
  'primary': 'text-primary-500',
  'info': 'text-info-500',
  'success': 'text-success-500',
  'warning': 'text-warning-500',
  'danger': 'text-danger-500',
  'light': 'text-muted-100',
  'dark': 'text-muted-900 dark:text-muted-100',
  'black': 'text-black dark:text-white',
  'none': '',
}
</script>

<template>
  <div class="nui-dropdown" :class="props.classes?.wrapper">
    <Menu
      v-slot="{ open, close }: { open: boolean; close: () => void }"
      as="div"
      class="nui-menu"
      :class="props.classes?.menuWrapper"
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
        :placement="placement"
        :adaptive-width="props.fixed"
        :z-index="20"
        v-bind="floatOptions"
      >
        <MenuButton as="template" :disabled="props.disabled">
          <slot name="button" v-bind="{ open, close }">
            <BaseButton
              v-if="variant === 'button' || props.variant === 'button'"
              :size="props.buttonSize ? props.buttonSize : buttonSize"
              :color="props.buttonColor ? props.buttonColor : buttonColor"
              :rounded="props.rounded ? props.rounded : rounded"
              :disabled="props.disabled"
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
              :disabled="props.disabled"
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
              :disabled="props.disabled"
              class="nui-text-button nui-focus" :class="[
                buttonColor && textColors[buttonColor],
              ]"
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
            <slot v-bind="{ open, close }" />
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
