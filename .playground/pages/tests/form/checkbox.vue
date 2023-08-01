<script setup lang="ts">
definePageMeta({
  title: 'Checkbox',
  icon: 'lucide:sigma',
  description: 'Basic custom checkbox and radio',
  section: 'form',
})

const check = ref('')
const radio = ref('')
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Checkbox shape
      </BaseHeading>
      <div class="grid grid-cols-5 gap-4">
        <BaseCheckbox v-model="check" shape="straight" disabled />
        <BaseCheckbox v-model="check" shape="rounded" indeterminate />
        <BaseCheckbox v-model="check" shape="smooth" />
        <BaseCheckbox v-model="check" shape="curved" />
        <BaseCheckbox v-model="check" shape="full" />
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Checkbox colors
      </BaseHeading>
      <div class="grid grid-cols-8 gap-4">
        <BaseCheckbox v-model="check" color="default" disabled />
        <BaseCheckbox v-model="check" color="light" indeterminate />
        <BaseCheckbox v-model="check" color="muted" />
        <BaseCheckbox v-model="check" color="primary" />
        <BaseCheckbox v-model="check" color="info" />
        <BaseCheckbox v-model="check" color="success" />
        <BaseCheckbox v-model="check" color="warning" />
        <BaseCheckbox v-model="check" color="danger" />
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseCheckboxHeadless
      </BaseHeading>
      <div class="max-w-3xl flex items-center gap-4">
        <BaseRadioHeadless v-model="radio" name="radio_test" value="value_1">
          <div
            class="flex items-center justify-between gap-2 p-8 bg-white border border-muted-200 text-muted-200 peer-checked:text-primary-500"
          >
            <div class="font-sans text-muted-500">Some radio box</div>
            <div class="h-3 w-3 rounded-full bg-current"></div>
          </div>
        </BaseRadioHeadless>
        <BaseRadioHeadless v-model="radio" name="radio_test" value="value_2">
          <div
            class="flex items-center justify-between gap-2 p-8 bg-white border border-muted-200 text-muted-200 peer-checked:text-primary-500"
          >
            <div class="font-sans text-muted-500">Some radio box</div>
            <div class="h-3 w-3 rounded-full bg-current"></div>
          </div>
        </BaseRadioHeadless>
        <BaseRadioHeadless v-model="radio" name="radio_test" value="value_3">
          <div
            class="flex items-center justify-between gap-2 p-8 bg-white border border-muted-200 text-muted-200 peer-checked:text-primary-500"
          >
            <div class="font-sans text-muted-500">Some radio box</div>
            <div class="h-3 w-3 rounded-full bg-current"></div>
          </div>
        </BaseRadioHeadless>
      </div>
    </div>
  </div>
</template>
