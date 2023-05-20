<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * Sets the toggle element to inverted colors mode.
     */
    inverted?: boolean
    /**
     * Disables transitions when toggling between light and dark mode.
     */
    disableTransitions?: boolean
  }>(),
  {
    inverted: false,
    disableTransitions: false,
  }
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
  <label
    class="nui-focus relative block h-9 w-9 shrink-0 overflow-hidden rounded-full transition-all duration-300 focus-visible:outline-2"
    :class="
      props.inverted
        ? 'ring-offset-muted-500 dark:ring-offset-muted-400'
        : 'dark:ring-offset-muted-900'
    "
  >
    <input
      v-model="isDark"
      type="checkbox"
      class="absolute start-0 top-0 z-[2] h-full w-full cursor-pointer opacity-0"
    />
    <span
      class="relative block h-9 w-9 rounded-full"
      :class="
        props.inverted
          ? 'bg-primary-700 '
          : 'bg-white dark:bg-muted-800  border border-muted-300 dark:border-muted-700'
      "
    >
      <IconSun
        class="pointer-events-none absolute start-1/2 top-1/2 block h-5 w-5 text-yellow-400 transition-all duration-300"
        :class="[
          !isDark
            ? '-translate-y-1/2 translate-x-[-50%] opacity-100 rtl:translate-x-[50%]'
            : 'translate-x-[-50%] translate-y-[-150%] opacity-0 rtl:translate-x-[50%]',
        ]"
      />

      <IconMoon
        class="pointer-events-none absolute start-1/2 top-1/2 block h-5 w-5 text-yellow-400 transition-all duration-300"
        :class="[
          !isDark
            ? 'translate-x-[-45%] translate-y-[-150%] opacity-0 rtl:translate-x-[45%]'
            : '-translate-y-1/2 translate-x-[-45%] opacity-100 rtl:translate-x-[45%]',
        ]"
      />
    </span>
  </label>
</template>

<style>
.nui-no-transition * {
  transition-property: none !important;
  transition-duration: 0 !important;
}
</style>
