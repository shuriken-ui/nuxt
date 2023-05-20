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
    class="bg-muted-200 dark:bg-muted-700 relative block h-6 w-14 scale-[0.8] rounded-full"
  >
    <input
      class="peer absolute start-0 top-0 z-10 h-full w-full cursor-pointer opacity-0"
      type="checkbox"
      v-model="isDark"
    />
    <span
      class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 absolute -start-1 -top-2 -ms-1 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-all duration-300 peer-checked:ms-[45%] peer-checked:rotate-[360deg]"
    >
      <IconSun
        class="pointer-events-none block h-6 w-6 text-yellow-400 transition-all duration-300"
        :class="[!isDark ? 'block' : 'hidden']"
      />
      <IconMoon
        class="pointer-events-none block h-6 w-6 text-yellow-400 transition-all duration-300"
        :class="[!isDark ? 'hidden' : 'block']"
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
