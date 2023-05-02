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
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'muted'

    /**
     * The shape of the tag.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

    /**
     * Whether the tag should be in small size.
     */
    condensed?: boolean

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
  }
)
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.tag)

const solidColorStyle = computed(() => [
  `bg-${props.color}-500`,
  `dark:bg-${props.color}-500`,
  `text-white`,
])
const pastelColorStyle = computed(() => [
  `bg-${props.color}-100`,
  `text-${props.color}-500`,
  `border-${props.color}-100`,
  `dark:border-${props.color}-500`,
  `dark:text-${props.color}-500`,
  `border`,
  `dark:bg-transparent`,
])
const outlineColorStyle = computed(() => [
  `text-${props.color}-500`,
  `border-${props.color}-500`,
  `border`,
])
const colorStyle = computed(() => {
  let colors = {}
  let styleToUse =
    props.flavor === 'solid'
      ? solidColorStyle.value
      : props.flavor === 'outline'
      ? outlineColorStyle.value
      : pastelColorStyle.value

  Reflect.set(colors, props.color, styleToUse)
  colors.default = [
    'border-muted-300',
    'text-muted-600',
    'dark:bg-muted-800',
    'dark:border-muted-700',
    'dark:text-muted-300',
    'border',
    'bg-white',
  ]
  colors.muted = [
    'text-muted-500',
    'bg-muted-200',
    'dark:bg-muted-700',
    'dark:text-white',
  ]

  return colors
})

const shapeStyle = {
  straight: '',
  rounded: 'rounded-md',
  curved: 'rounded-lg',
  full: 'rounded-full',
}
const shadowStyle = {
  flat: 'shadow-xl',
  hover: 'hover:shadow-xl',
}

const classes = computed(() => {
  const classes = []

  props.condensed
    ? classes.push('py-1 text-[0.65rem]')
    : classes.push('py-1.5 text-xs')

  shape.value && classes.push(shapeStyle[shape.value])
  props.shadow && classes.push(shadowStyle[props.shadow])
  classes.push(...colorStyle.value[props.color])

  return classes
})
</script>

<template>
  <span
    class="inline-block px-3 font-sans transition-shadow duration-300"
    :class="classes"
  >
    <slot></slot>
  </span>
</template>
