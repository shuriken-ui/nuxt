<script setup lang="ts">
definePageMeta({
  title: 'BaseInput',
  icon: 'system-uicons:calendar-move',
  description: 'Input component',
  section: 'form',
})

const fieldsRounded = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
  fifth: '',
  sixth: '',
})

const amount = ref<number | undefined>(undefined)
const taxes = ref('With taxes')
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseInput">
      <NuiPreview title="Radius" description="Inputs radiuses">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseInput
            v-model="fieldsRounded.first"
            rounded="none"
            label="Rounded: none"
            placeholder="Ex: username"
          />
          <BaseInput
            v-model="fieldsRounded.second"
            rounded="sm"
            label="Rounded: sm"
            placeholder="Ex: username"
          />
          <BaseInput
            v-model="fieldsRounded.third"
            rounded="md"
            label="Rounded: md"
            placeholder="Ex: username"
          />
          <BaseInput
            v-model="fieldsRounded.fourth"
            rounded="lg"
            label="Rounded: lg"
            placeholder="Ex: username"
          />
          <BaseInput
            v-model="fieldsRounded.fourth"
            rounded="full"
            label="Rounded: full"
            placeholder="Ex: username"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Size" description="Input component sizes">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: default-contrast"
        description="Input component default contrast"
      >
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              contrast="default-contrast"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              contrast="default-contrast"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              contrast="default-contrast"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              contrast="default-contrast"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Contrast: muted" description="Input component muted">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              contrast="muted"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              contrast="muted"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              contrast="muted"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              contrast="muted"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: muted-contrast"
        description="Input component muted contrast"
      >
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              contrast="muted-contrast"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              contrast="muted-contrast"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              contrast="muted-contrast"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              contrast="muted-contrast"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Input component icons">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              icon="lucide:search"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              icon="lucide:search"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              icon="lucide:search"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              icon="lucide:search"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Focus" description="Input component color focus">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
              color-focus
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
              color-focus
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
              color-focus
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
              color-focus
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error" description="Input component errors">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
              error="Please enter a valid username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
              error="Please enter a valid username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
              error="Please enter a valid username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
              error="Please enter a valid username"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error: icon" description="Input component errors">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              icon="solar:user-speak-outline"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
              error="Please enter a valid username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              icon="solar:user-speak-outline"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
              error="Please enter a valid username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              icon="solar:user-speak-outline"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
              error="Please enter a valid username"
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              icon="solar:user-speak-outline"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
              error="Please enter a valid username"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Slot: action" description="Input component actions">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
            >
              <template #action>
                <button
                  type="button"
                  data-nui-tooltip="Save"
                  class="absolute top-0 end-0 z-[1] flex items-center justify-center h-8 w-8 text-muted-400 hover:text-primary-500 transition-colors duration-300"
                >
                  <Icon name="lucide:save" class="w-4 h-4" />
                </button>
              </template>
            </BaseInput>
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
            >
              <template #action>
                <button
                  type="button"
                  data-nui-tooltip="Save"
                  class="absolute top-0 end-0 z-[1] flex items-center justify-center h-10 w-10 text-muted-400 hover:text-primary-500 transition-colors duration-300"
                >
                  <Icon name="lucide:save" class="w-4 h-4" />
                </button>
              </template>
            </BaseInput>
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
            >
              <template #action>
                <button
                  type="button"
                  data-nui-tooltip="Save"
                  class="absolute top-0 end-0 z-[1] flex items-center justify-center h-12 w-12 text-muted-400 hover:text-primary-500 transition-colors duration-300"
                >
                  <Icon name="lucide:save" class="w-5 h-5" />
                </button>
              </template>
            </BaseInput>
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
            >
              <template #action>
                <button
                  type="button"
                  data-nui-tooltip="Save"
                  class="absolute top-0 end-0 z-[1] flex items-center justify-center h-14 w-14 text-muted-400 hover:text-primary-500 transition-colors duration-300"
                >
                  <Icon name="lucide:save" class="w-5 h-5" />
                </button>
              </template>
            </BaseInput>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Label: float"
        description="Autocomplete component label float"
      >
        <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseInput
            v-model="fieldsRounded.first"
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Ex: username"
            label-float
          />
          <BaseInput
            v-model="fieldsRounded.fourth"
            icon="lucide:search"
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Ex: username"
            label-float
          />
          <BaseInput
            v-model="fieldsRounded.second"
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Ex: username"
            label-float
          />
          <BaseInput
            v-model="fieldsRounded.fifth"
            icon="lucide:search"
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Ex: username"
            label-float
          />
          <BaseInput
            v-model="fieldsRounded.third"
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Ex: username"
            label-float
          />
          <BaseInput
            v-model="fieldsRounded.sixth"
            icon="lucide:search"
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Ex: username"
            label-float
          />
          <BaseInput
            v-model="fieldsRounded.third"
            size="xl"
            rounded="md"
            label="Size: xl"
            placeholder="Ex: username"
            label-float
          />
          <BaseInput
            v-model="fieldsRounded.sixth"
            icon="lucide:search"
            size="xl"
            rounded="md"
            label="Size: xl"
            placeholder="Ex: username"
            label-float
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Disabled" description="Input component disabled state">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.first"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Ex: username"
              disabled
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.second"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Ex: username"
              disabled
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Ex: username"
              disabled
            />
          </div>

          <div class="flex-1">
            <BaseInput
              v-model="fieldsRounded.third"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Ex: username"
              disabled
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Loading"
        description="Autocomplete component loading state"
      >
        <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseInput
            v-model="fieldsRounded.first"
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Ex: username"
            loading
          />
          <BaseInput
            v-model="fieldsRounded.fourth"
            icon="lucide:search"
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Ex: username"
            loading
          />
          <BaseInput
            v-model="fieldsRounded.second"
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Ex: username"
            loading
          />
          <BaseInput
            v-model="fieldsRounded.fifth"
            icon="lucide:search"
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Ex: username"
            loading
          />
          <BaseInput
            v-model="fieldsRounded.third"
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Ex: username"
            loading
          />
          <BaseInput
            v-model="fieldsRounded.sixth"
            icon="lucide:search"
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Ex: username"
            loading
          />
          <BaseInput
            v-model="fieldsRounded.third"
            size="xl"
            rounded="md"
            label="Size: xl"
            placeholder="Ex: username"
            loading
          />
          <BaseInput
            v-model="fieldsRounded.sixth"
            icon="lucide:search"
            size="xl"
            rounded="md"
            label="Size: xl"
            placeholder="Ex: username"
            loading
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Group" description="Input component group">
        <BaseButtonGroup>
          <BaseButton color="muted">
            <span>USD</span>
          </BaseButton>

          <BaseInput
            v-model="amount"
            :classes="{
              wrapper: 'w-28',
            }"
            type="number"
            placeholder="0.00"
          />

          <BaseSelect
            v-model="taxes"
            :classes="{
              wrapper: 'w-36',
            }"
          >
            <option value="With taxes">
              With taxes
            </option>

            <option value="Without taxes">
              Without taxes
            </option>
          </BaseSelect>
        </BaseButtonGroup>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
