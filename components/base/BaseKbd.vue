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
    color?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast' | 'none'

    /**
     * The icon to display for the kbd.
     */
    icon?: string
  }>(),
  {
    rounded: undefined,
    size: undefined,
    color: undefined,
    icon: undefined,
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
  'default-contrast': 'nui-kbd-default-contrast',
  muted: 'nui-kbd-muted',
  'muted-contrast': 'nui-kbd-muted-contrast',
} as Record<string, string>
</script>

<template>
  <kbd
    class="nui-kbd"
    :class="[
      color && colors[color],
      size && sizes[size],
      rounded && radiuses[rounded],
    ]"
  >
    <slot>
      <span v-if="props.icon" class="nui-kbd-icon-outer">
        <Icon :name="props.icon" class="nui-kbd-icon-inner" />
      </span>
    </slot>
  </kbd>
</template>
