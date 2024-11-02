<script setup lang="ts">
import type { RouteRecordNormalized } from 'vue-router'

const router = useRouter()
const color = useColorMode()

// const isDark = computed(() => color.value === 'dark')
// const logo = computed(() =>
//   isDark.value
//     ? 'https://user-images.githubusercontent.com/3911343/232132279-8d8bf0ad-b1d7-4802-984e-a696763dc6cd.png'
//     : 'https://user-images.githubusercontent.com/3911343/232132309-62971744-dcdb-429c-aa93-6ba0c1caac42.png',
// )
const routes = computed(() =>
  router.getRoutes().reduce((r, a) => {
    if ((a.meta as any).section) {
      r[(a.meta as any).section] = r[(a.meta as any).section] || []
      r[(a.meta as any).section].push(a)
    }
    return r
  }, Object.create(null)),
)
</script>

<template>
  <div>
    <div class="flex min-h-screen">
      <div class="w-2/12">
        <nav class="fixed w-2/12 max-h-screen overflow-y-scroll nui-slimscroll">
          <NuxtLink to="/" class="inline-block px-6 py-4">
            <NuiLogoText class="h-8 w-auto text-muted-600" />
          </NuxtLink>

          <ul class="flex flex-col gap-10 pt-6">
            <div v-for="(routeGroup, id) in Object.entries(routes)" :key="id">
              <h3
                class="uppercase text-xs tracking-wider text-muted-400 font-semibold mx-4 px-3 pb-2"
              >
                {{ routeGroup[0] }}
              </h3>
              <ul class="px-3">
                <li
                  v-for="route in routeGroup[1]"
                  :key="(route as RouteRecordNormalized).path"
                >
                  <NuxtLink
                    active-class="text-primary-500"
                    class="py-2 px-4 hover:bg-muted-100 dark:hover:bg-muted-900 rounded-lg flex flex-col"
                    :to="(route as RouteRecordNormalized).path"
                  >
                    <span class="flex gap-4 items-center">
                      <Icon
                        v-if="
                          typeof (route as RouteRecordNormalized).meta?.icon
                            === 'string'
                            && (route as RouteRecordNormalized).meta?.icon
                        "
                        class="text-sm text-muted-400 w-6 h-6 shrink-0"
                        :name="
                          (route as RouteRecordNormalized).meta?.icon as string
                        "
                      />
                      <span class="block">
                        <span
                          class="block text-sm font-sans text-muted-800 dark:text-muted-100"
                        >
                          {{ (route as RouteRecordNormalized).meta?.title }}
                        </span>
                        <span
                          v-if="
                            (route as RouteRecordNormalized).meta?.description
                          "
                          class="block text-xs text-muted-500"
                        >
                          {{
                            (route as RouteRecordNormalized).meta?.description
                          }}
                        </span>
                      </span>
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
    <div class="fixed top-0 end-0 pr-6 pt-6 z-50">
      <BaseSelect v-model="color.preference" size="sm">
        <option value="system">
          system
        </option>
        <option value="light">
          light
        </option>
        <option value="dark">
          dark
        </option>
      </BaseSelect>
    </div>
  </div>
</template>
