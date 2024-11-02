<script setup lang="ts">
definePageMeta({
  title: 'BaseListbox',
  icon: 'system-uicons:list',
  description: 'Listbox component',
  section: 'form',
})

const radiusValue = ref()

const frameworks = ['Javascript', 'Vue.js', 'React.js', 'Angular', 'Alpine.js']

const hobbiesValue = ref({
  id: 2,
  name: 'Travel',
  text: 'Tourism & travel',
  icon: 'ph:airplane-duotone',
})

const hobbies = [
  {
    id: 1,
    name: 'Movies',
    text: 'Cinema & shows',
    icon: 'ph:sword-duotone',
  },
  {
    id: 2,
    name: 'Travel',
    text: 'Tourism & travel',
    icon: 'ph:airplane-duotone',
  },
  {
    id: 3,
    name: 'Drinks',
    text: 'Wines & fine drinks',
    icon: 'ph:brandy-duotone',
  },
  {
    id: 4,
    name: 'Arts',
    text: 'Paintings & scultpure',
    icon: 'ph:paint-brush-duotone',
  },
  {
    id: 5,
    name: 'Karaoke',
    text: 'singing with friends',
    icon: 'ph:microphone-stage-duotone',
  },
]

const assigneeValue = ref({
  id: 2,
  name: 'Aaron Splatter',
  text: 'Project Manager',
  media: 'https://tairo.cssninja.io/img/avatars/16.svg',
})

const people = [
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
    media: 'https://tairo.cssninja.io/img/avatars/19.svg',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
    media: 'https://tairo.cssninja.io/img/avatars/16.svg',
  },
  {
    id: 3,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
    media: 'https://tairo.cssninja.io/img/avatars/3.svg',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
    media: 'https://tairo.cssninja.io/img/avatars/22.svg',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
    media: 'https://tairo.cssninja.io/img/avatars/2.svg',
  },
]

// the v-model should be an array
const multipleValues = ref([])
const multipleProps = ref([])
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseListbox">
      <NuiPreview title="Radius" description="Listbox component radiuses">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseListbox
            v-model="radiusValue"
            label="Rounded: none"
            :items="frameworks"
            placeholder="Select a framework"
            rounded="none"
          />
          <BaseListbox
            v-model="radiusValue"
            label="Rounded: sm"
            :items="frameworks"
            placeholder="Select a framework"
            rounded="sm"
          />
          <BaseListbox
            v-model="radiusValue"
            label="Rounded: md"
            :items="frameworks"
            placeholder="Select a framework"
            rounded="md"
          />
          <BaseListbox
            v-model="radiusValue"
            label="Rounded: lg"
            :items="frameworks"
            placeholder="Select a framework"
            rounded="lg"
          />
          <BaseListbox
            v-model="radiusValue"
            label="Rounded: full"
            :items="frameworks"
            placeholder="Select a framework"
            rounded="full"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Size" description="Listbox component sizes">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              label="Rounded: md"
              size="sm"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
              color-focus
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              label="Rounded: md"
              size="md"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
              color-focus
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              label="Rounded: md"
              size="lg"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
              color-focus
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              label="Rounded: md"
              size="xl"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
              color-focus
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: default-contrast"
        description="Listbox component default contrast"
      >
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              contrast="default-contrast"
              label="Rounded: md"
              size="sm"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              contrast="default-contrast"
              label="Rounded: md"
              size="md"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              contrast="default-contrast"
              label="Rounded: md"
              size="lg"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              contrast="default-contrast"
              label="Rounded: md"
              size="xl"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Contrast: muted" description="Listbox component muted">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              contrast="muted"
              label="Rounded: md"
              size="sm"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              contrast="muted"
              label="Rounded: md"
              size="md"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              contrast="muted"
              label="Rounded: md"
              size="lg"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              contrast="muted"
              label="Rounded: md"
              size="xl"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: muted-contrast"
        description="Listbox component muted contrast"
      >
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              contrast="muted-contrast"
              label="Rounded: md"
              size="sm"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              contrast="muted-contrast"
              label="Rounded: md"
              size="md"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              contrast="muted-contrast"
              label="Rounded: md"
              size="lg"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              contrast="muted-contrast"
              label="Rounded: md"
              size="xl"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error" description="Listbox component errors">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              label="Rounded: md"
              size="sm"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
              error="This field is required"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              label="Rounded: md"
              size="md"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
              error="This field is required"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              label="Rounded: md"
              size="lg"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
              error="This field is required"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              label="Rounded: md"
              size="xl"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
              error="This field is required"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Disabled" description="Listbox component disabled">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              label="Rounded: md"
              size="sm"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
              disabled
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              label="Rounded: md"
              size="md"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
              disabled
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              label="Rounded: md"
              size="lg"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
              disabled
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="radiusValue"
              label="Rounded: md"
              size="xl"
              :items="frameworks"
              placeholder="Select a framework"
              rounded="md"
              disabled
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Label: float"
        description="Listbox component label float"
      >
        <div class="grid gap-6 md:max-w-xl md:grid-cols-2">
          <BaseListbox
            v-model="radiusValue"
            label="Rounded: md"
            size="sm"
            :items="frameworks"
            placeholder="Select a framework"
            rounded="md"
            label-float
          />
          <BaseListbox
            v-model="assigneeValue"
            size="sm"
            rounded="md"
            label="Hobbies"
            :items="people"
            :properties="{
              value: 'id',
              label: 'name',
              sublabel: 'text',
              media: 'media',
            }"
            label-float
          />
          <BaseListbox
            v-model="radiusValue"
            label="Rounded: md"
            size="md"
            :items="frameworks"
            placeholder="Select a framework"
            rounded="md"
            label-float
          />
          <BaseListbox
            v-model="assigneeValue"
            size="md"
            rounded="md"
            label="Hobbies"
            :items="people"
            :properties="{
              value: 'id',
              label: 'name',
              sublabel: 'text',
              media: 'media',
            }"
            label-float
          />
          <BaseListbox
            v-model="radiusValue"
            label="Rounded: md"
            size="lg"
            :items="frameworks"
            placeholder="Select a framework"
            rounded="md"
            label-float
          />
          <BaseListbox
            v-model="assigneeValue"
            size="lg"
            rounded="md"
            label="Hobbies"
            :items="people"
            :properties="{
              value: 'id',
              label: 'name',
              sublabel: 'text',
              media: 'media',
            }"
            label-float
          />
          <BaseListbox
            v-model="radiusValue"
            label="Rounded: md"
            size="xl"
            :items="frameworks"
            placeholder="Select a framework"
            rounded="md"
            label-float
          />
          <BaseListbox
            v-model="assigneeValue"
            size="xl"
            rounded="md"
            label="Hobbies"
            :items="people"
            :properties="{
              value: 'id',
              label: 'name',
              sublabel: 'text',
              media: 'media',
            }"
            label-float
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Loading" description="Listbox component loading state">
        <div class="grid gap-6 md:max-w-2xl md:grid-cols-2">
          <BaseListbox
            v-model="radiusValue"
            label="Rounded: md"
            size="sm"
            :items="frameworks"
            placeholder="Select a framework"
            rounded="md"
            loading
          />
          <BaseListbox
            v-model="assigneeValue"
            size="sm"
            rounded="md"
            label="Hobbies"
            :items="people"
            :properties="{
              value: 'id',
              label: 'name',
              sublabel: 'text',
              media: 'media',
            }"
            loading
          />
          <BaseListbox
            v-model="radiusValue"
            label="Rounded: md"
            size="md"
            :items="frameworks"
            placeholder="Select a framework"
            rounded="md"
            loading
          />
          <BaseListbox
            v-model="assigneeValue"
            size="md"
            rounded="md"
            label="Hobbies"
            :items="people"
            :properties="{
              value: 'id',
              label: 'name',
              sublabel: 'text',
              media: 'media',
            }"
            loading
          />
          <BaseListbox
            v-model="radiusValue"
            label="Rounded: md"
            size="lg"
            :items="frameworks"
            placeholder="Select a framework"
            rounded="md"
            loading
          />
          <BaseListbox
            v-model="assigneeValue"
            size="lg"
            rounded="md"
            label="Hobbies"
            :items="people"
            :properties="{
              value: 'id',
              label: 'name',
              sublabel: 'text',
              media: 'media',
            }"
            loading
          />
          <BaseListbox
            v-model="radiusValue"
            label="Rounded: md"
            size="xl"
            :items="frameworks"
            placeholder="Select a framework"
            rounded="md"
            loading
          />
          <BaseListbox
            v-model="assigneeValue"
            size="xl"
            rounded="md"
            label="Hobbies"
            :items="people"
            :properties="{
              value: 'id',
              label: 'name',
              sublabel: 'text',
              media: 'media',
            }"
            loading
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Sublabel" description="Listbox component sublabels">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseListbox
              v-model="hobbiesValue"
              size="sm"
              rounded="md"
              label="Hobbies"
              :items="hobbies"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
              }"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="hobbiesValue"
              size="md"
              rounded="md"
              label="Hobbies"
              :items="hobbies"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
              }"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="hobbiesValue"
              size="lg"
              rounded="md"
              label="Hobbies"
              :items="hobbies"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
              }"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="hobbiesValue"
              size="xl"
              rounded="md"
              label="Hobbies"
              :items="hobbies"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
              }"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Listbox component icons">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseListbox
              v-model="hobbiesValue"
              size="sm"
              rounded="md"
              label="Hobbies"
              :items="hobbies"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
                icon: 'icon',
              }"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="hobbiesValue"
              size="md"
              rounded="md"
              label="Hobbies"
              :items="hobbies"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
                icon: 'icon',
              }"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="hobbiesValue"
              size="lg"
              rounded="md"
              label="Hobbies"
              :items="hobbies"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
                icon: 'icon',
              }"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="hobbiesValue"
              size="xl"
              rounded="md"
              label="Hobbies"
              :items="hobbies"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
                icon: 'icon',
              }"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Image" description="Listbox component images">
        <div class="flex flex-wrap items-end gap-3 max-w-6xl">
          <div class="flex-1">
            <BaseListbox
              v-model="assigneeValue"
              size="sm"
              rounded="md"
              label="Hobbies"
              :items="people"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
                media: 'media',
              }"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="assigneeValue"
              size="md"
              rounded="md"
              label="Hobbies"
              :items="people"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
                media: 'media',
              }"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="assigneeValue"
              size="lg"
              rounded="md"
              label="Hobbies"
              :items="people"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
                media: 'media',
              }"
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="assigneeValue"
              size="xl"
              rounded="md"
              label="Hobbies"
              :items="people"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
                media: 'media',
              }"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Multiple: Objects"
        description="Listbox component multiple selection with object values"
      >
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseListbox
              v-model="multipleValues"
              size="sm"
              rounded="md"
              label="Hobbies"
              :items="people"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
                media: 'media',
              }"
              multiple
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="multipleValues"
              size="md"
              rounded="md"
              label="Hobbies"
              :items="people"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
                media: 'media',
              }"
              multiple
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="multipleValues"
              size="lg"
              rounded="md"
              label="Hobbies"
              :items="people"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
                media: 'media',
              }"
              multiple
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model="multipleValues"
              size="xl"
              rounded="md"
              label="Hobbies"
              :items="people"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
                media: 'media',
              }"
              multiple
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Multiple: Objects /w prop modifier"
        description="Listbox component multiple selection"
      >
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseListbox
              v-model.prop="multipleProps"
              size="sm"
              rounded="md"
              label="Hobbies"
              :items="people"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
                media: 'media',
              }"
              multiple
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model.prop="multipleProps"
              size="md"
              rounded="md"
              label="Hobbies"
              :items="people"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
                media: 'media',
              }"
              multiple
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model.prop="multipleProps"
              size="lg"
              rounded="md"
              label="Hobbies"
              :items="people"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
                media: 'media',
              }"
              multiple
            />
          </div>

          <div class="flex-1">
            <BaseListbox
              v-model.prop="multipleProps"
              size="xl"
              rounded="md"
              label="Hobbies"
              :items="people"
              :properties="{
                value: 'id',
                label: 'name',
                sublabel: 'text',
                media: 'media',
              }"
              multiple
            />
          </div>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
