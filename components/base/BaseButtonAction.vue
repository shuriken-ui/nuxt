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

    /** Using href instead of to result in a native anchor with no router functionality. */
    href?: string

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
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'

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
    href: undefined,
    target: '',
    rel: '',
    color: 'default',
    type: undefined,
    disabled: false,
    loading: false,
    active: false,
    muted: false,
  },
)

const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.buttonAction,
)

const shapeStyle = {
  straight: '',
  rounded: 'nui-button-rounded',
  smooth: 'nui-button-smooth',
  curved: 'nui-button-curved',
  full: 'nui-button-full',
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
  'nui-button-action',
  props.loading && 'nui-button-loading',
  colorStyle[props.color],
  shape.value && shapeStyle[shape.value],
])

const { attributes, is } = useNinjaButton(props)
</script>

<template>
  <component :is="is" v-bind="attributes" :class="classes">
    <slot v-if="!props.loading"></slot>
    <BasePlaceload v-else class="h-3 w-8 rounded" />
  </component>
</template>
