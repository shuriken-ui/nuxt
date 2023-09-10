<script setup lang="ts">
import { MenuItem } from '@headlessui/vue'
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    /**
     * The type of button.
     */
    type?: 'button' | 'submit' | 'reset'

    /**
     * The route to navigate to when the button is clicked.
     */
    to?: RouteLocationRaw

    /** Using href instead of to result in a native anchor with no router functionality. */
    href?: string

    /**
     * Whether the button is disabled.
     */
    disabled?: boolean

    /**
     * The shape of the dropdown-item.
     */
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved'

    /**
     * The color of the dropdown-item.
     */
    color?: 'default' | 'contrast'

    /**
     * The value for the `rel` attribute on the button.
     */
    rel?: string

    /**
     * The value for the `target` attribute on the button.
     */
    target?: string

    /**
     * The title to display for the dropdown item.
     */
    title?: string

    /**
     * The text to display for the dropdown item.
     */
    text?: string
    /**
     * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
     */
    classes?: {
      title?: string | string[]
      text?: string | string[]
    }
  }>(),
  {
    type: undefined,
    to: undefined,
    href: undefined,
    rel: undefined,
    target: undefined,
    title: undefined,
    text: undefined,
    shape: undefined,
    color: 'default',
    disabled: false,
    classes: () => ({
      title:
        'font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white',
      text: 'text-muted-400 font-sans text-xs',
    }),
  },
)

const shapeStyle = {
  straight: '',
  rounded: 'nui-item-rounded',
  smooth: 'nui-item-smooth',
  curved: 'nui-item-curved',
}
const colorStyle = {
  default: 'nui-item-default',
  contrast: 'nui-item-contrast',
}

const { is, attributes } = useNinjaButton(props)
</script>

<template>
  <MenuItem
    v-slot="{ active, close }: { active: boolean; close: () => void }"
    as="div"
  >
    <component
      :is="is"
      v-bind="attributes"
      class="nui-dropdown-item"
      :class="[
        active && 'nui-active',
        props.shape && shapeStyle[props.shape],
        colorStyle[props.color],
      ]"
      @click.passive="close"
    >
      <slot name="start"></slot>
      <div class="nui-item-content">
        <div :class="props.classes.title">
          <slot>{{ props.title }}</slot>
        </div>
        <p
          v-if="'text' in $slots || props.text"
          class="text-muted-400 font-sans text-xs"
        >
          <slot name="text">{{ props.text }}</slot>
        </p>
      </div>
      <slot name="end"></slot>
    </component>
  </MenuItem>
</template>
