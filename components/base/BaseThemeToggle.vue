<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The form input identifier.
     */
    id?: string
    /**
     * Sets the toggle element to inverted colors mode.
     */
    inverted?: boolean
    /**
     * Disables transitions when toggling between light and dark mode.
     *
     * @default false
     */
    disableTransitions?: boolean
  }>(),
  {
    id: undefined,
    inverted: false,
    disableTransitions: undefined,
  },
)

const id = useNinjaId(() => props.id)
const disableTransitions = useNuiDefaultProperty(
  props,
  'BaseThemeToggle',
  'disableTransitions',
)

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(value) {
    // disable transitions
    if (import.meta.browser && disableTransitions.value) {
      document.documentElement.classList.add('nui-no-transition')
    }

    colorMode.preference = value ? 'dark' : 'light'

    // re-enable transitions
    if (import.meta.browser && disableTransitions.value) {
      setTimeout(() => {
        document.documentElement.classList.remove('nui-no-transition')
      }, 0)
    }
  },
})
</script>

<template>
  <label
    class="nui-theme-toggle"
    :class="props.inverted && 'nui-theme-toggle-inverted'"
    :for="id"
  >
    <input
      :id="id"
      v-model="isDark"
      type="checkbox"
      class="nui-theme-toggle-input"
    >
    <span class="nui-theme-toggle-inner">
      <IconSun class="nui-sun" />
      <IconMoon class="nui-moon" />
    </span>
  </label>
</template>

<style>
.nui-no-transition * {
  transition-property: none !important;
  transition-duration: 0 !important;
}
</style>
