<script setup lang="ts">
definePageMeta({
  title: 'Input v-model',
  icon: 'lucide:wrench',
  description: 'Check how v-model works with components',
  section: 'form',
})

const autocomplete1 = ref()
const autocomplete2 = ref()
const checkbox1 = ref()
const checkbox2 = ref()
const checkbox3 = ref([])
const radio1 = ref()
const radio2 = ref()
const radio3 = ref()
const checkboxCustom1 = ref()
const radioCustom1 = ref()
const animatedCheckbox1 = ref()
const animatedCheckbox2 = ref([])
const switchBall = ref()
const switchThin = ref()
const input1 = ref()
const input2 = ref()
const input3 = ref()
const inputFile1 = ref<FileList | null>(null)
const inputFileCustom1 = ref<FileList | null>(null)
const listbox1 = ref()
const listbox2 = ref()
const select1 = ref()
const select2 = ref()
const textarea1 = ref()
const textarea2 = ref()
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseAutocomplete (string)
      </BaseHeading>
      <div>
        <div class="grid grid-cols-4 gap-6">
          <div class="col-span-2">
            <BaseAutocomplete
              v-model="autocomplete1"
              :items="['tete', 'hello', 'test', 'tast', 'tutu', 'holla']"
              :filter-items="(query?: string, items?: string[]) => items?.filter((item) => {
                return query ? item?.toLowerCase().startsWith(query.toLowerCase()) : true
              }) ?? []"
            >
              <template #item="{ item }">
                <span>{{ item }}</span>
              </template>
            </BaseAutocomplete>
          </div>
          <BaseCard class="col-span-2 p-2">
            <pre>
autocomplete1: {{ autocomplete1 }}({{ typeof autocomplete1 }})</pre
            >
            <BaseButtonAction @click="autocomplete1 = undefined">
              reset
            </BaseButtonAction>
          </BaseCard>
        </div>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseAutocomplete (object)
      </BaseHeading>
      <div>
        <div class="grid grid-cols-4 gap-6">
          <div class="col-span-2">
            <BaseAutocomplete
              v-model="autocomplete2"
              :display-value="(item: any) => item.name"
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
autocomplete2: {{ autocomplete2 }}({{ typeof autocomplete2 }})</pre
            >
            <BaseButtonAction @click="autocomplete2 = undefined">
              reset
            </BaseButtonAction>
          </BaseCard>
        </div>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseRadio (boolean)
      </BaseHeading>
      <div>
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
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseRadio (string)
      </BaseHeading>
      <div>
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
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseRadio (object)
      </BaseHeading>
      <div>
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
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseCheckbox (boolean)
      </BaseHeading>
      <div>
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
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseCheckbox (object)
      </BaseHeading>
      <div>
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
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseCheckbox (array)
      </BaseHeading>
      <div>
        <div class="grid grid-cols-4 gap-6">
          <div class="col-span-2">
            <BaseCheckbox v-model="checkbox3" value="foo" />
            <BaseCheckbox v-model="checkbox3" value="bar" />
            <BaseCheckbox v-model="checkbox3" value="baz" />
          </div>
          <BaseCard class="col-span-2 p-2">
            <pre>checkbox3: {{ checkbox3 }}({{ typeof checkbox3 }})</pre>
            <BaseButtonAction @click="checkbox3 = []">reset</BaseButtonAction>
          </BaseCard>
        </div>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseCheckboxHeadless
      </BaseHeading>
      <div>
        <div class="grid grid-cols-4 gap-6">
          <div class="col-span-2">
            <BaseCheckboxHeadless v-model="checkboxCustom1" v-slot="{ value }">
              <span>{{ value ? 'checked' : 'unchecked' }}</span>
            </BaseCheckboxHeadless>
          </div>
          <BaseCard class="col-span-2 p-2">
            <pre>
checkboxCustom1: {{ checkboxCustom1 }}({{ typeof checkboxCustom1 }})</pre
            >
            <BaseButtonAction @click="checkboxCustom1 = undefined">
              reset
            </BaseButtonAction>
          </BaseCard>
        </div>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseRadioHeadless
      </BaseHeading>
      <div>
        <div class="grid grid-cols-4 gap-6">
          <div class="col-span-2">
            <BaseRadioHeadless
              v-model="radioCustom1"
              value="yes"
              v-slot="{ value }"
            >
              <span>
                {{ value === 'yes' ? 'yes selected' : 'yes unselected' }}
              </span>
            </BaseRadioHeadless>
            <BaseRadioHeadless
              v-model="radioCustom1"
              value="no"
              v-slot="{ value }"
            >
              <span>
                {{ value === 'no' ? 'no selected' : 'no unselected' }}
              </span>
            </BaseRadioHeadless>
          </div>
          <BaseCard class="col-span-2 p-2">
            <pre>
radioCustom1: {{ radioCustom1 }}({{ typeof radioCustom1 }})</pre
            >
            <BaseButtonAction @click="radioCustom1 = undefined">
              reset
            </BaseButtonAction>
          </BaseCard>
        </div>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseCheckboxAnimated
      </BaseHeading>
      <div>
        <div class="grid grid-cols-4 gap-6">
          <div class="col-span-2">
            <BaseCheckboxAnimated v-model="animatedCheckbox1" />
          </div>
          <BaseCard class="col-span-2 p-2">
            <pre>
animatedCheckbox1: {{ animatedCheckbox1 }}({{ typeof animatedCheckbox1 }})</pre
            >
            <BaseButtonAction @click="animatedCheckbox1 = undefined">
              reset
            </BaseButtonAction>
          </BaseCard>
        </div>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseCheckboxAnimated (array)
      </BaseHeading>
      <div>
        <div class="grid grid-cols-4 gap-6">
          <div class="col-span-2">
            <BaseCheckboxAnimated v-model="animatedCheckbox2" value="foo" />
            <BaseCheckboxAnimated v-model="animatedCheckbox2" value="bar" />
            <BaseCheckboxAnimated v-model="animatedCheckbox2" value="baz" />
          </div>
          <BaseCard class="col-span-2 p-2">
            <pre>
animatedCheckbox2: {{ animatedCheckbox2 }}({{ typeof animatedCheckbox2 }})</pre
            >
            <BaseButtonAction @click="animatedCheckbox2 = []">
              reset
            </BaseButtonAction>
          </BaseCard>
        </div>
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseSwitchBall
      </BaseHeading>
      <div>
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
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseSwitchThin
      </BaseHeading>
      <div>
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
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseInput
      </BaseHeading>
      <div>
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
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseInput (v-model.number)
      </BaseHeading>
      <div>
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
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseInput (v-model.trim)
      </BaseHeading>
      <div>
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
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseInputFile
      </BaseHeading>
      <div>
        <div class="grid grid-cols-4 gap-6">
          <div class="col-span-2">
            <BaseInputFile v-model="inputFile1" />
          </div>
          <BaseCard class="col-span-2 p-2">
            <pre>
inputFile1: {{ inputFile1?.item?.(0)?.name }}({{ typeof inputFile1 }})</pre
            >
            <BaseButtonAction @click="inputFile1 = null">
              reset
            </BaseButtonAction>
          </BaseCard>
        </div>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseInputFileHeadless
      </BaseHeading>
      <div>
        <div class="grid grid-cols-4 gap-6">
          <div class="col-span-2">
            <BaseInputFileHeadless
              multiple
              accept="image/*"
              :filter-file-dropped="(file: File) => file.type.startsWith('image')"
              v-model="inputFileCustom1"
              v-slot="{ open, remove, preview, drop, files }"
            >
              <div class="flex gap-2">
                <BaseButtonIcon @click="open">
                  <Icon name="ph:file-plus" />
                </BaseButtonIcon>

                <template v-for="file of files">
                  <BaseAvatar
                    :title="file.name"
                    v-if="file.type.startsWith('image')"
                    :src="preview(file).value"
                    @click="remove(file)"
                  />
                  <div v-else>
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
                @click="open"
                @dragenter.stop.prevent
                @dragover.stop.prevent
                @drop="drop"
                class="h-56 w-full border flex items-center justify-center"
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
              }}({{ typeof inputFileCustom1 }})</pre
            >
            <BaseButtonAction @click="inputFileCustom1 = null">
              reset
            </BaseButtonAction>
          </BaseCard>
        </div>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseListbox (string)
      </BaseHeading>
      <div>
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
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseListbox (object)
      </BaseHeading>
      <div>
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
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseSelect
      </BaseHeading>
      <div>
        <div class="grid grid-cols-4 gap-6">
          <div class="col-span-2">
            <BaseSelect v-model="select1">
              <option></option>
              <option value="foo">foo</option>
              <option value="bar">bar</option>
              <option value="baz">baz</option>
            </BaseSelect>
          </div>
          <BaseCard class="col-span-2 p-2">
            <pre>select1: {{ select1 }}({{ typeof select1 }})</pre>
            <BaseButtonAction @click="select1 = undefined">
              reset
            </BaseButtonAction>
          </BaseCard>
        </div>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseSelect (object)
      </BaseHeading>
      <div>
        <div class="grid grid-cols-4 gap-6">
          <div class="col-span-2">
            <BaseSelect v-model="select2">
              <option></option>
              <option :value="{ foo: 42 }">foo</option>
              <option :value="{ bar: 42 }">bar</option>
              <option :value="{ baz: 42 }">baz</option>
            </BaseSelect>
          </div>
          <BaseCard class="col-span-2 p-2">
            <pre>select2: {{ select2 }}({{ typeof select2 }})</pre>
            <BaseButtonAction @click="select2 = undefined">
              reset
            </BaseButtonAction>
          </BaseCard>
        </div>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseTextarea
      </BaseHeading>
      <div>
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
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        BaseTextarea (v-model.trim)
      </BaseHeading>
      <div>
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
      </div>
    </div>
  </div>
</template>
