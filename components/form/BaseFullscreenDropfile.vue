<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * Label to display when file is being dropped.
     */
    label?: string

    /**
     * Icon to display when file is being dropped.
     */
    icon?: string

    /**
     * Allows to filter files when dropped.
     */
    filterFileDropped?: (file: File) => boolean
  }>(),
  {
    icon: '',
    label: 'Drop your files',
    filterFileDropped: () => true,
  },
)
const emits = defineEmits<{
  (event: 'drop', value: FileList): void
}>()
const isDropping = ref(false)

// drag file over app handlers, to show drop placeholder
// we need to keep track of how deep the drag is because it raises on each child elements
let dragCount = 0
function onDragenter() {
  dragCount += 1
  if (dragCount === 1) {
    isDropping.value = true
  }
}
function onDragleave() {
  dragCount -= 1
  if (dragCount === 0) {
    isDropping.value = false
  }
}
function onDragover(e: DragEvent) {
  // prevent file from being opened in new browser tab
  e.preventDefault()
}
function onDrop(event: DragEvent) {
  event.preventDefault()

  isDropping.value = false
  dragCount = 0

  if (!event.dataTransfer) {
    return
  }

  const dt = event.dataTransfer
  const filtered = new DataTransfer()
  if (dt) {
    for (const file of dt.files) {
      if (props.filterFileDropped(file)) {
        filtered.items.add(file)
      }
    }
    emits('drop', filtered.files)
  }
}

// register drag events
onMounted(() => {
  document.documentElement.addEventListener('dragenter', onDragenter, false)
  document.documentElement.addEventListener('dragleave', onDragleave, false)
  document.documentElement.addEventListener('dragover', onDragover, false)
  document.documentElement.addEventListener('drop', onDrop)
})

onBeforeUnmount(() => {
  document.documentElement.removeEventListener('dragenter', onDragenter)
  document.documentElement.removeEventListener('dragleave', onDragleave)
  document.documentElement.removeEventListener('dragover', onDragover)
  document.documentElement.removeEventListener('drop', onDrop)
})
</script>

<template>
  <div class="nui-fullscreen-dropfile">
    <div v-if="isDropping" class="nui-fullscreen-dropfile-outer" />
    <div v-show="isDropping" class="nui-fullscreen-dropfile-inner">
      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-0 opacity-0"
        enter-to-class="transform scale-1 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-1 opacity-100"
        leave-to-class="transform scale-0 opacity-0"
      >
        <div v-if="isDropping" class="nui-fullscreen-dropfile-container">
          <div class="nui-fullscreen-dropfile-content">
            <Icon
              v-if="props.icon"
              :name="props.icon"
              class="nui-fullscreen-dropfile-icon"
            />
            <div class="nui-fullscreen-dropfile-label">{{ props.label }}</div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
