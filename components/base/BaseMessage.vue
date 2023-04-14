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

const icon = computed(() => {
  if (typeof props.icon === 'string') {
    return props.icon
  }

  switch (props.type) {
    case 'info': {
      return 'akar-icons:info-fill'
    }
    case 'warning': {
      return 'ci:warning'
    }
    case 'danger': {
      return 'ph:warning-octagon-fill'
    }
    case 'success': {
      return 'carbon:checkmark-filled'
    }
  }
})

const shapeClass = computed(() => {
  switch (shape.value) {
    case 'straight': {
      return ''
    }
    case 'rounded': {
      return 'rounded-md'
    }
    case 'full': {
      return 'rounded-full'
    }
    case 'curved': {
      return 'rounded-xl'
    }
  }
})
const messageClasses = computed(() => {
  switch (props.type) {
    case 'primary': {
      return [
        'bg-primary-100',
        'dark:bg-primary-500/10',
        'border-primary-200',
        'dark:border-primary-700',
      ]
    }
    case 'info': {
      return [
        'bg-info-100',
        'dark:bg-info-500/10',
        'border-info-200',
        'dark:border-info-700',
      ]
    }
    case 'warning': {
      return [
        'bg-warning-100',
        'dark:bg-warning-500/10',
        'border-warning-200',
        'dark:border-warning-700',
      ]
    }
    case 'danger': {
      return [
        'bg-danger-100',
        'dark:bg-danger-500/10',
        'border-danger-200',
        'dark:border-danger-700',
      ]
    }
    case 'muted': {
      return [
        'bg-muted-100',
        'dark:bg-muted-500/10',
        'border-muted-200',
        'dark:border-muted-700',
      ]
    }
    case 'success': {
      return [
        'bg-success-100',
        'dark:bg-success-500/10',
        'border-success-200',
        'dark:border-success-700',
      ]
    }
  }
})
const closeButtonClasses = computed(() => {
  switch (props.type) {
    case 'primary': {
      return [
        'dark:text-primary-500',
        'hover:enabled:bg-primary-300/50',
        'focus-visible:bg-primary-300/50',
        'active:enabled:bg-primary-300/20',
        'dark:hover:enabled:bg-primary-500/30',
        'dark:focus-visible:bg-primary-500/30',
        'dark:active:enabled:bg-primary-500/20',
      ]
    }
    case 'info': {
      return [
        'dark:text-info-500',
        'hover:enabled:bg-info-300/50',
        'focus-visible:bg-info-300/50',
        'active:enabled:bg-info-300/20',
        'dark:hover:enabled:bg-info-500/30',
        'dark:focus-visible:bg-info-500/30',
        'dark:active:enabled:bg-info-500/20',
      ]
    }
    case 'warning': {
      return [
        'dark:text-warning-500',
        'hover:enabled:bg-warning-300/50',
        'focus-visible:bg-warning-300/50',
        'active:enabled:bg-warning-300/20',
        'dark:hover:enabled:bg-warning-500/30',
        'dark:focus-visible:bg-warning-500/30',
        'dark:active:bg-warning-500/20',
      ]
    }
    case 'danger': {
      return [
        'dark:text-danger-500',
        'hover:enabled:bg-danger-300/50',
        'focus-visible:bg-danger-300/50',
        'active:enabled:bg-danger-300/20',
        'dark:hover:bg-danger-500/30',
        'dark:focus-visible:bg-danger-500/30',
        'dark:active:enabled:bg-danger-500/20',
      ]
    }
    case 'muted': {
      return [
        'dark:text-muted-500',
        'hover:enabled:bg-muted-300/50',
        'focus-visible:bg-muted-300/50',
        'active:enabled:bg-muted-300/20',
        'dark:hover:bg-muted-500/30',
        'dark:focus-visible:bg-muted-500/30',
        'dark:active:enabled:bg-muted-500/20',
      ]
    }
    case 'success': {
      return [
        'dark:text-success-500',
        'hover:enabled:bg-success-300/50',
        'focus-visible:bg-success-300/50',
        'active:enabled:bg-success-300/20',
        'dark:hover:enabled:bg-success-500/30',
        'dark:focus-visible:bg-success-500/30',
        'dark:active:enabled:bg-success-500/20',
      ]
    }
  }
})
</script>

<template>
  <div
    class="flex min-h-[3rem] items-center border p-1 pe-2"
    :class="[shapeClass, ...messageClasses]"
  >
    <div
      v-if="props.icon"
      class="flex h-10 w-10 shrink-0 items-center justify-center"
      :class="[
        shapeClass,
        props.type === 'success' && 'bg-success-500',
        props.type === 'info' && 'bg-info-500',
        props.type === 'warning' && 'bg-warning-500',
        props.type === 'danger' && 'bg-danger-500',
        props.type === 'primary' && 'bg-primary-500',
        props.type === 'muted' && 'bg-muted-500',
      ]"
    >
      <Icon v-if="icon" :name="icon" class="h-5 w-5 text-white" />
    </div>
    <span
      class="text-muted-800 mx-3 block font-sans text-sm"
      :class="[
        props.type === 'success' && 'dark:text-success-500',
        props.type === 'info' && 'dark:text-info-500',
        props.type === 'warning' && 'dark:text-warning-500',
        props.type === 'danger' && 'dark:text-danger-500',
        props.type === 'primary' && 'dark:text-primary-500',
        props.type === 'muted' && 'dark:text-muted-500',
      ]"
    >
      <slot>{{ props.message }}</slot>
    </span>
    <button
      v-if="props.closable"
      type="button"
      tabindex="0"
      class="nui-focus text-muted-800 me-2 ms-auto flex cursor-pointer items-center justify-center p-1 outline-none"
      :class="[shapeClass, ...closeButtonClasses]"
      @click="emit('close')"
    >
      <slot name="close-button">
        <Icon :name="closeIcon" class="h-4 w-4" />
      </slot>
    </button>
  </div>
</template>
