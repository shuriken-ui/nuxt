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

const sizeStyle = {
  xs: 'nui-avatar-group-xs',
  sm: 'nui-avatar-group-sm',
  md: 'nui-avatar-group-md',
  lg: 'nui-avatar-group-lg',
}
</script>

<template>
  <div class="nui-avatar-group" :class="[sizeStyle[props.size]]">
    <slot>
      <div
        v-for="avatar in avatars.slice(0, props.limit)"
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
            +{{ avatars.length - props.limit }}
          </span>
        </div>
      </div>
    </slot>
  </div>
</template>
