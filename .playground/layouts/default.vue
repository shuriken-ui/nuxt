<script setup lang="ts">
import { RouteRecordNormalized } from 'vue-router'

const router = useRouter()
const color = useColorMode()

const isDark = computed(() => color.value === 'dark')
const logo = computed(() =>
  isDark.value
    ? 'https://user-images.githubusercontent.com/3911343/232132279-8d8bf0ad-b1d7-4802-984e-a696763dc6cd.png'
    : 'https://user-images.githubusercontent.com/3911343/232132309-62971744-dcdb-429c-aa93-6ba0c1caac42.png'
)
const routes = computed(() =>
  router.getRoutes().reduce((r, a) => {
    if ((a.meta as any).section) {
      r[(a.meta as any).section] = r[(a.meta as any).section] || []
      r[(a.meta as any).section].push(a)
    }
    return r
  }, Object.create(null))
)
</script>

<template>
  <div>
    <div class="flex min-h-screen">
      <div class="w-2/12">
        <nav class="fixed w-2/12 max-h-screen overflow-y-scroll nui-slimscroll">
          <NuxtLink to="/" class="inline-block px-2 py-4">
            <img alt="Shuriken UI logo" class="h-8" :src="logo" />
          </NuxtLink>

          <ul class="flex flex-col gap-6">
            <div v-for="(routeGroup, id) in Object.entries(routes)" :key="id">
              <h3
                class="capitalize text-sm text-muted-400 font-medium border-b border-muted-300 mx-4 pb-2 mb-4"
              >
                {{ routeGroup[0] }}
              </h3>
              <ul>
                <li
                  v-for="route in routeGroup[1]"
                  :key="(route as RouteRecordNormalized).path"
                >
                  <NuxtLink
                    active-class="text-primary-500"
                    class="py-2 px-4 hover:bg-muted-50 dark:hover:bg-muted-900 flex flex-col"
                    :to="(route as RouteRecordNormalized).path"
                  >
                    <span class="flex gap-1 items-center">
                      <Icon
                        class="text-muted-600"
                        v-if="
                          typeof (route as RouteRecordNormalized).meta?.icon === 'string' && (route as RouteRecordNormalized).meta?.icon
                        "
                        :name="((route as RouteRecordNormalized).meta?.icon as string)"
                      />
                      <span class="inline-bloc">
                        {{ (route as RouteRecordNormalized).meta?.title }}
                      </span>
                    </span>
                    <span
                      class="italic text-xs text-muted-500"
                      v-if="(route as RouteRecordNormalized).meta?.description"
                    >
                      {{ (route as RouteRecordNormalized).meta?.description }}
                    </span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </ul>
        </nav>
      </div>
      <div class="w-10/12 border-l border-muted-200 dark:border-muted-800">
        <slot />
      </div>
    </div>
    <div class="fixed top-0 end-0 pr-6 pt-6 z-10">
      <BaseSelect v-model="color.preference" condensed>
        <option value="system">system</option>
        <option value="light">light</option>
        <option value="dark">dark</option>
      </BaseSelect>
    </div>
  </div>
</template>
