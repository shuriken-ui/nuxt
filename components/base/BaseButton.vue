<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    /** The type of the button. Can be 'button', 'submit', or 'reset'. */
    type?: 'button' | 'submit' | 'reset'

    /** The location to which the button should navigate when clicked. This is only applicable if the button is a link. */
    to?: RouteLocationRaw

    /** Using href instead of to result in a native anchor with no router functionality. */
    href?: string

    /** Whether the button should be disabled. */
    disabled?: boolean

    /** The value of the 'rel' attribute of the button. This attribute is used to specify the relationship of the linked document with the current document. */
    rel?: string

    /** The value of the 'target' attribute of the button. This attribute is used to specify where to open the linked document. */
    target?: string

    /** The size of the button */
    size?: 'sm' | 'md' | 'lg' | 'xl'

    /** The flavor of the button. Can be 'solid', 'outline', or 'pastel'. */
    flavor?: 'solid' | 'outline' | 'pastel'

    /** The color of the button. Can be 'default', 'primary', 'info', 'success', 'warning', 'danger', or 'none. */
    color?:
      | 'default'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'light'
      | 'muted'
      | 'none'

    /** The shape of the button. Can be 'straight', 'rounded', 'curved', or 'full'. */
    shape?: 'straight' | 'rounded' | 'curved' | 'smooth' | 'full'

    /** Whether the button is in a loading state. */
    loading?: boolean

    /** The badge indicator */
    badge?: boolean

    /** Add a pulse animation on the badge */
    badgePulse?: boolean

    /**
     * Adds a flat or a on hover shadow to the button.
     */
    shadow?: 'flat' | 'hover'
  }>(),
  {
    flavor: 'solid',
    color: 'default',
    size: 'md',
    shape: undefined,
    type: undefined,
    to: undefined,
    href: undefined,
    disabled: false,
    badge: false,
    badgePulse: false,
    shadow: undefined,
    rel: '',
    target: '',
  },
)

const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.button)

const badgeColorStyle = {
  primary: 'nui-badge-primary',
  info: 'nui-badge-info',
  success: 'nui-badge-success',
  warning: 'nui-badge-warning',
  danger: 'nui-badge-danger',
  none: '',
  default: '',
  light: '',
  muted: '',
}
const sizeStyle = {
  sm: 'nui-button-small',
  md: 'nui-button-medium',
  lg: 'nui-button-large',
  xl: 'nui-button-big',
}
const shapeStyle = {
  straight: '',
  rounded: 'nui-button-rounded',
  curved: 'nui-button-curved',
  smooth: 'nui-button-smooth',
  full: 'nui-button-full',
}
const flavorStyle = {
  solid: 'nui-button-solid',
  pastel: 'nui-button-pastel',
  outline: 'nui-button-outline',
}
const colorStyle = {
  none: '',
  default: 'nui-button-default',
  primary: 'nui-button-primary',
  info: 'nui-button-info',
  success: 'nui-button-success',
  warning: 'nui-button-warning',
  danger: 'nui-button-danger',
  light: 'nui-button-light',
  muted: 'nui-button-muted',
}
const shadowStyle = {
  flat: 'nui-button-shadow',
  hover: 'nui-button-shadow-hover',
}

const badgeStyle = computed(() =>
  props.badge && ['default', 'light', 'muted', 'none'].includes(props.color)
    ? ''
    : `nui-button-badge ${badgeColorStyle[props.color]}`,
)

const classes = computed(() => [
  'nui-button',
  props.loading && 'nui-button-loading',
  sizeStyle[props.size],
  shape.value && shapeStyle[shape.value],
  flavorStyle[props.flavor],
  colorStyle[props.color],
  props.shadow && shadowStyle[props.shadow],
])

const { attributes, is } = useNinjaButton(props)
</script>

<template>
  <component :is="is" v-bind="attributes" :class="classes">
    <slot v-if="!props.loading" />
    <BasePlaceload v-else class="h-4 w-12 rounded" />
    <span v-if="props.badge" :class="badgeStyle">
      <span v-if="props.badgePulse" class="nui-button-badge-pulse"></span>
      <span class="nui-button-badge-inner"></span>
    </span>
  </component>
</template>
