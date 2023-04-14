<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    /**
     * The type of button.
     * If this is not set and the `to` property is set, the component will be treated as a link.
     */
    type?: 'button' | 'submit' | 'reset'

    /**
     * The route to navigate to when the button or link is clicked.
     * If this is set and the `type` property is not set, the component will be treated as a link.
     */
    to?: RouteLocationRaw

    /**
     * Whether the button or link is disabled.
     */
    disabled?: boolean

    /**
     * The value for the `rel` attribute on the button or link.
     * This property is only relevant for links.
     */
    rel?: string

    /**
     * The value for the `target` attribute on the button or link.
     * This property is only relevant for links.
     */
    target?: string

    /**
     * The shape of the button or link.
     */
    shape?: 'straight' | 'rounded' | 'curved' | 'full'

    /**
     * The color of the button.
     */
    color?: 'default' | 'muted' | 'primary'

    /**
     * Whether the button or link is in a loading state.
     */
    loading?: boolean

    /**
     * Whether the button or link is small.
     */
    condensed?: boolean
  }>(),
  {
    color: 'default',
    shape: undefined,
    to: undefined,
    type: undefined,
    rel: '',
    target: '',
    loading: false,
    condensed: false,
  }
)
const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.buttonIcon
)

const shapeClass = computed(() => {
  switch (shape.value) {
    case 'rounded': {
      return 'rounded-md'
    }
    case 'curved': {
      return 'rounded-xl'
    }
    case 'full': {
      return 'rounded-full'
    }
    case 'straight': {
      return ''
    }
  }
})

const colorClass = computed(() => {
  return [
    props.color === 'muted' &&
      'text-muted-500 bg-muted-200 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 hover:bg-muted-100',

    props.color === 'primary' &&
      'text-primary-500 border-2 border-primary-500 hover:bg-primary-500/20',
    props.color === 'default' &&
      'text-muted-700 bg-white border border-muted-300 dark:text-white dark:bg-muted-700 dark:hover:bg-muted-600 dark:border-muted-600 hover:bg-muted-50',
  ].join(' ') // note the join(' ') here
})

const sizeClass = computed(() => {
  if (props.condensed) {
    return 'h-8 w-8 p-1'
  }
  return 'h-10 w-10 p-2'
})

const iconButtonClasses = computed(() => [
  'disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-none',
  props.loading ? '!text-transparent' : '',
  colorClass.value,
  shapeClass.value,
  sizeClass.value,
])

const { attributes, is } = useNinjaButton(props)
</script>

<template>
  <component
    :is="is"
    v-bind="attributes"
    :class="iconButtonClasses"
    class="nui-focus relative inline-flex items-center justify-center space-x-1 font-sans text-sm font-normal leading-5 no-underline outline-none transition-all duration-300"
  >
    <slot v-if="!props.loading"></slot>
    <BasePlaceload v-else class="h-4 w-4 rounded-md" />
  </component>
</template>
