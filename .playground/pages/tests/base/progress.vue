<script setup lang="ts">
definePageMeta({
  title: 'BaseProgress',
  icon: 'system-uicons:reset-temporary',
  description: 'Progress component',
  section: 'base',
})

const progress = ref(25)
const progressCircle = ref(25)
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseProgress">
      <NuiPreview title="Bar" description="Progress component bar">
        <div class="max-w-xs space-y-4">
          <BaseProgress
            title="Default progress bar"
            size="sm"
            :value="progress"
            color="primary"
          />
          <div class="flex justify-between gap-2">
            <BaseButtonAction
              :class="
                progress === 25 && '!border-primary-500 !text-primary-500'
              "
              @click="progress = 25"
            >
              25%
            </BaseButtonAction>
            <BaseButtonAction
              :class="
                progress === 50 && '!border-primary-500 !text-primary-500'
              "
              @click="progress = 50"
            >
              50%
            </BaseButtonAction>
            <BaseButtonAction
              :class="
                progress === 75 && '!border-primary-500 !text-primary-500'
              "
              @click="progress = 75"
            >
              75%
            </BaseButtonAction>
            <BaseButtonAction
              :class="
                progress === 100 && '!border-primary-500 !text-primary-500'
              "
              @click="progress = 100"
            >
              100%
            </BaseButtonAction>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Circle" description="Progress component circle">
        <div class="max-w-xs space-y-4">
          <div class="flex items-end gap-2">
            <BaseProgressCircle
              title="Primary circle progress bar"
              :size="35"
              :value="progressCircle"
              color="dark"
            />
            <BaseProgressCircle
              title="Primary circle progress bar"
              :size="45"
              :value="progressCircle"
              class="text-primary-500"
            />
            <BaseProgressCircle
              title="Yellow circle progress bar"
              :size="55"
              :value="progressCircle"
              class="text-yellow-500"
            />
            <BaseProgressCircle
              title="Pink circle progress bar"
              :size="75"
              :value="progressCircle"
              class="text-pink-500"
            />
            <BaseProgressCircle
              title="Indigo circle progress bar"
              :size="85"
              :value="progressCircle"
              class="text-indigo-400"
            />
            <BaseProgressCircle
              title="Primary circle progress bar"
              :size="95"
              :value="progressCircle"
              color="black"
            />
          </div>
          <div class="flex justify-between gap-2">
            <BaseButtonAction
              :class="
                progressCircle === 25 && '!border-primary-500 !text-primary-500'
              "
              @click="progressCircle = 25"
            >
              25%
            </BaseButtonAction>
            <BaseButtonAction
              :class="
                progressCircle === 50 && '!border-primary-500 !text-primary-500'
              "
              @click="progressCircle = 50"
            >
              50%
            </BaseButtonAction>
            <BaseButtonAction
              :class="
                progressCircle === 75 && '!border-primary-500 !text-primary-500'
              "
              @click="progressCircle = 75"
            >
              75%
            </BaseButtonAction>
            <BaseButtonAction
              :class="
                progressCircle === 100
                  && '!border-primary-500 !text-primary-500'
              "
              @click="progressCircle = 100"
            >
              100%
            </BaseButtonAction>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="Bar: size" description="Progress component bar sizes">
        <div class="max-w-xs space-y-4">
          <BaseProgress
            title="xs progress bar"
            size="xs"
            :value="78"
            color="primary"
          />
          <BaseProgress
            title="sm progress bar"
            size="sm"
            :value="78"
            color="primary"
          />
          <BaseProgress
            title="md progress bar"
            size="md"
            :value="78"
            color="primary"
          />
          <BaseProgress
            title="lg progress bar"
            size="lg"
            :value="78"
            color="primary"
          />
          <BaseProgress
            title="xl progress bar"
            size="xl"
            :value="78"
            color="primary"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Bar: color"
        description="Progress component bar colors"
      >
        <div class="max-w-xs space-y-4">
          <BaseProgress
            title="primary progress bar"
            size="sm"
            :value="78"
            color="primary"
          />
          <BaseProgress
            title="success progress bar"
            size="sm"
            :value="78"
            color="success"
          />
          <BaseProgress
            title="info progress bar"
            size="sm"
            :value="78"
            color="info"
          />
          <BaseProgress
            title="warning progress bar"
            size="sm"
            :value="78"
            color="warning"
          />
          <BaseProgress
            title="danger progress bar"
            size="sm"
            :value="78"
            color="danger"
          />
          <BaseProgress
            title="dark progress bar"
            size="sm"
            :value="78"
            color="dark"
          />
          <BaseProgress
            title="black progress bar"
            size="sm"
            :value="78"
            color="black"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Bar: indeterminate"
        description="Progress component bar indeterminate"
      >
        <div class="max-w-xs space-y-4">
          <BaseProgress
            title="indeterminate primary progress bar"
            size="sm"
            color="primary"
          />
          <BaseProgress
            title="indeterminate success progress bar"
            size="sm"
            color="success"
          />
          <BaseProgress
            title="indeterminate info progress bar"
            size="sm"
            color="info"
          />
          <BaseProgress
            title="indeterminate warning progress bar"
            size="sm"
            color="warning"
          />
          <BaseProgress
            title="indeterminate danger progress bar"
            size="sm"
            color="danger"
          />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
