import type { MaybeRefOrGetter } from '@vueuse/core'
import { toRef } from '@vueuse/core'

const previewMap = new WeakMap<File, Ref<string | undefined>>()

export function useNinjaFilePreview(
  _file: MaybeRefOrGetter<File | null | undefined>
) {
  const fileReference = toRef(_file)

  const preview = computed(() => {
    const file = fileReference.value
    if (!file) return ''
    if (previewMap.has(file)) return previewMap.get(file)?.value

    const reader = new FileReader()
    const source = ref<string>('')

    const listener = () => {
      source.value = reader.result?.toString() ?? ''
      reader.removeEventListener('load', listener)
    }
    reader.addEventListener('load', listener)
    reader.readAsDataURL(file)
    previewMap.set(file, source)

    return previewMap.get(file)?.value
  })

  return preview
}
