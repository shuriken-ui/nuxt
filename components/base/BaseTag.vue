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

const classes = computed(() => {
  const classes = []

  if (props.condensed) {
    classes.push('py-1 text-[0.65rem]')
  } else {
    classes.push('py-1.5 text-xs')
  }

  if (shape.value) {
    classes.push(
      shape.value === 'straight' && '',
      shape.value === 'rounded' && 'rounded-md',
      shape.value === 'curved' && 'rounded-lg',
      shape.value === 'full' && 'rounded-full'
    )
  }

  if (props.shadow) {
    classes.push(
      props.shadow === 'flat' && 'shadow-xl',
      props.shadow === 'hover' && 'hover:shadow-xl'
    )

    switch (props.color) {
      case 'default': {
        classes.push(
          'border-muted-300 text-muted-600 dark:bg-muted-800 dark:border-muted-700 dark:text-muted-300 border bg-white'
        )
        break
      }
      case 'muted': {
        classes.push(
          'text-muted-500 bg-muted-200 dark:bg-muted-700 dark:text-white'
        )
        break
      }
      case 'primary': {
        switch (props.flavor) {
          case 'solid': {
            classes.push('bg-primary-500 dark:bg-primary-500 text-white')

            break
          }
          case 'pastel': {
            classes.push(
              'bg-primary-100 text-primary-500 border-primary-100 dark:border-primary-500 dark:text-primary-500 border dark:bg-transparent'
            )

            break
          }
          case 'outline': {
            classes.push(' text-primary-500  border-primary-500 border ')

            break
          }
        }
        break
      }
      case 'info': {
        switch (props.flavor) {
          case 'solid': {
            classes.push('bg-info-500 dark:bg-info-500   text-white')

            break
          }
          case 'pastel': {
            classes.push(
              'bg-info-100  text-info-500 border-info-100 dark:border-info-500 dark:text-info-500 border dark:bg-transparent'
            )

            break
          }
          case 'outline': {
            classes.push('text-info-500  border-info-500 border')

            break
          }
        }
        break
      }
      case 'success': {
        switch (props.flavor) {
          case 'solid': {
            classes.push('bg-success-500 dark:bg-success-500  text-white')

            break
          }
          case 'pastel': {
            classes.push(
              'bg-success-100  text-success-500 border-success-100 dark:border-success-500 dark:text-success-500 border dark:bg-transparent'
            )

            break
          }
          case 'outline': {
            classes.push('text-success-500  border-success-500 border')

            break
          }
        }
        break
      }
      case 'warning': {
        switch (props.flavor) {
          case 'solid': {
            classes.push('bg-warning-500 dark:bg-warning-500  text-white')

            break
          }
          case 'pastel': {
            classes.push(
              'bg-warning-100  text-warning-500 border-warning-100 dark:border-warning-500 dark:text-warning-500 border dark:bg-transparent'
            )

            break
          }
          case 'outline': {
            classes.push('text-warning-500  border-warning-500 border')

            break
          }
        }
        break
      }
      case 'danger': {
        switch (props.flavor) {
          case 'solid': {
            classes.push('bg-danger-500 dark:bg-danger-500  text-white')

            break
          }
          case 'pastel': {
            classes.push(
              'bg-danger-100  text-danger-500 border-danger-100 dark:border-danger-500 dark:text-danger-500 border dark:bg-transparent'
            )

            break
          }
          case 'outline': {
            classes.push('text-danger-500  border-danger-500 border')

            break
          }
        }
        break
      }
    }
  } else {
    switch (props.color) {
      case 'default': {
        classes.push(
          'border-muted-300 text-muted-600 dark:bg-muted-800 dark:border-muted-700 dark:text-muted-300 border bg-white'
        )
        break
      }
      case 'muted': {
        switch (props.flavor) {
          case 'solid': {
            classes.push(
              'text-muted-500 bg-muted-200 dark:bg-muted-700 dark:text-white'
            )
          }
          case 'pastel': {
            classes.push(
              'text-muted-500 bg-muted-100 dark:bg-muted-800 dark:text-muted-200'
            )
          }
        }
        break
      }
      case 'primary': {
        switch (props.flavor) {
          case 'solid': {
            classes.push('bg-primary-500 dark:bg-primary-500 text-white')

            break
          }
          case 'pastel': {
            classes.push(
              'bg-primary-100 text-primary-500 border-primary-100 dark:border-primary-500 dark:text-primary-500 border dark:bg-transparent'
            )

            break
          }
          case 'outline': {
            classes.push('text-primary-500 border-primary-500 border ')

            break
          }
        }
        break
      }
      case 'info': {
        switch (props.flavor) {
          case 'solid': {
            classes.push('bg-info-500 dark:bg-info-500 text-white')

            break
          }
          case 'pastel': {
            classes.push(
              'bg-info-100 text-info-500 border-info-100 dark:border-info-500 dark:text-info-500 border dark:bg-transparent'
            )

            break
          }
          case 'outline': {
            classes.push('text-info-500 border-info-500 border')

            break
          }
        }
        break
      }
      case 'success': {
        switch (props.flavor) {
          case 'solid': {
            classes.push('bg-success-500 dark:bg-success-500  text-white')

            break
          }
          case 'pastel': {
            classes.push(
              'bg-success-100 text-success-500 border-success-100 dark:border-success-500 dark:text-success-500 border dark:bg-transparent'
            )

            break
          }
          case 'outline': {
            classes.push('text-success-500  border-success-500 border')

            break
          }
        }
        break
      }
      case 'warning': {
        switch (props.flavor) {
          case 'solid': {
            classes.push('bg-warning-500 dark:bg-warning-500 text-white')

            break
          }
          case 'pastel': {
            classes.push(
              'bg-warning-100  text-warning-500 border-warning-100 dark:border-warning-500 dark:text-warning-500 border dark:bg-transparent'
            )

            break
          }
          case 'outline': {
            classes.push('text-warning-500  border-warning-500 border')

            break
          }
        }
        break
      }
      case 'danger': {
        switch (props.flavor) {
          case 'solid': {
            classes.push('bg-danger-500 dark:bg-danger-500 text-white')

            break
          }
          case 'pastel': {
            classes.push(
              'bg-danger-100  text-danger-500 border-danger-100 dark:border-danger-500 dark:text-danger-500 border dark:bg-transparent'
            )

            break
          }
          case 'outline': {
            classes.push('text-danger-500  border-danger-500 border')

            break
          }
        }
        break
      }
    }
  }

  return classes
})
</script>

<template>
  <span
    class="inline-block px-3 font-sans transition-shadow duration-300"
    :class="classes"
  >
    <slot></slot>
  </span>
</template>
