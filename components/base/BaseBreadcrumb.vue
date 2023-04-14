<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  /**
   * The items to display in the breadcrumb.
   *
   * If not provided, the breadcrumb will be generated
   * from the current route using page meta under `breadcrumb` key.
   */
  items?: {
    /**
     * The label to display for the item.
     */
    label?: string

    /**
     * Whether to hide the label for the item.
     */
    hideLabel?: boolean

    /**
     * An icon to display for the item.
     */
    icon?: string

    /**
     * The route to navigate to when the item is clicked.
     */
    to?: RouteLocationRaw
  }[]
}>()
const route = useRoute()
const router = useRouter()

const items = computed(() => {
  if (props.items) {
    return props.items
  }

  const breadcrumbItems: any[] = []
  const indexRoute = router.resolve('/')

  if (indexRoute.meta.breadcrumb === false) {
    // skip breadcrumb item
  } else if (indexRoute.meta.breadcrumb) {
    const breadcrumbItem = indexRoute.meta.breadcrumb
    breadcrumbItems.push({
      to: indexRoute.path,
      ...breadcrumbItem,
    })
  } else if (indexRoute.meta.title) {
    breadcrumbItems.push({
      label: indexRoute.meta.title as string,
      to: indexRoute.path,
    })
  }

  for (const matched of route.matched) {
    if (matched.meta.breadcrumb === false) {
      // skip breadcrumb item
    } else if (matched.meta.breadcrumb) {
      const breadcrumbItem = matched.meta.breadcrumb
      breadcrumbItems.push({
        to: matched.path,
        ...breadcrumbItem,
      })
    } else if (matched.meta.title) {
      breadcrumbItems.push({
        label: matched.meta.title as string,
        to: matched.path,
      })
    }
  }

  return breadcrumbItems
})
</script>

<template>
  <nav>
    <ul class="mb-6 flex items-center font-sans text-[0.85rem]">
      <li class="me-3 sm:hidden">
        <BaseDropdown flavor="context" compact>
          <BaseDropdownItem
            v-for="(item, index) in items.slice(0, items.length - 1)"
            :key="index"
            :to="item.to"
            class="flex items-center gap-x-1"
          >
            {{ item.label }}
          </BaseDropdownItem>
        </BaseDropdown>
      </li>
      <li
        v-for="(item, index) in items"
        :key="index"
        class="items-center"
        :class="index !== items.length - 1 ? 'hidden sm:flex' : 'flex'"
      >
        <NuxtLink
          :to="item.to"
          class="text-muted-500 flex items-center gap-x-1 transition-colors duration-300"
          :class="[item.to && 'hover:text-primary-500 focus:text-primary-500']"
        >
          <Icon
            v-if="item.icon"
            :name="item.icon"
            class="block h-4 w-4 shrink-0"
          />
          <span :class="[item.hideLabel && 'sr-only']">{{ item.label }}</span>
        </NuxtLink>
        <span v-if="index < items.length - 1" class="text-muted-500 px-2">
          <slot>·</slot>
        </span>
      </li>
    </ul>
  </nav>
</template>
