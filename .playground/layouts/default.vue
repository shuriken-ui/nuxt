<script setup lang="ts">
const router = useRouter()
const color = useColorMode()
const logo = computed(() =>
  color.value === 'dark'
    ? 'https://user-images.githubusercontent.com/3911343/232132279-8d8bf0ad-b1d7-4802-984e-a696763dc6cd.png'
    : 'https://user-images.githubusercontent.com/3911343/232132309-62971744-dcdb-429c-aa93-6ba0c1caac42.png'
)
const routes = computed(() =>
  router.getRoutes().filter((route) => route.path !== '/')
)
</script>

<template>
  <div>
    <div class="flex min-h-screen">
      <div class="w-2/12">
        <nav class="fixed w-2/12 max-h-screen overflow-y-scroll slimscroll">
          <div class="w-10/12 px-2 py-6">
            <img alt="Shuriken UI logo" :src="logo" />
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
    <div class="fixed top-0 end-0 p-2 z-10">
      <BaseSelect v-model="color.preference" condensed>
        <option value="system">system</option>
        <option value="light">light</option>
        <option value="dark">dark</option>
      </BaseSelect>
    </div>
  </div>
</template>
