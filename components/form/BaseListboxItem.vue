<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The values to display in the component.
     */
    value?: {
      /**
       * Internal value of the item.
       */
      value?: any

      /**
       * Optional label to display instead of the value.
       */
      label?: string

      /**
       * Optional sublabel to display for the item.
       */
      sublabel?: string

      /**
       * Optional media (such as an image URL) to display for the item.
       */
      media?: string

      /**
       * Optional icon to display for the item.
       */
      icon?: string
    }

    /**
     * The icon to show when the component is selected.
     */
    selectedIcon?: string

    /**
     * Whether the item is focus/hover or not.
     */
    active?: boolean

    /**
     * Whether the item is selected or not.
     */
    selected?: boolean
  }>(),
  {
    selectedIcon: 'lucide:check',
    value: () => ({}),
  },
)
</script>

<template>
  <BaseAvatar v-if="props.value.media" :src="props.value.media" size="xs" />
  <BaseIconBox
    v-else-if="props.value.icon"
    size="sm"
    rounded="sm"
    class="!me-0 !bg-transparent"
  >
    <Icon
      :name="props.value.icon"
      class="text-muted-400 group-hover/nui-listbox-option:text-primary-500 size-5 transition-colors duration-200"
    />
  </BaseIconBox>

  <div class="nui-listbox-option-inner">
    <BaseHeading
      as="h4"
      :weight="selected ? 'semibold' : 'normal'"
      size="sm"
      class="nui-listbox-heading"
    >
      {{ props.value.label ? props.value.label : props.value.value }}
    </BaseHeading>
    <BaseText v-if="props.value.sublabel" size="xs" class="nui-listbox-text">
      {{ props.value.sublabel }}
    </BaseText>
  </div>
  <span v-if="selected" class="nui-listbox-selected-icon">
    <Icon :name="selectedIcon" class="nui-listbobx-selected-icon-inner" />
  </span>
</template>
