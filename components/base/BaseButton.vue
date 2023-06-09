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
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

    /** Whether the button is in a loading state. */
    loading?: boolean

    /**
     * Whether the button is condensed.
     */
    condensed?: boolean
    /**
     * Adds a flat or a on hover shadow to the button.
     */
    shadow?: 'flat' | 'hover'
  }>(),
  {
    flavor: 'solid',
    color: 'default',
    shape: undefined,
    type: undefined,
    to: undefined,
    href: undefined,
    disabled: false,
    shadow: undefined,
    rel: '',
    target: '',
  }
)

const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.button)

const solidColorVariant = {
  info: [
    'bg-info-500',
    'dark:bg-info-500',
    'text-white',
    'hover:enabled:bg-info-400',
    'dark:hover:enabled:bg-info-400',
    'hover:enabled:shadow-lg',
    'hover:enabled:shadow-info-500/50',
    'dark:hover:enabled:shadow-info-800/20',
    'focus-visible:outline-info-400/70',
    'focus-within:outline-info-400/70',
    'focus-visible:bg-info-500',
    'active:enabled:bg-info-500',
    'dark:focus-visible:outline-info-400/70',
    'dark:focus-within:outline-info-400/70',
    'dark:focus-visible:bg-info-500',
    'dark:active:enabled:bg-info-500',
  ],
  success: [
    'bg-success-500',
    'dark:bg-success-500',
    'hover:enabled:bg-success-400',
    'dark:hover:enabled:bg-success-400',
    'text-white',
    'hover:enabled:shadow-lg',
    'hover:enabled:shadow-success-500/50',
    'dark:hover:enabled:shadow-success-800/20',
    'focus-visible:outline-success-400/70',
    'focus-within:outline-success-400/70',
    'focus-visible:bg-success-500',
    'active:enabled:bg-success-500',
    'dark:focus-visible:outline-success-400/70',
    'dark:focus-within:outline-success-400/70',
    'dark:focus-visible:bg-success-500',
    'dark:active:enabled:bg-success-500',
  ],
  warning: [
    'bg-warning-500',
    'dark:bg-warning-500',
    'hover:enabled:bg-warning-400',
    'dark:hover:enabled:bg-warning-400',
    'text-white',
    'hover:enabled:shadow-lg',
    'hover:enabled:shadow-warning-500/50',
    'dark:hover:enabled:shadow-warning-800/20',
    'focus-visible:outline-warning-400/70',
    'focus-within:outline-warning-400/70',
    'focus-visible:bg-warning-500',
    'active:enabled:bg-warning-500',
    'dark:focus-visible:outline-warning-400/70',
    'dark:focus-within:outline-warning-400/70',
    'dark:focus-visible:bg-warning-500',
    'dark:active:enabled:bg-warning-500',
  ],
  danger: [
    'bg-danger-500',
    'dark:bg-danger-500',
    'hover:enabled:bg-danger-400',
    'dark:hover:enabled:bg-danger-400',
    'text-white',
    'hover:enabled:shadow-lg',
    'hover:enabled:shadow-danger-500/50',
    'dark:hover:enabled:shadow-danger-800/20',
    'focus-visible:outline-danger-400/70',
    'focus-within:outline-danger-400/70',
    'focus-visible:bg-danger-500',
    'active:enabled:bg-danger-500',
    'dark:focus-visible:outline-danger-400/70',
    'dark:focus-within:outline-danger-400/70',
    'dark:focus-visible:bg-danger-500',
    'dark:active:enabled:bg-danger-500',
  ],
  primary: [
    'bg-primary-500',
    'dark:bg-primary-500',
    'hover:enabled:bg-primary-400',
    'dark:hover:enabled:bg-primary-400',
    'text-white',
    'hover:enabled:shadow-lg',
    'hover:enabled:shadow-primary-500/50',
    'dark:hover:enabled:shadow-primary-800/20',
    'focus-visible:outline-primary-400/70',
    'focus-within:outline-primary-400/70',
    'focus-visible:bg-primary-500',
    'active:enabled:bg-primary-500',
    'dark:focus-visible:outline-primary-400/70',
    'dark:focus-within:outline-primary-400/70',
    'dark:focus-visible:bg-primary-500',
    'dark:active:enabled:bg-primary-500',
  ],
  light: ['is-button-default'],
  none: [''],
}
const pastelColorVariant = {
  info: [
    'bg-info-100',
    'hover:enabled:bg-info-200',
    'text-info-500',
    'border-2',
    'border-info-100',
    'dark:border-info-500',
    'dark:bg-transparent',
    'dark:text-info-500',
    'dark:hover:enabled:bg-info-500/10',
    'focus-visible:outline-info-400/70',
    'focus-within:outline-info-400/70',
    'focus-visible:bg-info-200',
    'active:enabled:bg-info-100',
    'dark:focus-visible:outline-info-400/70',
    'dark:focus-within:outline-info-400/70',
    'dark:focus-visible:bg-info-500/10',
    'dark:active:enabled:bg-transparent',
  ],
  success: [
    'bg-success-100',
    'hover:enabled:bg-success-200',
    'text-success-500',
    'border-2',
    'border-success-100',
    'dark:border-success-500',
    'dark:bg-transparent',
    'dark:text-success-500',
    'dark:hover:enabled:bg-success-500/10',
    'focus-visible:outline-success-400/70',
    'focus-within:outline-success-400/70',
    'focus-visible:bg-success-200',
    'active:enabled:bg-success-100',
    'dark:focus-visible:outline-success-400/70',
    'dark:focus-within:outline-success-400/70',
    'dark:focus-visible:bg-success-500/10',
    'dark:active:enabled:bg-transparent',
  ],
  warning: [
    'bg-warning-100',
    'hover:enabled:bg-warning-200',
    'text-warning-500',
    'border-2',
    'border-warning-100',
    'dark:border-warning-500',
    'dark:bg-transparent',
    'dark:text-warning-500',
    'dark:hover:enabled:bg-warning-500/10',
    'focus-visible:outline-warning-400/70',
    'focus-within:outline-warning-400/70',
    'focus-visible:bg-warning-200',
    'active:enabled:bg-warning-100',
    'dark:focus-visible:outline-warning-400/70',
    'dark:focus-within:outline-warning-400/70',
    'dark:focus-visible:bg-warning-500/10',
    'dark:active:enabled:bg-transparent',
  ],
  danger: [
    'bg-danger-100',
    'hover:enabled:bg-danger-200',
    'text-danger-500',
    'border-2',
    'border-danger-100',
    'dark:border-danger-500',
    'dark:bg-transparent',
    'dark:text-danger-500',
    'dark:hover:enabled:bg-danger-500/10',
    'focus-visible:outline-danger-400/70',
    'focus-within:outline-danger-400/70',
    'focus-visible:bg-danger-200',
    'active:enabled:bg-danger-100',
    'dark:focus-visible:outline-danger-400/70',
    'dark:focus-within:outline-danger-400/70',
    'dark:focus-visible:bg-danger-500/10',
    'dark:active:enabled:bg-transparent',
  ],
  primary: [
    'bg-primary-100',
    'hover:enabled:bg-primary-200',
    'text-primary-500',
    'border-2',
    'border-primary-100',
    'dark:border-primary-500',
    'dark:bg-transparent',
    'dark:text-primary-500',
    'dark:hover:enabled:bg-primary-500/10',
    'focus-visible:outline-primary-400/70',
    'focus-within:outline-primary-400/70',
    'focus-visible:bg-primary-200',
    'active:enabled:bg-primary-100',
    'dark:focus-visible:outline-primary-400/70',
    'dark:focus-within:outline-primary-400/70',
    'dark:focus-visible:bg-primary-500/10',
    'dark:active:enabled:bg-transparent',
  ],
  light: [
    'bg-white/10',
    'hover:enabled:bg-white/20',
    'text-white',
    'border-2',
    'border-white/50',
    'dark:border-white/50',
    'dark:bg-transparent',
    'dark:text-white',
    'dark:hover:enabled:bg-white/10',
    'focus-visible:outline-white/70',
    'focus-within:outline-white/70',
    'focus-visible:bg-white/20',
    'active:enabled:bg-white/10',
    'dark:focus-visible:outline-white/70',
    'dark:focus-within:outline-white/70',
    'dark:focus-visible:bg-white/10',
    'dark:active:enabled:bg-transparent',
  ],
  none: [''],
}
const outlineColorVariant = {
  info: [
    'text-info-500',
    'hover:enabled:text-white',
    'border-2',
    'border-info-500',
    'hover:enabled:bg-info-500',
    'focus-within:outline-info-400/70',
    'focus-visible:outline-info-400/70',
    'focus-visible:bg-info-500',
    'focus-visible:text-white',
    'active:enabled:text-white',
    'active:enabled:bg-info-400',
  ],
  success: [
    'text-success-500',
    'hover:enabled:text-white',
    'border-2',
    'border-success-500',
    'hover:enabled:bg-success-500',
    'focus-within:outline-success-400/70',
    'focus-visible:outline-success-400/70',
    'focus-visible:bg-success-500',
    'focus-visible:text-white',
    'active:enabled:text-white',
    'active:enabled:bg-success-400',
  ],
  warning: [
    'text-warning-500',
    'hover:enabled:text-white',
    'border-2',
    'border-warning-500',
    'hover:enabled:bg-warning-500',
    'focus-within:outline-warning-400/70',
    'focus-visible:outline-warning-400/70',
    'focus-visible:bg-warning-500',
    'focus-visible:text-white',
    'active:enabled:text-white',
    'active:enabled:bg-warning-400',
  ],
  danger: [
    'text-danger-500',
    'hover:enabled:text-white',
    'border-2',
    'border-danger-500',
    'hover:enabled:bg-danger-500',
    'focus-within:outline-danger-400/70',
    'focus-visible:outline-danger-400/70',
    'focus-visible:bg-danger-500',
    'focus-visible:text-white',
    'active:enabled:text-white',
    'active:enabled:bg-danger-400',
  ],
  primary: [
    'text-primary-500',
    'hover:enabled:text-white',
    'border-2',
    'border-primary-500',
    'hover:enabled:bg-primary-500',
    'focus-within:outline-primary-400/70',
    'focus-visible:outline-primary-400/70',
    'focus-visible:bg-primary-500',
    'focus-visible:text-white',
    'active:enabled:text-white',
    'active:enabled:bg-primary-400',
  ],
  light: [
    'text-white',
    'hover:enabled:text-muted-700',
    'border-2',
    'border-white',
    'hover:enabled:bg-white',
    'focus-within:outline-danger-white/70',
    'focus-visible:outline-danger-white/70',
    'focus-visible:bg-white',
    'focus-visible:text-muted-700',
    'active:enabled:text-muted-700',
    'active:enabled:bg-white',
  ],
  none: [''],
}

const shapeStyle = {
  straight: '',
  rounded: 'rounded-md',
  curved: 'rounded-lg',
  full: 'rounded-full',
}

const flatShadowStyle = {
  default: '!shadow-xl !shadow-muted-300/30 dark:!shadow-muted-800/20',
  primary: '!shadow-xl !shadow-primary-500/30 dark:!shadow-primary-500/20',
  info: '!shadow-xl !shadow-info-500/30 dark:!shadow-info-500/20',
  success: '!shadow-xl !shadow-success-500/30 dark:!shadow-success-500/20',
  warning: '!shadow-xl !shadow-warning-500/30 dark:!shadow-warning-500/20',
  danger: '!shadow-xl !shadow-danger-500/30 dark:!shadow-danger-500/20',
  light: '',
  muted: '',
  none: '',
}
const hoverShadowStyle = {
  default:
    'hover:!shadow-xl hover:!shadow-muted-300/30 dark:hover:!shadow-muted-800/20',
  primary:
    'hover:!shadow-xl hover:!shadow-primary-500/30 dark:hover:!shadow-primary-500/20',
  info: 'hover:!shadow-xl hover:!shadow-info-500/30 dark:hover:!shadow-info-500/20',
  success:
    'hover:!shadow-xl hover:!shadow-success-500/30 dark:hover:!shadow-success-500/20',
  warning:
    'hover:!shadow-xl hover:!shadow-warning-500/30 dark:hover:!shadow-warning-500/20',
  danger:
    'hover:!shadow-xl hover:!shadow-danger-500/30 dark:hover:!shadow-danger-500/20',
  light: '',
  muted: '',
  none: '',
}

const colorStyle = computed(() => {
  let colors: any =
    props.flavor === 'solid'
      ? solidColorVariant
      : props.flavor === 'outline'
      ? outlineColorVariant
      : pastelColorVariant

  colors.default = ['is-button-default']
  colors.muted = [
    'border',
    'text-muted-500',
    'bg-muted-200',
    'border-muted-200',
    'dark:text-white',
    'dark:bg-muted-700',
    'dark:border-muted-700',
    'dark:hover:enabled:bg-muted-600',
    'dark:focus-visible:bg-muted-600',
    'hover:enabled:bg-muted-100',
    'focus-visible:bg-muted-100',
    'active:enabled:bg-muted-200',
    'dark:active:enabled:bg-muted-700',
  ]

  return colors
})

const classes = computed(() => [
  props.condensed ? 'is-button-condensed' : 'is-button',
  props.loading && '!text-transparent',
  shape.value && shapeStyle[shape.value],
  ...colorStyle.value[props.color],
  props.flavor === 'solid' &&
    (props.shadow === 'flat'
      ? flatShadowStyle[props.color]
      : hoverShadowStyle[props.color]),
])

const { attributes, is } = useNinjaButton(props)
</script>

<template>
  <component :is="is" v-bind="attributes" :class="classes">
    <slot v-if="!props.loading" />
    <BasePlaceload v-else class="h-4 w-12 rounded" />
  </component>
</template>
<style scoped>
.is-button {
  @apply relative font-sans font-normal text-sm no-underline inline-flex justify-center items-center leading-5 h-10 px-5 py-2 space-x-1 nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none;
}
.is-button-condensed {
  @apply relative font-sans font-normal text-sm no-underline inline-flex justify-center items-center leading-5 h-8 px-4 py-1 space-x-1 nui-focus transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none;
}
.is-button-default {
  @apply text-muted-700 bg-white border border-muted-300 dark:text-white dark:bg-muted-700 dark:border-muted-600 dark:hover:enabled:bg-muted-600 dark:focus-visible:bg-muted-600 dark:active:enabled:bg-muted-700 hover:enabled:bg-muted-50 focus-visible:bg-muted-50 active:enabled:bg-white;
}
</style>
