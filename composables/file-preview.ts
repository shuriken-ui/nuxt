import type { MaybeComputedRef } from '@vueuse/core'

const previewMap = new WeakMap<File, Ref<string | undefined>>()

export function useNinjaFilePreview(
  _file: MaybeComputedRef<File | null | undefined>
) {
  const fileReference = computed(() => {
    if (!_file) return null
    if (_file instanceof File) return _file
    if (isRef(_file)) return _file.value ?? null
    if (typeof _file === 'function') return _file()
    return null
  })

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
