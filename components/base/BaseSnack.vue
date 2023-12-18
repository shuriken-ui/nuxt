<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The size of the snack.
     *
     * @default 'md'
     */
    size?: 'xs' | 'sm' | 'md'

    /**
     * The color of snack.
     *
     * @default 'muted'
     */
    color?: 'default' | 'muted'

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
  }>(),
  {
    size: undefined,
    color: undefined,
    label: '',
    icon: undefined,
    image: undefined,
  },
)

const emit = defineEmits<{
  delete: []
}>()

const size = useNuiDefaultProperty(props, 'BaseSnack', 'size')
const color = useNuiDefaultProperty(props, 'BaseSnack', 'color')

const sizes = {
  xs: 'nui-snack-xs',
  sm: 'nui-snack-sm',
  md: 'nui-snack-md',
} as Record<string, string>

const colors = {
  default: 'nui-snack-default',
  muted: 'nui-snack-muted',
} as Record<string, string>

const closeSize = computed(() => {
  switch (size.value) {
    case 'xs': {
      return 'xs'
    }
    case 'sm': {
      return 'sm'
    }
    case 'md': {
      return 'md'
    }
    default: {
      return 'md'
    }
  }
})
</script>

<template>
  <div
    class="nui-snack"
    :class="[
      size && sizes[size],
      color && colors[color],
      props.icon || props.image ? 'nui-has-media' : '',
    ]"
  >
    <div v-if="props.icon && !props.image" class="nui-snack-icon">
      <slot name="icon">
        <Icon :name="props.icon" class="nui-snack-icon-inner" />
      </slot>
    </div>
    <div v-else-if="props.image && !props.icon" class="nui-snack-image">
      <img :src="props.image" class="nui-snack-image-inner" alt="" />
    </div>
    <span class="nui-snack-text">
      <slot>{{ props.label }}</slot>
    </span>
    <BaseButtonClose
      class="nui-snack-button"
      rounded="full"
      :size="closeSize"
      @click="emit('delete')"
    />
  </div>
</template>
