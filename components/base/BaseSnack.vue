<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The text to display in the snackbar.
     */
    label?: string

    /**
     * An optional icon to display in the snackbar.
     */
    icon?: string

    /**
     * An optional image to display in the snackbar.
     */
    image?: string

    /**
     * The size of the snack.
     */
    size?: 'sm' | 'md'

    /**
     * The kind of snack, might be 'default' or 'muted'.
     */
    kind?: 'default' | 'muted'
  }>(),
  {
    label: '',
    icon: undefined,
    image: undefined,
    size: 'md',
    kind: 'default',
  }
)

const emit = defineEmits(['delete'])
const sizeStyle = {
  sm: 'nui-snack-sm',
  md: 'nui-snack-md',
}
const kindStyle = {
  default: 'nui-snack-default',
  muted: 'nui-snack-muted',
}
</script>

<template>
  <div
    class="nui-snack"
    :class="[
      sizeStyle[props.size],
      kindStyle[props.kind],
      props.icon || props.image ? 'nui-has-media' : '',
    ]"
  >
    <div v-if="props.icon && !props.image" class="nui-snack-icon">
      <Icon :name="props.icon" class="nui-snack-icon-inner" />
    </div>
    <div v-else-if="props.image && !props.icon" class="nui-snack-image">
      <img :src="props.image" class="nui-snack-image-inner" alt="" />
    </div>
    <span class="nui-snack-text">
      <slot>{{ props.label }}</slot>
    </span>
    <BaseButtonClose
      class="nui-snack-button"
      shape="full"
      @click="emit('delete')"
    />
  </div>
</template>
