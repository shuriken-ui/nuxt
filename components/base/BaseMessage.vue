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
     * The shape of the message.
     */
    shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'

    /**
     * The message to display.
     */
    message?: string

    /**
     * Whether to show an icon, or the name of the icon to display.
     */
    icon?: boolean | string

    /**
     * Whether to show a close button.
     */
    closable?: boolean

    /**
     * The icon to show in the close button
     */
    closeIcon?: string
  }>(),
  {
    type: 'success',
    shape: undefined,
    message: '',
    icon: false,
    closable: false,
    closeIcon: 'lucide:x',
  },
)
const emit = defineEmits<{
  (event: 'close'): void
}>()
const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.message,
)

const shapeStyle = {
  straight: '',
  rounded: 'nui-message-rounded',
  smooth: 'nui-message-smooth',
  curved: 'nui-message-curved',
  full: 'nui-message-full',
}
const typeStyle = {
  default: 'nui-message-default',
  muted: 'nui-message-muted',
  primary: 'nui-message-primary',
  info: 'nui-message-info',
  success: 'nui-message-success',
  warning: 'nui-message-warning',
  danger: 'nui-message-danger',
}
const iconTypeStyle = {
  info: 'akar-icons:info-fill',
  warning: 'ci:warning',
  danger: 'ph:warning-octagon-fill',
  success: 'carbon:checkmark-filled',
  primary: '',
  muted: '',
  default: '',
}

const icon = computed(() =>
  typeof props.icon === 'string' ? props.icon : iconTypeStyle[props.type],
)
</script>

<template>
  <div
    class="nui-message"
    :class="[shape && shapeStyle[shape], typeStyle[props.type]]"
  >
    <div v-if="props.icon" class="nui-message-icon-outer">
      <Icon v-if="icon" :name="icon" class="nui-message-icon" />
    </div>
    <span class="nui-message-inner-text">
      <slot>{{ props.message }}</slot>
    </span>
    <button
      v-if="props.closable"
      type="button"
      tabindex="0"
      class="nui-message-close"
      :class="[shape && shapeStyle[shape]]"
      @click="emit('close')"
    >
      <slot name="close-button">
        <Icon :name="closeIcon" class="nui-close-icon" />
      </slot>
    </button>
  </div>
</template>
