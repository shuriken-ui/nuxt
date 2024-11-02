<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The form input identifier.
     */
    id?: string

    /**
     * Disables transitions when toggling between light and dark mode.
     *
     * @default false
     */
    disableTransitions?: boolean
  }>(),
  {
    id: undefined,
    disableTransitions: undefined,
  },
)

const id = useNinjaId(() => props.id)
const disableTransitions = useNuiDefaultProperty(
  props,
  'BaseThemeSwitch',
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
  <label class="nui-theme-switch" :for="id">
    <input
      :id="id"
      v-model="isDark"
      class="nui-theme-switch-input"
      type="checkbox"
    >
    <span class="nui-theme-switch-inner">
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
