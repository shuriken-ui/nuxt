<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The flavor of the tag.
     */
    flavor?: 'solid' | 'outline' | 'pastel'

    /**
     * The color of the tag.
     */
    color?:
      | 'default'
      | 'muted'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'

    /**
     * The shape of the tag.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

    /**
     * The size of the tag.
     */
    size?: 'sm' | 'md'

    /**
     * Determines when the tag should have a shadow.
     */
    shadow?: 'flat' | 'hover'
  }>(),
  {
    flavor: 'solid',
    color: 'default',
    shape: undefined,
    shadow: undefined,
    size: 'md',
  },
)
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.tag)

const flavorStyle = {
  solid: 'nui-tag-solid',
  pastel: 'nui-tag-pastel',
  outline: 'nui-tag-outline',
}
const shapeStyle = {
  straight: '',
  rounded: 'nui-tag-rounded',
  smooth: 'nui-tag-smooth',
  curved: 'nui-tag-curved',
  full: 'nui-tag-full',
}
const colorStyle = {
  default: 'nui-tag-default',
  muted: 'nui-tag-muted',
  primary: 'nui-tag-primary',
  info: 'nui-tag-info',
  success: 'nui-tag-success',
  warning: 'nui-tag-warning',
  danger: 'nui-tag-danger',
}
const shadowStyle = {
  flat: 'nui-tag-shadow',
  hover: 'nui-tag-shadow-hover',
}
const sizeStyle = {
  sm: 'nui-tag-sm',
  md: 'nui-tag-md',
}

const classes = computed(() => [
  'nui-tag',
  sizeStyle[props.size],
  flavorStyle[props.flavor],
  colorStyle[props.color],
  shape.value && shapeStyle[shape.value],
  props.shadow && props.flavor === 'solid' && shadowStyle[props.shadow],
])
</script>

<template>
  <span :class="classes">
    <slot></slot>
  </span>
</template>
