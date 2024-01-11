<script setup lang="ts">
import { useNinjaFilePreview } from '../../composables/file-preview'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    /**
     * The form input identifier.
     */
    id?: string

    /**
     * Allows to filter files when dropped.
     */
    filterFileDropped?: (file: File) => boolean
  }>(),
  {
    modelValue: undefined,
    id: undefined,
    filterFileDropped: () => true,
  },
)
const [modelValue] = defineModel<FileList | null>()

const inputRef = ref<HTMLInputElement>()
const id = useNinjaId(() => props.id)

const previewMap = new WeakMap<File, Ref<string | undefined>>()

function open() {
  inputRef.value?.click()
}
function drop(event: DragEvent) {
  event.stopPropagation()
  event.preventDefault()

  const dt = event.dataTransfer
  const filtered = new DataTransfer()
  if (inputRef.value && dt) {
    for (const file of dt.files) {
      if (props.filterFileDropped(file)) {
        filtered.items.add(file)
      }
    }
    inputRef.value.files = filtered.files
    modelValue.value = inputRef.value.files
  }
}
function remove(file?: File) {
  if (!file) return
  if (!modelValue.value) return
  if (!inputRef.value) return

  const filtered = new DataTransfer()

  if (previewMap.has(file)) {
    previewMap.delete(file)
  }

  for (const f of modelValue.value) {
    if (f !== file) {
      filtered.items.add(f)
    }
  }

  inputRef.value.files = filtered.files
  modelValue.value = inputRef.value.files
}

provide(
  'BaseInputFileHeadlessContext',
  reactive({
    el: inputRef,
    id,
    files: modelValue,
    open,
    remove,
    preview: useNinjaFilePreview,
    drop,
  }),
)

defineExpose({
  /**
   * The underlying HTMLInputElement element.
   */
  el: inputRef,
  /**
   * The form input identifier.
   */
  id,
  /**
   * The model value of the file input.
   */
  files: modelValue,
  /**
   * Opens the native file input selector.
   */
  open,
  /**
   * Removes a file from the input.
   */
  remove,
  /**
   * Returns the preview DataURL of a file.
   */
  preview: useNinjaFilePreview,
  /**
   * Handles the drop event.
   */
  drop,
})
</script>

<template>
  <div class="group/nui-file-headless relative">
    <slot
      :id="id"
      :el="inputRef"
      :files="modelValue"
      :open="open"
      :remove="remove"
      :preview="useNinjaFilePreview"
      :drop="drop"
    ></slot>
    <input
      :id="id"
      ref="inputRef"
      type="file"
      v-bind="$attrs"
      class="hidden"
      @change="
        (event) => (modelValue = (event.target as HTMLInputElement).files)
      "
    />
  </div>
</template>
