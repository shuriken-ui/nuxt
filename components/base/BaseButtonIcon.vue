<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    /**
     * The type of button.
     * If this is not set and the `to` property is set, the component will be treated as a link.
     */
    type?: 'button' | 'submit' | 'reset'

    /**
     * The route to navigate to when the button or link is clicked.
     * If this is set and the `type` property is not set, the component will be treated as a link.
     */
    to?: RouteLocationRaw

    /** Using href instead of to result in a native anchor with no router functionality. */
    href?: string

    /**
     * Whether the button or link is disabled.
     */
    disabled?: boolean

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
     * The shape of the button or link.
     */
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'

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

    /**
     * The size of the button.
     */
    size?: 'sm' | 'md' | 'lg'

    /**
     * Whether the button or link is in a loading state.
     */
    loading?: boolean
  }>(),
  {
    color: 'default',
    shape: undefined,
    to: undefined,
    href: undefined,
    type: undefined,
    rel: '',
    target: '',
    loading: false,
    condensed: false,
    size: 'md',
  },
)
const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.buttonIcon,
)

const shapeStyle = {
  straight: '',
  rounded: 'nui-button-rounded',
  smooth: 'nui-button-smooth',
  curved: 'nui-button-curved',
  full: 'nui-button-full',
}
const sizeStyle = {
  sm: 'nui-button-small',
  md: 'nui-button-medium',
  lg: 'nui-button-large',
}
const colorStyle = {
  default: 'nui-button-default',
  muted: 'nui-button-muted',
  primary: 'nui-button-primary',
  info: 'nui-button-info',
  success: 'nui-button-success',
  warning: 'nui-button-warning',
  danger: 'nui-button-danger',
  none: '',
}

const classes = computed(() => [
  'nui-button-icon',
  props.loading && 'nui-button-loading',
  shape.value && shapeStyle[shape.value],
  sizeStyle[props.size],
  colorStyle[props.color],
])

const { attributes, is } = useNinjaButton(props)
</script>

<template>
  <component :is="is" v-bind="attributes" :class="classes">
    <slot v-if="!props.loading"></slot>
    <BasePlaceload v-else class="h-4 w-4 rounded-md" />
  </component>
</template>
