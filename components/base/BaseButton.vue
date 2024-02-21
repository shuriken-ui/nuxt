<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    /** The location to which the button should navigate when clicked. This is only applicable if the button is a link. */
    to?: RouteLocationRaw

    /** Using href instead of to result in a native anchor with no router functionality. */
    href?: string

    /** The value of the 'rel' attribute of the button. This attribute is used to specify the relationship of the linked document with the current document. */
    rel?: string

    /** The value of the 'target' attribute of the button. This attribute is used to specify where to open the linked document. */
    target?: string

    /** The type of the button. */
    type?: 'button' | 'submit' | 'reset'

    /**
     * The size of the button
     *
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg' | 'xl'

    /**
     * The variant of the button..
     *
     * @since 2.0.0
     * @default 'solid'
     */
    variant?: 'solid' | 'outline' | 'pastel'

    /**
     * The color of the button.
     *
     * @default 'default'
     */
    color?:
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
     * The radius of the button.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * Adds a flat or a on hover shadow to the button.
     */
    shadow?: 'flat' | 'hover'

    /** The button badge indicator */
    badge?: boolean

    /** Add a pulse animation on the badge */
    badgePulse?: boolean

    /** Whether the button is in a loading state. */
    loading?: boolean

    /** Whether the button should be disabled. */
    disabled?: boolean
  }>(),
  {
    to: undefined,
    href: undefined,
    rel: '',
    target: '',
    type: undefined,
    size: undefined,
    variant: undefined,
    color: undefined,
    rounded: undefined,
    shadow: undefined,
  },
)

const variant = useNuiDefaultProperty(props, 'BaseButton', 'variant')
const rounded = useNuiDefaultProperty(props, 'BaseButton', 'rounded')
const color = useNuiDefaultProperty(props, 'BaseButton', 'color')
const size = useNuiDefaultProperty(props, 'BaseButton', 'size')

const badgeColors = {
  primary: 'nui-badge-primary',
  info: 'nui-badge-info',
  success: 'nui-badge-success',
  warning: 'nui-badge-warning',
  danger: 'nui-badge-danger',
  none: '',
  default: '',
  light: '',
  muted: '',
} as Record<string, string>

const sizes = {
  sm: 'nui-button-small',
  md: 'nui-button-medium',
  lg: 'nui-button-large',
  xl: 'nui-button-big',
} as Record<string, string>

const radiuses = {
  none: '',
  sm: 'nui-button-rounded-sm',
  md: 'nui-button-rounded-md',
  lg: 'nui-button-rounded-lg',
  full: 'nui-button-rounded-full',
} as Record<string, string>

const variants = {
  solid: 'nui-button-solid',
  pastel: 'nui-button-pastel',
  outline: 'nui-button-outline',
} as Record<string, string>

const colors = {
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

const shadows = {
  flat: 'nui-button-shadow',
  hover: 'nui-button-shadow-hover',
}

const badges = computed(() => {
  const value = toValue(color)
  if (!value) return ''

  return props.badge && ['default', 'light', 'muted', 'none'].includes(value)
    ? ''
    : `${badgeColors[value]}`
})

const classes = computed(() => [
  'nui-button',
  props.loading && 'nui-button-loading',
  size.value && sizes[size.value],
  rounded.value && radiuses[rounded.value],
  variant.value && variants[variant.value],
  color.value && colors[color.value],
  props.shadow && shadows[props.shadow],
])

const { attributes, is } = useNinjaButton(props)
</script>

<template>
  <component :is="is" v-bind="attributes" :class="classes">
    <slot v-if="!props.loading" />
    <BasePlaceload v-else class="h-4 w-12 rounded" />
    <span v-if="props.badge" class="nui-button-badge" :class="badges">
      <span v-if="props.badgePulse" class="nui-button-badge-pulse"></span>
      <span class="nui-button-badge-inner"></span>
    </span>
  </component>
</template>
