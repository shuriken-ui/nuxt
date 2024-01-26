<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    /**
     * The route to navigate to when the button or link is clicked.
     * If this is set and the `type` property is not set, the component will be treated as a link.
     */
    to?: RouteLocationRaw

    /** Using href instead of to result in a native anchor with no router functionality. */
    href?: string

    /**
     * The value for the `rel` attribute on the button or link.
     * This property is only relevant for links.
     */
    rel?: string

    /**
     * The value for the `target` attribute on the button or link.
     * This property is only relevant for links.
     */
    target?: string

    /**
     * The type of button.
     * If this is not set and the `to` property is set, the component will be treated as a link.
     */
    type?: 'button' | 'submit' | 'reset'

    /**
     * The size of the button.
     *
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg'

    /**
     * The color of the button.
     *
     * @default 'default'
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

    /**
     * The radius of the button or link.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * Whether the button or link is in a loading state.
     */
    loading?: boolean

    /**
     * Whether the button or link is disabled.
     */
    disabled?: boolean
  }>(),
  {
    to: undefined,
    href: undefined,
    rel: '',
    target: '',
    type: undefined,
    size: undefined,
    color: undefined,
    rounded: undefined,
  },
)

const rounded = useNuiDefaultProperty(props, 'BaseButtonIcon', 'rounded')
const color = useNuiDefaultProperty(props, 'BaseButtonIcon', 'color')
const size = useNuiDefaultProperty(props, 'BaseButtonIcon', 'size')

const radiuses = {
  none: '',
  sm: 'nui-button-rounded',
  md: 'nui-button-smooth',
  lg: 'nui-button-curved',
  full: 'nui-button-full',
} as Record<string, string>

const sizes = {
  sm: 'nui-button-small',
  md: 'nui-button-medium',
  lg: 'nui-button-large',
} as Record<string, string>

const colors = {
  default: 'nui-button-default',
  muted: 'nui-button-muted',
  primary: 'nui-button-primary',
  info: 'nui-button-info',
  success: 'nui-button-success',
  warning: 'nui-button-warning',
  danger: 'nui-button-danger',
  none: '',
} as Record<string, string>

const classes = computed(() => [
  'nui-button-icon',
  props.loading && 'nui-button-loading',
  rounded.value && radiuses[rounded.value],
  size.value && sizes[size.value],
  color.value && colors[color.value],
])

const { attributes, is } = useNinjaButton(props)
</script>

<template>
  <component :is="is" v-bind="attributes" :class="classes">
    <slot v-if="!props.loading"></slot>
    <BasePlaceload v-else class="size-4 rounded-md" />
  </component>
</template>
