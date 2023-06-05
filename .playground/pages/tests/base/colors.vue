<script setup lang="ts">
definePageMeta({
  title: 'Colors',
  icon: 'lucide:pen-tool',
  description: 'Basic colors',
  section: 'base',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">Colors</BaseHeading>
      <div class="grid grid-cols-6 gap-6">
        <div class="bg-primary-500 aspect-1 flex items-center justify-center">
          <span class="text-primary-100">primary</span>
        </div>
        <div class="bg-success-500 aspect-1 flex items-center justify-center">
          <span class="text-success-100">success</span>
        </div>
        <div class="bg-warning-500 aspect-1 flex items-center justify-center">
          <span class="text-warning-100">warning</span>
        </div>
        <div class="bg-danger-500 aspect-1 flex items-center justify-center">
          <span class="text-danger-100">danger</span>
        </div>
        <div class="bg-info-500 aspect-1 flex items-center justify-center">
          <span class="text-info-100">info</span>
        </div>
        <div class="bg-muted-500 aspect-1 flex items-center justify-center">
          <span class="text-muted-100">muted</span>
        </div>
      </div>
    </div>

    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        nui helpers
      </BaseHeading>
      <div class="grid grid-cols-6 gap-6">
        <div
          class="nui-bg-white aspect-1 flex flex-col items-center justify-center"
        >
          <span class="nui-text-black">nui-bg-white</span>
          <small class="nui-text-black">nui-text-black</small>
        </div>
        <div
          class="nui-bg-50 aspect-1 flex flex-col items-center justify-center"
        >
          <span class="nui-text-950">nui-bg-50</span>
          <small class="nui-text-950">nui-text-950</small>
        </div>
        <div
          class="nui-bg-50 aspect-1 flex flex-col items-center justify-center"
        >
          <span class="nui-text-900">nui-bg-50</span>
          <small class="nui-text-900">nui-text-900</small>
        </div>
        <div
          class="nui-bg-100 aspect-1 flex flex-col items-center justify-center"
        >
          <span class="nui-text-900">nui-bg-100</span>
          <small class="nui-text-900">nui-text-900</small>
        </div>
        <div
          class="nui-bg-200 aspect-1 flex flex-col items-center justify-center"
        >
          <span class="nui-text-800">nui-bg-200</span>
          <small class="nui-text-800">nui-text-800</small>
        </div>
        <div
          class="nui-bg-300 aspect-1 flex flex-col items-center justify-center"
        >
          <span class="nui-text-700">nui-bg-300</span>
          <small class="nui-text-700">nui-text-700</small>
        </div>
        <div
          class="nui-bg-400 aspect-1 flex flex-col items-center justify-center"
        >
          <span class="nui-text-600">nui-bg-400</span>
          <small class="nui-text-600">nui-text-600</small>
        </div>
        <div
          class="nui-bg-500 aspect-1 flex flex-col items-center justify-center"
        >
          <span class="nui-text-500">nui-bg-500</span>
          <small class="nui-text-500">nui-text-500</small>
        </div>
        <div
          class="nui-bg-600 aspect-1 flex flex-col items-center justify-center"
        >
          <span class="nui-text-400">nui-bg-600</span>
          <small class="nui-text-400">nui-text-400</small>
        </div>
        <div
          class="nui-bg-700 aspect-1 flex flex-col items-center justify-center"
        >
          <span class="nui-text-300">nui-bg-700</span>
          <small class="nui-text-300">nui-text-300</small>
        </div>
        <div
          class="nui-bg-800 aspect-1 flex flex-col items-center justify-center"
        >
          <span class="nui-text-200">nui-bg-800</span>
          <small class="nui-text-200">nui-text-200</small>
        </div>
        <div
          class="nui-bg-900 aspect-1 flex flex-col items-center justify-center"
        >
          <span class="nui-text-100">nui-bg-900</span>
          <small class="nui-text-100">nui-text-100</small>
        </div>
        <div
          class="nui-bg-950 aspect-1 flex flex-col items-center justify-center"
        >
          <span class="nui-text-50">nui-bg-950</span>
          <small class="nui-text-50">nui-text-50</small>
        </div>
        <div
          class="nui-bg-black aspect-1 flex flex-col items-center justify-center"
        >
          <span class="nui-text-white">nui-bg-black</span>
          <small class="nui-text-white">nui-text-white</small>
        </div>
      </div>
    </div>
  </div>
</template>
