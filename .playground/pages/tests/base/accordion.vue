<script setup lang="ts">
definePageMeta({
  title: 'BaseAccordion',
  icon: 'system-uicons:flip-view',
  description: 'Accordion component',
  section: 'base',
})

const accordion = ref([
  {
    title: 'Accordion Item 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    title: 'Accordion Item 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    title: 'Accordion Item 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
])
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseAccordion">
      <NuiPreview title="Default" description="Default accordion style">
        <div class="md:max-w-lg">
          <BaseAccordion :items="accordion" />
        </div>
      </NuiPreview>

      <NuiPreview title="Exclusive" description="Exclusive accordion style">
        <div class="md:max-w-lg">
          <BaseAccordion :items="accordion" exclusive />
        </div>
      </NuiPreview>

      <NuiPreview title="Rounded" description="Accordion radius options">
        <div class="grid gap-4 md:grid-cols-2 max-w-4xl">
          <BaseAccordion :items="accordion" exclusive rounded="none" />
          <BaseAccordion :items="accordion" exclusive rounded="sm" />
          <BaseAccordion :items="accordion" exclusive rounded="md" />
          <BaseAccordion :items="accordion" exclusive rounded="lg" />
        </div>
      </NuiPreview>

      <NuiPreview title="Dot color" description="Accordion dot color options">
        <div class="grid gap-4 md:grid-cols-2 max-w-4xl">
          <BaseAccordion :items="accordion" exclusive dot-color="primary" />
          <BaseAccordion :items="accordion" exclusive dot-color="success" />
          <BaseAccordion :items="accordion" exclusive dot-color="info" />
          <BaseAccordion :items="accordion" exclusive dot-color="dark" />
        </div>
      </NuiPreview>

      <NuiPreview title="Chevron" description="Chevron accordion style">
        <div class="md:max-w-lg">
          <BaseAccordion :items="accordion" exclusive action="chevron" />
        </div>
      </NuiPreview>

      <NuiPreview title="Plus" description="Plus accordion style">
        <div class="md:max-w-lg">
          <BaseAccordion :items="accordion" exclusive action="plus" />
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
