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
     * Whether the button or link is in a loading state.
     */
    loading?: boolean

    /**
     * Whether the button or link is disabled.
     */
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
     * The radius of the button or link.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The size of the button.
     *
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg' | 'xl'
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

const color = useNuiDefaultProperty(props, 'BaseButtonIcon', 'color')
const rounded = useNuiDefaultProperty(props, 'BaseButtonIcon', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseButtonIcon', 'size')

const radiuses = {
  none: '',
  sm: 'nui-button-icon-rounded-sm',
  md: 'nui-button-icon-rounded-md',
  lg: 'nui-button-icon-rounded-lg',
  full: 'nui-button-icon-rounded-full',
}

const sizes = {
  sm: 'nui-button-icon-sm',
  md: 'nui-button-icon-md',
  lg: 'nui-button-icon-lg',
  xl: 'nui-button-icon-xl',
}

const colors = {
  'default': 'nui-button-icon-default',
  'default-contrast': 'nui-button-icon-default-contrast',
  'muted': 'nui-button-icon-muted',
  'muted-contrast': 'nui-button-icon-muted-contrast',
  'light': 'nui-button-icon-light',
  'dark': 'nui-button-icon-dark',
  'black': 'nui-button-icon-black',
  'primary': 'nui-button-icon-primary',
  'info': 'nui-button-icon-info',
  'success': 'nui-button-icon-success',
  'warning': 'nui-button-icon-warning',
  'danger': 'nui-button-icon-danger',
  'none': '',
}

const classes = computed(() => [
  'nui-button-icon',
  props.loading && 'nui-button-icon-loading',
  rounded.value && radiuses[rounded.value],
  size.value && sizes[size.value],
  color.value && colors[color.value],
])

const { attributes, is } = useNinjaButton(props)
</script>

<template>
  <component :is="is" v-bind="attributes" :class="classes">
    <slot v-if="!props.loading" />
    <BasePlaceload v-else class="size-4 rounded-md" />
  </component>
</template>
