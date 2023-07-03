<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    /**
     * Inner elements shapes.
     */
    shape?: 'straight' | 'rounded' | 'curved'
  }>(),
  {
    shape: undefined,
  }
)
const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.progress
)

const shapeClasses = computed(() => {
  switch (shape.value) {
    case 'straight': {
      return 'prose-img:rounded-none prose-pre:rounded-none prose-table:rounded-none'
    }
    case 'rounded': {
      return 'prose-img:rounded-md prose-pre:rounded-md prose-table:rounded-md prose-table:border-separate prose-table:border-spacing-0 prose-td:border-t prose-td:border-muted-200 dark:prose-td:border-muted-700'
    }
    case 'curved': {
      return 'prose-img:rounded-xl prose-pre:rounded-xl prose-table:rounded-xl prose-table:border-separate prose-table:border-spacing-0 prose-td:border-t prose-td:border-muted-200 dark:prose-td:border-muted-700'
    }
  }
})
</script>

<template>
  <div class="nui-prose" :class="[shapeClasses]">
    <slot></slot>
  </div>
</template>
