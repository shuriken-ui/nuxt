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
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'light'

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
  }
)
const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.iconBox
)

const solidColorVariant = {
  info: 'bg-info-500 text-white',
  success: 'bg-success-500 text-white',
  warning: 'bg-warning-500 text-white',
  danger: 'bg-danger-500 text-white',
  primary: 'bg-primary-500 text-white',
  light: 'text-muted-800 bg-white',
}
const pastelColorVariant = {
  info: 'bg-info-500/10 text-info-500',
  success: 'bg-success-500/10 text-success-500',
  warning: 'bg-warning-500/10 text-primary-500',
  danger: 'bg-danger-500/10 text-danger-500',
  primary: 'bg-primary-500/10 text-primary-500',
  light: 'text-muted-800 bg-white/10',
}
const outlineColorVariant = {
  info: 'border-2 border-current text-info-500',
  success: 'border-2 border-current text-success-500',
  warning: 'border-2 border-current text-warning-500',
  danger: 'border-2 border-current text-danger-500',
  primary: 'border-2 border-current text-primary-500',
  light: 'border-2 border-current text-muted-800',
}

const sizeStyle = {
  xs: 'h-8 w-8',
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
  xl: 'h-20 w-20',
  '2xl': 'h-24 w-24',
}

const curvedStyle = {
  xs: 'rounded-xl',
  sm: 'rounded-xl',
  md: 'rounded-2xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
  '2xl': 'rounded-3xl',
}
const roundedStyle = {
  xs: 'rounded-lg',
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-xl',
  xl: 'rounded-2xl',
  '2xl': 'rounded-2xl',
}

const colorStyle = computed(() => {
  let colors: any =
    props.flavor === 'solid'
      ? solidColorVariant
      : props.flavor === 'outline'
      ? outlineColorVariant
      : pastelColorVariant

  colors.default =
    'bg-muted-100 dark:bg-muted-700 text-muted-600 dark:text-muted-200'

  return colors
})
const shapeStyle = computed(() =>
  shape.value === 'full'
    ? 'rounded-full'
    : shape.value === 'rounded'
    ? roundedStyle[props.size]
    : curvedStyle[props.size]
)

const classes = computed(() => {
  let ret = [
    'relative inline-flex shrink-0 items-center justify-center',
    sizeStyle[props.size],
    props.color ? colorStyle.value[props.color] : '',
    shapeStyle.value,
  ]
  props.bordered &&
    props.flavor === 'pastel' &&
    ret.push('border-2 border-current')
  props.mask !== undefined && props.shape === 'straight' && ret.push('nui-mask')
  props.mask === 'hex' && props.shape === 'straight' && ret.push('nui-mask-hex')
  props.mask === 'hexed' &&
    props.shape === 'straight' &&
    ret.push('nui-mask-hexed')
  props.mask === 'deca' &&
    props.shape === 'straight' &&
    ret.push('nui-mask-deca')
  props.mask === 'blob' &&
    props.shape === 'straight' &&
    ret.push('nui-mask-blob')
  props.mask === 'diamond' &&
    props.shape === 'straight' &&
    ret.push('nui-mask-diamond')

  return ret
})
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
