<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The radius of the kbd.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The radius of the kbd.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    size?: 'xs' | 'sm' | 'md' | 'lg'

    /**
     * The color of the kbd.
     *
     * @default 'default'
     */
    color?: 'default' | 'muted' | 'none'

    /**
     * The icon to display for the kbd.
     */
    icon?: string

    /**
     * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]
    }
  }>(),
  {
    rounded: undefined,
    size: undefined,
    color: undefined,
    icon: undefined,
    classes: () => ({}),
  },
)

const rounded = useNuiDefaultProperty(props, 'BaseKbd', 'rounded')
const size = useNuiDefaultProperty(props, 'BaseKbd', 'size')
const color = useNuiDefaultProperty(props, 'BaseKbd', 'color')

const radiuses = {
  none: '',
  sm: 'nui-kbd-rounded-sm',
  md: 'nui-kbd-rounded-md',
  lg: 'nui-kbd-rounded-lg',
  full: 'nui-kbd-rounded-full',
} as Record<string, string>

const sizes = {
  xs: 'nui-kbd-xs',
  sm: 'nui-kbd-sm',
  md: 'nui-kbd-md',
  lg: 'nui-kbd-lg',
} as Record<string, string>

const colors = {
  default: 'nui-kbd-default',
  muted: 'nui-kbd-muted',
} as Record<string, string>
</script>

<template>
  <kbd
    class="nui-kbd"
    :class="[
      color && colors[color],
      size && sizes[size],
      rounded && radiuses[rounded],
      props.classes?.wrapper,
    ]"
  >
    <slot>
      <span v-if="props.icon" class="nui-kbd-icon-outer">
        <Icon :name="props.icon" class="nui-kbd-icon-inner" />
      </span>
    </slot>
  </kbd>
</template>
