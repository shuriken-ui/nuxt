<script setup lang="ts">
definePageMeta({
  title: 'Input',
  icon: 'lucide:sigma',
  description:
    'Check how different input sizes look like compared to each other.',
  section: 'form',
})

const value = ref('')
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseInput - Shape && labe-float
      </BaseHeading>
      <div class="grid grid-cols-5 gap-4">
        <BaseInput
          v-model="value"
          label-float
          icon="lucide:search"
          size="sm"
          kind="default"
          shape="straight"
        >
          <template #label>Straight Input</template>
        </BaseInput>
        <BaseInput
          v-model="value"
          label-float
          icon="lucide:search"
          size="sm"
          kind="default"
          shape="rounded"
        >
          <template #label>Rounded Input</template>
        </BaseInput>
        <BaseInput
          v-model="value"
          label-float
          icon="lucide:search"
          size="sm"
          kind="default"
          shape="smooth"
        >
          <template #label>Smooth Input</template>
        </BaseInput>
        <BaseInput
          v-model="value"
          label-float
          icon="lucide:search"
          size="sm"
          kind="default"
          shape="curved"
        >
          <template #label>Curved Input</template>
        </BaseInput>
        <BaseInput
          v-model="value"
          label-float
          icon="lucide:search"
          size="sm"
          kind="default"
          shape="full"
        >
          <template #label>Full Input</template>
        </BaseInput>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseInput - Kind
      </BaseHeading>
      <div class="grid grid-cols-4 gap-4">
        <BaseInput
          v-model="value"
          placeholder="Placeholder text"
          icon="lucide:search"
          size="sm"
          kind="default"
          shape="curved"
        >
          <template #label>Default Input</template>
        </BaseInput>
        <BaseInput
          v-model="value"
          placeholder="Placeholder text"
          icon="lucide:search"
          size="sm"
          kind="default-contrast"
          shape="curved"
        >
          <template #label>Default contrast Input</template>
        </BaseInput>
        <BaseInput
          v-model="value"
          placeholder="Placeholder text"
          icon="lucide:search"
          size="sm"
          kind="muted"
          shape="curved"
        >
          <template #label>Muted Input</template>
        </BaseInput>
        <BaseInput
          v-model="value"
          placeholder="Placeholder text"
          icon="lucide:search"
          size="sm"
          kind="muted-contrast"
          shape="curved"
        >
          <template #label>Muted contrast Input</template>
        </BaseInput>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseInput - Sizes
      </BaseHeading>
      <div class="grid grid-cols-3 gap-4">
        <BaseInput
          v-model="value"
          placeholder="Placeholder text"
          icon="lucide:search"
          size="sm"
          shape="curved"
        >
          <template #label>SM Input</template>
        </BaseInput>
        <BaseInput
          v-model="value"
          placeholder="Placeholder text"
          icon="lucide:search"
          size="md"
          shape="curved"
        >
          <template #label>MD Input</template>
        </BaseInput>
        <BaseInput
          v-model="value"
          placeholder="Placeholder text"
          icon="lucide:search"
          size="lg"
          shape="curved"
        >
          <template #label>LG Input</template>
        </BaseInput>
      </div>
    </div>
  </div>
</template>
