<script setup lang="ts">
import type { RouteLocationOptions } from 'vue-router'

export interface PaginationEmits {
  (event: 'update:currentPage', currentPage: number): void
}

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
     * The shape of the pagination.
     */
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'

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
  }>(),
  {
    currentPage: 1,
    maxLinksDisplayed: 3,
    routerQueryKey: 'page',
    ellipsis: '…',
    shape: undefined,
    previousIcon: 'lucide:chevron-left',
    nextIcon: 'lucide:chevron-right',
  },
)
const emits = defineEmits<PaginationEmits>()
const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.pagination,
)

const shapeStyle = {
  straight: '',
  rounded: 'nui-pagination-rounded',
  smooth: 'nui-pagination-smooth',
  curved: 'nui-pagination-curved',
  full: 'nui-pagination-full',
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
  let lastButton =
    firstButton +
    (totalPageDisplayed.value - Math.ceil(totalPageDisplayed.value % 2))

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

const paginatedLink = (page = 1) => {
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
    name: route.name,
    params: route.params,
    query,
  } as RouteLocationOptions
}
const handleLinkClick = (e: MouseEvent, page = 1) => {
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
  <div class="nui-pagination" :class="[props.shape && shapeStyle[props.shape]]">
    <BaseFocusLoop
      as="ul"
      class="nui-pagination-list"
      :class="props.shape && shapeStyle[props.shape]"
    >
      <slot name="before-pagination"></slot>
      <!-- Link -->
      <li>
        <NuxtLink
          :to="paginatedLink(1)"
          tabindex="0"
          class="nui-pagination-link"
          :class="[
            currentPage === 1 && 'nui-active',
            props.shape && shapeStyle[props.shape],
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
          :class="[props.shape && shapeStyle[props.shape]]"
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
            props.shape && shapeStyle[props.shape],
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
          :class="[props.shape && shapeStyle[props.shape]]"
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
            props.shape && shapeStyle[props.shape],
          ]"
          @keydown.space="(e: any) => (e.target as HTMLAnchorElement).click()"
          @click="(e: any) => handleLinkClick(e, lastPage)"
        >
          {{ lastPage }}
        </NuxtLink>
      </li>
      <slot name="after-pagination"></slot>
    </BaseFocusLoop>

    <BaseFocusLoop
      class="nui-pagination-buttons"
      :class="props.shape && shapeStyle[props.shape]"
    >
      <slot name="before-navigation"></slot>

      <!-- Previous -->
      <NuxtLink
        :to="paginatedLink(currentPage - 1)"
        tabindex="0"
        class="nui-pagination-button"
        @keydown.space="(e: any) => (e.target as HTMLAnchorElement).click()"
        @click="(e: any) => handleLinkClick(e, currentPage - 1)"
      >
        <Icon :name="previousIcon" class="pagination-button-icon" />
      </NuxtLink>

      <!-- Next -->
      <NuxtLink
        :to="paginatedLink(currentPage + 1)"
        tabindex="0"
        class="nui-pagination-button"
        @keydown.space="(e: any) => (e.target as HTMLAnchorElement).click()"
        @click="(e: any) => handleLinkClick(e, currentPage + 1)"
      >
        <Icon :name="nextIcon" class="pagination-button-icon" />
      </NuxtLink>
      <slot name="after-navigation"></slot>
    </BaseFocusLoop>
  </div>
</template>
