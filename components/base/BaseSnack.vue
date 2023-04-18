<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * The text to display in the snackbar.
     */
    label?: string

    /**
     * An optional icon to display in the snackbar.
     */
    icon?: string

    /**
     * An optional image to display in the snackbar.
     */
    image?: string

    /**
     * Whether or not to display the snackbar in a smaller size.
     */
    small?: boolean

    /**
     * Whether or not to display the snackbar with a light background.
     */
    light?: boolean
  }>(),
  {
    label: '',
    icon: undefined,
    image: undefined,
  }
)

const emit = defineEmits(['delete'])
</script>

<template>
  <div
    class="nui-focus group/nui-snack inline-flex items-center rounded-full outline-transparent"
    :class="[
      !props.icon && !props.image && 'ps-4',
      props.small ? 'h-8' : 'h-10',
      props.light
        ? 'dark:bg-muted-700 border-muted-300 dark:border-muted-600 border bg-white'
        : 'bg-muted-200 dark:bg-muted-700',
    ]"
  >
    <div
      v-if="props.icon && !props.image"
      class="border-muted-200 -ms-0.5 me-2 flex items-center justify-center rounded-full border bg-white"
      :class="props.small ? 'h-8 w-8' : 'h-10 w-10'"
    >
      <Icon :name="props.icon" :class="[props.small ? 'h-4 w-4' : 'h-5 w-5']" />
    </div>
    <div
      v-else-if="props.image && !props.icon"
      class="-ms-0.5 me-2 flex items-center justify-center rounded-full"
      :class="props.small ? 'h-8 w-8' : 'h-10 w-10'"
    >
      <img
        :src="props.image"
        class="rounded-full object-cover"
        :class="props.small ? 'h-8 w-8' : 'h-10 w-10'"
        alt=""
      />
    </div>
    <span class="text-muted-600 dark:text-muted-300 font-sans text-sm">
      <slot>{{ props.label }}</slot>
    </span>
    <button
      type="button"
      class="ms-2 cursor-pointer rounded-full p-1 outline-none"
      :class="[
        props.small ? 'me-1' : 'me-2',
        props.light
          ? 'hover:bg-muted-100 active:bg-muted-200 focus-visible:bg-muted-100 !dark:active:bg-muted-500/50 dark:focus-visible:bg-muted-600 dark:hover:bg-muted-600 '
          : 'hover:bg-muted-300 active:bg-muted-400/50 focus-visible:bg-muted-300 !dark:active:bg-muted-500/50 dark:focus-visible:bg-muted-600 dark:hover:bg-muted-600 ',
      ]"
      @click="emit('delete')"
    >
      <IconClose class="text-muted-600 dark:text-muted-300 h-4 w-4" />
    </button>
  </div>
</template>
