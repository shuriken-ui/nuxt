import type { MaybeRefOrGetter } from '@vueuse/core'

let lastId = 0

export function useNinjaId(id: MaybeRefOrGetter<string | undefined>) {
  return computed(() => {
    const _id = typeof id === 'function' ? id() : isRef(id) ? id.value : id
    return _id ?? `ninja-input-${++lastId}`
  })
}
