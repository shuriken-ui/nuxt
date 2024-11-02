<script setup lang="ts">
definePageMeta({
  title: 'Typography',
  icon: 'system-uicons:paragraph-left',
  description: 'Text components',
  section: 'authority',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="Typography">
      <NuiPreview title="BaseHeading" description="Heading component">
        <BaseHeading
          as="h2"
          size="3xl"
          weight="extrabold"
          class="text-muted-800 dark:text-white"
        >
          A huge heading
        </BaseHeading>
        <BaseHeading
          as="h3"
          size="2xl"
          weight="bold"
          class="text-muted-800 dark:text-white"
        >
          A bold and very large heading
        </BaseHeading>
        <BaseHeading
          as="h4"
          size="lg"
          weight="semibold"
          class="text-muted-800 dark:text-white"
        >
          A smaller and less thicker heading
        </BaseHeading>
        <BaseHeading as="h5" size="md" weight="medium" class="text-muted-400">
          Smaller and using another color
        </BaseHeading>
      </NuiPreview>

      <NuiPreview title="BaseParagraph" description="Paragraph component">
        <div class="grid gap-6 md:grid-cols-2">
          <div class="flex flex-col">
            <BaseParagraph class="text-muted-400 dark:text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim
              Polemonis. Duo Reges: constructio interrete. Philosophi autem in
              suis lectulis plerumque moriuntur.
            </BaseParagraph>
          </div>

          <div class="flex flex-col space-y-2">
            <BaseParagraph size="sm" class="text-muted-400 dark:text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim
              Polemonis. Duo Reges: constructio interrete. Philosophi autem in
              suis lectulis plerumque moriuntur.
            </BaseParagraph>

            <BaseParagraph size="xs" weight="semibold" class="text-success-500">
              Any text can have a different color
            </BaseParagraph>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="BaseText" description="Text component">
        <div class="grid gap-6 md:grid-cols-2">
          <div class="flex flex-col">
            <BaseText class="text-muted-500 dark:text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim
              Polemonis. Duo Reges: constructio interrete. Philosophi autem in
              suis lectulis plerumque moriuntur.
            </BaseText>
          </div>

          <div class="flex flex-col space-y-2">
            <BaseText size="sm" class="text-muted-400 dark:text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim
              Polemonis. Duo Reges: constructio interrete. Philosophi autem in
              suis lectulis plerumque moriuntur.
            </BaseText>

            <BaseText size="xs" weight="medium" class="text-success-500">
              Any text can have a different color
            </BaseText>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview title="BaseLink" description="Link component">
        <BaseLink href="https://www.google.com" target="_blank">
          This is a link
        </BaseLink>
      </NuiPreview>

      <NuiPreview title="NuiMark" description="Marked text component">
        <mark class="nui-mark">Iam a marked text</mark>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
