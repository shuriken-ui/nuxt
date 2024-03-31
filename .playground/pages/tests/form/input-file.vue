<script setup lang="ts">
definePageMeta({
  title: 'BaseInputFile',
  icon: 'system-uicons:cloud-upload',
  description: 'Input file component',
  section: 'form',
})

const first = ref<FileList | null>(null)
const second = ref<FileList | null>(null)
const third = ref<FileList | null>(null)
const fourth = ref<FileList | null>(null)
const fifth = ref<FileList | null>(null)
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseInputFile">
      <NuiPreview title="Radius" description="File inputs radiuses">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseInputFile
            v-model="first"
            rounded="none"
            placeholder="Choose file"
            label="Rounded: none"
            color-focus
          />
          <BaseInputFile
            v-model="second"
            rounded="sm"
            label="Rounded: sm"
            icon="heroicons:document-text"
            color-focus
          />
          <BaseInputFile
            v-model="third"
            rounded="md"
            label="Rounded: md"
            color-focus
          />
          <BaseInputFile
            v-model="fourth"
            rounded="lg"
            label="Rounded: lg"
            color-focus
          />
          <BaseInputFile
            v-model="fifth"
            rounded="full"
            label="Rounded: full"
            color-focus
          />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
