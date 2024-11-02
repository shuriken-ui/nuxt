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

const color = useNuiDefaultProperty(props, 'BaseButton', 'color')
const rounded = useNuiDefaultProperty(props, 'BaseButton', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseButton', 'size')
const variant = useNuiDefaultProperty(props, 'BaseButton', 'variant')

const badgeColors = {
  'primary': 'nui-badge-primary',
  'info': 'nui-badge-info',
  'success': 'nui-badge-success',
  'warning': 'nui-badge-warning',
  'danger': 'nui-badge-danger',
  'none': '',
  'default': '',
  'default-contrast': '',
  'light': '',
  'dark': '',
  'black': '',
  'muted': '',
  'muted-contrast': '',
}

const sizes = {
  sm: 'nui-button-sm',
  md: 'nui-button-md',
  lg: 'nui-button-lg',
  xl: 'nui-button-xl',
}

const radiuses = {
  none: '',
  sm: 'nui-button-rounded-sm',
  md: 'nui-button-rounded-md',
  lg: 'nui-button-rounded-lg',
  full: 'nui-button-rounded-full',
}

const variants = {
  solid: 'nui-button-solid',
  pastel: 'nui-button-pastel',
  outline: 'nui-button-outline',
}

const colors = {
  'none': '',
  'default': 'nui-button-default',
  'default-contrast': 'nui-button-default-contrast',
  'primary': 'nui-button-primary',
  'info': 'nui-button-info',
  'success': 'nui-button-success',
  'warning': 'nui-button-warning',
  'danger': 'nui-button-danger',
  'muted': 'nui-button-muted',
  'muted-contrast': 'nui-button-muted-contrast',
  'light': 'nui-button-light',
  'dark': 'nui-button-dark',
  'black': 'nui-button-black',
}

const shadows = {
  flat: 'nui-button-shadow',
  hover: 'nui-button-shadow-hover',
}

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
    <span
      v-if="props.badge"
      class="nui-button-badge"
      :class="badgeColors[color]"
    >
      <span v-if="props.badgePulse" class="nui-button-badge-pulse" />
      <span class="nui-button-badge-inner" />
    </span>
  </component>
</template>
