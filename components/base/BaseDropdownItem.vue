<script setup lang="ts">
import { MenuItem } from '@headlessui/vue'
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  /**
   * The type of button.
   */
  type?: 'button' | 'submit' | 'reset'

  /**
   * The route to navigate to when the button is clicked.
   */
  to?: RouteLocationRaw

  /**
   * Whether the button is disabled.
   */
  disabled?: boolean

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
}>()
const { is, attributes } = useNinjaButton(props)
</script>

<template>
  <MenuItem
    v-slot="{ active, close }: { active: boolean, close: () => void }"
    as="div"
  >
    <component
      :is="is"
      v-bind="attributes"
      class="group/nui-dropdown-item flex w-full items-center justify-start rounded-md px-3 py-2 text-left text-sm transition-colors duration-300"
      :class="[
        active
          ? 'bg-muted-100 dark:bg-muted-700 text-primary-500'
          : 'text-muted-500',
      ]"
      @click.passive="close"
    >
      <slot name="start"></slot>
      <div class="grow">
        <div
          class="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white"
        >
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
