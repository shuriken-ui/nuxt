<script setup lang="ts">
definePageMeta({
  title: 'Input v-model',
  icon: 'lucide:wrench',
  description: 'Check how v-model works with components',
  section: 'tests',
})

const autocomplete1 = ref<string>()
const autocomplete2 = ref<{ name: string }>()
const autocomplete3 = ref('value2')
const autocomplete4 = ref<string[]>()
const autocomplete5 = ref<any[]>()
const autocomplete6 = ref<string[]>()
const checkbox1 = ref<boolean>()
const checkbox2 = ref<{ checked: boolean }>()
const checkbox3 = ref<string[]>([])
const radio1 = ref<boolean>()
const radio2 = ref<string>()
const radio3 = ref<{ [key: string]: number }>()
const checkboxCustom1 = ref()
const radioCustom1 = ref<'yes' | 'no'>()
const animatedCheckbox1 = ref<boolean>()
const animatedCheckbox2 = ref<string[]>([])
const switchBall = ref()
const switchThin = ref()
const input1 = ref()
const input2 = ref()
const input3 = ref()
const input4 = ref()
const inputNumber1 = ref()
const inputNumber2 = ref()
const inputFile1 = ref<FileList | null>(null)
const inputFileCustom1 = ref<FileList | null>(null)
const listbox1 = ref<string>()
const listbox2 = ref<{ name: string }>()
const listbox3 = ref('bar')
const listbox4 = ref([])
const listbox5 = ref([])
const select1 = ref()
const select2 = ref()
const textarea1 = ref()
const textarea2 = ref()
const textarea3 = ref()
</script>

<template>
  <NuiPreviewContainer title="Input models">
    <NuiPreview
      title="BaseAutocomplete (string)"
      description="Autocomplete with string"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseAutocomplete
            v-model="autocomplete1"
            :items="['tete', 'hello', 'test', 'tast', 'tutu', 'holla']"
            :filter-items="
              (query, items) =>
                items?.filter((item) => {
                  return query
                    ? item?.toLowerCase().startsWith(query.toLowerCase())
                    : true
                }) ?? []
            "
          >
            <template #item="{ item }">
              <span>{{ item }}</span>
            </template>
          </BaseAutocomplete>
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
autocomplete1: {{ autocomplete1 }}({{ typeof autocomplete1 }})</pre>
          <BaseButtonAction @click="autocomplete1 = undefined">
            reset
          </BaseButtonAction>
          <BaseButtonAction @click="autocomplete1 = 'hello'">
            set
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseAutocomplete (object)"
      description="Autocomplete with object"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseAutocomplete
            v-model="autocomplete2"
            :display-value="(item) => item?.name"
            clearable
            :items="[
              {
                name: 'Item 1',
              },
              {
                name: 'Item 2',
              },
              {
                name: 'Item 3',
              },
              {
                name: 'Item 4',
              },
            ]"
          />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
autocomplete2: {{ autocomplete2 }}({{ typeof autocomplete2 }})</pre>
          <BaseButtonAction @click="autocomplete2 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseAutocomplete (prop modifier)"
      description="Autocomplete with prop modifier"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseAutocomplete
            v-model.prop="autocomplete3"
            :display-value="(item) => item?.name"
            :properties="{
              value: 'value',
              label: 'name',
            }"
            :items="[
              {
                name: 'Item 1',
                value: 'value1',
              },
              {
                name: 'Item 2',
                value: 'value2',
              },
              {
                name: 'Item 3',
                value: 'value3',
              },
              {
                name: 'Item 4',
                value: 'value4',
              },
            ]"
          />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
autocomplete3: {{ autocomplete3 }}({{ typeof autocomplete3 }})</pre>
          <BaseButtonAction @click="autocomplete3 = ''">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseAutocomplete (multiple)"
      description="Autocomplete multiple"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseAutocomplete
            v-model="autocomplete4"
            multiple
            :items="['tete', 'hello', 'test', 'tast', 'tutu', 'holla']"
          />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
autocomplete4: {{ autocomplete4 }}({{ typeof autocomplete4 }})</pre>
          <BaseButtonAction @click="autocomplete4 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseAutocomplete (multiple & object)"
      description="Autocomplete multiple with object"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseAutocomplete
            v-model="autocomplete5"
            multiple
            :properties="{
              value: 'value',
              label: 'name',
            }"
            :items="[
              {
                name: 'Item 1',
                value: 'value1',
              },
              {
                name: 'Item 2',
                value: 'value2',
              },
              {
                name: 'Item 3',
                value: 'value3',
              },
              {
                name: 'Item 4',
                value: 'value4',
              },
            ]"
          />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
autocomplete5: {{ autocomplete5 }}({{ typeof autocomplete5 }})</pre>
          <BaseButtonAction @click="autocomplete5 = []">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseAutocomplete (multiple & prop modifier)"
      description="Autocomplete multiple with prop modifier"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseAutocomplete
            v-model.prop="autocomplete6"
            multiple
            :properties="{
              value: 'value',
              label: 'name',
            }"
            :items="[
              {
                name: 'Item 1',
                value: 'value1',
              },
              {
                name: 'Item 2',
                value: 'value2',
              },
              {
                name: 'Item 3',
                value: 'value3',
              },
              {
                name: 'Item 4',
                value: 'value4',
              },
            ]"
          />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
autocomplete6: {{ autocomplete6 }}({{ typeof autocomplete6 }})</pre>
          <BaseButtonAction @click="autocomplete6 = []">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseRadio (boolean)"
      description="BaseRadio with boolean"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseRadio v-model="radio1" :value="true" />
          <BaseRadio v-model="radio1" :value="false" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>radio1: {{ radio1 }}({{ typeof radio1 }})</pre>
          <BaseButtonAction @click="radio1 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseRadio (string)" description="BaseRadio with string">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseRadio v-model="radio2" value="yes" />
          <BaseRadio v-model="radio2" value="no" />
          <BaseRadio v-model="radio2" value="maybe" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>radio2: {{ radio2 }}({{ typeof radio2 }})</pre>
          <BaseButtonAction @click="radio2 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseRadio (object)" description="BaseRadio with object">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseRadio v-model="radio3" :value="{ foo: 42 }" />
          <BaseRadio v-model="radio3" :value="{ bar: 42 }" />
          <BaseRadio v-model="radio3" :value="{ baz: 42 }" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>radio3: {{ radio3 }}({{ typeof radio3 }})</pre>
          <BaseButtonAction @click="radio3 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseCheckbox (boolean)"
      description="BaseCheckbox with boolean"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseCheckbox v-model="checkbox1" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>checkbox1: {{ checkbox1 }}({{ typeof checkbox1 }})</pre>
          <BaseButtonAction @click="checkbox1 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseCheckbox (object)"
      description="BaseCheckbox with boolean"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseCheckbox
            v-model="checkbox2"
            :true-value="{ checked: true }"
            :false-value="{ checked: false }"
          />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>checkbox2: {{ checkbox2 }}({{ typeof checkbox2 }})</pre>
          <BaseButtonAction @click="checkbox2 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseCheckbox (array)"
      description="BaseCheckbox with boolean"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseCheckbox v-model="checkbox3" value="foo" />
          <BaseCheckbox v-model="checkbox3" value="bar" />
          <BaseCheckbox v-model="checkbox3" value="baz" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>checkbox3: {{ checkbox3 }}({{ typeof checkbox3 }})</pre>
          <BaseButtonAction @click="checkbox3 = []">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseCheckboxHeadless"
      description="BaseCheckboxHeadless test"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseCheckboxHeadless v-slot="{ value }" v-model="checkboxCustom1">
            <span>{{ value ? 'checked' : 'unchecked' }}</span>
          </BaseCheckboxHeadless>
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
checkboxCustom1: {{ checkboxCustom1 }}({{ typeof checkboxCustom1 }})</pre>
          <BaseButtonAction @click="checkboxCustom1 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseRadioHeadless" description="BaseRadioHeadless test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseRadioHeadless
            v-slot="{ value }"
            v-model="radioCustom1"
            value="yes"
          >
            <span>
              {{ value === 'yes' ? 'yes selected' : 'yes unselected' }}
            </span>
          </BaseRadioHeadless>
          <BaseRadioHeadless
            v-slot="{ value }"
            v-model="radioCustom1"
            value="no"
          >
            <span>
              {{ value === 'no' ? 'no selected' : 'no unselected' }}
            </span>
          </BaseRadioHeadless>
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>radioCustom1: {{ radioCustom1 }}({{ typeof radioCustom1 }})</pre>
          <BaseButtonAction @click="radioCustom1 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseCheckboxAnimated"
      description="BaseCheckboxAnimated test"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseCheckboxAnimated v-model="animatedCheckbox1" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
animatedCheckbox1: {{ animatedCheckbox1 }}({{ typeof animatedCheckbox1 }})</pre>
          <BaseButtonAction @click="animatedCheckbox1 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseCheckboxAnimated (array)"
      description="BaseCheckboxAnimated test"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseCheckboxAnimated v-model="animatedCheckbox2" value="foo" />
          <BaseCheckboxAnimated v-model="animatedCheckbox2" value="bar" />
          <BaseCheckboxAnimated v-model="animatedCheckbox2" value="baz" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
animatedCheckbox2: {{ animatedCheckbox2 }}({{ typeof animatedCheckbox2 }})</pre>
          <BaseButtonAction @click="animatedCheckbox2 = []">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseSwitchBall" description="BaseSwitchBall test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseSwitchBall v-model="switchBall" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>switchBall: {{ switchBall }}({{ typeof switchBall }})</pre>
          <BaseButtonAction @click="switchBall = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseSwitchThin" description="BaseSwitchThin test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseSwitchThin v-model="switchThin" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>switchThin: {{ switchThin }}({{ typeof switchThin }})</pre>
          <BaseButtonAction @click="switchThin = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseInput" description="BaseInput test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseInput v-model="input1" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>input1: {{ input1 }}({{ typeof input1 }})</pre>
          <BaseButtonAction @click="input1 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseInput (v-model.number)" description="BaseInput test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseInput v-model.number="input2" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>input2: {{ input2 }}({{ typeof input2 }})</pre>
          <BaseButtonAction @click="input2 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseInput (v-model.trim)" description="BaseInput test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseInput v-model.trim="input3" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>input3: {{ input3 }}({{ typeof input3 }})</pre>
          <BaseButtonAction @click="input3 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseInput (v-model.lazy)" description="BaseInput test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseInput v-model.lazy="input4" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>input4: {{ input4 }}({{ typeof input4 }})</pre>
          <BaseButtonAction @click="input4 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseInputNumber" description="BaseInputNumber test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseInputNumber
            v-model="inputNumber1"
            :min="-2"
            :max="5"
            color-focus
          />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>inputNumber1: {{ inputNumber1 }}({{ typeof inputNumber1 }})</pre>
          <BaseButtonAction @click="inputNumber1 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseInputNumber (v-model.lazy)"
      description="BaseInputNumber test"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseInputNumber v-model.lazy="inputNumber2" :step="0.00001" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>inputNumber2: {{ inputNumber2 }}({{ typeof inputNumber2 }})</pre>
          <BaseButtonAction @click="inputNumber2 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseInputFile" description="BaseInputFile test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseInputFile v-model="inputFile1" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
inputFile1: {{ inputFile1?.item?.(0)?.name }}({{ typeof inputFile1 }})</pre>
          <BaseButtonAction @click="inputFile1 = null">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseInputFileHeadless"
      description="BaseInputFileHeadless test"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseInputFileHeadless
            v-slot="{ open, remove, preview, drop, files }"
            v-model="inputFileCustom1"
            multiple
            accept="image/*"
            :filter-file-dropped="(file: File) => file.type.startsWith('image')"
          >
            <div class="flex gap-2">
              <BaseButtonIcon @click="open">
                <Icon name="ph:file-plus" />
              </BaseButtonIcon>

              <template v-for="file of files">
                <BaseAvatar
                  v-if="file.type.startsWith('image')"
                  :key="`avatar-${file.name}`"
                  :title="file.name"
                  :src="preview(file).value"
                  @click="remove(file)"
                />
                <div v-else :key="`file-${file.name}`">
                  <BaseIconBox
                    :title="`${file.name} (${file.type})`"
                    bordered
                    @click="remove(file)"
                  >
                    <Icon name="ph:file" />
                  </BaseIconBox>
                </div>
              </template>
            </div>
            <div
              class="h-56 w-full border flex items-center justify-center"
              @click="open"
              @dragenter.stop.prevent
              @dragover.stop.prevent
              @drop="drop"
            >
              drop file
            </div>
          </BaseInputFileHeadless>
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>
inputFileCustom1: {{
              Array.from(inputFileCustom1 ?? [])
                .map((file) => file?.name)
                .join(',')
            }}({{ typeof inputFileCustom1 }})</pre>
          <BaseButtonAction @click="inputFileCustom1 = null">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseListbox (string)" description="BaseListbox test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseListbox v-model="listbox1" :items="['foo', 'bar', 'baz']" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>listbox1: {{ listbox1 }}({{ typeof listbox1 }})</pre>
          <BaseButtonAction @click="listbox1 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseListbox (object)" description="BaseListbox test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseListbox
            v-model="listbox2"
            :properties="{ value: 'name' }"
            :items="[
              {
                name: 'foo',
              },
              {
                name: 'bar',
              },
              {
                name: 'baz',
              },
            ]"
          />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>listbox2: {{ listbox2 }}({{ typeof listbox2 }})</pre>
          <BaseButtonAction @click="listbox2 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseListbox (prop modifier)"
      description="BaseListbox test"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseListbox
            v-model.prop="listbox3"
            :properties="{ value: 'name', label: 'name' }"
            :items="[
              {
                name: 'foo',
              },
              {
                name: 'bar',
              },
              {
                name: 'baz',
              },
            ]"
          />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>listbox3: {{ listbox3 }}({{ typeof listbox3 }})</pre>
          <BaseButtonAction @click="listbox3 = ''">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseListbox (multipe object)"
      description="BaseListbox test"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseListbox
            v-model="listbox4"
            :properties="{ value: 'value', label: 'name' }"
            multiple
            :items="[
              {
                name: 'Foo',
                value: 'foo',
              },
              {
                name: 'Bar',
                value: 'bar',
              },
              {
                name: 'baz',
                value: 'Baz',
              },
            ]"
          />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>listbox4: {{ listbox4 }}({{ typeof listbox4 }})</pre>
          <BaseButtonAction @click="listbox4 = []">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseListbox (prop modifier)"
      description="BaseListbox test"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseListbox
            v-model.prop="listbox5"
            :properties="{ value: 'value', label: 'name' }"
            multiple
            :items="[
              {
                name: 'Foo',
                value: 'foo',
              },
              {
                name: 'Bar',
                value: 'bar',
              },
              {
                name: 'baz',
                value: 'Baz',
              },
            ]"
          />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>listbox5: {{ listbox5 }}({{ typeof listbox5 }})</pre>
          <BaseButtonAction @click="listbox5 = []">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseSelect" description="BaseSelect test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseSelect v-model="select1">
            <option />
            <option value="foo">
              foo
            </option>
            <option value="bar">
              bar
            </option>
            <option value="baz">
              baz
            </option>
          </BaseSelect>
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>select1: {{ select1 }}({{ typeof select1 }})</pre>
          <BaseButtonAction @click="select1 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseSelect" description="BaseSelect test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseSelect v-model="select2">
            <option />
            <option :value="{ foo: 42 }">
              foo
            </option>
            <option :value="{ bar: 42 }">
              bar
            </option>
            <option :value="{ baz: 42 }">
              baz
            </option>
          </BaseSelect>
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>select2: {{ select2 }}({{ typeof select2 }})</pre>
          <BaseButtonAction @click="select2 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview title="BaseTextarea" description="BaseTextarea test">
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseTextarea v-model="textarea1" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>textarea1: {{ textarea1 }}({{ typeof textarea1 }})</pre>
          <BaseButtonAction @click="textarea1 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseTextarea (v-model.trim)"
      description="BaseTextarea test"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseTextarea v-model.trim="textarea2" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>textarea2: {{ textarea2 }}({{ typeof textarea2 }})</pre>
          <BaseButtonAction @click="textarea2 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>

    <NuiPreview
      title="BaseTextarea (v-model.lazy)"
      description="BaseTextarea test"
    >
      <div class="grid grid-cols-4 gap-6">
        <div class="col-span-2">
          <BaseTextarea v-model.lazy="textarea3" />
        </div>
        <BaseCard class="col-span-2 p-2">
          <pre>textarea3: {{ textarea3 }}({{ typeof textarea3 }})</pre>
          <BaseButtonAction @click="textarea3 = undefined">
            reset
          </BaseButtonAction>
        </BaseCard>
      </div>
    </NuiPreview>
  </NuiPreviewContainer>
</template>
