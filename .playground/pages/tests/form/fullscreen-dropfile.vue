<script setup lang="ts">
definePageMeta({
  title: 'BaseFullscreenDropfile',
  icon: 'system-uicons:cloud-upload',
  description: 'Dropfile component',
  section: 'form',
})

const uploadedFiles = ref<FileList | null>(null)
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseFullscreenDropfile">
      <NuiPreview title="Dropfile" description="Dropfile component variation">
        <div class="max-w-xl">
          <BaseFullscreenDropfile
            icon="ph:image-duotone"
            :filter-file-dropped="(file) => file.type.startsWith('image')"
            @drop="
              (value) => {
                uploadedFiles = value
              }
            "
          />

          <BaseInputFileHeadless
            v-slot="{ open, remove, preview, drop, files }"
            v-model="uploadedFiles"
            multiple
          >
            <!-- Controls -->
            <div class="mb-4 flex items-center gap-2">
              <button
                type="button"
                class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                tooltip="Select files"
                @click="open"
              >
                <Icon
                  name="lucide:plus"
                  class="absolute start-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2"
                />

                <span class="sr-only">Select files</span>
              </button>

              <button
                type="button"
                class="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                tooltip="Start Upload"
              >
                <Icon name="lucide:arrow-up" class="h-4 w-4" />

                <span class="sr-only">Start Upload</span>
              </button>
            </div>

            <div
              class=""
              @dragenter.stop.prevent
              @dragover.stop.prevent
              @drop="drop"
            >
              <div
                v-if="!files?.length"
                class="nui-focus border-muted-300 dark:border-muted-700 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-600 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300"
                tabindex="0"
                role="button"
                @click="open"
                @keydown.enter.prevent="open"
              >
                <div class="p-5 text-center">
                  <Icon
                    name="mdi-light:cloud-upload"
                    class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 h-10 w-10 transition-colors duration-300"
                  />

                  <h4 class="text-muted-400 font-sans text-sm">
                    Drop files to upload
                  </h4>

                  <div>
                    <span
                      class="text-muted-400 font-sans text-[0.7rem] font-semibold uppercase"
                    >
                      Or
                    </span>
                  </div>

                  <label
                    for="file"
                    class="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-sm underline underline-offset-4 transition-colors duration-300"
                  >
                    Select files
                  </label>
                </div>
              </div>

              <ul v-else class="mt-6 space-y-2">
                <li v-for="file in files" :key="file.name">
                  <div
                    class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3"
                  >
                    <div class="flex items-center gap-2">
                      <div class="shrink-0">
                        <img
                          v-if="file.type.startsWith('image')"
                          class="h-14 w-14 rounded-xl object-cover object-center"
                          :src="preview(file).value"
                          alt="Image preview"
                        >

                        <img
                          v-else
                          class="h-14 w-14 rounded-xl object-cover object-center"
                          src="https://tairo.cssninja.io/img/avatars/placeholder-file.png"
                          alt="Image preview"
                        >
                      </div>

                      <div class="font-sans">
                        <span
                          class="text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm"
                        >
                          {{ file.name }}
                        </span>

                        <span class="text-muted-400 block text-xs">
                          {{ file.size }}
                        </span>
                      </div>
                    </div>

                    <div
                      class="ms-auto w-32 px-4 transition-opacity duration-300 opacity-100"
                    >
                      <BaseProgress :value="0" size="xs" color="success" />
                    </div>

                    <div class="flex gap-2">
                      <button
                        class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                        disabled
                        type="button"
                        tooltip="Cancel"
                      >
                        <Icon name="lucide:slash" class="h-4 w-4" />

                        <span class="sr-only">Cancel</span>
                      </button>

                      <button
                        class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                        type="button"
                        tooltip="Upload"
                      >
                        <Icon name="lucide:arrow-up" class="h-4 w-4" />

                        <span class="sr-only">Upload</span>
                      </button>

                      <button
                        class="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                        type="button"
                        tooltip="Remove"
                        @click.prevent="remove(file)"
                      >
                        <Icon name="lucide:x" class="h-4 w-4" />

                        <span class="sr-only">Remove</span>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </BaseInputFileHeadless>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
