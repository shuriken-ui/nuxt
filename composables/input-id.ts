import type { MaybeRefOrGetter } from 'vue'

export function useNinjaId(id?: MaybeRefOrGetter<string | undefined>) {
  const internal = ref(toValue(id))

  watch(
    () => toValue(id),
    (value) => {
      internal.value = value || `nui-input-${crypto.randomUUID()}`
    },
  )

  // only generate identifier on client to avoid hydration issues
  onMounted(() => {
    if (!internal.value) {
      internal.value = `nui-input-${crypto.randomUUID()}`
    }
  })

  return readonly(internal)
}
