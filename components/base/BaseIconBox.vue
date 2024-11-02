<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * Applies an svg mask from the available presets. (needs rounded to be set to `none`).
     */
    mask?: 'hex' | 'hexed' | 'deca' | 'blob' | 'diamond'

    /**
     * Whether the icon is bordered.
     */
    bordered?: boolean

    /**
     * The color of the box.
     *
     * @default 'default'
     */
    color?:
      | 'default'
      | 'default-contrast'
      | 'muted'
      | 'muted-contrast'
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
     * The radius of the icon.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The size of the icon.
     *
     * @default 'xs'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

    /**
     * The variant of the box.
     *
     * @since 2.0.0
     * @default 'solid'
     */
    variant?: 'solid' | 'outline' | 'pastel'
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

const color = useNuiDefaultProperty(props, 'BaseIconBox', 'color')
const rounded = useNuiDefaultProperty(props, 'BaseIconBox', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseIconBox', 'size')
const variant = useNuiDefaultProperty(props, 'BaseIconBox', 'variant')

const radiuses = {
  none: '',
  sm: 'nui-box-rounded-sm',
  md: 'nui-box-rounded-md',
  lg: 'nui-box-rounded-lg',
  full: 'nui-box-rounded-full',
}

const sizes = {
  'xs': 'nui-box-xs',
  'sm': 'nui-box-sm',
  'md': 'nui-box-md',
  'lg': 'nui-box-lg',
  'xl': 'nui-box-xl',
  '2xl': 'nui-box-2xl',
}

const variants = {
  solid: 'nui-box-solid',
  pastel: 'nui-box-pastel',
  outline: 'nui-box-outline',
}

const colors = {
  'none': '',
  'default': 'nui-box-default',
  'default-contrast': 'nui-box-default-contrast',
  'muted': 'nui-box-muted',
  'muted-contrast': 'nui-box-muted-contrast',
  'light': 'nui-box-light',
  'dark': 'nui-box-dark',
  'black': 'nui-box-black',
  'primary': 'nui-box-primary',
  'info': 'nui-box-info',
  'success': 'nui-box-success',
  'warning': 'nui-box-warning',
  'danger': 'nui-box-danger',
}

const masks = {
  hex: 'nui-mask nui-mask-hex',
  hexed: 'nui-mask nui-mask-hexed',
  deca: 'nui-mask nui-mask-deca',
  blob: 'nui-mask nui-mask-blob',
  diamond: 'nui-mask nui-mask-diamond',
}

const classes = computed(() => [
  'nui-icon-box',
  props.bordered && 'nui-box-bordered',
  rounded.value && radiuses[rounded.value],
  size.value && sizes[size.value],
  variant.value && variants[variant.value],
  color.value && colors[color.value],
  rounded.value === 'none' && props.mask && masks[props.mask],
])
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
