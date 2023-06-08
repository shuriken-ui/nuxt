<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    /**
     * The type of button.
     */
    type?: 'button' | 'submit' | 'reset'

    /**
     * The route to navigate to when the button is clicked.
     */
    to?: RouteLocationRaw

    /**
     * Whether the button is disabled.
     */
    disabled?: boolean

    /**
     * The value for the `rel` attribute on the button.
     */
    rel?: string

    /**
     * The value for the `target` attribute on the button.
     */
    target?: string

    /**
     * The shape of the button.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

    /**
     * Whether the button is in a loading state.
     */
    loading?: boolean

    /**
     * The color of the button.
     */
    color?:
      | 'default'
      | 'muted'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'none'
  }>(),
  {
    shape: undefined,
    to: undefined,
    target: '',
    rel: '',
    color: 'default',
    type: undefined,
    disabled: false,
    loading: false,
    active: false,
    muted: false,
  }
)

const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.buttonAction
)

const shapeStyle = {
  straight: '',
  rounded: 'rounded-md',
  curved: 'rounded-lg',
  full: 'rounded-full',
}
const colorStyle = {
  info: [
    'border-info-500',
    'text-info-50',
    'bg-info-500',
    'dark:bg-info-500',
    'dark:border-info-500',
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
    'border-success-500',
    'text-success-50',
    'bg-success-500',
    'dark:bg-success-500',
    'dark:border-success-500',
    'text-white',
    'hover:enabled:bg-success-400',
    'dark:hover:enabled:bg-success-400',
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
    'border-warning-500',
    'text-warning-50',
    'bg-warning-500',
    'dark:bg-warning-500',
    'dark:border-warning-500',
    'text-white',
    'hover:enabled:bg-warning-400',
    'dark:hover:enabled:bg-warning-400',
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
    'border-danger-500',
    'text-danger-50',
    'bg-danger-500',
    'dark:bg-danger-500',
    'dark:border-danger-500',
    'text-white',
    'hover:enabled:bg-danger-400',
    'dark:hover:enabled:bg-danger-400',
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
    'border-primary-500',
    'text-primary-50',
    'bg-primary-500',
    'dark:bg-primary-500',
    'dark:border-primary-500',
    'text-white',
    'hover:enabled:bg-primary-400',
    'dark:hover:enabled:bg-primary-400',
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
  none: [''],
  default: [''],
}

const colorClass = computed(() =>
  props.color === 'default' && props.active
    ? [
        'border-primary-500',
        'text-primary-50',
        'bg-primary-500',
        'dark:bg-primary-500',
        'dark:border-primary-500',
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
        'dark:focus-visible:outline-primary-400',
        'dark:focus-within:outline-primary-400',
        'dark:focus-visible:bg-primary-500',
        'dark:active:enabled:bg-primary-500',
      ]
    : colorStyle[props.color]
)

const buttonClasses = computed(() => [
  'relative',
  'font-sans font-normal text-sm',
  'inline-flex items-center justify-center',
  'leading-5 no-underline',
  'h-8',
  'px-3 py-2 space-x-1',
  'border',
  'nui-focus',
  'transition-all duration-300',
  'disabled:opacity-60 disabled:cursor-not-allowed hover:enabled:shadow-none',
  props.loading && '!text-transparent',
  ...colorClass.value,
  shapeStyle[shape.value],
])

const { attributes, is } = useNinjaButton(props)
</script>

<template>
  <component :is="is" v-bind="attributes" :class="buttonClasses">
    <slot v-if="!props.loading"></slot>
    <BasePlaceload v-else class="h-3 w-8 rounded" />
  </component>
</template>
