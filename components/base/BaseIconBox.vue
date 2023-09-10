<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The shape of the icon.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

    /**
     * The size of the icon.
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

    /** The color of the box. Can be 'default', 'primary', 'info', 'success', 'warning', or 'danger' */
    color?:
      | 'default'
      | 'invert'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'

    /** The flavor of the box. Can be 'solid', 'outline', or 'pastel'. */
    flavor?: 'solid' | 'outline' | 'pastel'

    /**
     * Whether the icon is bordered.
     */
    bordered?: boolean

    /**
     * Applies an svg mask from the available presets. (needs shape to be set to `straight`).
     */
    mask?: 'hex' | 'hexed' | 'deca' | 'blob' | 'diamond'
  }>(),
  {
    shape: undefined,
    size: 'xs',
    color: undefined,
    flavor: 'pastel',
    bordered: false,
    mask: undefined,
  },
)

const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.iconBox,
)

const shapeStyle = {
  straight: '',
  rounded: 'nui-box-rounded',
  curved: 'nui-box-curved',
  full: 'nui-box-full',
}
const sizeStyle = {
  xs: 'nui-box-xs',
  sm: 'nui-box-sm',
  md: 'nui-box-md',
  lg: 'nui-box-lg',
  xl: 'nui-box-xl',
  '2xl': 'nui-box-2xl',
}
const flavorStyle = {
  solid: 'nui-box-solid',
  pastel: 'nui-box-pastel',
  outline: 'nui-box-outline',
}
const colorStyle = {
  default: 'nui-box-default',
  invert: 'nui-box-invert',
  primary: 'nui-box-primary',
  info: 'nui-box-info',
  success: 'nui-box-success',
  warning: 'nui-box-warning',
  danger: 'nui-box-danger',
}
const maskStyle = {
  hex: 'nui-mask nui-mask-hex',
  hexed: 'nui-mask nui-mask-hexed',
  deca: 'nui-mask nui-mask-deca',
  blob: 'nui-mask nui-mask-blob',
  diamond: 'nui-mask nui-mask-diamond',
}

const classes = computed(() => [
  'nui-icon-box',
  props.bordered && 'nui-box-bordered',
  shape.value && shapeStyle[shape.value],
  sizeStyle[props.size],
  flavorStyle[props.flavor],
  props.color && colorStyle[props.color],
  props.mask && maskStyle[props.mask],
])
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
