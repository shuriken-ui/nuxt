<script setup lang="ts">
definePageMeta({
  title: 'BaseSelect',
  icon: 'system-uicons:document-list',
  description: 'Select component',
  section: 'form',
})

const options = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
  fifth: '',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseSelect">
      <NuiPreview title="Radius" description="Select component radiuses">
        <BaseFocusLoop class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseSelect
            v-model="options.first"
            rounded="none"
            label="Rounded: none"
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect v-model="options.second" rounded="sm" label="Rounded: sm">
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect v-model="options.third" rounded="md" label="Rounded: md">
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect v-model="options.fourth" rounded="lg" label="Rounded: lg">
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect
            v-model="options.fifth"
            rounded="full"
            label="Rounded: full"
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview title="Size" description="Select component sizes">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseSelect
              v-model="options.first"
              size="sm"
              rounded="md"
              label="Size: sm"
              color-focus
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.second"
              size="md"
              rounded="md"
              label="Size: md"
              color-focus
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              size="lg"
              rounded="md"
              label="Size: lg"
              color-focus
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              size="xl"
              rounded="md"
              label="Size: xl"
              color-focus
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: default-contrast"
        description="Select component default contrast"
      >
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseSelect
              v-model="options.first"
              contrast="default-contrast"
              size="sm"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.second"
              contrast="default-contrast"
              size="md"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              contrast="default-contrast"
              size="lg"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              contrast="default-contrast"
              size="xl"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Contrast: muted" description="Select component muted">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseSelect
              v-model="options.first"
              contrast="muted"
              size="sm"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.second"
              contrast="muted"
              size="md"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              contrast="muted"
              size="lg"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              contrast="muted"
              size="xl"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: muted-contrast"
        description="Select component muted contrast"
      >
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseSelect
              v-model="options.first"
              contrast="muted-contrast"
              size="sm"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.second"
              contrast="muted-contrast"
              size="md"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              contrast="muted-contrast"
              size="lg"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              contrast="muted-contrast"
              size="xl"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Option group"
        description="Select component option groups"
      >
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseSelect
              v-model="options.first"
              size="sm"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <optgroup label="Marvel">
                <option value="Iron man">
                  Iron man
                </option>
                <option value="Magneto">
                  Magneto
                </option>
                <option value="Cyclops">
                  Cyclops
                </option>
              </optgroup>
              <optgroup label="DC Comics">
                <option value="Superman">
                  Superman
                </option>
                <option value="Batman">
                  Batman
                </option>
              </optgroup>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.second"
              size="md"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <optgroup label="Marvel">
                <option value="Iron man">
                  Iron man
                </option>
                <option value="Magneto">
                  Magneto
                </option>
                <option value="Cyclops">
                  Cyclops
                </option>
              </optgroup>
              <optgroup label="DC Comics">
                <option value="Superman">
                  Superman
                </option>
                <option value="Batman">
                  Batman
                </option>
              </optgroup>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              size="lg"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <optgroup label="Marvel">
                <option value="Iron man">
                  Iron man
                </option>
                <option value="Magneto">
                  Magneto
                </option>
                <option value="Cyclops">
                  Cyclops
                </option>
              </optgroup>
              <optgroup label="DC Comics">
                <option value="Superman">
                  Superman
                </option>
                <option value="Batman">
                  Batman
                </option>
              </optgroup>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              size="xl"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <optgroup label="Marvel">
                <option value="Iron man">
                  Iron man
                </option>
                <option value="Magneto">
                  Magneto
                </option>
                <option value="Cyclops">
                  Cyclops
                </option>
              </optgroup>
              <optgroup label="DC Comics">
                <option value="Superman">
                  Superman
                </option>
                <option value="Batman">
                  Batman
                </option>
              </optgroup>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Select component icons">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseSelect
              v-model="options.first"
              icon="fa6-solid:mask"
              size="sm"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.second"
              icon="fa6-solid:mask"
              size="md"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              icon="fa6-solid:mask"
              size="lg"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              icon="fa6-solid:mask"
              size="xl"
              rounded="md"
              label="Rounded: md"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error" description="Select component errors">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseSelect
              v-model="options.first"
              size="sm"
              rounded="md"
              label="Rounded: md"
              error="This field is required"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.second"
              size="md"
              rounded="md"
              label="Rounded: md"
              error="This field is required"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              size="lg"
              rounded="md"
              label="Rounded: md"
              error="This field is required"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              size="xl"
              rounded="md"
              label="Rounded: md"
              error="This field is required"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error: icon" description="Select component errors">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseSelect
              v-model="options.first"
              icon="fa6-solid:mask"
              size="sm"
              rounded="md"
              label="Rounded: md"
              error="This field is required"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.second"
              icon="fa6-solid:mask"
              size="md"
              rounded="md"
              label="Rounded: md"
              error="This field is required"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              icon="fa6-solid:mask"
              size="lg"
              rounded="md"
              label="Rounded: md"
              error="This field is required"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              icon="fa6-solid:mask"
              size="xl"
              rounded="md"
              label="Rounded: md"
              error="This field is required"
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Label: float"
        description="Autocomplete component label float"
      >
        <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseSelect
            v-model="options.first"
            size="sm"
            rounded="md"
            label="Rounded: md"
            label-float
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect
            v-model="options.first"
            icon="fa6-solid:mask"
            size="sm"
            rounded="md"
            label="Rounded: md"
            label-float
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect
            v-model="options.second"
            size="md"
            rounded="md"
            label="Rounded: md"
            label-float
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect
            v-model="options.second"
            icon="fa6-solid:mask"
            size="md"
            rounded="md"
            label="Rounded: md"
            label-float
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect
            v-model="options.third"
            size="lg"
            rounded="md"
            label="Rounded: md"
            label-float
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect
            v-model="options.third"
            icon="fa6-solid:mask"
            size="lg"
            rounded="md"
            label="Rounded: md"
            label-float
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect
            v-model="options.third"
            size="xl"
            rounded="md"
            label="Rounded: md"
            label-float
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect
            v-model="options.third"
            icon="fa6-solid:mask"
            size="xl"
            rounded="md"
            label="Rounded: md"
            label-float
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Loading"
        description="Autocomplete component loading state"
      >
        <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseSelect
            v-model="options.first"
            size="sm"
            rounded="md"
            label="Rounded: md"
            loading
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect
            v-model="options.first"
            icon="fa6-solid:mask"
            size="sm"
            rounded="md"
            label="Rounded: md"
            loading
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect
            v-model="options.second"
            size="md"
            rounded="md"
            label="Rounded: md"
            loading
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect
            v-model="options.second"
            icon="fa6-solid:mask"
            size="md"
            rounded="md"
            label="Rounded: md"
            loading
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect
            v-model="options.third"
            size="lg"
            rounded="md"
            label="Rounded: md"
            loading
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect
            v-model="options.third"
            icon="fa6-solid:mask"
            size="lg"
            rounded="md"
            label="Rounded: md"
            loading
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect
            v-model="options.third"
            size="xl"
            rounded="md"
            label="Rounded: md"
            loading
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
          <BaseSelect
            v-model="options.third"
            icon="fa6-solid:mask"
            size="xl"
            rounded="md"
            label="Rounded: md"
            loading
          >
            <option value="">
              Select a hero
            </option>
            <option value="Superman">
              Superman
            </option>
            <option value="Batman">
              Batman
            </option>
            <option value="Iron man">
              Iron man
            </option>
            <option value="Magneto">
              Magneto
            </option>
            <option value="Cyclops">
              Cyclops
            </option>
          </BaseSelect>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Disabled"
        description="Select component disabled state"
      >
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseSelect
              v-model="options.first"
              size="sm"
              rounded="md"
              label="Rounded: md"
              disabled
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.second"
              size="md"
              rounded="md"
              label="Rounded: md"
              disabled
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              size="lg"
              rounded="md"
              label="Rounded: md"
              disabled
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>

          <div class="flex-1">
            <BaseSelect
              v-model="options.third"
              size="xl"
              rounded="md"
              label="Rounded: md"
              disabled
            >
              <option value="">
                Select a hero
              </option>
              <option value="Superman">
                Superman
              </option>
              <option value="Batman">
                Batman
              </option>
              <option value="Iron man">
                Iron man
              </option>
              <option value="Magneto">
                Magneto
              </option>
              <option value="Cyclops">
                Cyclops
              </option>
            </BaseSelect>
          </div>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
