<script setup lang="ts">
definePageMeta({
  title: 'Tooltips',
  icon: 'ph:align-center-horizontal-simple-duotone',
  description: 'Add a tooltip to any element.',
  section: 'content',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Tooltips
      </BaseHeading>
    </div>
    <div class="flex gap-2">
      <span
        data-nui-tooltip="default tooltip:&#xa;- test second line&#xa;- test thrid line"
      >
        hover me
      </span>
      <button data-nui-tooltip="default tooltip">focus me</button>
    </div>
    <div class="flex gap-2">
      <span
        data-nui-tooltip-position="down"
        data-nui-tooltip="default tooltip:&#xa;- test second line&#xa;- test thrid line"
      >
        hover me (down)
      </span>
      <button
        data-nui-tooltip-position="down"
        data-nui-tooltip="default tooltip"
      >
        focus me (down)
      </button>
    </div>
    <div class="flex gap-2">
      <span
        data-nui-tooltip-position="start"
        data-nui-tooltip="default tooltip:&#xa;- test second line&#xa;- test thrid line"
      >
        hover me (start)
      </span>
      <button
        data-nui-tooltip-position="start"
        data-nui-tooltip="default tooltip"
      >
        focus me (start)
      </button>
    </div>
    <div class="flex gap-2">
      <span
        data-nui-tooltip-position="end"
        data-nui-tooltip="default tooltip:&#xa;- test second line&#xa;- test thrid line"
      >
        hover me (end)
      </span>
      <button
        data-nui-tooltip-position="end"
        data-nui-tooltip="default tooltip"
      >
        focus me (end)
      </button>
    </div>
  </div>
</template>
