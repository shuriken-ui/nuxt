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
     *
     * @default 'sm'
     */
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

    /**
     * The radius of the image.
     *
     * @default 'full'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * Applies an svg mask from the available presets. (needs rounded to be set to `none`).
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
    badgeSrc: undefined,
    text: '?',
    size: undefined,
    rounded: undefined,
    mask: undefined,
    dot: false,
    ring: false,
  },
)

const rounded = useNuiDefaultProperty(props, 'BaseAvatar', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseAvatar', 'size')

const dots = {
  success: 'nui-dot-success',
  primary: 'nui-dot-primary',
  info: 'nui-dot-info',
  warning: 'nui-dot-warning',
  danger: 'nui-dot-danger',
  pink: 'nui-dot-pink',
  yellow: 'nui-dot-yellow',
} as Record<string, string>

const rings = {
  success: 'nui-ring-success',
  primary: 'nui-ring-primary',
  info: 'nui-ring-info',
  warning: 'nui-ring-warning',
  danger: 'nui-ring-danger',
  pink: 'nui-ring-pink',
  yellow: 'nui-ring-yellow',
} as Record<string, string>

const sizes = {
  xxs: 'nui-avatar-xxs',
  xs: 'nui-avatar-xs',
  sm: 'nui-avatar-sm',
  md: 'nui-avatar-md',
  lg: 'nui-avatar-lg',
  xl: 'nui-avatar-xl',
  '2xl': 'nui-avatar-2xl',
  '3xl': 'nui-avatar-3xl',
  '4xl': 'nui-avatar-4xl',
} as Record<string, string>

const radiuses = {
  none: 'nui-avatar-straight',
  sm: 'nui-avatar-rounded',
  md: 'nui-avatar-smooth',
  lg: 'nui-avatar-curved',
  full: 'nui-avatar-full',
} as Record<string, string>

const masks = {
  hex: 'nui-mask-hex',
  hexed: 'nui-mask-hexed',
  deca: 'nui-mask-deca',
  blob: 'nui-mask-blob',
  diamond: 'nui-mask-diamond',
} as Record<string, string>
</script>

<template>
  <div
    class="nui-avatar"
    :class="[
      size && sizes[size],
      rounded && radiuses[rounded],
      props.mask &&
        (props.rounded === 'none' || rounded === 'none') &&
        `nui-avatar-mask ${masks[props.mask]}`,
      props.ring &&
        (props.ring === true
          ? `nui-avatar-ring ${rings['primary']}`
          : `nui-avatar-ring ${rings[props.ring]}`),
    ]"
  >
    <div class="nui-avatar-inner">
      <slot>
        <img
          v-if="props.src"
          :src="props.src"
          class="nui-avatar-img"
          :class="[
            rounded && radiuses[rounded],
            props.srcDark ? 'dark:hidden' : '',
          ]"
        />

        <img
          v-if="props.src && props.srcDark"
          :src="props.srcDark"
          class="nui-avatar-img hidden"
          :class="rounded && radiuses[rounded]"
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
      :class="[props.dot === true ? dots['primary'] : dots[props.dot]]"
    ></span>
  </div>
</template>
