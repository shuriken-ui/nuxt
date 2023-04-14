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
</script>

<template>
  <div
    class="relative inline-flex shrink-0 items-center justify-center outline-none"
    :class="[
      props.size === 'xxs' && `h-6 w-6`,
      props.size === 'xs' && `h-8 w-8`,
      props.size === 'sm' && `h-10 w-10`,
      props.size === 'md' && `h-12 w-12`,
      props.size === 'lg' && `h-16 w-16`,
      props.size === 'xl' && `h-20 w-20`,
      props.size === '2xl' && `h-24 w-24`,
      props.size === '3xl' && `h-28 w-28`,
      props.size === '4xl' && `h-32 w-32`,
      shape === 'full' && 'rounded-full',
      shape === 'rounded' && props.size === 'xxs' && 'rounded',
      shape === 'rounded' && props.size === 'xs' && 'rounded',
      shape === 'rounded' && props.size === 'sm' && 'rounded-md',
      shape === 'rounded' && props.size === 'md' && 'rounded-lg',
      shape === 'rounded' && props.size === 'lg' && 'rounded-lg',
      shape === 'rounded' && props.size === 'xl' && 'rounded-xl',
      shape === 'rounded' && props.size === '2xl' && 'rounded-xl',
      shape === 'rounded' && props.size === '3xl' && 'rounded-xl',
      shape === 'rounded' && props.size === '4xl' && 'rounded-xl',
      shape === 'curved' && props.size === 'xxs' && 'rounded-md',
      shape === 'curved' && props.size === 'xs' && 'rounded-lg',
      shape === 'curved' && props.size === 'sm' && 'rounded-xl',
      shape === 'curved' && props.size === 'md' && 'rounded-2xl',
      shape === 'curved' && props.size === 'lg' && 'rounded-2xl',
      shape === 'curved' && props.size === 'xl' && 'rounded-3xl',
      shape === 'curved' && props.size === '2xl' && 'rounded-3xl',
      shape === 'curved' && props.size === '3xl' && 'rounded-3xl',
      shape === 'curved' && props.size === '4xl' && 'rounded-3xl',
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
      :class="[
        shape === 'full' && 'rounded-full',
        shape === 'rounded' && props.size === 'xxs' && 'rounded',
        shape === 'rounded' && props.size === 'xs' && 'rounded',
        shape === 'rounded' && props.size === 'sm' && 'rounded-lg',
        shape === 'rounded' && props.size === 'md' && 'rounded-xl',
        shape === 'rounded' && props.size === 'lg' && 'rounded-xl',
        shape === 'rounded' && props.size === 'xl' && 'rounded-2xl',
        shape === 'rounded' && props.size === '2xl' && 'rounded-2xl',
        shape === 'rounded' && props.size === '3xl' && 'rounded-2xl',
        shape === 'rounded' && props.size === '4xl' && 'rounded-2xl',

        shape === 'curved' && props.size === 'xxs' && 'rounded-md',
        shape === 'curved' && props.size === 'xs' && 'rounded-lg',
        shape === 'curved' && props.size === 'sm' && 'rounded-xl',
        shape === 'curved' && props.size === 'md' && 'rounded-2xl',
        shape === 'curved' && props.size === 'lg' && 'rounded-2xl',
        shape === 'curved' && props.size === 'xl' && 'rounded-3xl',
        shape === 'curved' && props.size === '2xl' && 'rounded-3xl',
        shape === 'curved' && props.size === '3xl' && 'rounded-3xl',
        shape === 'curved' && props.size === '4xl' && 'rounded-3xl',
      ]"
    >
      <slot>
        <img
          v-if="props.src"
          :src="props.src"
          class="max-h-full max-w-full object-cover shadow-sm dark:border-transparent"
          :class="[
            props.srcDark ? 'dark:hidden' : '',
            props.size === 'xxs' && `h-6 w-6`,
            props.size === 'xs' && `h-8 w-8`,
            props.size === 'sm' && `h-10 w-10`,
            props.size === 'md' && `h-12 w-12`,
            props.size === 'lg' && `h-16 w-16`,
            props.size === 'xl' && `h-20 w-20`,
            props.size === '2xl' && `h-24 w-24`,
            props.size === '3xl' && `h-28 w-28`,
            props.size === '4xl' && `h-32 w-32`,
          ]"
        />

        <img
          v-if="props.src && props.srcDark"
          :src="props.srcDark"
          class="hidden max-w-full object-cover shadow-sm dark:block dark:border-transparent"
          :class="[
            props.size === 'xxs' && `h-6 w-6`,
            props.size === 'xs' && `h-8 w-8`,
            props.size === 'sm' && `h-10 w-10`,
            props.size === 'md' && `h-12 w-12`,
            props.size === 'lg' && `h-16 w-16`,
            props.size === 'xl' && `h-20 w-20`,
            props.size === '2xl' && `h-24 w-24`,
            props.size === '3xl' && `h-28 w-28`,
            props.size === '4xl' && `h-32 w-32`,
          ]"
        />

        <span
          v-if="!props.src"
          class="font-heading text-center font-medium uppercase"
          :class="[
            props.size === 'xxs' && `text-xs`,
            props.size === 'xs' && `text-sm`,
            props.size === 'sm' && `text-sm`,
            props.size === 'md' && `text-sm`,
            props.size === 'lg' && `text-base`,
            props.size === 'xl' && `text-lg`,
            props.size === '2xl' && `text-xl`,
            props.size === '3xl' && `text-2xl`,
            props.size === '4xl' && `text-3xl`,
          ]"
        >
          {{ props.text }}
        </span>
      </slot>
    </div>

    <div
      v-if="'badge' in $slots || props.badgeSrc"
      class="dark:bg-muted-800 absolute z-10 block overflow-hidden rounded-full bg-white"
      :class="[
        props.size === 'xxs' && `h-3 w-3`,
        props.size === 'xs' && `h-4 w-4`,
        props.size === 'sm' && `h-5 w-5`,
        props.size === 'md' && `h-5 w-5`,
        props.size === 'lg' && `h-6 w-6`,
        props.size === 'xl' && `h-8 w-8`,
        props.size === '2xl' && `h-10 w-10`,
        props.size === '3xl' && `h-10 w-10`,
        props.size === '4xl' && `h-12 w-12`,
        shape === 'full' && `bottom-0 end-0`,
        shape === 'straight' && props.size === 'xs' && `-bottom-1 -end-1`,
        shape === 'straight' && props.size === 'sm' && `-bottom-1 -end-1`,
        shape === 'straight' && props.size === 'md' && `-bottom-1 -end-1`,
        shape === 'straight' && props.size === 'lg' && `-bottom-1 -end-1`,
        shape === 'straight' && props.size === 'xl' && `-bottom-1 -end-1`,
        shape === 'straight' && props.size === '2xl' && `-bottom-1.5 -end-1.5`,
        shape === 'straight' && props.size === '3xl' && `-bottom-1.5 -end-1.5`,
        shape === 'straight' && props.size === '4xl' && `-bottom-2 -end-2`,
        shape === 'rounded' && props.size === 'xs' && `-bottom-1 -end-1`,
        shape === 'rounded' && props.size === 'sm' && `-bottom-1 -end-1`,
        shape === 'rounded' && props.size === 'md' && `-bottom-1 -end-1`,
        shape === 'rounded' && props.size === 'lg' && `-bottom-1 -end-1`,
        shape === 'rounded' && props.size === 'xl' && `-bottom-1 -end-1`,
        shape === 'rounded' && props.size === '2xl' && `-bottom-1.5 -end-1.5`,
        shape === 'rounded' && props.size === '3xl' && `-bottom-1.5 -end-1.5`,
        shape === 'rounded' && props.size === '4xl' && `-bottom-2 -end-2`,
        shape === 'curved' && props.size === 'xs' && `-bottom-1 -end-1`,
        shape === 'curved' && props.size === 'sm' && `-bottom-1 -end-1`,
        shape === 'curved' && props.size === 'md' && `-bottom-1 -end-1`,
        shape === 'curved' && props.size === 'lg' && `-bottom-1 -end-1`,
        shape === 'curved' && props.size === 'xl' && `-bottom-1 -end-1`,
        shape === 'curved' && props.size === '2xl' && `-bottom-1.5 -end-1.5`,
        shape === 'curved' && props.size === '3xl' && `-bottom-1.5 -end-1.5`,
        shape === 'curved' && props.size === '4xl' && `-bottom-2 -end-2`,
      ]"
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
        props.size === 'xxs' && `h-1.5 w-1.5`,
        props.size === 'xs' && `h-2 w-2`,
        props.size === 'sm' && `h-2 w-2`,
        props.size === 'md' && `h-3 w-3`,
        props.size === 'lg' && `h-3 w-3`,
        props.size === 'xl' && `h-4 w-4`,
        props.size === '2xl' && `h-4 w-4`,
        props.size === '3xl' && `h-4 w-4`,
        props.size === '4xl' && `h-4 w-4`,
        props.shape === 'straight' && 'end-0 top-0',
        props.shape === 'rounded' && 'end-0 top-0',
        props.shape === 'full' && props.size === 'xs' && `end-0 top-0`,
        props.shape === 'full' && props.size === 'sm' && `end-0.5 top-0.5`,
        props.shape === 'full' && props.size === 'md' && `end-0.5 top-0.5`,
        props.shape === 'full' && props.size === 'lg' && `end-1 top-1`,
        props.shape === 'full' && props.size === 'xl' && `end-1 top-1`,
        props.shape === 'full' && props.size === '2xl' && `end-1.5 top-1.5`,
        props.shape === 'full' && props.size === '3xl' && `end-2 top-2`,
        props.shape === 'full' && props.size === '4xl' && `end-2.5 top-2.5`,
        props.shape === 'curved' && props.size === 'xs' && `-end-0.5 -top-0.5`,
        props.shape === 'curved' && props.size === 'sm' && `end-0 top-0`,
        props.shape === 'curved' && props.size === 'md' && `end-0 top-0`,
        props.shape === 'curved' && props.size === 'lg' && `-end-0.5 -top-0.5 `,
        props.shape === 'curved' && props.size === 'xl' && `-end-0 -top-0`,
        props.shape === 'curved' && props.size === '2xl' && `-end-0 -top-0`,
        props.shape === 'curved' && props.size === '3xl' && `-end-0 -top-0`,
        props.shape === 'curved' && props.size === '4xl' && `-end-0 -top-0`,
        props.dot === 'success' && `bg-success-500`,
        props.dot === 'primary' && `bg-primary-500`,
        props.dot === 'info' && `bg-info-500`,
        props.dot === 'warning' && `bg-warning-500`,
        props.dot === 'danger' && `bg-danger-500`,
        props.dot === 'pink' && `bg-pink-500`,
        props.dot === 'yellow' && `bg-yellow-500`,
      ]"
    ></span>
  </div>
</template>
