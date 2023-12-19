<script setup lang="ts">
definePageMeta({
  title: 'BaseAutocomplete',
  icon: 'system-uicons:zoom-reset',
  description: 'Autocomplete component',
  section: 'form',
})

interface Hobby {
  id: number
  name: string
  text: string
  icon: string
}

interface Person {
  id: number
  name: string
  text: string
  media: string
}

const persons = ref<Person[]>([
  {
    id: 1,
    name: 'Clarissa Perez',
    text: 'Sales Manager',
    media: '/img/avatars/19.svg',
  },
  {
    id: 2,
    name: 'Aaron Splatter',
    text: 'Project Manager',
    media: '/img/avatars/16.svg',
  },
  {
    id: 3,
    name: 'Mike Miller',
    text: 'UI/UX Designer',
    media: '/img/avatars/3.svg',
  },
  {
    id: 4,
    name: 'Benedict Kessler',
    text: 'Mobile Developer',
    media: '/img/avatars/22.svg',
  },
  {
    id: 5,
    name: 'Maya Rosselini',
    text: 'Product Manager',
    media: '/img/avatars/2.svg',
  },
])
const personValue = ref<Person>()

const hobbyValue = ref<Hobby>()
const hobbies = ref<Hobby[]>([
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
])

function filterItems(query?: string, items?: any[]) {
  if (!query || !items) {
    return items ?? []
  }

  // search by name or text
  return items.filter((item) => {
    const nameMatches = item?.name?.toLowerCase().includes(query.toLowerCase())
    const textMatches = item?.text?.toLowerCase().includes(query.toLowerCase())
    return nameMatches || textMatches
  })
}

const fields = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
  fifth: '',
  sixth: '',
  seventh: '',
  eighth: '',
  ninth: '',
  tenth: '',
  eleventh: '',
  twelfth: '',
})

const value = ref<string[]>(['Nuxt', 'Vue.js'])

const frameworks = ref([
  'Javascript',
  'Nuxt',
  'Vue.js',
  'React.js',
  'Angular',
  'Alpine.js',
])

const people = ref([
  'Clarissa Perez',
  'Aaron Splatter',
  'Mike Miller',
  'Benedict Kessler',
  'Maya Rosselini',
])
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseAutocomplete">
      <NuiPreview title="Radius" description="Autocomplete component radiuses">
        <div class="grid gap-6 md:max-w-3xl md:grid-cols-3">
          <BaseAutocomplete
            v-model="fields.first"
            :items="frameworks"
            rounded="none"
            label="Rounded: none"
            placeholder="Ex: javascript"
          />

          <BaseAutocomplete
            v-model="fields.second"
            :items="frameworks"
            rounded="sm"
            label="Rounded: sm"
            placeholder="Ex: javascript"
          />

          <BaseAutocomplete
            v-model="fields.third"
            :items="frameworks"
            rounded="md"
            label="Rounded: md"
            placeholder="Ex: javascript"
          />

          <BaseAutocomplete
            v-model="fields.fourth"
            :items="frameworks"
            rounded="lg"
            label="Rounded: lg"
            placeholder="Ex: javascript"
          />

          <BaseAutocomplete
            v-model="fields.fifth"
            :items="frameworks"
            rounded="full"
            label="Rounded: full"
            placeholder="Ex: javascript"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Size" description="Autocomplete component sizes">
        <div class="flex flex-wrap items-end gap-3 max-w-3xl">
          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.first"
              :items="frameworks"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: javascript"
            />
          </div>

          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.second"
              :items="frameworks"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: javascript"
            />
          </div>

          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.third"
              :items="frameworks"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: javascript"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error" description="Autocomplete component error">
        <div class="flex flex-wrap items-end gap-3 max-w-3xl">
          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.first"
              :items="frameworks"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: javascript"
              error="Please select a framework"
            />
          </div>

          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.second"
              :items="frameworks"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: javascript"
              error="Please select a framework"
            />
          </div>

          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.third"
              :items="frameworks"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: javascript"
              error="Please select a framework"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Autocomplete component icon">
        <div class="flex flex-wrap items-end gap-5 max-w-3xl">
          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.sixth"
              :items="frameworks"
              icon="lucide:search"
              size="sm"
              rounded="md"
              placeholder="e.g. Nuxt"
              label="Framework"
            />
          </div>
          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.sixth"
              :items="frameworks"
              icon="lucide:search"
              rounded="md"
              placeholder="e.g. Nuxt"
              label="Framework"
            />
          </div>
          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.sixth"
              :items="frameworks"
              icon="lucide:search"
              size="lg"
              rounded="md"
              placeholder="e.g. Nuxt"
              label="Framework"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Clearable"
        description="Autocomplete component clear button"
      >
        <div class="flex flex-wrap items-end gap-5 max-w-3xl">
          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.seventh"
              :items="frameworks"
              icon="lucide:search"
              size="sm"
              rounded="md"
              placeholder="e.g. Nuxt"
              label="Framework"
              clearable
            />
          </div>
          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.seventh"
              :items="frameworks"
              icon="lucide:search"
              size="md"
              rounded="md"
              placeholder="e.g. Nuxt"
              label="Framework"
              clearable
            />
          </div>
          <div class="flex-1">
            <BaseAutocomplete
              v-model="fields.seventh"
              :items="frameworks"
              icon="lucide:search"
              size="lg"
              rounded="md"
              placeholder="e.g. Nuxt"
              label="Framework"
              clearable
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Multiple"
        description="Autocomplete component multiple selection"
      >
        <div class="max-w-sm">
          <BaseAutocomplete
            v-model="hobbyValue"
            :items="frameworks"
            rounded="md"
            icon="lucide:list-filter"
            placeholder="Search..."
            label="Assignee"
            multiple
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Label: float"
        description="Autocomplete component label float"
      >
        <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseAutocomplete
            v-model="fields.tenth"
            :items="frameworks"
            size="sm"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            label-float
          />
          <BaseAutocomplete
            v-model="fields.eleventh"
            :items="frameworks"
            size="sm"
            icon="lucide:search"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            label-float
          />
          <BaseAutocomplete
            v-model="fields.tenth"
            :items="frameworks"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            label-float
          />

          <BaseAutocomplete
            v-model="fields.eleventh"
            :items="frameworks"
            icon="lucide:search"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            label-float
          />
          <BaseAutocomplete
            v-model="fields.tenth"
            :items="frameworks"
            size="lg"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            label-float
          />

          <BaseAutocomplete
            v-model="fields.eleventh"
            :items="frameworks"
            icon="lucide:search"
            size="lg"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            label-float
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Loading"
        description="Autocomplete component loading state"
      >
        <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseAutocomplete
            v-model="fields.tenth"
            :items="frameworks"
            size="sm"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            loading
          />
          <BaseAutocomplete
            v-model="fields.eleventh"
            :items="frameworks"
            size="sm"
            icon="lucide:search"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            loading
          />
          <BaseAutocomplete
            v-model="fields.tenth"
            :items="frameworks"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            loading
          />

          <BaseAutocomplete
            v-model="fields.eleventh"
            :items="frameworks"
            icon="lucide:search"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            loading
          />
          <BaseAutocomplete
            v-model="fields.tenth"
            :items="frameworks"
            size="lg"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            loading
          />

          <BaseAutocomplete
            v-model="fields.eleventh"
            :items="frameworks"
            icon="lucide:search"
            size="lg"
            rounded="md"
            placeholder="e.g. Nuxt"
            label="Framework"
            loading
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Result: icons"
        description="Autocomplete component icon results"
      >
        <div class="max-w-sm">
          <BaseAutocomplete
            v-model="hobbyValue"
            :items="hobbies"
            :display-value="(item: Hobby) => item.name"
            :filter-items="filterItems"
            icon="ph:buildings"
            rounded="md"
            placeholder="Select a hobby"
            label="Company"
            clearable
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Result: images"
        description="Autocomplete component icon results"
      >
        <div class="max-w-sm">
          <BaseAutocomplete
            v-model="value"
            :items="persons"
            :display-value="(item: Person) => item.name"
            :filter-items="filterItems"
            icon="ph:users-three"
            rounded="md"
            placeholder="Search..."
            label="Assignee"
            clearable
          />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
