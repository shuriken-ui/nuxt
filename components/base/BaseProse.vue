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
  },
)
const appConfig = useAppConfig()
const shape = computed(
  () => props.shape ?? appConfig.nui.defaultShapes?.progress,
)

const shapeStyle = {
  straight: 'nui-prose-straight',
  rounded: 'nui-prose-rounded',
  curved: 'nui-prose-curved',
}
</script>

<template>
  <div class="nui-prose" :class="shape && shapeStyle[shape]">
    <slot></slot>
  </div>
</template>
