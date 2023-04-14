<script lang="ts">
import type { PropType, DefineComponent } from 'vue'
import type { KeyFilter } from '@vueuse/core'
import { onKeyStroke } from '@vueuse/core'

export default defineComponent({
  props: {
    /**
     * The HTML tag to use for the wrapper
     *
     * @default div
     */
    as: {
      type: String,
      default: 'div',
    },
    /**
     * Keys to trigger the next focusable element
     *
     * @default PageUp
     * @see https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
     */
    nextKeys: {
      type: [Array, String] as PropType<string | string[]>,
      default: 'PageDown',
    },
    /**
     * Keys to trigger the previous focusable element
     *
     * @default PageDown
     */
    prevKeys: {
      type: [Array, String] as PropType<string | string[]>,
      default: 'PageUp',
    },
    /**
     * Prevent the default behavior of the keys
     */
    prevent: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots }) {
    const wrapper = ref<HTMLElement>()
    const focusableItems = new Map<number, HTMLElement>()
    let listeners: {
      focusListener: () => void
      focusOutListener: () => void
      node: HTMLElement
    }[] = []
    let focusActiveIndex: number | null = null
    let focusLoopLength = 0

    function clearListeners() {
      for (const listener of listeners) {
        listener.node?.removeEventListener('focus', listener.focusListener)
        listener.node?.removeEventListener(
          'focusout',
          listener.focusOutListener
        )
      }
      listeners = []
    }

    function checkFocusables() {
      // @ts-ignore process.server exists in nuxt context
      if (process.client && wrapper.value) {
        const treeWalker = document.createTreeWalker(
          wrapper.value,
          NodeFilter.SHOW_ELEMENT,
          {
            acceptNode(node: HTMLElement) {
              // @ts-expect-error disabled may not be defined
              if (node.disabled || !node.isConnected) {
                return NodeFilter.FILTER_SKIP
              }
              return node.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP
            },
          }
        )

        clearListeners()
        focusableItems.clear()

        let index = 0
        while (treeWalker.nextNode()) {
          const node = treeWalker.currentNode as HTMLElement
          const currentIndex = index
          focusableItems.set(index, node as HTMLElement)

          const focusListener = () => {
            focusActiveIndex = currentIndex
          }
          const focusOutListener = () => {
            focusActiveIndex = null
          }

          node.addEventListener('focus', focusListener)
          node.addEventListener('focusout', focusOutListener)

          listeners.push({
            focusListener,
            focusOutListener,
            node,
          })

          focusLoopLength = index
          index += 1
        }
      }
    }

    onUpdated(checkFocusables)
    onMounted(checkFocusables)
    onBeforeUnmount(clearListeners)

    onKeyStroke(props.nextKeys as KeyFilter, (event) => {
      if (focusActiveIndex !== null) {
        if (props.prevent) {
          event.preventDefault()
        }

        if (focusActiveIndex + 1 <= focusLoopLength) {
          focusableItems.get(focusActiveIndex + 1)?.focus()
        } else {
          focusableItems.get(0)?.focus()
        }
      }
    })

    onKeyStroke(props.prevKeys as KeyFilter, (event) => {
      if (focusActiveIndex !== null) {
        if (props.prevent) {
          event.preventDefault()
        }

        if (focusActiveIndex > 0) {
          focusableItems.get(focusActiveIndex - 1)?.focus()
        } else {
          focusableItems.get(focusLoopLength)?.focus()
        }
      }
    })

    return () => h(props.as, { ref: wrapper }, slots?.default?.())
  },
}) as DefineComponent<{
  /**
   * The HTML tag to use for the wrapper
   *
   * @default div
   */
  as?: string
  /**
   * Keys to trigger the next focusable element
   *
   * @default PageUp
   * @see https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
   */
  nextKeys?: string | string[]
  /**
   * Keys to trigger the previous focusable element
   *
   * @default PageDown
   */
  prevKeys?: string | string[]
  /**
   * Prevent the default behavior of the keys
   */
  prevent?: boolean
}> & {
  new (): {
    $slots: {
      default(_: Record<string, never>): any
    }
  }
}
</script>
