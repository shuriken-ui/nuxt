<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The color of the button.
     *
     * @default 'default'
     */
    color?:
      | 'default'
      | 'default-contrast'
      | 'muted'
      | 'muted-contrast'
      | 'light'
      | 'dark'
      | 'black'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'none'
  }>(),
  {
    color: undefined,
  },
)

const color = useNuiDefaultProperty(props, 'BaseInputHelpText', 'color')

const colors = {
  default: 'text-inherit',
  'default-contrast': 'text-inherit',
  muted: 'text-muted-500 dark:text-muted-400',
  'muted-contrast': 'text-muted-500 dark:text-muted-400',
  primary: 'text-primary-500',
  info: 'text-info-500',
  success: 'text-success-500',
  warning: 'text-warning-500',
  danger: 'text-danger-500',
  light: 'text-muted-100',
  dark: 'text-muted-900 dark:text-muted-100',
  black: 'text-black dark:text-white',
  none: '',
}
</script>

<template>
  <div :class="['nui-input-help-text', color && colors[color]]">
    <slot></slot>
  </div>
</template>
