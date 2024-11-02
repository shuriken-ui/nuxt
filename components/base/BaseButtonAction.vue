<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    /**
     * The route to navigate to when the button is clicked.
     */
    to?: RouteLocationRaw

    /** Using href instead of to result in a native anchor with no router functionality. */
    href?: string

    /**
     * The value for the `rel` attribute on the button.
     */
    rel?: string

    /**
     * The value for the `target` attribute on the button.
     */
    target?: string

    /**
     * The type of button.
     */
    type?: 'button' | 'submit' | 'reset'

    /**
     * Whether the button is in a loading state.
     */
    loading?: boolean

    /**
     * Whether the button is disabled.
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
     * The radius of the button.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  }>(),
  {
    to: undefined,
    href: undefined,
    rel: '',
    target: '',
    type: undefined,
    color: undefined,
    rounded: undefined,
  },
)

const color = useNuiDefaultProperty(props, 'BaseButtonAction', 'color')
const rounded = useNuiDefaultProperty(props, 'BaseButtonAction', 'rounded')

const radiuses = {
  none: '',
  sm: 'nui-button-rounded-sm',
  md: 'nui-button-rounded-md',
  lg: 'nui-button-rounded-lg',
  full: 'nui-button-rounded-full',
}

const colors = {
  'default': 'nui-button-default',
  'default-contrast': 'nui-button-default-contrast',
  'muted': 'nui-button-muted',
  'muted-contrast': 'nui-button-muted-contrast',
  'light': 'nui-button-light',
  'dark': 'nui-button-dark',
  'black': 'nui-button-black',
  'primary': 'nui-button-primary',
  'info': 'nui-button-info',
  'success': 'nui-button-success',
  'warning': 'nui-button-warning',
  'danger': 'nui-button-danger',
  'none': '',
}

const classes = computed(() => [
  'nui-button-action',
  props.loading && 'nui-button-loading',
  color.value && colors[color.value],
  rounded.value && radiuses[rounded.value],
])

const { attributes, is } = useNinjaButton(props)
</script>

<template>
  <component :is="is" v-bind="attributes" :class="classes">
    <slot v-if="!props.loading" />
    <BasePlaceload v-else class="h-3 w-8 rounded" />
  </component>
</template>
