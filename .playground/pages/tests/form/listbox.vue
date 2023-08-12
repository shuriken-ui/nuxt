<script setup lang="ts">
definePageMeta({
  title: 'Listbox',
  icon: 'ic:round-menu-open',
  description: 'SVG icons',
  section: 'form',
})
const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
]
const model = ref({
  frameworkId: '',
  framework: {},
})
const properties = {
  value: 'value',
  label: 'label',
}
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Default Listbox
      </BaseHeading>
      <div class="grid grid-cols-3 gap-4">
        <BaseListbox
          v-model="model.framework"
          :items="frameworks"
          :properties="properties"
        />
        <pre> {{ model }}</pre>
        <BaseButton @click="model.framework = frameworks[1]">
          Set Framework to Vue
        </BaseButton>
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Listbox with Object Key
      </BaseHeading>
      <div class="grid grid-cols-3 gap-4">
        <BaseListbox
          v-model="model.frameworkId"
          :items="frameworks"
          :properties="properties"
          return-value-prop
        />
        <pre> {{ model }}</pre>
        <BaseButton @click="model.frameworkId = 'vue'">
          Set Framework to Vue
        </BaseButton>
      </div>
    </div>
  </div>
</template>
