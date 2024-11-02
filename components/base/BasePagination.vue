<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    /**
     * The number of items to display per page.
     */
    itemPerPage: number

    /**
     * The total number of items.
     */
    totalItems: number

    /**
     * The current page number.
     */
    currentPage?: number

    /**
     * The maximum number of links to display.
     */
    maxLinksDisplayed?: number

    /**
     * Whether to disable routing.
     */
    noRouter?: boolean

    /**
     * The query key to use for routing.
     */
    routerQueryKey?: string

    /**
     * The icon to show for the previous button.
     */
    previousIcon?: string

    /**
     * The icon to show for the next button.
     */
    nextIcon?: string

    /**
     * The ellipsis to show when there are too many links.
     */
    ellipsis?: string

    /**
     * The color of the pagination active button.
     *
     * @since 3.0.0
     * @default 'primary'
     */
    color?: 'primary' | 'dark' | 'black'

    /**
     * The radius of the pagination.
     *
     * @since 2.0.0
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

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
       * CSS classes to apply to the link element.
       */
      link?: string | string[]

      /**
       * CSS classes to apply to the ellipsis element.
       */
      ellipsis?: string | string[]

      /**
       * CSS classes to apply to the buttons element.
       */
      buttons?: string | string[]

      /**
       * CSS classes to apply to the button element.
       */
      button?: string | string[]
    }
  }>(),
  {
    rounded: undefined,
    color: undefined,
    currentPage: 1,
    maxLinksDisplayed: 3,
    routerQueryKey: 'page',
    previousIcon: 'lucide:chevron-left',
    nextIcon: 'lucide:chevron-right',
    ellipsis: '…',
    classes: () => ({}),
  },
)
const emits = defineEmits<{
  'update:currentPage': [currentPage: number]
}>()

const color = useNuiDefaultProperty(props, 'BasePagination', 'color')
const rounded = useNuiDefaultProperty(props, 'BasePagination', 'rounded')

const radiuses = {
  none: '',
  sm: 'nui-pagination-rounded-sm',
  md: 'nui-pagination-rounded-md',
  lg: 'nui-pagination-rounded-lg',
  full: 'nui-pagination-rounded-full',
}

const colors = {
  primary: 'nui-pagination-primary',
  dark: 'nui-pagination-dark',
  black: 'nui-pagination-black',
}

const route = useRoute()
const lastPage = computed(
  () => Math.ceil(props.totalItems / props.itemPerPage) || 1,
)
const totalPageDisplayed = computed(() =>
  lastPage.value > props.maxLinksDisplayed + 2
    ? props.maxLinksDisplayed + 2
    : lastPage.value,
)
const pages = computed(() => {
  const _pages = []
  let firstButton = props.currentPage - Math.floor(totalPageDisplayed.value / 2)
  let lastButton
    = firstButton
    + (totalPageDisplayed.value - Math.ceil(totalPageDisplayed.value % 2))

  if (firstButton < 1) {
    firstButton = 1
    lastButton = firstButton + (totalPageDisplayed.value - 1)
  }

  if (lastButton > lastPage.value) {
    lastButton = lastPage.value
    firstButton = lastButton - (totalPageDisplayed.value - 1)
  }

  for (let page = firstButton; page <= lastButton; page += 1) {
    if (page === firstButton || page === lastButton) {
      continue
    }

    _pages.push(page)
  }

  return _pages
})

const showLastLink = computed(() => lastPage.value > 1)

function paginatedLink(page = 1) {
  if (props.noRouter) {
    return {}
  }

  const _page = Math.max(1, Math.min(page, lastPage.value))
  const query: any = {
    ...route.query,
  }

  if (props.routerQueryKey) {
    query[props.routerQueryKey] = _page <= 1 ? undefined : _page
  }

  return {
    query,
  } satisfies RouteLocationRaw
}
function handleLinkClick(e: MouseEvent, page = 1) {
  const _page = Math.max(1, Math.min(page, lastPage.value))
  emits('update:currentPage', _page)

  if (props.noRouter) {
    e.preventDefault()
    e.stopPropagation()

    return false
  }
}
</script>

<template>
  <div
    class="nui-pagination"
    :class="[
      rounded && radiuses[rounded],
      color && colors[color],
      props.classes?.wrapper,
    ]"
  >
    <BaseFocusLoop
      as="ul"
      class="nui-pagination-list"
      :class="[rounded && radiuses[rounded], props.classes?.list]"
    >
      <slot name="before-pagination" />
      <!-- Link -->
      <li>
        <NuxtLink
          :to="paginatedLink(1)"
          tabindex="0"
          class="nui-pagination-link"
          :class="[
            currentPage === 1 && 'nui-active',
            rounded && radiuses[rounded],
            props.classes?.link,
          ]"
          @keydown.space="(e: any) => (e.target as HTMLAnchorElement).click()"
          @click="(e: any) => handleLinkClick(e, 1)"
        >
          1
        </NuxtLink>
      </li>

      <!-- Ellipsis -->
      <li v-if="showLastLink && pages.length > 0 && pages[0] > 2">
        <span
          class="nui-pagination-ellipsis"
          :class="[rounded && radiuses[rounded], props.classes?.ellipsis]"
        >
          {{ props.ellipsis }}
        </span>
      </li>

      <!-- Link -->
      <li v-for="page in pages" :key="page">
        <NuxtLink
          :to="paginatedLink(page)"
          tabindex="0"
          :aria-current="currentPage === page ? 'page' : undefined"
          class="nui-pagination-link"
          :class="[
            currentPage === page && 'nui-active',
            rounded && radiuses[rounded],
            props.classes?.link,
          ]"
          @keydown.space="(e: any) => (e.target as HTMLAnchorElement).click()"
          @click="(e: any) => handleLinkClick(e, page)"
        >
          {{ page }}
        </NuxtLink>
      </li>

      <!-- Ellipsis -->
      <li v-if="showLastLink && pages[pages.length - 1] < lastPage - 1">
        <span
          class="nui-pagination-ellipsis"
          :class="[rounded && radiuses[rounded], props.classes?.ellipsis]"
        >
          {{ props.ellipsis }}
        </span>
      </li>

      <!-- Link -->
      <li v-if="showLastLink">
        <NuxtLink
          :to="paginatedLink(lastPage)"
          tabindex="0"
          class="nui-pagination-link"
          :class="[
            currentPage === lastPage && 'nui-active',
            rounded && radiuses[rounded],
            props.classes?.link,
          ]"
          @keydown.space="(e: any) => (e.target as HTMLAnchorElement).click()"
          @click="(e: any) => handleLinkClick(e, lastPage)"
        >
          {{ lastPage }}
        </NuxtLink>
      </li>
      <slot name="after-pagination" />
    </BaseFocusLoop>

    <BaseFocusLoop
      class="nui-pagination-buttons"
      :class="[rounded && radiuses[rounded], props.classes?.buttons]"
    >
      <slot name="before-navigation" />

      <!-- Previous -->
      <NuxtLink
        :to="paginatedLink(currentPage - 1)"
        tabindex="0"
        class="nui-pagination-button"
        :class="props.classes?.button"
        @keydown.space="(e: any) => (e.target as HTMLAnchorElement).click()"
        @click="(e: any) => handleLinkClick(e, currentPage - 1)"
      >
        <slot name="previous-icon">
          <Icon :name="previousIcon" class="pagination-button-icon" />
        </slot>
      </NuxtLink>

      <!-- Next -->
      <NuxtLink
        :to="paginatedLink(currentPage + 1)"
        tabindex="0"
        class="nui-pagination-button"
        :class="props.classes?.button"
        @keydown.space="(e: any) => (e.target as HTMLAnchorElement).click()"
        @click="(e: any) => handleLinkClick(e, currentPage + 1)"
      >
        <slot name="next-icon">
          <Icon :name="nextIcon" class="pagination-button-icon" />
        </slot>
      </NuxtLink>
      <slot name="after-navigation" />
    </BaseFocusLoop>
  </div>
</template>
