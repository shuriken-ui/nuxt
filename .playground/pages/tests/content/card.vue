<script setup lang="ts">
definePageMeta({
  title: 'Card',
  icon: 'lucide:crop',
  description: 'SVG icons',
  section: 'content',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Card Shape
      </BaseHeading>
      <div class="grid grid-cols-4 gap-2">
        <BaseCard class="p-6" shape="straight">
          <BaseHeading>I am a Card</BaseHeading>
          <BaseParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>
        <BaseCard class="p-6" shape="rounded">
          <BaseHeading>I am a Card</BaseHeading>
          <BaseParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>
        <BaseCard class="p-6" shape="smooth">
          <BaseHeading>I am a Card</BaseHeading>
          <BaseParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>
        <BaseCard class="p-6" shape="curved">
          <BaseHeading>I am a Card</BaseHeading>
          <BaseParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Card color
      </BaseHeading>
      <div class="grid grid-cols-5 gap-2">
        <BaseCard class="p-6" shape="rounded" color="white">
          <BaseHeading>I am a Card</BaseHeading>
          <BaseParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>
        <BaseCard class="p-6" shape="rounded" color="white-contrast">
          <BaseHeading>I am a Card</BaseHeading>
          <BaseParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>
        <BaseCard class="p-6" shape="rounded" color="muted">
          <BaseHeading>I am a Card</BaseHeading>
          <BaseParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>
        <BaseCard class="p-6" shape="rounded" color="muted-contrast">
          <BaseHeading>I am a Card</BaseHeading>
          <BaseParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>
        <BaseCard class="p-6" shape="rounded" color="primary">
          <BaseHeading>I am a Card</BaseHeading>
          <BaseParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>
        <BaseCard class="p-6" shape="rounded" color="info">
          <BaseHeading>I am a Card</BaseHeading>
          <BaseParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>
        <BaseCard class="p-6" shape="rounded" color="success">
          <BaseHeading>I am a Card</BaseHeading>
          <BaseParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>
        <BaseCard class="p-6" shape="rounded" color="warning">
          <BaseHeading>I am a Card</BaseHeading>
          <BaseParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>
        <BaseCard class="p-6" shape="rounded" color="danger">
          <BaseHeading>I am a Card</BaseHeading>
          <BaseParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>
        <BaseCard class="p-6" shape="rounded" color="none">
          <BaseHeading>I am a Card</BaseHeading>
          <BaseParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>
      </div>
    </div>
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Card Elevation
      </BaseHeading>
      <div class="grid grid-cols-4 gap-2">
        <BaseCard class="p-6" shape="rounded" elevated>
          <BaseHeading>I am a Card Elevated</BaseHeading>
          <BaseParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>
        <BaseCard class="p-6" shape="rounded" elevated-hover>
          <BaseHeading>I am a Card Elevated on hover</BaseHeading>
          <BaseParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BaseParagraph>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
