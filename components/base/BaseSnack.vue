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
     * The color of snack.
     *
     * @default 'default'
     */
    color?: 'default' | 'default-contrast' | 'muted' | 'muted-contrast'

    /**
     * The size of the snack.
     *
     * @default 'md'
     */
    size?: 'xs' | 'sm' | 'md'

    /**
     * Optional CSS classes to apply to the component inner elements.
     */
    classes?: {
      /**
       * CSS classes to apply to the wrapper element.
       */
      wrapper?: string | string[]

      /**
       * CSS classes to apply to the icon element.
       */
      icon?: string | string[]

      /**
       * CSS classes to apply to the img element.
       */
      img?: string | string[]

      /**
       * CSS classes to apply to the text element.
       */
      text?: string | string[]

      /**
       * CSS classes to apply to the button element.
       */
      button?: string | string[]
    }
  }>(),
  {
    size: undefined,
    color: undefined,
    label: '',
    icon: undefined,
    image: undefined,
    classes: () => ({}),
  },
)

const emit = defineEmits<{
  delete: []
}>()

const color = useNuiDefaultProperty(props, 'BaseSnack', 'color')
const size = useNuiDefaultProperty(props, 'BaseSnack', 'size')

const sizes = {
  xs: 'nui-snack-xs',
  sm: 'nui-snack-sm',
  md: 'nui-snack-md',
}

const colors = {
  'default': 'nui-snack-default',
  'default-contrast': 'nui-snack-default-contrast',
  'muted': 'nui-snack-muted',
  'muted-contrast': 'nui-snack-muted-contrast',
}
</script>

<template>
  <div
    class="nui-snack"
    :class="[
      size && sizes[size],
      color && colors[color],
      props.icon || props.image ? 'nui-has-media' : '',
      props.classes?.wrapper,
    ]"
  >
    <div
      v-if="props.icon && !props.image"
      class="nui-snack-icon"
      :class="props.classes?.icon"
    >
      <slot name="icon">
        <Icon :name="props.icon" class="nui-snack-icon-inner" />
      </slot>
    </div>
    <div
      v-else-if="props.image && !props.icon"
      class="nui-snack-image"
      :class="props.classes?.img"
    >
      <img :src="props.image" class="nui-snack-image-inner" alt="">
    </div>
    <span class="nui-snack-text" :class="props.classes?.text">
      <slot>{{ props.label }}</slot>
    </span>
    <BaseButtonClose
      class="nui-snack-button"
      :class="props.classes?.button"
      rounded="full"
      :size="size"
      @click="emit('delete')"
    />
  </div>
</template>
