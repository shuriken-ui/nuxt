<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
import { Float } from '@headlessui-float/vue'

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
     * The color of the dropdown.
     */
    color?:
      | 'white'
      | 'white-contrast'
      | 'muted'
      | 'muted-contrast'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'none'

    /**
     * The shape of the dropdown.
     */
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'

    /**
     * The orientation of the dropdown.
     *
     * @deprecated use placement instead
     */
    orientation?: 'start' | 'end'
    /**
     * Used a fixed strategy to float the component
     */
    fixed?: boolean

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
  }>(),
  {
    flavor: 'button',
    buttonColor: 'default',
    shape: undefined,
    orientation: 'start',
    placement: undefined,
    size: 'md',
    color: 'white',
    label: '',
    headerLabel: undefined,
    fixed: false,
  },
)

const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.dropdown,
)

const sizeStyle = {
  md: 'nui-menu-md',
  lg: 'nui-menu-lg',
}
const shapeStyle = {
  straight: '',
  rounded: 'nui-menu-rounded',
  smooth: 'nui-menu-smooth',
  curved: 'nui-menu-curved',
  full: 'nui-menu-curved',
}
const colorStyle = {
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
}

/**
 * fallback placement with old orientation value
 * @todo remove this on next major version
 */
const placementValue = computed(() => {
  if (props.placement) {
    return props.placement
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
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
        flip
        :offset="props.flavor === 'context' ? 6 : 4"
        :strategy="props.fixed ? 'fixed' : 'absolute'"
        :placement="placementValue"
        :adaptive-width="props.fixed"
        :z-index="20"
      >
        <MenuButton as="template">
          <slot name="button" v-bind="{ open, close }">
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
                class="nui-chevron"
                :class="open && 'rotate-180'"
              />
            </BaseButton>
            <button
              v-else-if="props.flavor === 'context'"
              type="button"
              class="nui-context-button"
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
              v-else-if="props.flavor === 'text'"
              type="button"
              class="nui-text-button"
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
            shape && shapeStyle[shape],
            sizeStyle[props.size],
            colorStyle[props.color],
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
