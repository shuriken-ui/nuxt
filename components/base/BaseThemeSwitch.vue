<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * Disables transitions when toggling between light and dark mode.
     */
    disableTransitions?: boolean
  }>(),
  {
    disableTransitions: false,
  },
)

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(value) {
    // disable transitions
    if (process.client && props.disableTransitions) {
      document.documentElement.classList.add('nui-no-transition')
    }

    colorMode.preference = value ? 'dark' : 'light'

    // re-enable transitions
    if (process.client && props.disableTransitions) {
      setTimeout(() => {
        document.documentElement.classList.remove('nui-no-transition')
      }, 0)
    }
  },
})
</script>

<template>
  <label class="nui-theme-switch">
    <input class="nui-theme-switch-input" type="checkbox" v-model="isDark" />
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
