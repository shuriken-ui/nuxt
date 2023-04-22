<script setup lang="ts">
definePageMeta({
  title: 'Input',
  icon: 'lucide:sigma',
  description:
    'Check how different input sizes look like compared to each other.',
  section: 'form',
})

const value = ref('')
const value1 = ref('')
const value2 = ref(null)
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref(null)
const value9 = ref('')
const value10 = ref('')
const value11 = ref('')
const value12 = ref('')
const value13 = ref('')
const value14 = ref(null)
const value15 = ref('')
const value16 = ref('')
const value17 = ref('')
const value18 = ref('')
const value19 = ref('')
const value20 = ref('')
const value21 = ref('')
const value22 = ref('')
const value23 = ref('')
const value24 = ref('')
const value25 = ref('')
const value26 = ref('')
const value27 = ref('')
const value28 = ref('')
const value29 = ref('')
const value30 = ref('')
const value31 = ref('')
const value32 = ref('')
const value33 = ref('')
const value34 = ref('')
const value35 = ref('')
const value36 = ref('')
const value37 = ref('')
const value38 = ref('')
const value39 = ref('')
const value40 = ref('')
const value41 = ref('')
const value42 = ref('')
const value43 = ref('')
const value44 = ref('')
const value45 = ref('')
const value46 = ref('')
const value47 = ref('')
const value48 = ref('')
const value49 = ref('')
const value50 = ref('')
const value51 = ref('')
const value52 = ref('')
const value53 = ref('')
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
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Raw block
      </BaseHeading>
      <div>
        <BaseInput
          v-model="value1"
          placeholder="Placeholder text"
          label="Some nice label"
        />
        <BaseInputFile
          v-model="value2"
          placeholder="Placeholder text"
          label="Some nice label"
        />
        <BaseAutocomplete
          v-model="value3"
          placeholder="Placeholder text"
          label="Search items"
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
        <BaseSelect
          v-model="value4"
          placeholder="Placeholder text"
          label="Some nice label"
          :classes="{
            wrapper: 'w-full',
          }"
        >
          <option>Foo</option>
          <option>Bar</option>
          <option>Baz</option>
        </BaseSelect>
        <BaseListbox
          v-model="value5"
          placeholder="Placeholder text"
          label="Select option"
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
        <BaseTextarea
          v-model="value6"
          placeholder="Placeholder text"
          label="Some nice label"
          autogrow
          rows="1"
        />
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseInput
      </BaseHeading>
      <div class="max-w-7xl grid grid-cols-6 gap-4">
        <BaseInput
          v-model="value7"
          placeholder="Placeholder text"
          label="Some nice label"
        />
        <BaseInputFile
          v-model="value8"
          placeholder="Placeholder text"
          label="Some nice label"
        />
        <BaseAutocomplete
          v-model="value9"
          placeholder="Placeholder text"
          label="Search items"
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
        <BaseSelect
          v-model="value10"
          placeholder="Placeholder text"
          label="Some nice label"
          :classes="{
            wrapper: 'w-full',
          }"
        >
          <option>Foo</option>
          <option>Bar</option>
          <option>Baz</option>
        </BaseSelect>
        <BaseListbox
          v-model="value11"
          placeholder="Placeholder text"
          label="Select option"
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
        <BaseTextarea
          v-model="value12"
          placeholder="Placeholder text"
          label="Some nice label"
          autogrow
          rows="1"
        />
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseInput condensed
      </BaseHeading>
      <div class="max-w-7xl grid grid-cols-6 gap-4">
        <BaseInput
          v-model="value13"
          condensed
          placeholder="Placeholder text"
          label="Some nice label"
        />
        <BaseInputFile v-model="value14" condensed label="Some nice label" />
        <BaseAutocomplete
          v-model="value15"
          condensed
          placeholder="Placeholder text"
          label="Search items"
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
        <BaseSelect
          v-model="value16"
          condensed
          placeholder="Placeholder text"
          label="Some nice label"
          :classes="{
            wrapper: 'w-full',
          }"
        >
          <option>Foo</option>
          <option>Bar</option>
          <option>Baz</option>
        </BaseSelect>
        <BaseListbox
          v-model="value17"
          condensed
          placeholder="Placeholder text"
          label="Select option"
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
        <BaseTextarea
          v-model="value18"
          condensed
          placeholder="Placeholder text"
          label="Some nice label"
          autogrow
          rows="1"
        />
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseInput float & regular
      </BaseHeading>
      <div class="max-w-5xl grid grid-cols-4 gap-4 items-end">
        <BaseInput
          v-model="value19"
          placeholder="Placeholder text"
          label="Some nice label"
        />
        <BaseInput
          v-model="value20"
          placeholder="Placeholder text"
          label="Some nice label"
          label-float
        />
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseInput float
      </BaseHeading>
      <div class="max-w-5xl grid grid-cols-4 gap-4">
        <BaseInput
          v-model="value21"
          placeholder="Placeholder text"
          label="Some nice label"
          label-float
          icon="lucide:search"
        />
        <BaseInput
          v-model="value22"
          placeholder="Placeholder text"
          label="Some nice label"
          label-float
        />
        <BaseInput
          v-model="value23"
          label="Some nice label"
          placeholder="Placeholder text"
          label-float
          icon="lucide:search"
          loading
        />
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseInput condensed / float
      </BaseHeading>
      <div class="max-w-5xl grid grid-cols-4 gap-4">
        <BaseInput
          v-model="value24"
          label="Some nice label"
          placeholder="Placeholder text"
          label-float
          icon="lucide:search"
          condensed
        />
        <BaseInput
          v-model="value25"
          label-float
          placeholder="Placeholder text"
          label="Some nice label"
          icon="lucide:search"
          condensed
        />
        <BaseInput
          v-model="value26"
          placeholder="Placeholder text"
          label="Some nice label"
          label-float
          condensed
        />
        <BaseInput
          v-model="value27"
          placeholder="Placeholder text"
          label="Some nice label"
          label-float
          condensed
          loading
        />
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseSelect condensed
      </BaseHeading>
      <div class="max-w-5xl grid grid-cols-3 gap-4">
        <BaseInput
          v-model="value28"
          placeholder="Placeholder text"
          label="Some nice label"
          icon="lucide:search"
          condensed
        />
        <BaseSelect
          v-model="value29"
          placeholder="Placeholder text"
          label="Some nice label"
          condensed
          :classes="{
            wrapper: 'w-full',
          }"
        >
          <option>Foo</option>
          <option>Bar</option>
          <option>Baz</option>
        </BaseSelect>
        <BaseSelect
          v-model="value30"
          placeholder="Placeholder text"
          label="Some nice label"
          icon="lucide:search"
          condensed
          :classes="{
            wrapper: 'w-full',
          }"
        >
          <option>Foo</option>
          <option>Bar</option>
          <option>Baz</option>
        </BaseSelect>
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseSelect float
      </BaseHeading>
      <div class="max-w-5xl grid grid-cols-3 gap-4">
        <BaseInput
          v-model="value31"
          label="Some nice label"
          placeholder="Placeholder text"
          icon="lucide:search"
          label-float
        />
        <BaseSelect
          v-model="value32"
          label="Some nice label"
          placeholder="Placeholder text"
          label-float
          :classes="{
            wrapper: 'w-full',
          }"
        >
          <option>Foo</option>
          <option>Bar</option>
          <option>Baz</option>
        </BaseSelect>
        <BaseSelect
          v-model="value33"
          placeholder="Placeholder text"
          label="Some nice label"
          icon="lucide:search"
          label-float
          :classes="{
            wrapper: 'w-full',
          }"
        >
          <option>Foo</option>
          <option>Bar</option>
          <option>Baz</option>
        </BaseSelect>
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseSelect condensed / float
      </BaseHeading>
      <div class="max-w-5xl grid grid-cols-3 gap-4">
        <BaseInput
          v-model="value34"
          placeholder="Placeholder text"
          label="Some nice label"
          icon="lucide:search"
          condensed
          label-float
        />
        <BaseSelect
          v-model="value35"
          placeholder="Placeholder text"
          label="Some nice label"
          label-float
          condensed
          :classes="{
            wrapper: 'w-full',
          }"
        >
          <option>Foo</option>
          <option>Bar</option>
          <option>Baz</option>
        </BaseSelect>
        <BaseSelect
          v-model="value36"
          placeholder="Placeholder text"
          label="Some nice label"
          icon="lucide:search"
          label-float
          condensed
          :classes="{
            wrapper: 'w-full',
          }"
        >
          <option>Foo</option>
          <option>Bar</option>
          <option>Baz</option>
        </BaseSelect>
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseAutocomplete
      </BaseHeading>
      <div class="max-w-5xl grid grid-cols-3 gap-4">
        <BaseAutocomplete
          v-model="value37"
          placeholder="Placeholder text"
          label="Some label"
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
        <BaseAutocomplete
          v-model="value38"
          icon="lucide:search"
          placeholder="Placeholder text"
          label="Some label"
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseAutocomplete float
      </BaseHeading>
      <div class="max-w-5xl grid grid-cols-3 gap-4">
        <BaseAutocomplete
          v-model="value39"
          clearable
          placeholder="Placeholder text"
          label="Search items"
          label-float
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
        <BaseAutocomplete
          v-model="value40"
          icon="lucide:search"
          placeholder="Placeholder text"
          label="Search items"
          label-float
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
        <BaseAutocomplete
          v-model="value41"
          icon="lucide:search"
          placeholder="Placeholder text"
          label="Search items"
          label-float
          loading
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseAutocomplete condensed / float
      </BaseHeading>
      <div class="max-w-5xl grid grid-cols-3 gap-4">
        <BaseAutocomplete
          v-model="value42"
          clearable
          placeholder="Placeholder text"
          label="Search items"
          label-float
          condensed
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
        <BaseAutocomplete
          v-model="value43"
          icon="lucide:search"
          placeholder="Placeholder text"
          label="Search items"
          label-float
          condensed
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
        <BaseAutocomplete
          v-model="value44"
          icon="lucide:search"
          label="Search items"
          placeholder="Placeholder text"
          label-float
          condensed
          loading
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseListbox
      </BaseHeading>
      <div class="max-w-5xl grid grid-cols-3 gap-4">
        <BaseListbox
          v-model="value45"
          placeholder="Placeholder text"
          label="Select option"
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
        <BaseListbox
          v-model="value46"
          placeholder="Placeholder text"
          icon="lucide:search"
          label="Select option"
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
        <BaseListbox
          v-model="value47"
          placeholder="Placeholder text"
          icon="lucide:search"
          label="Select option"
          loading
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseListbox float
      </BaseHeading>
      <div class="max-w-5xl grid grid-cols-3 gap-4">
        <BaseListbox
          v-model="value48"
          placeholder="Placeholder text"
          label="Select option"
          label-float
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
        <BaseListbox
          v-model="value49"
          placeholder="Placeholder text"
          icon="lucide:search"
          label="Select option"
          label-float
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
        <BaseListbox
          v-model="value50"
          placeholder="Placeholder text"
          icon="lucide:search"
          label="Select option"
          label-float
          loading
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseListbox condensed / float
      </BaseHeading>
      <div class="max-w-5xl grid grid-cols-3 gap-4">
        <BaseListbox
          v-model="value51"
          placeholder="Placeholder text"
          condensed
          label="Select option"
          label-float
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
        <BaseListbox
          v-model="value52"
          placeholder="Placeholder text"
          condensed
          icon="lucide:search"
          label="Select option"
          label-float
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
        <BaseListbox
          v-model="value53"
          placeholder="Placeholder text"
          condensed
          icon="lucide:search"
          label="Select option"
          label-float
          loading
          :items="[{ name: 'A' }, { name: 'B' }]"
        />
      </div>
    </div>
  </div>
</template>
