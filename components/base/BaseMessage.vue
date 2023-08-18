<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The type of the message.
     */
    type?: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'muted'

    /**
     * The shape of the message.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

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
  }
)
const emit = defineEmits<{
  (event: 'close'): void
}>()
const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.message
)

const iconTypeStyle = {
  info: 'akar-icons:info-fill',
  warning: 'ci:warning',
  danger: 'ph:warning-octagon-fill',
  success: 'carbon:checkmark-filled',
  primary: '',
  muted: '',
}
const messageTypeStyle = {
  primary:
    'bg-primary-100 dark:bg-primary-500/10 border-primary-200 dark:border-primary-700',
  info: 'bg-info-100 dark:bg-info-500/10 border-info-200 dark:border-info-700',
  warning:
    'bg-warning-100 dark:bg-warning-500/10 border-warning-200 dark:border-warning-700',
  danger:
    'bg-danger-100 dark:bg-danger-500/10 border-danger-200 dark:border-danger-700',
  muted:
    'bg-muted-100 dark:bg-muted-500/10 border-muted-200 dark:border-muted-700',
  success:
    'bg-success-100 dark:bg-success-500/10 border-success-200 dark:border-success-700',
}
const buttonTypeStyle = {
  primary:
    'dark:text-primary-500 hover:enabled:bg-primary-300/50 focus-visible:bg-primary-300/50 active:enabled:bg-primary-300/20 dark:hover:enabled:bg-primary-500/30 dark:focus-visible:bg-primary-500/30 dark:active:enabled:bg-primary-500/20',
  info: 'dark:text-info-500 hover:enabled:bg-info-300/50 focus-visible:bg-info-300/50 active:enabled:bg-info-300/20 dark:hover:enabled:bg-info-500/30 dark:focus-visible:bg-info-500/30 dark:active:enabled:bg-info-500/20',
  warning:
    'dark:text-warning-500 hover:enabled:bg-warning-300/50 focus-visible:bg-warning-300/50 active:enabled:bg-warning-300/20 dark:hover:enabled:bg-warning-500/30 dark:focus-visible:bg-warning-500/30 dark:active:enabled:bg-warning-500/20',
  danger:
    'dark:text-danger-500 hover:enabled:bg-danger-300/50 focus-visible:bg-danger-300/50 active:enabled:bg-danger-300/20 dark:hover:enabled:bg-danger-500/30 dark:focus-visible:bg-danger-500/30 dark:active:enabled:bg-danger-500/20',
  muted:
    'dark:text-muted-500 hover:enabled:bg-muted-300/50 focus-visible:bg-muted-300/50 active:enabled:bg-muted-300/20 dark:hover:enabled:bg-muted-500/30 dark:focus-visible:bg-muted-500/30 dark:active:enabled:bg-muted-500/20',
  success:
    'dark:text-success-500 hover:enabled:bg-success-300/50 focus-visible:bg-success-300/50 active:enabled:bg-success-300/20 dark:hover:enabled:bg-success-500/30 dark:focus-visible:bg-success-500/30 dark:active:enabled:bg-success-500/20',
}
  
const shapeStyle = {
  straight: '',
  rounded: 'rounded-md',
  curved: 'rounded-lg',
  full: 'rounded-full',
}
  
const bgTypeStyle = {
  info: 'bg-info-500 dark:bg-info-500/10',
  warning: 'bg-warning-500 dark:bg-warning-500/10',
  danger: 'bg-danger-500 dark:bg-danger-500/10',
  success: 'bg-success-500 dark:bg-success-500/10',
  primary: 'bg-primary-500 dark:bg-primary-500/10',
  muted: 'bg-muted-500 dark:bg-muted-500/10',
}
  
const txtTypeStyle = {
  info: 'dark:text-info-500',
  warning: 'dark:text-warning-500',
  danger: 'dark:text-danger-500',
  success: 'dark:text-success-500',
  primary: 'dark:text-primary-500',
  muted: 'dark:text-muted-500',
}
  
const icon = computed(() =>
  typeof props.icon === 'string' ? props.icon : iconTypeStyle[props.type]
)
</script>

<template>
  <div
    class="flex min-h-[3rem] items-center border p-1 pe-2"
    :class="[shape && shapeStyle[shape], messageTypeStyle[props.type]]"
  >
    <div
      v-if="props.icon"
      class="flex h-10 w-10 shrink-0 items-center justify-center"
      :class="[bgTypeStyle[props.type]]"
    >
      <Icon v-if="icon" :name="icon" class="h-5 w-5 text-white" />
    </div>
    <span
      class="text-muted-800 mx-3 block font-sans text-sm"
      :class="txtTypeStyle[props.type]"
    >
      <slot>{{ props.message }}</slot>
    </span>
    <button
      v-if="props.closable"
      type="button"
      tabindex="0"
      class="nui-focus text-muted-800 me-2 ms-auto flex cursor-pointer items-center justify-center p-1 outline-none"
      :class="[shape && shapeStyle[shape], messageTypeStyle[props.type]]"
      @click="emit('close')"
    >
      <slot name="close-button">
        <Icon :name="closeIcon" class="h-4 w-4" />
      </slot>
    </button>
  </div>
</template>
