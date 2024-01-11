<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The type of the message.
     */
    type?:
      | 'default'
      | 'muted'
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
  }>(),
  {
    type: undefined,
    rounded: undefined,
    message: '',
    icon: false,
    closeIcon: 'lucide:x',
  },
)
const emit = defineEmits<{
  close: []
}>()

const type = useNuiDefaultProperty(props, 'BaseMessage', 'type')
const rounded = useNuiDefaultProperty(props, 'BaseMessage', 'rounded')

const radiuses = {
  none: '',
  sm: 'nui-message-rounded',
  md: 'nui-message-smooth',
  lg: 'nui-message-curved',
  full: 'nui-message-full',
} as Record<string, string>

const types = {
  default: 'nui-message-default',
  muted: 'nui-message-muted',
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
  typeof props.icon === 'string' ? props.icon : iconTypes[type.value],
)
</script>

<template>
  <div
    class="nui-message"
    :class="[rounded && radiuses[rounded], type && types[type]]"
  >
    <div v-if="props.icon" class="nui-message-icon-outer">
      <slot name="icon" icon-name="icon">
        <Icon v-if="icon" :name="icon" class="nui-message-icon" />
      </slot>
    </div>
    <span class="nui-message-inner-text">
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
