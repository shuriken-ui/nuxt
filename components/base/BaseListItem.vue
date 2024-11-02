<script setup lang="ts">
const props = defineProps<{
  /**
   * The title of the list item.
   */
  title?: string
  /**
   * The subtitle of the list item.
   */
  subtitle?: string
}>()

const slots = useSlots()
const hasTitle = computed(() => {
  return Boolean(props.title || 'title' in slots)
})
const hasSubtitle = computed(() => {
  return Boolean(props.subtitle || 'subtitle' in slots)
})
</script>

<template>
  <li class="nui-list-item">
    <slot />

    <div v-if="hasTitle || hasSubtitle">
      <BaseHeading
        v-if="hasTitle"
        as="h6"
        weight="medium"
        size="md"
        lead="tight"
      >
        <slot name="title">
          {{ props.title }}
        </slot>
      </BaseHeading>
      <BaseParagraph
        v-if="hasSubtitle"
        size="xs"
        class="text-muted-500 dark:text-muted-400"
      >
        <slot name="subtitle">
          {{ props.subtitle }}
        </slot>
      </BaseParagraph>
    </div>

    <div v-if="'end' in $slots" class="ms-auto">
      <slot name="end" />
    </div>
  </li>
</template>
