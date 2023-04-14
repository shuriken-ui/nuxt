import type { MaybeComputedRef } from '@vueuse/core'

/**
 * Scrollspy allows you to watch visible headings in a specific page.
 * Useful for table of contents live style updates.
 */
export const useNinjaScrollspy = (
  _options?: MaybeComputedRef<IntersectionObserverInit>,
  _selectors?: MaybeComputedRef<string[]>
) => {
  const options = computed(() => {
    if (typeof _options === 'function') {
      return _options()
    }
    if (isRef(_options)) {
      return _options.value
    }
    return _options
  })
  const selectors = computed(() => {
    if (typeof _selectors === 'function') {
      return _selectors()
    }
    if (isRef(_selectors)) {
      return _selectors.value
    }
    return _selectors
  })

  const observer = shallowRef<IntersectionObserver>()
  const intersectingIds = shallowRef<string[]>([])
  const activeIds = shallowRef<string[]>([])
  const route = useRoute()
  let timer: any

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      const id = entry.target.id

      if (entry.isIntersecting) {
        intersectingIds.value.push(id)
      } else {
        intersectingIds.value = intersectingIds.value.filter((t) => t !== id)
      }
    }
  }

  const updateElements = (elements: Element[]) => {
    observer.value?.disconnect()
    for (const element of elements) {
      observer.value?.observe(element)
    }
  }

  watch(intersectingIds, (value, oldValue) => {
    activeIds.value = value.length === 0 ? oldValue : value
  })

  // Create intersection observer
  onBeforeMount(() => {
    observer.value = new IntersectionObserver(observerCallback, options.value)
  })

  // Watch for selectors
  if (process.client) {
    watch(
      [() => route.path, selectors],
      () => {
        if (selectors.value?.length) {
          if (timer) {
            clearTimeout(timer)
          }

          timer = setTimeout(() => {
            if (selectors.value) {
              const element = document.querySelectorAll(
                selectors.value.join(', ')
              )
              updateElements([...element])
            }
          }, 300)
        }
      },
      {
        immediate: true,
      }
    )
  }

  // Destroy it
  onBeforeUnmount(() => {
    if (timer) {
      clearTimeout(timer)
    }

    observer.value?.disconnect()
  })

  return {
    visibleIds: intersectingIds,
    activeIds,
    updateElements,
  }
}
