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
  <nav class="nui-breadcrumb">
    <ul class="nui-breadcrumb-list">
      <li class="nui-breadcrumb-item-mobile">
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
      <template v-for="(item, index) in items" :key="index">
        <li
          class="nui-breadcrumb-item"
          :class="index !== items.length - 1 ? 'hidden sm:flex' : 'flex'"
        >
          <NuxtLink
            :to="item.to"
            class="nui-item-inner"
            :class="[item.to && 'nui-has-link']"
          >
            <Icon v-if="item.icon" :name="item.icon" class="nui-item-icon" />
            <span :class="[item.hideLabel && 'sr-only']">{{ item.label }}</span>
          </NuxtLink>
        </li>
        <li class="nui-breadcrumb-item">
          <div class="nui-item-inner">
            <span v-if="index < items.length - 1" class="nui-item-text">
              <slot>·</slot>
            </span>
          </div>
        </li>
      </template>
    </ul>
  </nav>
</template>
