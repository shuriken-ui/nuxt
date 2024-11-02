<script setup lang="ts">
definePageMeta({
  title: 'BaseRadio',
  icon: 'system-uicons:record',
  description: 'Radio component',
  section: 'form',
})

const value = ref('primary')
const customValue = ref('pink')
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseRadio">
      <NuiPreview title="Color" description="Radio component colors">
        <div class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
          <BaseRadio
            v-model="value"
            name="checkbox_base"
            label="default"
            value="default"
          />
          <BaseRadio
            v-model="value"
            name="checkbox_base"
            label="primary"
            value="primary"
            color="primary"
          />
          <BaseRadio
            v-model="value"
            name="checkbox_base"
            value="muted"
            label="muted"
            color="muted"
          />
          <BaseRadio
            v-model="value"
            name="checkbox_base"
            value="info"
            label="info"
            color="info"
          />
          <BaseRadio
            v-model="value"
            name="checkbox_base"
            value="success"
            label="success"
            color="success"
          />
          <BaseRadio
            v-model="value"
            name="checkbox_base"
            value="warning"
            label="warning"
            color="warning"
          />
          <BaseRadio
            v-model="value"
            name="checkbox_base"
            value="danger"
            label="danger"
            color="danger"
          />
          <BaseRadio
            v-model="value"
            name="checkbox_base"
            value="light"
            label="light"
            color="light"
          />
          <BaseRadio
            v-model="value"
            name="checkbox_base"
            value="dark"
            label="dark"
            color="dark"
          />
          <BaseRadio
            v-model="value"
            name="checkbox_base"
            value="black"
            label="black"
            color="black"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Custom" description="Radio component custom colors">
        <div class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4">
          <BaseRadio
            v-model="customValue"
            name="checkbox_colors"
            label="indigo"
            value="indigo"
            :classes="{
              wrapper: '!text-indigo-500',
            }"
          />
          <BaseRadio
            v-model="customValue"
            name="checkbox_colors"
            label="lime"
            value="lime"
            :classes="{ wrapper: '!text-lime-500' }"
          />
          <BaseRadio
            v-model="customValue"
            name="checkbox_colors"
            label="pink"
            value="pink"
            :classes="{ wrapper: '!text-pink-500' }"
          />
          <BaseRadio
            v-model="customValue"
            name="checkbox_colors"
            label="sky"
            value="sky"
            :classes="{ wrapper: '!text-sky-500' }"
          />
          <BaseRadio
            v-model="customValue"
            name="checkbox_colors"
            label="yellow"
            value="yellow"
            :classes="{ wrapper: '!text-yellow-500' }"
          />
          <BaseRadio
            v-model="customValue"
            name="checkbox_colors"
            label="purple"
            value="purple"
            :classes="{ wrapper: '!text-purple-500' }"
          />
          <BaseRadio
            v-model="customValue"
            name="checkbox_colors"
            label="green"
            value="green"
            :classes="{ wrapper: '!text-green-500' }"
          />
          <BaseRadio
            v-model="customValue"
            name="checkbox_colors"
            label="fuchsia"
            value="fuchsia"
            :classes="{ wrapper: '!text-fuchsia-500' }"
          />
          <BaseRadio
            v-model="customValue"
            name="checkbox_colors"
            label="rose"
            value="rose"
            :classes="{
              wrapper: '!text-rose-500',
            }"
          />
          <BaseRadio
            v-model="customValue"
            name="checkbox_colors"
            label="blue"
            value="blue"
            :classes="{
              wrapper: '!text-blue-500',
            }"
          />
          <BaseRadio
            v-model="customValue"
            name="checkbox_colors"
            label="orange"
            value="orange"
            :classes="{
              wrapper: '!text-orange-500',
            }"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Headless" description="Radio component headless">
        <div class="flex w-full max-w-4xl items-end gap-6">
          <form class="mx-auto w-full">
            <fieldset class="w-full space-y-6">
              <div
                class="border-muted-200 dark:border-muted-700 flex items-center justify-between border-b py-4"
              >
                <legend
                  class="text-muted-800 dark:text-muted-100 font-sans text-xl font-medium"
                >
                  Change Plan
                </legend>
                <NuxtLink
                  to="#"
                  class="text-primary-500 font-sans text-sm font-medium underline-offset-4 hover:underline"
                >
                  Cancel your plan
                </NuxtLink>
              </div>
              <div class="grid gap-6 sm:grid-cols-4">
                <BaseRadioHeadless
                  v-model="value"
                  name="radio_custom"
                  value="value_1"
                >
                  <BaseCard
                    rounded="lg"
                    class="peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
                  >
                    <div class="flex flex-col">
                      <h4
                        class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"
                      >
                        Starter
                      </h4>
                      <h3
                        class="text-muted-800 dark:text-muted-100 font-sans font-bold"
                      >
                        <span class="text-4xl">1</span>
                        <span class="text-2xl uppercase">GB</span>
                      </h3>
                      <div class="font-sans">
                        <span
                          class="text-muted-800 dark:text-muted-100 text-xl font-bold"
                        >
                          $5
                        </span>
                        <span
                          class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                        >
                          /month
                        </span>
                      </div>
                    </div>
                    <div class="child absolute end-2 top-3 opacity-0">
                      <Icon
                        name="ph:check-circle-duotone"
                        class="text-success-500 h-7 w-7"
                      />
                    </div>
                  </BaseCard>
                </BaseRadioHeadless>
                <BaseRadioHeadless
                  v-model="value"
                  name="radio_custom"
                  value="value_2"
                >
                  <BaseCard
                    rounded="lg"
                    class="peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
                  >
                    <div class="flex flex-col">
                      <h4
                        class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"
                      >
                        Freelancer
                      </h4>
                      <h3
                        class="text-muted-800 dark:text-muted-100 font-sans font-bold"
                      >
                        <span class="text-4xl">5</span>
                        <span class="text-2xl uppercase">GB</span>
                      </h3>
                      <div class="font-sans">
                        <span
                          class="text-muted-800 dark:text-muted-100 text-xl font-bold"
                        >
                          $10
                        </span>
                        <span
                          class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                        >
                          /month
                        </span>
                      </div>
                    </div>
                    <div class="child absolute end-2 top-3 opacity-0">
                      <Icon
                        name="ph:check-circle-duotone"
                        class="text-success-500 h-7 w-7"
                      />
                    </div>
                  </BaseCard>
                </BaseRadioHeadless>
                <BaseRadioHeadless
                  v-model="value"
                  name="radio_custom"
                  value="value_3"
                >
                  <BaseCard
                    rounded="lg"
                    class="peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
                  >
                    <div class="flex flex-col">
                      <h4
                        class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"
                      >
                        Business
                      </h4>
                      <h3
                        class="text-muted-800 dark:text-muted-100 font-sans font-bold"
                      >
                        <span class="text-4xl">10</span>
                        <span class="text-2xl uppercase">GB</span>
                      </h3>
                      <div class="font-sans">
                        <span
                          class="text-muted-800 dark:text-muted-100 text-xl font-bold"
                        >
                          $15
                        </span>
                        <span
                          class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                        >
                          /month
                        </span>
                      </div>
                    </div>
                    <div class="child absolute end-2 top-3 opacity-0">
                      <Icon
                        name="ph:check-circle-duotone"
                        class="text-success-500 h-7 w-7"
                      />
                    </div>
                  </BaseCard>
                </BaseRadioHeadless>
                <BaseRadioHeadless
                  v-model="value"
                  name="radio_custom"
                  value="value_4"
                >
                  <BaseCard
                    rounded="lg"
                    class="peer-checked:!border-success-500 peer-checked:!bg-success-500/10 relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
                  >
                    <div class="flex flex-col">
                      <h4
                        class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"
                      >
                        Enterprise
                      </h4>
                      <h3
                        class="text-muted-800 dark:text-muted-100 font-sans font-bold"
                      >
                        <span class="text-4xl">20</span>
                        <span class="text-2xl uppercase">GB</span>
                      </h3>
                      <div class="font-sans">
                        <span
                          class="text-muted-800 dark:text-muted-100 text-xl font-bold"
                        >
                          $20
                        </span>
                        <span
                          class="text-muted-500 dark:text-muted-400 text-sm font-medium"
                        >
                          /month
                        </span>
                      </div>
                    </div>
                    <div class="child absolute end-2 top-3 opacity-0">
                      <Icon
                        name="ph:check-circle-duotone"
                        class="text-success-500 h-7 w-7"
                      />
                    </div>
                  </BaseCard>
                </BaseRadioHeadless>
              </div>
            </fieldset>
          </form>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
