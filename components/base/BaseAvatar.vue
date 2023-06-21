<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The URL of the image to display.
     */
    src?: string

    /**
     * The URL of a dark version of the image to display when the component is in dark mode.
     */
    srcDark?: string

    /**
     * The URL of a badge to display on top of the image.
     */
    badgeSrc?: string

    /**
     * The text to display below the image.
     */
    text?: string

    /**
     * The size of the image.
     */
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

    /**
     * The shape of the image.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

    /**
     * Applies an svg mask from the available presets. (needs shape to be set to `straight`).
     */
    mask?: 'hex' | 'hexed' | 'deca' | 'blob' | 'diamond'

    /**
     * Whether to display a dot on top of the image, or the color of the dot.
     */
    dot?:
      | boolean
      | 'primary'
      | 'success'
      | 'info'
      | 'warning'
      | 'danger'
      | 'pink'
      | 'yellow'
  }>(),
  {
    src: undefined,
    srcDark: undefined,
    text: '?',
    badgeSrc: undefined,
    size: 'sm',
    shape: undefined,
    mask: undefined,
    dot: false,
  }
)
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.avatar)

const curvedStyle = {
  xxs: 'rounded-md',
  xs: 'rounded-lg',
  sm: 'rounded-xl',
  md: 'rounded-2xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
  '2xl': 'rounded-3xl',
  '3xl': 'rounded-3xl',
  '4xl': 'rounded-3xl',
}

const avatarSizeStyle = {
  xxs: 'h-6 w-6',
  xs: 'h-8 w-8',
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
  xl: 'h-20 w-20',
  '2xl': 'h-24 w-24',
  '3xl': 'h-28 w-28',
  '4xl': 'h-32 w-32',
}
const avatarTextStyle = {
  xxs: 'text-xs',
  xs: 'text-sm',
  sm: 'text-sm',
  md: 'text-sm',
  lg: 'text-sm',
  xl: 'text-base',
  '2xl': 'text-xl',
  '3xl': 'text-2xl',
  '4xl': 'text-3xl',
}
const avatarRoundStyle = {
  xxs: 'rounded',
  xs: 'rounded',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-xl',
  '3xl': 'rounded-xl',
  '4xl': 'rounded-xl',
}

const badgeSizeStyle = {
  xxs: 'h-3 w-3',
  xs: 'h-4 w-4',
  sm: 'h-5 w-5',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
  '2xl': 'h-10 w-10',
  '3xl': 'h-10 w-10',
  '4xl': 'h-12 w-12',
}
const badgeRoundStyle = {
  xxs: 'rounded',
  xs: 'rounded',
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-xl',
  xl: 'rounded-2xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-2xl',
  '4xl': 'rounded-2xl',
}

const dotSizeStyle = {
  xxs: 'h-1.5 w-1.5',
  xs: 'h-2 w-2',
  sm: 'h-2 w-2',
  md: 'h-3 w-3',
  lg: 'h-3 w-3',
  xl: 'h-4 w-4',
  '2xl': 'h-4 w-4',
  '3xl': 'h-4 w-4',
  '4xl': 'h-4 w-4',
}
const dotTypeStyle = {
  success: 'bg-success-500',
  primary: 'bg-primary-500',
  info: 'bg-info-500',
  warning: 'bg-warning-500',
  danger: 'bg-danger-500',
  pink: 'bg-pink-500',
  yellow: 'bg-yellow-500',
}

const badgePosStyle = computed(() => {
  let ret = ''

  if (props.size === '4xl') ret = '-bottom-2 -end-2'
  if (['2xl', '3xl'].includes(props.size)) ret = '-bottom-1.5 -end-1.5'
  if (['xs', 'sm', 'md', 'lg', 'xl'].includes(props.size))
    ret = '-bottom-1 -end-1'

  return props.shape === 'full' ? '' : ret
})
const dotPosStyle = computed(() => {
  let ret = ''
  const dotFullPosStyle = {
    xxs: '',
    xs: 'end-0 top-0',
    sm: 'end-0.5 top-0.5',
    md: 'end-0.5 top-0.5',
    lg: 'end-1 top-1',
    xl: 'end-1 top-1',
    '2xl': 'end-1.5 top-1.5',
    '3xl': 'end-2 top-2',
    '4xl': 'end-2.5 top-2.5',
  }

  if (props.shape === 'curved') {
    ret = ['xs', 'lg'].includes(props.size)
      ? '-end-0.5 -top-0.5'
      : '-end-0 -top-0'
  } else {
    ret = props.shape === 'full' ? dotFullPosStyle[props.size] : 'end-0 top-0'
  }

  return ret
})

const avatarShapeStyle = {
  full: 'rounded-full',
  rounded: avatarRoundStyle[props.size],
  curved: curvedStyle[props.size],
  straight: '',
}
const badgeShapeStyle = {
  full: 'rounded-full',
  rounded: badgeRoundStyle[props.size],
  curved: curvedStyle[props.size],
  straight: '',
}
</script>

<template>
  <div
    class="relative inline-flex shrink-0 items-center justify-center outline-none"
    :class="[
      avatarSizeStyle[props.size],
      shape && avatarShapeStyle[shape],
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
    <div
      class="flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300"
      :class="shape && badgeShapeStyle[shape]"
    >
      <slot>
        <img
          v-if="props.src"
          :src="props.src"
          class="max-h-full max-w-full object-cover shadow-sm dark:border-transparent"
          :class="[
            props.srcDark ? 'dark:hidden' : '',
            avatarSizeStyle[props.size],
          ]"
        />

        <img
          v-if="props.src && props.srcDark"
          :src="props.srcDark"
          class="hidden max-w-full object-cover shadow-sm dark:block dark:border-transparent"
          :class="[avatarSizeStyle[props.size]]"
        />

        <span
          v-if="!props.src"
          class="font-heading text-center font-medium uppercase"
          :class="[avatarTextStyle[props.size]]"
        >
          {{ props.text }}
        </span>
      </slot>
    </div>

    <div
      v-if="'badge' in $slots || props.badgeSrc"
      class="dark:bg-muted-800 absolute z-10 block overflow-hidden rounded-full bg-white"
      :class="[badgeSizeStyle[props.size], badgePosStyle]"
    >
      <slot name="badge">
        <img
          v-if="props.badgeSrc"
          :src="props.badgeSrc"
          class="relative h-full w-full scale-90 rounded-full object-cover"
          alt=""
        />
      </slot>
    </div>

    <span
      v-if="props.dot"
      class="dark:border-muted-800 absolute block rounded-full border border-white"
      :class="[
        dotSizeStyle[props.size],
        dotPosStyle,
        props.dot === true ? dotTypeStyle['primary'] : dotTypeStyle[props.dot],
      ]"
    ></span>
  </div>
</template>
