<script setup lang="ts">
definePageMeta({
  title: 'BaseInputNumber',
  icon: 'system-uicons:calendar-move',
  description: 'Input number component',
  section: 'form',
})

const fields = reactive({
  first: 0,
  second: 0,
  third: 0,
  fourth: 0,
  fifth: 0,
  sixth: 0,
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseInputNumber">
      <NuiPreview title="Radius" description="Inputs radiuses">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseInputNumber
            v-model="fields.first"
            rounded="none"
            label="Rounded: none"
            placeholder="Quantity"
          />
          <BaseInputNumber
            v-model="fields.second"
            rounded="sm"
            label="Rounded: sm"
            placeholder="Quantity"
          />
          <BaseInputNumber
            v-model="fields.third"
            rounded="md"
            label="Rounded: md"
            placeholder="Quantity"
          />
          <BaseInputNumber
            v-model="fields.fourth"
            rounded="lg"
            label="Rounded: lg"
            placeholder="Quantity"
          />
          <BaseInputNumber
            v-model="fields.fourth"
            rounded="full"
            label="Rounded: full"
            placeholder="Quantity"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Size" description="Input component sizes">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.first"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.second"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
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
            <BaseInputNumber
              v-model="fields.first"
              contrast="default-contrast"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.second"
              contrast="default-contrast"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              contrast="default-contrast"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              contrast="default-contrast"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Contrast: muted" description="Input component muted">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.first"
              contrast="muted"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.second"
              contrast="muted"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              contrast="muted"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              contrast="muted"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
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
            <BaseInputNumber
              v-model="fields.first"
              contrast="muted-contrast"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.second"
              contrast="muted-contrast"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              contrast="muted-contrast"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              contrast="muted-contrast"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Input component icons">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.first"
              icon="lucide:star"
              icon-increment="lucide:chevron-right"
              icon-decrement="lucide:chevron-left"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.second"
              icon="lucide:star"
              icon-increment="lucide:alarm-plus"
              icon-decrement="lucide:alarm-minus"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              icon="lucide:star"
              icon-increment="lucide:chevron-right"
              icon-decrement="lucide:chevron-left"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              icon="lucide:star"
              icon-increment="lucide:alarm-plus"
              icon-decrement="lucide:alarm-minus"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Focus" description="Input component color focus">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.first"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
              color-focus
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.second"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
              color-focus
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
              color-focus
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
              color-focus
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error" description="Input component errors">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.first"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
              error="Please enter a valid value"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.second"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
              error="Please enter a valid value"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
              error="Please enter a valid value"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
              error="Please enter a valid value"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Error: icon" description="Input component errors">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.first"
              icon="lucide:alarm-clock"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
              error="Please enter a valid value"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.second"
              icon="lucide:alarm-clock"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
              error="Please enter a valid value"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              icon="lucide:alarm-clock"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
              error="Please enter a valid value"
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              icon="lucide:alarm-clock"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
              error="Please enter a valid value"
            />
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Label: float"
        description="Autocomplete component label float"
      >
        <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseInputNumber
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Quantity"
            label-float
          />
          <BaseInputNumber
            icon="lucide:star"
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Quantity"
            label-float
          />
          <BaseInputNumber
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Quantity"
            label-float
          />
          <BaseInputNumber
            icon="lucide:star"
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Quantity"
            label-float
          />
          <BaseInputNumber
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Quantity"
            label-float
          />
          <BaseInputNumber
            icon="lucide:star"
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Quantity"
            label-float
          />
          <BaseInputNumber
            size="xl"
            rounded="md"
            label="Size: xl"
            placeholder="Quantity"
            label-float
          />
          <BaseInputNumber
            icon="lucide:star"
            size="xl"
            rounded="md"
            label="Size: xl"
            placeholder="Quantity"
            label-float
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Disabled" description="Input component disabled state">
        <div class="flex flex-wrap items-end gap-3 max-w-5xl">
          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.first"
              size="sm"
              rounded="md"
              label="Size: sm"
              placeholder="Quantity"
              disabled
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.second"
              size="md"
              rounded="md"
              label="Size: md"
              placeholder="Quantity"
              disabled
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              size="lg"
              rounded="md"
              label="Size: lg"
              placeholder="Quantity"
              disabled
            />
          </div>

          <div class="flex-1">
            <BaseInputNumber
              v-model="fields.third"
              size="xl"
              rounded="md"
              label="Size: xl"
              placeholder="Quantity"
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
          <BaseInputNumber
            v-model="fields.first"
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Quantity"
            loading
          />
          <BaseInputNumber
            v-model="fields.fourth"
            icon="lucide:star"
            size="sm"
            rounded="md"
            label="Size: sm"
            placeholder="Quantity"
            loading
          />
          <BaseInputNumber
            v-model="fields.second"
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Quantity"
            loading
          />
          <BaseInputNumber
            v-model="fields.fifth"
            icon="lucide:star"
            size="md"
            rounded="md"
            label="Size: md"
            placeholder="Quantity"
            loading
          />
          <BaseInputNumber
            v-model="fields.third"
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Quantity"
            loading
          />
          <BaseInputNumber
            v-model="fields.sixth"
            icon="lucide:star"
            size="lg"
            rounded="md"
            label="Size: lg"
            placeholder="Quantity"
            loading
          />
          <BaseInputNumber
            v-model="fields.third"
            size="xl"
            rounded="md"
            label="Size: xl"
            placeholder="Quantity"
            loading
          />
          <BaseInputNumber
            v-model="fields.sixth"
            icon="lucide:star"
            size="xl"
            rounded="md"
            label="Size: xl"
            placeholder="Quantity"
            loading
          />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
