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
  sm: 'nui-button-action-rounded-sm',
  md: 'nui-button-action-rounded-md',
  lg: 'nui-button-action-rounded-lg',
  full: 'nui-button-action-rounded-full',
}

const colors = {
  'default': 'nui-button-action-default',
  'default-contrast': 'nui-button-action-default-contrast',
  'muted': 'nui-button-action-muted',
  'muted-contrast': 'nui-button-action-muted-contrast',
  'light': 'nui-button-action-light',
  'dark': 'nui-button-action-dark',
  'black': 'nui-button-action-black',
  'primary': 'nui-button-action-primary',
  'info': 'nui-button-action-info',
  'success': 'nui-button-action-success',
  'warning': 'nui-button-action-warning',
  'danger': 'nui-button-action-danger',
  'none': '',
}

const classes = computed(() => [
  'nui-button-action',
  props.loading && 'nui-button-action-loading',
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
