<script setup lang="ts">
definePageMeta({
  title: 'BaseSwitch',
  icon: 'system-uicons:toggle',
  description: 'Select component',
  section: 'form',
})

const thinValues = reactive({
  primary: true,
  info: true,
  success: true,
  warning: true,
  danger: true,
  dark: true,
  black: true,
})

const ballValues = reactive({
  primary: true,
  info: true,
  success: true,
  warning: true,
  danger: true,
  dark: true,
  black: true,
})

const thinSublabelValue = ref(true)
const ballSublabelValue = ref(true)
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseSwitch">
      <NuiPreview title="Thin: default" description="Switch thin component">
        <BaseFocusLoop
          class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
        >
          <BaseSwitchThin
            v-model="thinValues.primary"
            label="Primary"
            color="primary"
          />
          <BaseSwitchThin v-model="thinValues.info" label="Info" color="info" />
          <BaseSwitchThin
            v-model="thinValues.success"
            label="Success"
            color="success"
          />
          <BaseSwitchThin
            v-model="thinValues.warning"
            label="Warning"
            color="warning"
          />
          <BaseSwitchThin
            v-model="thinValues.danger"
            label="Danger"
            color="danger"
          />
          <BaseSwitchThin v-model="thinValues.dark" label="Dark" color="dark" />
          <BaseSwitchThin
            v-model="thinValues.black"
            label="Black"
            color="black"
          />
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview title="Thin: sublabel" description="Switch thin sublabel">
        <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseSwitchThin
            v-model="thinSublabelValue"
            label="Primary"
            sublabel="This is a primary switch"
            color="primary"
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Ball: default" description="Switch thin component">
        <BaseFocusLoop
          class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-4"
        >
          <BaseSwitchBall
            v-model="ballValues.primary"
            label="Primary"
            color="primary"
          />
          <BaseSwitchBall v-model="ballValues.info" label="Info" color="info" />
          <BaseSwitchBall
            v-model="ballValues.success"
            label="Success"
            color="success"
          />
          <BaseSwitchBall
            v-model="ballValues.warning"
            label="Warning"
            color="warning"
          />
          <BaseSwitchBall
            v-model="ballValues.danger"
            label="Danger"
            color="danger"
          />
          <BaseSwitchBall
            v-model="ballValues.dark"
            label="Darning"
            color="dark"
          />
          <BaseSwitchBall
            v-model="ballValues.black"
            label="Black"
            color="black"
          />
        </BaseFocusLoop>
      </NuiPreview>

      <NuiPreview title="Ball: sublabel" description="Switch thin sublabel">
        <div class="grid gap-6 md:max-w-lg md:grid-cols-2">
          <BaseSwitchBall
            v-model="ballSublabelValue"
            label="Primary"
            sublabel="This is a primary switch"
            color="primary"
          />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
