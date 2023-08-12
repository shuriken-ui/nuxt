<script setup lang="ts">
definePageMeta({
  title: 'Autocomplete',
  icon: 'mdi:auto-fix',
  description: 'SVG icons',
  section: 'form',
})

const selection = ref('')
const multiple = ref<string[]>([])
const items = ref(['Javascript', 'Vue.js', 'React.js', 'Angular'])

const objectSelection = ref({ name: '' })
const itemsObject = ref([
  {
    name: 'Javascript',
  },
  {
    name: 'Vue.js',
  },
  {
    name: 'React.js',
  },
  {
    name: 'Angular',
  },
])
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Autocomplete shape
      </BaseHeading>
      <div class="grid grid-cols-5 gap-4">
        <BaseAutocomplete
          :items="items"
          label="Test"
          data-cy="test"
          placeholder="Let's test autocomplete"
          error="This is an error message"
          shape="straight"
          label-float
          clearable
        />
        <BaseAutocomplete
          :items="items"
          label="Test"
          placeholder="Let's test autocomplete"
          error="This is an error message"
          shape="rounded"
          label-float
          clearable
          multiple
        />
        <BaseAutocomplete
          v-model="multiple"
          :items="items"
          :display-value="
            (item) => {
              return item || ''
            }
          "
          label="Test"
          placeholder="Let's test autocomplete"
          error="This is an error message"
          shape="smooth"
          label-float
          clearable
          multiple
        />
        <BaseAutocomplete
          v-model="selection"
          :items="items"
          :display-value="
            (item) => {
              return item || ''
            }
          "
          :filter-items="
            (query, items) => {
              if (!query) return items || []
              return (
                items?.filter(
                  (item) => item.toLowerCase().indexOf(query.toLowerCase()) > -1
                ) || []
              )
            }
          "
          label="Test"
          placeholder="Let's test autocomplete"
          error="This is an error message"
          shape="curved"
          label-float
          clearable
        />
        <BaseAutocomplete
          v-model="objectSelection"
          :items="itemsObject"
          :filter-items="
            (query, items) => {
              if (!query) return items || []
              return (
                items?.filter(
                  (item) =>
                    item.name.toLowerCase().indexOf(query.toLowerCase()) > -1
                ) || []
              )
            }
          "
          :display-value="
            (item) => {
              return item?.name || ''
            }
          "
          label="Test"
          placeholder="Let's test autocomplete"
          error="This is an error message"
          shape="full"
          label-float
          clearable
        />
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Autocomplete Size
      </BaseHeading>
      <div class="grid grid-cols-3 gap-4">
        <BaseAutocomplete
          :items="items"
          label="Test"
          placeholder="Let's test autocomplete"
          error="This is an error message"
          size="sm"
          label-float
          clearable
          multiple
        />
        <BaseAutocomplete
          :items="items"
          label="Test"
          placeholder="Let's test autocomplete"
          error="This is an error message"
          size="md"
          label-float
          clearable
          multiple
        />
        <BaseAutocomplete
          :items="items"
          label="Test"
          placeholder="Let's test autocomplete"
          error="This is an error message"
          size="lg"
          label-float
          clearable
        />
      </div>
    </div>
  </div>
</template>
