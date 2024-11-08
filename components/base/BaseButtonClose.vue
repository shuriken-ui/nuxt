<script setup lang="ts">
const props = withDefaults(
  defineProps<{
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
     * @default 'full'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The size of the button.
     *
     * @default 'sm'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  }>(),
  {
    size: undefined,
    rounded: undefined,
    color: undefined,
  },
)

const color = useNuiDefaultProperty(props, 'BaseButtonClose', 'color')
const rounded = useNuiDefaultProperty(props, 'BaseButtonClose', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseButtonClose', 'size')

const sizes = {
  xs: 'nui-button-close-xs',
  sm: 'nui-button-close-sm',
  md: 'nui-button-close-md',
  lg: 'nui-button-close-lg',
  xl: 'nui-button-close-xl',
}

const radiuses = {
  none: '',
  sm: 'nui-button-close-rounded-sm',
  md: 'nui-button-close-rounded-md',
  lg: 'nui-button-close-rounded-lg',
  full: 'nui-button-close-rounded-full',
}

const colors = {
  'default': 'nui-button-close-default',
  'default-contrast': 'nui-button-close-default-contrast',
  'muted': 'nui-button-close-muted',
  'muted-contrast': 'nui-button-close-muted-contrast',
  'primary': 'nui-button-close-primary',
  'info': 'nui-button-close-info',
  'success': 'nui-button-close-success',
  'warning': 'nui-button-close-warning',
  'danger': 'nui-button-close-danger',
  'none': '',
}

const classes = computed(() => [
  'nui-button-close',
  size.value && sizes[size.value],
  rounded.value && radiuses[rounded.value],
  color.value && colors[color.value],
])
</script>

<template>
  <button type="button" :class="classes">
    <slot>
      <IconClose class="nui-button-close-icon" />
    </slot>
  </button>
</template>
