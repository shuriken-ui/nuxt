<script setup lang="ts">
definePageMeta({
  title: 'BaseCard',
  icon: 'system-uicons:panel-top',
  description: 'Card component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseCard">
      <NuiPreview title="Radius" description="Card component radiuses">
        <div class="grid gap-4 md:grid-cols-2 max-w-3xl">
          <BaseCard rounded="none" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="sm" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="lg" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>
        </div>
      </NuiPreview>

      <NuiPreview title="Contrast" description="Card component contrasts">
        <div class="grid gap-4 md:grid-cols-2 max-w-3xl">
          <BaseCard color="default" rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="default-contrast" rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="muted" rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="muted-contrast" rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>
        </div>
      </NuiPreview>

      <NuiPreview title="Color" description="Card component colors">
        <div class="grid gap-4 md:grid-cols-2 max-w-3xl">
          <BaseCard color="default" rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="primary" rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="info" rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="success" rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="warning" rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="danger" rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="dark" rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="dark:text-muted-800 mb-2 text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard color="black" rounded="md" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="dark:text-muted-800 mb-2 text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Shadow: flat"
        description="Card component flat shadows"
      >
        <div class="grid gap-4 md:grid-cols-2 max-w-3xl">
          <BaseCard rounded="none" shadow="flat" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="sm" shadow="flat" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="md" shadow="flat" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="lg" shadow="flat" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Shadow: hover"
        description="Card component hover shadows"
      >
        <div class="grid gap-4 md:grid-cols-2 max-w-3xl">
          <BaseCard rounded="none" shadow="hover" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="sm" shadow="hover" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="md" shadow="hover" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>

          <BaseCard rounded="lg" shadow="hover" class="p-6">
            <BaseHeading
              as="h4"
              size="sm"
              weight="semibold"
              lead="tight"
              class="text-muted-800 mb-2 dark:text-white"
            >
              Iam a card
            </BaseHeading>

            <BaseParagraph size="sm" lead="tight" class="text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </BaseParagraph>
          </BaseCard>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
