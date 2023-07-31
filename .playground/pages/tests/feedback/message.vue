<script setup lang="ts">
definePageMeta({
  title: 'Message',
  icon: 'solar:notification-unread-lines-broken',
  description: 'Base message component',
  section: 'feedback',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Message Shape
      </BaseHeading>
    </div>
    <div class="grid grid-cols-5 gap-2">
      <BaseMessage
        type="muted"
        shape="straight"
        message="A muted message ..."
        closable
      />
      <BaseMessage
        type="default"
        shape="rounded"
        message="A default message ..."
        closable
      />
      <BaseMessage
        type="primary"
        shape="smooth"
        message="A primary message ..."
        closable
      />
      <BaseMessage
        type="default"
        shape="curved"
        message="A default message ..."
        closable
      />
      <BaseMessage
        type="default"
        shape="full"
        message="A default message ..."
        closable
      />
    </div>
  </div>
</template>
