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

const solidColorVariant = {
  primary: ['bg-primary-500', 'dark:bg-primary-500', 'text-white'],
  info: ['bg-info-500', 'dark:bg-info-500', 'text-white'],
  success: ['bg-success-500', 'dark:bg-success-500', 'text-white'],
  warning: ['bg-warning-500', 'dark:bg-warning-500', 'text-white'],
  danger: ['bg-danger-500', 'dark:bg-danger-500', 'text-white'],
}
const pastelColorVariant = {
  primary: [
    'bg-primary-100',
    'text-primary-500',
    'border-primary-100',
    'dark:border-primary-500',
    'dark:text-primary-500',
    'border dark:bg-transparent',
  ],
  info: [
    'bg-info-100',
    'text-info-500',
    'border-info-100',
    'dark:border-info-500',
    'dark:text-info-500',
    'border dark:bg-transparent',
  ],
  success: [
    'bg-success-100',
    'text-success-500',
    'border-success-100',
    'dark:border-success-500',
    'dark:text-success-500',
    'border dark:bg-transparent',
  ],
  warning: [
    'bg-warning-100',
    'text-warning-500',
    'border-warning-100',
    'dark:border-warning-500',
    'dark:text-warning-500',
    'border dark:bg-transparent',
  ],
  danger: [
    'bg-danger-100',
    'text-danger-500',
    'border-danger-100',
    'dark:border-danger-500',
    'dark:text-danger-500',
    'border dark:bg-transparent',
  ],
}
const outlineColorVariant = {
  primary: ['text-primary-500', 'border-primary-500', 'border'],
  info: ['text-info-500', 'border-info-500', 'border'],
  success: ['text-success-500', 'border-success-500', 'border'],
  warning: ['text-warning-500', 'border-warning-500', 'border'],
  danger: ['text-danger-500', 'border-danger-500', 'border'],
}

const colorStyle = computed(() => {
  let colors: any =
    props.flavor === 'solid'
      ? solidColorVariant
      : props.flavor === 'outline'
      ? outlineColorVariant
      : pastelColorVariant

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

  if (props.color in colorStyle.value) {
    classes.push(...colorStyle.value[props.color])
  }

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
