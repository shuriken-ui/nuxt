<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The shape of the button.
     */
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'
    /** The color of the button. Can be 'default' or 'muted. */
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
    color: 'default',
  },
)

const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.buttonClose,
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
  'nui-button-close',
  shape.value && shapeStyle[shape.value],
  colorStyle[props.color],
])
</script>

<template>
  <button type="button" :class="classes">
    <IconClose class="nui-button-icon" />
  </button>
</template>
