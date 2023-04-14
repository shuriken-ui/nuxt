<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

export interface ButtonRingProps {
  type?: 'button' | 'submit' | 'reset'
  to?: RouteLocationRaw
  disabled?: boolean
  rel?: string
  target?: string

  muted?: boolean
}

const props = withDefaults(
  defineProps<{
    /**
     * The type of button.
     * If this is not set and the `to` property is set, the component will be treated as a link.
     */
    type?: 'button' | 'submit' | 'reset'

    /**
     * The route to navigate to when the button or link is clicked.
     * If this is set and the `type` property is not set, the component will be treated as a link.
     */
    to?: RouteLocationRaw

    /**
     * Whether the button or link is disabled.
     */
    disabled?: boolean

    /**
     * The value for the `rel` attribute on the button or link.
     * This property is only relevant for links.
     */
    rel?: string

    /**
     * The value for the `target` attribute on the button or link.
     * This property is only relevant for links.
     */
    target?: string

    /**
     * Whether the button is muted.
     */
    muted?: boolean
  }>(),
  {
    to: undefined,
    type: undefined,
    rel: '',
    target: '',
    muted: false,
    disabled: false,
  }
)

const buttonRingClasses = computed(() => {
  const classes = []

  if (props.muted) {
    classes.push('hover:ring-muted-100')
  } else {
    classes.push('hover:ring-primary-500')
  }

  return classes
})

const { attributes, is } = useNinjaButton(props)
</script>

<template>
  <component
    :is="is"
    v-bind="attributes"
    :class="buttonRingClasses"
    class="dark:ring-offset-muted-900 relative block h-9 w-9 overflow-hidden rounded-full ring-1 ring-transparent transition-all duration-300 hover:ring-offset-4"
  >
    <span
      class="dark:bg-muted-800 border-muted-300 dark:border-muted-700 relative flex h-9 w-9 items-center justify-center rounded-full border bg-white"
    >
      <slot></slot>
    </span>
  </component>
</template>
