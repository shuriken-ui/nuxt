<script setup lang="ts">
definePageMeta({
  title: 'Buttons',
  icon: 'lucide:cpu',
  description: 'Button variations',
  section: 'content',
})

const value1 = ref('')
const value2 = ref('')
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Button condensed
      </BaseHeading>
      <div class="flex gap-2">
        <div class="flex gap-2">
          <BaseInput
            v-model="value1"
            condensed
            placeholder="Condensed input..."
          />
          <BaseButton condensed color="primary">Button</BaseButton>
        </div>
        <div class="flex gap-2">
          <BaseInput
            v-model="value2"
            condensed
            placeholder="Condensed input..."
            icon="lucide:search"
          />
          <BaseButton condensed color="primary">
            <span>Button</span>
            <Icon name="lucide:arrow-right" class="w-3 h-3" />
          </BaseButton>
        </div>
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Button shadow
      </BaseHeading>
      <div class="flex gap-2">
        <BaseButton shadow="flat">Button</BaseButton>
        <BaseButton color="muted" shadow="flat">Button</BaseButton>
        <BaseButton color="primary" shadow="flat">Button</BaseButton>
        <BaseButton color="success" shadow="flat">Button</BaseButton>
        <BaseButton color="info" shadow="flat">Button</BaseButton>
        <BaseButton color="warning" shadow="flat">Button</BaseButton>
        <BaseButton color="danger" shadow="flat">Button</BaseButton>
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Button shadow hover
      </BaseHeading>
      <div class="flex gap-2">
        <BaseButton shadow="hover">Button</BaseButton>
        <BaseButton color="muted" shadow="hover">Button</BaseButton>
        <BaseButton color="primary" shadow="hover">Button</BaseButton>
        <BaseButton color="success" shadow="hover">Button</BaseButton>
        <BaseButton color="info" shadow="hover">Button</BaseButton>
        <BaseButton color="warning" shadow="hover">Button</BaseButton>
        <BaseButton color="danger" shadow="hover">Button</BaseButton>
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Button icon default
      </BaseHeading>
      <div class="flex gap-2">
        <BaseButtonIcon shape="straight">
          <Icon name="ph:moon-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="rounded">
          <Icon name="ph:github-logo-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="curved">
          <Icon name="ph:game-controller-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="full">
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Button icon primary
      </BaseHeading>
      <div class="flex gap-2">
        <BaseButtonIcon shape="straight" color="primary">
          <Icon name="ph:moon-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="rounded" color="primary">
          <Icon name="ph:github-logo-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="curved" color="primary">
          <Icon name="ph:game-controller-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="full" color="primary">
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Button icon muted
      </BaseHeading>
      <div class="flex gap-2">
        <BaseButtonIcon shape="straight" color="muted">
          <Icon name="ph:moon-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="rounded" color="muted">
          <Icon name="ph:github-logo-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="curved" color="muted">
          <Icon name="ph:game-controller-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="full" color="muted">
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Button icon default condensed
      </BaseHeading>
      <div class="flex gap-2">
        <BaseButtonIcon shape="straight" condensed>
          <Icon name="ph:moon-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="rounded" condensed>
          <Icon name="ph:github-logo-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="curved" condensed>
          <Icon name="ph:game-controller-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="full" condensed>
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Button icon primary condensed
      </BaseHeading>
      <div class="flex gap-2">
        <BaseButtonIcon shape="straight" color="primary" condensed>
          <Icon name="ph:moon-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="rounded" color="primary" condensed>
          <Icon name="ph:github-logo-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="curved" color="primary" condensed>
          <Icon name="ph:game-controller-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="full" color="primary" condensed>
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Button icon muted condensed
      </BaseHeading>
      <div class="flex gap-2">
        <BaseButtonIcon shape="straight" color="muted" condensed>
          <Icon name="ph:moon-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="rounded" color="muted" condensed>
          <Icon name="ph:github-logo-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="curved" color="muted" condensed>
          <Icon name="ph:game-controller-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon shape="full" color="muted" condensed>
          <Icon name="ph:heart-duotone" class="w-5 h-5" />
        </BaseButtonIcon>
      </div>
    </div>
  </div>
</template>
