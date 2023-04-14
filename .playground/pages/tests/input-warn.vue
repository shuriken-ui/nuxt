<script setup lang="ts">
definePageMeta({
  title: 'Input warning',
  icon: 'lucide:triangle',
  description:
    'Missuse of the input component, should be a warning in the console',
})

const value = ref('')
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseInput - label-float & label slot
      </BaseHeading>
      <div>
        <BaseInput
          v-model="value"
          label-float
          placeholder="Placeholder text"
          icon="lucide:search"
          condensed
        >
          <template #label>Label from slot</template>
        </BaseInput>
      </div>
    </div>
  </div>
</template>
