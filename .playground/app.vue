<script setup>
const route = useRoute()
useHead(() => ({
  title: route.meta.title,
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - @shuriken-ui/nuxt`
      : '@shuriken-ui/nuxt'
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
