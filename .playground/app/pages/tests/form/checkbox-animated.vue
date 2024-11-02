<script setup lang="ts">
definePageMeta({
  title: 'BaseCheckboxAnimated',
  icon: 'system-uicons:check-circle-outside',
  description: 'Animated checkbox component',
  section: 'form',
})

const options = ref([
  'Option 1',
  'Option 2',
  'Option 3',
  'Option 4',
  'Option 5',
  'Option 6',
  'Option 7',
  'Option 8',
  'Option 9',
  'Option 10',
  'Option 11',
  'Option 12',
  'Option 13',
  'Option 14',
  'Option 15',
  'Option 16',
  'Option 17',
  'Option 18',
  'Option 19',
])

const checked = ref(false)
const customValue = ref('not-checked')
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseCheckboxAnimated">
      <NuiPreview
        title="Color"
        description="Animated checkbox component colors"
      >
        <div class="flex flex-col gap-6 md:flex-row md:items-start">
          <BaseFocusLoop class="flex w-3/5 flex-wrap items-end gap-4">
            <BaseCheckboxAnimated v-model="options" value="Option 1" />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 2"
              :classes="{ label: '!text-lime-500' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 3"
              :classes="{ label: '!text-green-500' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 4"
              :classes="{ label: '!text-emerald-500' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 5"
              :classes="{ label: '!text-teal-500' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 6"
              :classes="{ label: '!text-cyan-500' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 7"
              :classes="{ label: '!text-sky-500' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 8"
              :classes="{ label: '!text-blue-500' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 9"
              :classes="{ label: '!text-indigo-500' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 10"
              :classes="{ label: '!text-purple-500' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 11"
              :classes="{ label: '!text-fuchsia-500' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 12"
              :classes="{ label: '!text-pink-500' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 13"
              :classes="{ label: '!text-rose-500' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 14"
              :classes="{ label: '!text-red-500' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 15"
              :classes="{ label: '!text-orange-500' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 16"
              :classes="{ label: '!text-amber-500' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 17"
              :classes="{ label: '!text-yellow-500' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 18"
              :classes="{ label: '!text-muted-800 dark:!text-muted-200' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 19"
              :classes="{ label: '!text-gray-400 dark:!text-gray-500' }"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 19"
              color="dark"
            />
            <BaseCheckboxAnimated
              v-model="options"
              value="Option 19"
              color="black"
            />
          </BaseFocusLoop>
          <pre>{{ options }}</pre>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Value: boolean"
        description="Animated checkbox component boolean value"
      >
        <div class="flex flex-col gap-6 md:flex-row md:items-start">
          <div class="flex w-3/5 flex-wrap items-end gap-4">
            <BaseCheckboxAnimated
              v-model="checked"
              :classes="{ label: 'text-primary-500' }"
            />
            <pre>{{ checked }}</pre>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Value: custom"
        description="Animated checkbox component custom value"
      >
        <div class="flex flex-col gap-6 md:flex-row md:items-start">
          <div class="flex w-3/5 flex-wrap items-end gap-4">
            <BaseCheckboxAnimated
              v-model="customValue"
              true-value="checked"
              false-value="not-checked"
              :classes="{ label: 'text-primary-500' }"
            />
            <pre>{{ customValue }}</pre>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Value: static"
        description="Animated checkbox component static value"
      >
        <div class="flex flex-col gap-6 md:flex-row md:items-start">
          <BaseFocusLoop class="flex w-3/5 flex-wrap items-end gap-4">
            <BaseCheckboxAnimated :classes="{ label: 'text-primary-500' }" />
            <BaseCheckboxAnimated
              :model-value="true"
              :classes="{ label: 'text-primary-500' }"
            />
            <BaseCheckboxAnimated
              :model-value="true"
              disabled
              :classes="{ label: 'text-primary-500' }"
            />
          </BaseFocusLoop>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
