<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /** The maximum number of avatars to display. */
    limit?: number

    /** The size of the avatars. */
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

    /** An array of avatar objects. */
    avatars: {
      /** The source URL for the avatar image. */
      src?: string

      /** The source URL for the dark version of the avatar image. */
      srcDark?: string

      /** The text to display as the avatar. */
      text?: string
    }[]
  }>(),
  {
    limit: 4,
    size: 'sm',
  },
)

const sizeStyle = {
  xxs: 'nui-avatar-group-xxs',
  xs: 'nui-avatar-group-xs',
  sm: 'nui-avatar-group-sm',
  md: 'nui-avatar-group-md',
  lg: 'nui-avatar-group-lg',
  xl: 'nui-avatar-group-lg',
  '2xl': 'nui-avatar-group-lg',
  '3xl': 'nui-avatar-group-lg',
  '4xl': 'nui-avatar-group-lg',
}
</script>

<template>
  <div class="nui-avatar-group" :class="[sizeStyle[props.size]]">
    <slot>
      <div
        v-for="avatar in avatars.length <= limit
          ? avatars
          : avatars.slice(0, props.limit - 1)"
        :key="typeof avatar === 'string' ? avatar : avatar.src"
        class="nui-avatar-outer"
      >
        <BaseAvatar
          v-bind="typeof avatar === 'string' ? { src: avatar } : avatar"
          :size="props.size"
          shape="full"
          tabindex="0"
          class="bg-primary-500/20 text-primary-500 !scale-90"
        />
      </div>
      <div v-if="avatars.length > props.limit" class="nui-avatar-count">
        <div class="nui-avatar-count-inner">
          <span class="nui-avatar-count-text">
            +{{ avatars.length - props.limit + 1 }}
          </span>
        </div>
      </div>
    </slot>
  </div>
</template>
