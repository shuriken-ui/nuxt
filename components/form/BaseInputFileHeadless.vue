<script lang="ts">
import { useNinjaFilePreview } from '../../composables/file-preview'
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The model value of the file input.
     */
    modelValue: FileList | null

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
    id: undefined,
    filterFileDropped: () => true,
  }
)
const emits = defineEmits<{
  (event: 'update:modelValue', value?: FileList | null): void
}>()
const inputRef = ref<HTMLInputElement>()
const value = useVModel(props, 'modelValue', emits)

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
    value.value = inputRef.value.files
  }
}
function remove(file?: File) {
  if (!file) return
  if (!value.value) return
  if (!inputRef.value) return

  const filtered = new DataTransfer()

  if (previewMap.has(file)) {
    previewMap.delete(file)
  }

  for (const f of value.value) {
    if (f !== file) {
      filtered.items.add(f)
    }
  }

  inputRef.value.files = filtered.files
  value.value = inputRef.value.files
}

provide(
  'BaseInputFileHeadlessContext',
  reactive({
    el: inputRef,
    id,
    files: value,
    open,
    remove,
    preview: useNinjaFilePreview,
    drop,
  })
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
  files: value,
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
      :el="el"
      :files="files"
      :open="open"
      :remove="remove"
      :preview="preview"
      :drop="drop"
    ></slot>
    <input
      :id="id"
      ref="inputRef"
      type="file"
      v-bind="$attrs"
      class="hidden"
      @change="(event) => value = (event.target as HTMLInputElement).files"
    />
  </div>
</template>
