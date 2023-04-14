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
</script>

<template>
  <div
    class="relative inline-flex shrink-0 items-center justify-center"
    :class="[
      props.size === 'xs' && 'h-8 w-8',
      props.size === 'sm' && 'h-10 w-10',
      props.size === 'md' && 'h-12 w-12',
      props.size === 'lg' && 'h-16 w-16',
      props.size === 'xl' && 'h-20 w-20',
      props.size === '2xl' && 'h-24 w-24',
      shape === 'full' && 'rounded-full',
      shape === 'rounded' && props.size === 'xs' && 'rounded-lg',
      shape === 'rounded' && props.size === 'sm' && 'rounded-lg',
      shape === 'rounded' && props.size === 'md' && 'rounded-xl',
      shape === 'rounded' && props.size === 'lg' && 'rounded-xl',
      shape === 'rounded' && props.size === 'xl' && 'rounded-2xl',
      shape === 'rounded' && props.size === '2xl' && 'rounded-2xl',
      shape === 'curved' && props.size === 'xs' && 'rounded-xl',
      shape === 'curved' && props.size === 'sm' && 'rounded-xl',
      shape === 'curved' && props.size === 'md' && 'rounded-2xl',
      shape === 'curved' && props.size === 'lg' && 'rounded-2xl',
      shape === 'curved' && props.size === 'xl' && 'rounded-3xl',
      shape === 'curved' && props.size === '2xl' && 'rounded-3xl',
      props.bordered && props.flavor === 'pastel' && 'border-2 border-current',
      props.color === 'default' &&
        'bg-muted-100 dark:bg-muted-700 text-muted-600 dark:text-muted-200',
      props.color === 'primary' &&
        props.flavor === 'pastel' &&
        'bg-primary-500/10 text-primary-500',
      props.color === 'info' &&
        props.flavor === 'pastel' &&
        'bg-info-500/10 text-info-500',
      props.color === 'success' &&
        props.flavor === 'pastel' &&
        'bg-success-500/10 text-success-500',
      props.color === 'warning' &&
        props.flavor === 'pastel' &&
        'bg-warning-500/10 text-warning-500',
      props.color === 'danger' &&
        props.flavor === 'pastel' &&
        'bg-danger-500/10 text-danger-500',
      props.color === 'light' &&
        props.flavor === 'pastel' &&
        'text-muted-800 bg-white/10',
      props.color === 'primary' &&
        props.flavor === 'solid' &&
        'bg-primary-500 text-white',
      props.color === 'info' &&
        props.flavor === 'solid' &&
        'bg-info-500 text-white',
      props.color === 'success' &&
        props.flavor === 'solid' &&
        'bg-success-500 text-white',
      props.color === 'warning' &&
        props.flavor === 'solid' &&
        'bg-warning-500 text-white',
      props.color === 'danger' &&
        props.flavor === 'solid' &&
        'bg-danger-500 text-white',
      props.color === 'light' &&
        props.flavor === 'solid' &&
        'text-muted-800 bg-white',
      props.flavor === 'outline' && 'border-2 border-current',
      props.color === 'primary' &&
        props.flavor === 'outline' &&
        'text-primary-500',
      props.color === 'info' && props.flavor === 'outline' && 'text-info-500',
      props.color === 'success' &&
        props.flavor === 'outline' &&
        'text-success-500',
      props.color === 'warning' &&
        props.flavor === 'outline' &&
        'text-warning-500',
      props.color === 'danger' &&
        props.flavor === 'outline' &&
        'text-danger-500',
      props.color === 'light' && props.flavor === 'outline' && 'text-muted-800',
      props.mask !== undefined && props.shape === 'straight' && 'nui-mask',
      props.mask === 'hex' && props.shape === 'straight' && 'nui-mask-hex',
      props.mask === 'hexed' && props.shape === 'straight' && 'nui-mask-hexed',
      props.mask === 'deca' && props.shape === 'straight' && 'nui-mask-deca',
      props.mask === 'blob' && props.shape === 'straight' && 'nui-mask-blob',
      props.mask === 'diamond' &&
        props.shape === 'straight' &&
        'nui-mask-diamond',
    ]"
  >
    <slot></slot>
  </div>
</template>
