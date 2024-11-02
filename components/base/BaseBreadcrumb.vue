<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    /**
     * The items to display in the breadcrumb.
     *
     * If not provided, the breadcrumb will be generated
     * from the current route using page meta under `breadcrumb` key.
     */
    items?: {
      /**
       * The route to navigate to when the item is clicked.
       */
      to?: RouteLocationRaw

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
       * CSS classes to apply to the icon.
       */
      iconClasses?: string | string[]
    }[]

    /**
     * Defines the hover color of the breadcrumb links
     *
     * @since 3.0.0
     * @default 'primary'
     */
    color?: 'primary' | 'dark' | 'black'

    /**
     * Optional CSS classes to apply to the component inner elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the list element.
       */
      list?: string | string[]

      /**
       * CSS classes to apply to the dropdown element.
       */
      dropdown?: string | string[]

      /**
       * CSS classes to apply to the item element.
       */
      item?: string | string[]
    }
  }>(),
  {
    items: undefined,
    color: undefined,
    classes: () => ({}),
  },
)

const color = useNuiDefaultProperty(props, 'BaseBreadcrumb', 'color')

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
  }
  else if (indexRoute.meta.breadcrumb) {
    const breadcrumbItem = indexRoute.meta.breadcrumb
    breadcrumbItems.push({
      to: indexRoute.path,
      ...breadcrumbItem,
    })
  }
  else if (indexRoute.meta.title) {
    breadcrumbItems.push({
      label: indexRoute.meta.title as string,
      to: indexRoute.path,
    })
  }

  for (const matched of route.matched) {
    if (matched.meta.breadcrumb === false) {
      // skip breadcrumb item
    }
    else if (matched.meta.breadcrumb) {
      const breadcrumbItem = matched.meta.breadcrumb
      breadcrumbItems.push({
        to: matched.path,
        ...breadcrumbItem,
      })
    }
    else if (matched.meta.title) {
      breadcrumbItems.push({
        label: matched.meta.title as string,
        to: matched.path,
      })
    }
  }

  return breadcrumbItems
})

const colors = {
  primary: 'nui-breadcrumb-primary',
  dark: 'nui-breadcrumb-dark',
  black: 'nui-breadcrumb-black',
}
</script>

<template>
  <nav
    class="nui-breadcrumb"
    :class="[color && colors[color], props.classes?.wrapper]"
  >
    <ul class="nui-breadcrumb-list" :class="props.classes?.list">
      <li class="nui-breadcrumb-item-mobile">
        <BaseDropdown
          variant="context"
          size="md"
          :class="props.classes?.dropdown"
        >
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
          :class="[
            index !== items.length - 1 ? 'hidden sm:flex' : 'flex',
            props.classes?.item,
          ]"
        >
          <slot name="link" v-bind="{ item, index }">
            <NuxtLink
              :to="item.to"
              class="nui-item-inner"
              :class="[item.to && 'nui-has-link']"
            >
              <slot name="icon" v-bind="{ item, index }">
                <Icon
                  v-if="item.icon"
                  :name="item.icon"
                  class="nui-item-icon"
                  :class="item.iconClasses"
                />
              </slot>
              <slot name="label" v-bind="{ item, index }">
                <span :class="[item.hideLabel && 'sr-only']">
                  {{ item.label }}
                </span>
              </slot>
            </NuxtLink>
          </slot>
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
