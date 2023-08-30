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

    /**
     * Whether to display a ring around the image .
     */
    ring?:
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
    ring: false,
  },
)
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.avatar)

const dotStyle = {
  success: 'nui-dot-success',
  primary: 'nui-dot-primary',
  info: 'nui-dot-info',
  warning: 'nui-dot-warning',
  danger: 'nui-dot-danger',
  pink: 'nui-dot-pink',
  yellow: 'nui-dot-yellow',
}
const ringStyle = {
  success: 'nui-ring-success',
  primary: 'nui-ring-primary',
  info: 'nui-ring-info',
  warning: 'nui-ring-warning',
  danger: 'nui-ring-danger',
  pink: 'nui-ring-pink',
  yellow: 'nui-ring-yellow',
}
const sizeStyle = {
  xxs: 'nui-avatar-xxs',
  xs: 'nui-avatar-xs',
  sm: 'nui-avatar-sm',
  md: 'nui-avatar-md',
  lg: 'nui-avatar-lg',
  xl: 'nui-avatar-xl',
  '2xl': 'nui-avatar-2xl',
  '3xl': 'nui-avatar-3xl',
  '4xl': 'nui-avatar-4xl',
}
const shapeStyle = {
  straight: 'nui-avatar-straight',
  rounded: 'nui-avatar-rounded',
  curved: 'nui-avatar-curved',
  full: 'nui-avatar-full',
}
const maskStyle = {
  hex: 'nui-mask-hex',
  hexed: 'nui-mask-hexed',
  deca: 'nui-mask-deca',
  blob: 'nui-mask-blob',
  diamond: 'nui-mask-diamond',
}
</script>

<template>
  <div
    class="nui-avatar"
    :class="[
      sizeStyle[props.size],
      shape && shapeStyle[shape],
      props.mask && `nui-avatar-mask ${maskStyle[props.mask]}`,
      props.ring &&
        (props.ring === true
          ? `nui-avatar-ring ${ringStyle['primary']}`
          : `nui-avatar-ring ${ringStyle[props.ring]}`),
    ]"
  >
    <div class="nui-avatar-inner">
      <slot>
        <img
          v-if="props.src"
          :src="props.src"
          class="nui-avatar-img"
          :class="[props.srcDark ? 'dark:hidden' : '']"
        />

        <img
          v-if="props.src && props.srcDark"
          :src="props.srcDark"
          class="nui-avatar-img hidden"
        />

        <span v-if="!props.src" class="nui-avatar-text">
          {{ props.text }}
        </span>
      </slot>
    </div>

    <div v-if="'badge' in $slots || props.badgeSrc" class="nui-avatar-badge">
      <slot name="badge">
        <img
          v-if="props.badgeSrc"
          :src="props.badgeSrc"
          class="nui-badge-img"
          alt=""
        />
      </slot>
    </div>

    <span
      v-if="props.dot"
      class="nui-avatar-dot"
      :class="[props.dot === true ? dotStyle['primary'] : dotStyle[props.dot]]"
    ></span>
  </div>
</template>
