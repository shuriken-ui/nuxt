<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The message to display.
     */
    message?: string

    /**
     * Whether to show an icon, or the name of the icon to display.
     */
    icon?: boolean | string

    /**
     * Default icons to apply to the messages, when the icon is active.
     */
    defaultIcons?: {
      /**
       * The default default icon
       */
      'default'?: string

      /**
       * The default default contrast icon
       */
      'default-contrast'?: string

      /**
       * The default muted icon
       */
      'muted'?: string

      /**
       * The default muted contrast icon
       */
      'muted-contrast'?: string

      /**
       * The default info icon
       */
      'info'?: string

      /**
       * The default success icon
       */
      'success'?: string

      /**
       * The default warning icon
       */
      'warning'?: string

      /**
       * The default danger icon
       */
      'danger'?: string

      /**
       * The default primary icon
       */
      'primary'?: string
    }

    /**
     * The icon to show in the close button
     */
    closeIcon?: string

    /**
     * Whether to show a close button.
     */
    closable?: boolean

    /**
     * The color of the message.
     *
     * @default 'default'
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
     *
     * @default 'sm'
     */
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'

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
    defaultIcons: undefined,
  },
)
const emit = defineEmits<{
  close: []
}>()

const color = useNuiDefaultProperty(props, 'BaseMessage', 'color')
const rounded = useNuiDefaultProperty(props, 'BaseMessage', 'rounded')
const icons = useNuiDefaultProperty(props, 'BaseMessage', 'defaultIcons')

const radiuses = {
  none: '',
  sm: 'nui-message-rounded-sm',
  md: 'nui-message-rounded-md',
  lg: 'nui-message-rounded-lg',
  full: 'nui-message-rounded-full',
}

const colors = {
  'default': 'nui-message-default',
  'default-contrast': 'nui-message-default-contrast',
  'muted': 'nui-message-muted',
  'muted-contrast': 'nui-message-muted-contrast',
  'primary': 'nui-message-primary',
  'info': 'nui-message-info',
  'success': 'nui-message-success',
  'warning': 'nui-message-warning',
  'danger': 'nui-message-danger',
}

const icon = computed(() =>
  typeof props.icon === 'string'
    ? props.icon
    : color.value
      ? icons.value[color.value]
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
      props.icon ? 'nui-has-icon' : 'nui-has-text',
    ]"
  >
    <div
      v-if="props.icon && icon"
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
    <div v-if="props.closable" class="nui-message-close-wrapper">
      <button
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
  </div>
</template>
