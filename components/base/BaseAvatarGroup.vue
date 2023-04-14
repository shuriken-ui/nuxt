<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** The maximum number of avatars to display. */
    limit?: number

    /** The size of the avatars. Can be 'xs', 'sm', 'md', or 'lg'. */
    size?: 'xs' | 'sm' | 'md' | 'lg'

    /** An array of avatar objects. */
    avatars: {
      /** The source URL for the avatar image. */
      src?: string

      /** The source URL for the dark version of the avatar image. */
      srcDark?: string

      /** The text to display as the avatar. */
      text?: string

      /** The tooltip to display when hovering over the avatar. */
      tooltip?: string
    }[]
  }>(),
  {
    limit: 4,
    size: 'sm',
  }
)
</script>

<template>
  <div class="flex">
    <slot>
      <div
        v-for="(avatar, index) in avatars.slice(0, props.limit)"
        :key="typeof avatar === 'string' ? avatar : avatar.src"
        class="dark:bg-muted-800 relative flex shrink-0 items-center justify-center rounded-full bg-white transition-all duration-100 ease-in"
        :class="[
          props.size === 'xs' &&
            'h-8 w-8 hover:-ms-2 hover:me-2 focus:-ms-2 focus:me-2',
          index !== 0 &&
            props.size === 'xs' &&
            '-ms-2 hover:-ms-4 hover:me-2 focus:-ms-4 focus:me-2',
          props.size === 'sm' && 'hover:-ms-2 hover:me-2 focus:me-2',
          index !== 0 &&
            props.size === 'sm' &&
            '-ms-3 h-10 w-10 hover:-ms-5 hover:me-2 focus:-ms-5 focus:me-2',
          props.size === 'md' && 'hover:-ms-3 hover:me-3 focus:me-3',
          index !== 0 &&
            props.size === 'md' &&
            '-ms-4 h-12 w-12 hover:-ms-7 hover:me-3 focus:me-3',
          props.size === 'lg' && 'hover:-ms-4 hover:me-4 focus:me-4',
          index !== 0 &&
            props.size === 'lg' &&
            '-ms-5 h-16 w-16 hover:-ms-9 hover:me-4 focus:-ms-9 focus:me-4',
        ]"
      >
        <BaseAvatar
          v-bind="typeof avatar === 'string' ? { src: avatar } : avatar"
          :size="props.size"
          shape="full"
          tabindex="0"
          class="bg-primary-500/20 text-primary-500 !scale-90"
        />
      </div>
      <div
        v-if="avatars.length > props.limit"
        class="dark:bg-muted-800 shrink-0 rounded-full bg-white transition-all duration-100 ease-in"
        :class="[
          props.size === 'xs' && '-ms-2 h-8 w-8',
          props.size === 'sm' && '-ms-3 h-10 w-10',
          props.size === 'md' && '-ms-4 h-12 w-12',
          props.size === 'lg' && '-ms-5 h-16 w-16',
        ]"
      >
        <div
          class="bg-muted-200 dark:border-muted-800 dark:bg-muted-700 relative inline-flex h-full w-full scale-90 items-center justify-center rounded-full border-white"
        >
          <span
            class="text-muted-500 dark:text-muted-300 -ms-1 font-sans font-normal uppercase"
            :class="[
              props.size === 'xs' && 'text-sm',
              props.size === 'sm' && 'text-sm',
              props.size === 'md' && 'text-lg',
              props.size === 'lg' && 'text-xl',
            ]"
          >
            +{{ avatars.length - props.limit }}
          </span>
        </div>
      </div>
    </slot>
  </div>
</template>
