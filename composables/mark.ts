import type { MaybeComputedRef } from '@vueuse/core'
// eslint-disable-next-line vue/prefer-import-from-vue
import { escapeHtml } from '@vue/shared'

export function useNinjaMark(
  _text?: MaybeComputedRef<string | undefined>,
  _search?: MaybeComputedRef<string | undefined>,
  _classes?: MaybeComputedRef<string | undefined>
) {
  const text = computed(() =>
    typeof _text === 'function' ? _text() : isRef(_text) ? _text.value : _text
  )
  const classes = computed(() =>
    typeof _classes === 'function'
      ? _classes()
      : isRef(_classes)
      ? _classes.value
      : _classes
  )
  const search = computed(() =>
    typeof _search === 'function'
      ? _search()
      : isRef(_search)
      ? _search.value
      : _search
  )

  return computed(() => {
    const txt = unref(text)
    const srch = unref(search)
    if (!txt) {
      return ''
    }

    if (!srch) {
      return escapeHtml(txt)
    }

    const regex = new RegExp(srch, 'gi')

    return txt.replace(regex, (part) => {
      return `<mark class="${classes.value}">${escapeHtml(part)}</mark>`
    })
  })
}
