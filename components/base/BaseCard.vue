<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The shape of the card.
     */
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved'

    /**
     * Whether the card is elevated.
     */
    elevated?: boolean

    /**
     * Whether the card is elevated on hover.
     */
    elevatedHover?: boolean

    /**
     * The color of the card.
     */
    color?:
      | 'white'
      | 'white-contrast'
      | 'muted'
      | 'muted-contrast'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'none'
  }>(),
  {
    shape: undefined,
    elevated: false,
    elevatedHover: false,
    color: 'white',
  },
)
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.card)

const shapeStyle = {
  straight: '',
  rounded: 'nui-card-rounded',
  smooth: 'nui-card-smooth',
  curved: 'nui-card-curved',
}
const colorStyle = {
  white: 'nui-card-white',
  'white-contrast': 'nui-card-white-contrast',
  muted: 'nui-card-muted',
  'muted-contrast': 'nui-card-muted-contrast',
  primary: 'nui-card-primary',
  info: 'nui-card-info',
  success: 'nui-card-success',
  warning: 'nui-card-warning',
  danger: 'nui-card-danger',
  none: '',
}

const classes = computed(() => [
  'nui-card',
  shape.value && shapeStyle[shape.value],
  colorStyle[props.color],
  props.elevated && 'nui-card-shadow',
  props.elevatedHover && 'nui-card-shadow-hover',
])
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
