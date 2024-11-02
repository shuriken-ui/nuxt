<script setup>
const route = useRoute()
useHead(() => ({
  title: route.meta.title,
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - @shuriken-ui/nuxt`
      : '@shuriken-ui/nuxt'
  },
  bodyAttrs: {
    class: 'bg-white dark:bg-muted-950',
  },
}))
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
