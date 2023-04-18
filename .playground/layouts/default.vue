<script setup lang="ts">
const router = useRouter()
const color = useColorMode()

const isDark = computed(() => color.value === 'dark')
const logo = computed(() =>
  isDark.value
    ? 'https://user-images.githubusercontent.com/3911343/232132279-8d8bf0ad-b1d7-4802-984e-a696763dc6cd.png'
    : 'https://user-images.githubusercontent.com/3911343/232132309-62971744-dcdb-429c-aa93-6ba0c1caac42.png'
)
const routes = computed(() =>
  router.getRoutes().filter((route) => route.path !== '/')
)

const toggleColor = () => {
  color.value = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <div>
    <div class="flex min-h-screen">
      <div class="w-2/12">
        <nav class="fixed w-2/12 max-h-screen overflow-y-scroll slimscroll">
          <div class="px-2 py-4">
            <img alt="Shuriken UI logo" class="h-8" :src="logo" />
          </div>

          <ul>
            <li>
              <NuxtLink
                exact-active-class="text-primary-500"
                class="block px-4 py-2 hover:bg-muted-50 dark:hover:bg-muted-900"
                to="/"
              >
                Home
              </NuxtLink>
            </li>
            <li v-for="route in routes" :key="route.path">
              <NuxtLink
                active-class="text-primary-500"
                class="px-4 py-2 hover:bg-muted-50 dark:hover:bg-muted-900 flex flex-col"
                :to="route.path"
              >
                <span class="flex gap-1 items-center">
                  <Icon
                    class="text-muted-600"
                    v-if="
                      typeof route.meta?.icon === 'string' && route.meta?.icon
                    "
                    :name="route.meta?.icon"
                  />
                  <span>{{ route.meta?.title }}</span>
                </span>
                <span
                  class="text-xs text-muted-400"
                  v-if="route.meta?.description"
                >
                  {{ route.meta?.description }}
                </span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="w-10/12 border-l border-muted-200 dark:border-muted-800">
        <slot />
      </div>
    </div>
    <div class="fixed top-0 end-0 pr-6 pt-6 z-10">
      <div class="flex gap-4">
        <div
          class="rounded-full cursor-pointer p-1 h-12 w-12"
          :class="[
            isDark
              ? 'text-violet-500 hover:bg-violet-300'
              : 'text-warning-500 hover:bg-warning-200',
          ]"
          @click="toggleColor()"
        >
          <span
            class="h-full w-full inline-block rounded-full p-2"
            :class="[
              isDark
                ? 'text-violet-500 bg-violet-200'
                : 'text-warning-500 bg-warning-100',
            ]"
          >
            <IconSun v-if="!isDark" />
            <IconMoon v-else />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
