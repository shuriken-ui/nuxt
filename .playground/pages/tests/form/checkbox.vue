<script setup lang="ts">
definePageMeta({
  title: 'BaseCheckbox',
  icon: 'system-uicons:checkbox-checked',
  description: 'Checkbox component',
  section: 'form',
})

const options = reactive({
  first: true,
  second: true,
  third: true,
  fourth: true,
  fifth: true,
  sixth: true,
  seventh: true,
  eighth: true,
  nineth: true,
  tenth: true,
  eleventh: true,
})

const disabledValue = ref(true)
const customValue = ref('not-checked')
const multipleValue = ref(['Option 1', 'Option 2'])

const value = ref([])

function reset() {
  value.value = []
}
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseCheckbox">
      <NuiPreview
        title="Rounded: none"
        description="Checkbox component none radius"
      >
        <BaseFocusLoop
          class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
        >
          <BaseCheckbox
            v-model="options.first"
            label="Default"
            rounded="none"
          />
          <BaseCheckbox
            v-model="options.second"
            label="Muted"
            rounded="none"
            color="muted"
          />
          <BaseCheckbox
            v-model="options.third"
            label="Primary"
            rounded="none"
            color="primary"
          />
          <BaseCheckbox
            v-model="options.fourth"
            label="Info"
            rounded="none"
            color="info"
          />
          <BaseCheckbox
            v-model="options.fifth"
            label="Success"
            rounded="none"
            color="success"
          />
          <BaseCheckbox
            v-model="options.sixth"
            label="Warning"
            rounded="none"
            color="warning"
          />
          <BaseCheckbox
            v-model="options.seventh"
            label="Danger"
            rounded="none"
            color="danger"
          />
          <BaseCheckbox
            v-model="options.eighth"
            label="Light"
            rounded="none"
            color="light"
          />
          <BaseCheckbox
            v-model="options.nineth"
            label="Dark"
            rounded="none"
            color="dark"
          />
          <BaseCheckbox
            v-model="options.tenth"
            label="Black"
            rounded="none"
            color="black"
          />
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview
        title="Rounded: sm"
        description="Checkbox component sm radius"
      >
        <BaseFocusLoop
          class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
        >
          <BaseCheckbox v-model="options.first" label="Default" rounded="sm" />
          <BaseCheckbox
            v-model="options.second"
            label="Muted"
            rounded="sm"
            color="muted"
          />
          <BaseCheckbox
            v-model="options.third"
            label="Primary"
            rounded="sm"
            color="primary"
          />
          <BaseCheckbox
            v-model="options.fourth"
            label="Info"
            rounded="sm"
            color="info"
          />
          <BaseCheckbox
            v-model="options.fifth"
            label="Success"
            rounded="sm"
            color="success"
          />
          <BaseCheckbox
            v-model="options.sixth"
            label="Warning"
            rounded="sm"
            color="warning"
          />
          <BaseCheckbox
            v-model="options.seventh"
            label="Danger"
            rounded="sm"
            color="danger"
          />
          <BaseCheckbox
            v-model="options.eighth"
            label="Light"
            rounded="sm"
            color="light"
          />
          <BaseCheckbox
            v-model="options.nineth"
            label="Dark"
            rounded="sm"
            color="dark"
          />
          <BaseCheckbox
            v-model="options.tenth"
            label="Black"
            rounded="sm"
            color="black"
          />
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview
        title="Rounded: md"
        description="Checkbox component md radius"
      >
        <BaseFocusLoop
          class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
        >
          <BaseCheckbox v-model="options.first" label="Default" rounded="md" />
          <BaseCheckbox
            v-model="options.second"
            label="Muted"
            rounded="md"
            color="muted"
          />
          <BaseCheckbox
            v-model="options.third"
            label="Primary"
            rounded="md"
            color="primary"
          />
          <BaseCheckbox
            v-model="options.fourth"
            label="Info"
            rounded="md"
            color="info"
          />
          <BaseCheckbox
            v-model="options.fifth"
            label="Success"
            rounded="md"
            color="success"
          />
          <BaseCheckbox
            v-model="options.sixth"
            label="Warning"
            rounded="md"
            color="warning"
          />
          <BaseCheckbox
            v-model="options.seventh"
            label="Danger"
            rounded="md"
            color="danger"
          />
          <BaseCheckbox
            v-model="options.eighth"
            label="Light"
            rounded="md"
            color="light"
          />
          <BaseCheckbox
            v-model="options.nineth"
            label="Dark"
            rounded="md"
            color="dark"
          />
          <BaseCheckbox
            v-model="options.tenth"
            label="Black"
            rounded="md"
            color="black"
          />
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview
        title="Rounded: lg"
        description="Checkbox component lg radius"
      >
        <BaseFocusLoop
          class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
        >
          <BaseCheckbox v-model="options.first" label="Default" rounded="lg" />
          <BaseCheckbox
            v-model="options.second"
            label="Muted"
            rounded="lg"
            color="muted"
          />
          <BaseCheckbox
            v-model="options.third"
            label="Primary"
            rounded="lg"
            color="primary"
          />
          <BaseCheckbox
            v-model="options.fourth"
            label="Info"
            rounded="lg"
            color="info"
          />
          <BaseCheckbox
            v-model="options.fifth"
            label="Success"
            rounded="lg"
            color="success"
          />
          <BaseCheckbox
            v-model="options.sixth"
            label="Warning"
            rounded="lg"
            color="warning"
          />
          <BaseCheckbox
            v-model="options.seventh"
            label="Danger"
            rounded="lg"
            color="danger"
          />
          <BaseCheckbox
            v-model="options.eighth"
            label="Light"
            rounded="lg"
            color="light"
          />
          <BaseCheckbox
            v-model="options.nineth"
            label="Dark"
            rounded="lg"
            color="dark"
          />
          <BaseCheckbox
            v-model="options.tenth"
            label="Black"
            rounded="lg"
            color="black"
          />
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview
        title="Rounded: full"
        description="Checkbox component full radius"
      >
        <BaseFocusLoop
          class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
        >
          <BaseCheckbox
            v-model="options.first"
            label="Default"
            rounded="full"
          />
          <BaseCheckbox
            v-model="options.second"
            label="Muted"
            rounded="full"
            color="muted"
          />
          <BaseCheckbox
            v-model="options.third"
            label="Primary"
            rounded="full"
            color="primary"
          />
          <BaseCheckbox
            v-model="options.fourth"
            label="Info"
            rounded="full"
            color="info"
          />
          <BaseCheckbox
            v-model="options.fifth"
            label="Success"
            rounded="full"
            color="success"
          />
          <BaseCheckbox
            v-model="options.sixth"
            label="Warning"
            rounded="full"
            color="warning"
          />
          <BaseCheckbox
            v-model="options.seventh"
            label="Danger"
            rounded="full"
            color="danger"
          />
          <BaseCheckbox
            v-model="options.eighth"
            label="Light"
            rounded="full"
            color="light"
          />
          <BaseCheckbox
            v-model="options.nineth"
            label="Dark"
            rounded="full"
            color="dark"
          />
          <BaseCheckbox
            v-model="options.tenth"
            label="Black"
            rounded="full"
            color="black"
          />
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview
        title="State: disabled"
        description="Checkbox component disabled state"
      >
        <BaseCheckbox v-model="disabledValue" disabled label="I'm disabled" />
      </NuiPreview>

      <NuiPreview
        title="Value: custom"
        description="Checkbox component custom value"
      >
        <BaseCheckbox
          v-model="customValue"
          name="true-false"
          :label="customValue"
          rounded="full"
          true-value="checked"
          false-value="not-checked"
          color="muted"
        />
      </NuiPreview>

      <NuiPreview
        title="Value: multiple"
        description="Checkbox component multiple values"
      >
        <BaseFocusLoop
          class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
        >
          <BaseCheckbox
            v-model="multipleValue"
            name="multiple-demo-1"
            label="Option 1"
            value="Option 1"
            rounded="lg"
            color="muted"
          />

          <BaseCheckbox
            v-model="multipleValue"
            name="multiple-demo-2"
            label="Option 2"
            value="Option 2"
            rounded="lg"
            color="muted"
          />

          <BaseCheckbox
            v-model="multipleValue"
            name="multiple-demo-3"
            label="Option 3"
            value="Option 3"
            rounded="lg"
            color="muted"
          />

          <BaseCheckbox
            v-model="multipleValue"
            name="multiple-demo-4"
            label="Option 4"
            value="Option 4"
            rounded="lg"
            color="muted"
          />

          <BaseCheckbox
            v-model="multipleValue"
            name="multiple-demo-5"
            label="Option 5"
            value="Option 5"
            rounded="lg"
            color="muted"
          />
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview
        title="Color: custom"
        description="Checkbox component custom colors"
      >
        <BaseFocusLoop
          class="grid grid-cols-2 gap-6 md:max-w-2xl md:grid-cols-4"
        >
          <BaseCheckbox
            v-model="options.first"
            label="Rounded: none"
            rounded="none"
            :classes="{ wrapper: '!text-gray-500' }"
          />

          <BaseCheckbox
            v-model="options.second"
            label="Rounded: none"
            rounded="none"
            :classes="{ wrapper: '!text-emerald-500' }"
          />

          <BaseCheckbox
            v-model="options.third"
            label="Rounded: sm"
            rounded="sm"
            :classes="{ wrapper: '!text-yellow-500' }"
          />

          <BaseCheckbox
            v-model="options.fourth"
            label="Rounded: sm"
            rounded="sm"
            :classes="{ wrapper: '!text-pink-500' }"
          />

          <BaseCheckbox
            v-model="options.fifth"
            label="Rounded: lg"
            rounded="lg"
            :classes="{ wrapper: '!text-indigo-500' }"
          />

          <BaseCheckbox
            v-model="options.sixth"
            label="Rounded: lg"
            rounded="lg"
            :classes="{ wrapper: '!text-primary-500' }"
          />

          <BaseCheckbox
            v-model="options.seventh"
            label="Rounded: full"
            rounded="full"
            :classes="{ wrapper: '!text-amber-500' }"
          />

          <BaseCheckbox
            v-model="options.eighth"
            label="Rounded: full"
            rounded="full"
            :classes="{ wrapper: '!text-rose-500' }"
          />
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview title="Headless" description="Checkbox component headless">
        <div class="w-full max-w-3xl">
          <form class="mx-auto w-full">
            <fieldset class="w-full space-y-6">
              <div
                class="border-muted-200 dark:border-muted-700 flex items-center justify-between border-b py-4"
              >
                <legend
                  class="text-muted-800 dark:text-muted-100 font-sans text-xl font-medium"
                >
                  Select people
                </legend>

                <button
                  type="reset"
                  class="text-primary-500 font-sans text-sm font-medium underline-offset-4 hover:underline"
                  @click.prevent="reset"
                >
                  Cancel
                </button>
              </div>

              <div class="grid gap-6 sm:grid-cols-3">
                <BaseCheckboxHeadless v-model="value" value="team_member_1">
                  <BaseCard
                    rounded="md"
                    class="peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
                  >
                    <div class="flex w-full items-center gap-2">
                      <BaseAvatar
                        src="https://tairo.cssninja.io/img/avatars/10.svg"
                      />

                      <div>
                        <BaseHeading
                          as="h4"
                          size="sm"
                          weight="medium"
                          lead="none"
                        >
                          Kendra Wilson
                        </BaseHeading>

                        <BaseText size="xs" class="text-muted-400">
                          Software Engineer
                        </BaseText>
                      </div>

                      <div class="child text-muted-300 ms-auto">
                        <div class="h-3 w-3 rounded-full bg-current" />
                      </div>
                    </div>
                  </BaseCard>
                </BaseCheckboxHeadless>

                <BaseCheckboxHeadless v-model="value" value="team_member_2">
                  <BaseCard
                    rounded="md"
                    class="peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
                  >
                    <div class="flex w-full items-center gap-2">
                      <BaseAvatar
                        src="https://tairo.cssninja.io/img/avatars/16.svg"
                      />

                      <div>
                        <BaseHeading
                          as="h4"
                          size="sm"
                          weight="medium"
                          lead="none"
                        >
                          Hermann Mayer
                        </BaseHeading>

                        <BaseText size="xs" class="text-muted-400">
                          Sales Manager
                        </BaseText>
                      </div>

                      <div class="child text-muted-300 ms-auto">
                        <div class="h-3 w-3 rounded-full bg-current" />
                      </div>
                    </div>
                  </BaseCard>
                </BaseCheckboxHeadless>

                <BaseCheckboxHeadless v-model="value" value="team_member_3">
                  <BaseCard
                    rounded="md"
                    class="peer-checked:!border-primary-500 peer-checked:[&_.child]:!text-primary-500 border-2 p-4 opacity-50 peer-checked:opacity-100"
                  >
                    <div class="flex w-full items-center gap-2">
                      <BaseAvatar
                        src="https://tairo.cssninja.io/img/avatars/25.svg"
                      />

                      <div>
                        <BaseHeading
                          as="h4"
                          size="sm"
                          weight="medium"
                          lead="none"
                        >
                          Melany Lawright
                        </BaseHeading>

                        <BaseText size="xs" class="text-muted-400">
                          HR Manager
                        </BaseText>
                      </div>

                      <div class="child text-muted-300 ms-auto">
                        <div class="h-3 w-3 rounded-full bg-current" />
                      </div>
                    </div>
                  </BaseCard>
                </BaseCheckboxHeadless>
              </div>
            </fieldset>
          </form>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
