<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    /**
     * The URL of the image to display.
     */
    src?: string

    /**
     * The alt text of the image.
     */
    alt?: string

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

    /**
     * Defines the color of the avatar
     *
     * @since 3.0.0
     * @default 'muted'
     */
    color?:
      | 'white'
      | 'muted'
      | 'primary'
      | 'success'
      | 'info'
      | 'warning'
      | 'danger'
      | 'pink'
      | 'yellow'
      | 'indigo'
      | 'violet'

    /**
     * The radius of the image.
     *
     * @default 'full'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The size of the image.
     *
     * @default 'sm'
     */
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

    /**
     * Optional CSS classes to apply to the component inner elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the inner element.
       */
      inner?: string | string[]

      /**
       * CSS classes to apply to the img element.
       */
      img?: string | string[]

      /**
       * CSS classes to apply to the badge element.
       */
      badge?: string | string[]

      /**
       * CSS classes to apply to the dot element.
       */
      dot?: string | string[]
    }
  }>(),
  {
    src: undefined,
    srcDark: undefined,
    badgeSrc: undefined,
    text: '?',
    size: undefined,
    color: undefined,
    rounded: undefined,
    mask: undefined,
    dot: false,
    ring: false,
    classes: () => ({}),
  },
)

const color = useNuiDefaultProperty(props, 'BaseAvatar', 'color')
const rounded = useNuiDefaultProperty(props, 'BaseAvatar', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseAvatar', 'size')

const colors = {
  white: 'bg-white dark:bg-muted-800 text-muted-600 dark:text-muted-200',
  muted: 'bg-muted-100 dark:bg-muted-800 text-muted-600 dark:text-muted-200',
  primary: 'bg-primary-500/20 text-primary-500',
  info: 'bg-info-500/20 text-info-500',
  success: 'bg-success-500/20 text-success-500',
  warning: 'bg-warning-500/20 text-warning-500',
  danger: 'bg-danger-500/20 text-danger-500',
  yellow: 'bg-yellow-500/20 text-yellow-400',
  pink: 'bg-pink-500/20 text-pink-400',
  indigo: 'bg-indigo-500/20 text-indigo-500',
  violet: 'bg-violet-500/20 text-violet-500',
}

const dots = {
  success: 'nui-dot-success',
  primary: 'nui-dot-primary',
  info: 'nui-dot-info',
  warning: 'nui-dot-warning',
  danger: 'nui-dot-danger',
  pink: 'nui-dot-pink',
  yellow: 'nui-dot-yellow',
}

const rings = {
  success: 'nui-ring-success',
  primary: 'nui-ring-primary',
  info: 'nui-ring-info',
  warning: 'nui-ring-warning',
  danger: 'nui-ring-danger',
  pink: 'nui-ring-pink',
  yellow: 'nui-ring-yellow',
}

const sizes = {
  'xxs': 'nui-avatar-xxs',
  'xs': 'nui-avatar-xs',
  'sm': 'nui-avatar-sm',
  'md': 'nui-avatar-md',
  'lg': 'nui-avatar-lg',
  'xl': 'nui-avatar-xl',
  '2xl': 'nui-avatar-2xl',
  '3xl': 'nui-avatar-3xl',
  '4xl': 'nui-avatar-4xl',
}

const radiuses = {
  none: 'nui-avatar-rounded-none',
  sm: 'nui-avatar-rounded-sm',
  md: 'nui-avatar-rounded-md',
  lg: 'nui-avatar-rounded-lg',
  full: 'nui-avatar-rounded-full',
}

const masks = {
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
      size && sizes[size],
      rounded && radiuses[rounded],
      !props.src && color && colors[color],
      props.mask
        && (props.rounded === 'none' || rounded === 'none')
        && `nui-avatar-mask ${masks[props.mask]}`,
      props.ring
        && (props.ring === true
          ? `nui-avatar-ring ${rings.primary}`
          : `nui-avatar-ring ${rings[props.ring]}`),
      props.classes?.wrapper,
    ]"
  >
    <div class="nui-avatar-inner" :class="props.classes?.inner">
      <slot>
        <img
          v-if="props.src"
          v-bind="$attrs"
          :src="props.src"
          class="nui-avatar-img"
          :class="[
            rounded && radiuses[rounded],
            props.srcDark ? 'dark:hidden' : '',
            props.classes?.img,
          ]"
        >

        <img
          v-if="props.src && props.srcDark"
          v-bind="$attrs"
          :src="props.srcDark"
          class="nui-avatar-img hidden dark:block"
          :class="[rounded && radiuses[rounded], props.classes?.img]"
        >

        <span v-if="!props.src" class="nui-avatar-text">
          {{ props.text }}
        </span>
      </slot>
    </div>

    <div
      v-if="'badge' in $slots || props.badgeSrc"
      class="nui-avatar-badge"
      :class="props.classes?.badge"
    >
      <slot name="badge">
        <img
          v-if="props.badgeSrc"
          :src="props.badgeSrc"
          class="nui-badge-img"
          alt=""
        >
      </slot>
    </div>

    <span
      v-if="props.dot"
      class="nui-avatar-dot"
      :class="[
        props.dot === true ? dots.primary : dots[props.dot],
        props.classes?.dot,
      ]"
    />
  </div>
</template>
