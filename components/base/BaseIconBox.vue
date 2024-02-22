<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** The variant of the box.
     *
     * @since 2.0.0
     * default 'solid'
     */
    variant?: 'solid' | 'outline' | 'pastel'

    /** The color of the box.
     *
     * @default 'default'
     */
    color?:
      | 'default'
      | 'default-contrast'
      | 'dark'
      | 'black'
      | 'light'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'none'

    /**
     * The size of the icon.
     *
     * @default 'xs'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

    /**
     * The radius of the icon.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * Applies an svg mask from the available presets. (needs rounded to be set to `none`).
     */
    mask?: 'hex' | 'hexed' | 'deca' | 'blob' | 'diamond'

    /**
     * Whether the icon is bordered.
     */
    bordered?: boolean
  }>(),
  {
    variant: undefined,
    color: undefined,
    size: undefined,
    rounded: undefined,
    mask: undefined,
    bordered: false,
  },
)

const variant = useNuiDefaultProperty(props, 'BaseIconBox', 'variant')
const color = useNuiDefaultProperty(props, 'BaseIconBox', 'color')
const size = useNuiDefaultProperty(props, 'BaseIconBox', 'size')
const rounded = useNuiDefaultProperty(props, 'BaseIconBox', 'rounded')

const radiuses = {
  none: '',
  sm: 'nui-box-rounded-sm',
  md: 'nui-box-rounded-md',
  lg: 'nui-box-rounded-lg',
  full: 'nui-box-rounded-full',
} as Record<string, string>

const sizes = {
  xs: 'nui-box-xs',
  sm: 'nui-box-sm',
  md: 'nui-box-md',
  lg: 'nui-box-lg',
  xl: 'nui-box-xl',
  '2xl': 'nui-box-2xl',
} as Record<string, string>

const variants = {
  solid: 'nui-box-solid',
  pastel: 'nui-box-pastel',
  outline: 'nui-box-outline',
} as Record<string, string>

const colors = {
  default: 'nui-box-default',
  'default-contrast': 'nui-box-default-contrast',
  light: 'nui-box-light',
  dark: 'nui-box-dark',
  black: 'nui-box-black',
  primary: 'nui-box-primary',
  info: 'nui-box-info',
  success: 'nui-box-success',
  warning: 'nui-box-warning',
  danger: 'nui-box-danger',
} as Record<string, string>

const masks = {
  hex: 'nui-mask nui-mask-hex',
  hexed: 'nui-mask nui-mask-hexed',
  deca: 'nui-mask nui-mask-deca',
  blob: 'nui-mask nui-mask-blob',
  diamond: 'nui-mask nui-mask-diamond',
} as Record<string, string>

const classes = computed(() => [
  'nui-icon-box',
  props.bordered && 'nui-box-bordered',
  rounded.value && radiuses[rounded.value],
  size.value && sizes[size.value],
  variant.value && variants[variant.value],
  color.value && colors[color.value],
  (props.rounded === 'none' || rounded.value === 'none') &&
    props.mask &&
    masks[props.mask],
])
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
