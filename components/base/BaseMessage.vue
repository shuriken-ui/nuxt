<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The color of the message.
     */
    color?:
      | 'default'
      | 'default-contrast'
      | 'muted'
      | 'muted-contrast'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'

    /**
     * The radius of the message.
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

    /**
     * The message to display.
     */
    message?: string

    /**
     * Whether to show an icon, or the name of the icon to display.
     */
    icon?: boolean | string

    /**
     * The icon to show in the close button
     */
    closeIcon?: string

    /**
     * Whether to show a close button.
     */
    closable?: boolean

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
       * CSS classes to apply to the text element.
       */
      text?: string | string[]
    }
  }>(),
  {
    color: undefined,
    rounded: undefined,
    message: '',
    icon: false,
    closeIcon: 'lucide:x',
    classes: () => ({}),
  },
)
const emit = defineEmits<{
  close: []
}>()

const color = useNuiDefaultProperty(props, 'BaseMessage', 'color')
const rounded = useNuiDefaultProperty(props, 'BaseMessage', 'rounded')

const radiuses = {
  none: '',
  sm: 'nui-message-rounded-sm',
  md: 'nui-message-rounded-md',
  lg: 'nui-message-rounded-lg',
  full: 'nui-message-rounded-full',
} as Record<string, string>

const colors = {
  default: 'nui-message-default',
  'default-contrast': 'nui-message-default-contrast',
  muted: 'nui-message-muted',
  'muted-contrast': 'nui-message-muted-contrast',
  primary: 'nui-message-primary',
  info: 'nui-message-info',
  success: 'nui-message-success',
  warning: 'nui-message-warning',
  danger: 'nui-message-danger',
} as Record<string, string>

const iconTypes = {
  info: 'akar-icons:info-fill',
  warning: 'ci:warning',
  danger: 'ph:warning-octagon-fill',
  success: 'carbon:checkmark-filled',
  primary: '',
  muted: '',
  default: '',
} as Record<string, string>

const icon = computed(() =>
  typeof props.icon === 'string'
    ? props.icon
    : color.value
      ? iconTypes[color.value]
      : '',
)
</script>

<template>
  <div
    class="nui-message"
    :class="[
      rounded && radiuses[rounded],
      color && colors[color],
      classes?.wrapper,
    ]"
  >
    <div
      v-if="props.icon"
      class="nui-message-icon-outer"
      :class="classes?.icon"
    >
      <slot name="icon" icon-name="icon">
        <Icon v-if="icon" :name="icon" class="nui-message-icon" />
      </slot>
    </div>
    <span class="nui-message-inner-text" :class="classes?.text">
      <slot>{{ props.message }}</slot>
    </span>
    <button
      v-if="props.closable"
      type="button"
      tabindex="0"
      class="nui-message-close"
      :class="[rounded && radiuses[rounded]]"
      @click="emit('close')"
    >
      <slot name="close-button">
        <Icon :name="closeIcon" class="nui-close-icon" />
      </slot>
    </button>
  </div>
</template>
