<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The flavor of the tag.
     */
    flavor?: 'solid' | 'outline' | 'pastel'

    /**
     * The color of the tag.
     */
    color?:
      | 'default'
      | 'primary'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'muted'

    /**
     * The shape of the tag.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

    /**
     * Whether the tag should be in small size.
     */
    condensed?: boolean

    /**
     * Determines when the tag should have a shadow.
     */
    shadow?: 'flat' | 'hover'
  }>(),
  {
    flavor: 'solid',
    color: 'default',
    shape: undefined,
    shadow: undefined,
  }
)
const appConfig = useAppConfig()
const shape = computed(() => props.shape ?? appConfig.nui.defaultShapes?.tag)
</script>

<template>
  <span
    class="inline-block px-3 font-sans transition-shadow duration-300"
    :class="[
      props.condensed ? 'py-1 text-[0.65rem]' : 'py-1.5 text-xs',
      props.color === 'default' &&
        'border-muted-300 text-muted-600 dark:bg-muted-800 dark:border-muted-700 dark:text-muted-300 border bg-white',
      props.color === 'muted' &&
        'text-muted-500 bg-muted-200 dark:bg-muted-700 dark:text-white',
      props.color === 'primary' &&
        props.flavor === 'solid' &&
        'bg-primary-500 dark:bg-primary-500 text-white',
      props.color === 'info' &&
        props.flavor === 'solid' &&
        'bg-info-500 dark:bg-info-500   text-white',
      props.color === 'success' &&
        props.flavor === 'solid' &&
        'bg-success-500 dark:bg-success-500  text-white',
      props.color === 'warning' &&
        props.flavor === 'solid' &&
        'bg-warning-500 dark:bg-warning-500 text-white',
      props.color === 'danger' &&
        props.flavor === 'solid' &&
        'bg-danger-500 dark:bg-danger-500 text-white',
      props.color === 'primary' &&
        props.flavor === 'pastel' &&
        'bg-primary-100  text-primary-500 border-primary-100 dark:border-primary-500 dark:text-primary-500 border dark:bg-transparent',
      props.color === 'info' &&
        props.flavor === 'pastel' &&
        'bg-info-100  text-info-500 border-info-100 dark:border-info-500 dark:text-info-500 border dark:bg-transparent',
      props.color === 'success' &&
        props.flavor === 'pastel' &&
        'bg-success-100  text-success-500 border-success-100 dark:border-success-500 dark:text-success-500 border dark:bg-transparent',
      props.color === 'warning' &&
        props.flavor === 'pastel' &&
        'bg-warning-100  text-warning-500 border-warning-100 dark:border-warning-500 dark:text-warning-500 border dark:bg-transparent',
      props.color === 'danger' &&
        props.flavor === 'pastel' &&
        'bg-danger-100  text-danger-500 border-danger-100 dark:border-danger-500 dark:text-danger-500 border dark:bg-transparent',
      props.color === 'primary' &&
        props.flavor === 'outline' &&
        ' text-primary-500  border-primary-500 border ',
      props.color === 'info' &&
        props.flavor === 'outline' &&
        'text-info-500  border-info-500 border',
      props.color === 'success' &&
        props.flavor === 'outline' &&
        'text-success-500  border-success-500 border',
      props.color === 'warning' &&
        props.flavor === 'outline' &&
        'text-warning-500  border-warning-500 border',
      props.color === 'danger' &&
        props.flavor === 'outline' &&
        'text-danger-500  border-danger-500 border',
      shape === 'straight' && '',
      shape === 'rounded' && 'rounded-md',
      shape === 'curved' && 'rounded-lg',
      shape === 'full' && 'rounded-full',
      props.shadow === 'flat' && 'shadow-xl',
      props.shadow === 'hover' && 'hover:shadow-xl',
      props.color === 'default' &&
        props.flavor === 'solid' &&
        props.shadow === 'flat' &&
        'shadow-muted-300/30 dark:shadow-muted-800/20',
      props.color === 'primary' &&
        props.flavor === 'solid' &&
        props.shadow === 'flat' &&
        'shadow-primary-500/30 dark:shadow-primary-500/20',
      props.color === 'info' &&
        props.flavor === 'solid' &&
        props.shadow === 'flat' &&
        'shadow-info-500/30 dark:shadow-info-500/20',
      props.color === 'success' &&
        props.flavor === 'solid' &&
        props.shadow === 'flat' &&
        'shadow-success-500/30 dark:shadow-success-500/20',
      props.color === 'warning' &&
        props.flavor === 'solid' &&
        props.shadow === 'flat' &&
        'shadow-warning-500/30 dark:shadow-warning-500/20',
      props.color === 'danger' &&
        props.flavor === 'solid' &&
        props.shadow === 'flat' &&
        'shadow-danger-500/30 dark:shadow-danger-500/20',
      props.color === 'default' &&
        props.flavor === 'solid' &&
        props.shadow === 'hover' &&
        'hover:shadow-muted-300/30 dark:hover:shadow-muted-800/20',
      props.color === 'primary' &&
        props.flavor === 'solid' &&
        props.shadow === 'hover' &&
        'hover:shadow-primary-500/30 dark:hover:shadow-primary-500/20',
      props.color === 'info' &&
        props.flavor === 'solid' &&
        props.shadow === 'hover' &&
        'hover:shadow-info-500/30 dark:hover:shadow-info-500/20',
      props.color === 'success' &&
        props.flavor === 'solid' &&
        props.shadow === 'hover' &&
        'hover:shadow-success-500/30 dark:hover:shadow-success-500/20',
      props.color === 'warning' &&
        props.flavor === 'solid' &&
        props.shadow === 'hover' &&
        'hover:shadow-warning-500/30 dark:hover:shadow-warning-500/20',
      props.color === 'danger' &&
        props.flavor === 'solid' &&
        props.shadow === 'hover' &&
        'hover:shadow-danger-500/30 dark:hover:shadow-danger-500/20',
    ]"
  >
    <slot></slot>
  </span>
</template>
