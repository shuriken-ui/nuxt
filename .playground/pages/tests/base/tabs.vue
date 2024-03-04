<script setup lang="ts">
definePageMeta({
  title: 'BaseTabs',
  icon: 'system-uicons:browser-alt',
  description: 'Tabs component',
  section: 'base',
})

const selectedTab = ref('team')
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseTabs">
      <NuiPreview title="Align: start" description="Tabs component start align">
        <div class="w-full max-w-sm">
          <BaseTabs
            v-model="selectedTab"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
            ]"
          >
            <template #tab="{ activeValue }">
              <p
                v-if="activeValue === 'team'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                Ne discipulum abducam, times.
              </p>

              <p
                v-else-if="activeValue === 'projects'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                Ne discipulum abducam, times. Quae diligentissime contra
                Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
              </p>
            </template>
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Align: center"
        description="Tabs component center align"
      >
        <div class="w-full max-w-sm">
          <BaseTabs
            justify="center"
            color="dark"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
            ]"
          >
            <template #tab="{ activeValue }">
              <p
                v-if="activeValue === 'team'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                Ne discipulum abducam, times.
              </p>

              <p
                v-else-if="activeValue === 'projects'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                Ne discipulum abducam, times. Quae diligentissime contra
                Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
              </p>
            </template>
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview title="Align: end" description="Tabs component end align">
        <div class="w-full max-w-sm">
          <BaseTabs
            model-value="team"
            justify="end"
            color="black"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
            ]"
          >
            <template #tab="{ activeValue }">
              <p
                v-if="activeValue === 'team'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                Ne discipulum abducam, times.
              </p>

              <p
                v-else-if="activeValue === 'projects'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                Ne discipulum abducam, times. Quae diligentissime contra
                Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
              </p>
            </template>
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview title="Icon" description="Tabs component icons">
        <div class="w-full max-w-sm">
          <BaseTabs
            model-value="team"
            color="default"
            :tabs="[
              {
                label: 'Team',
                value: 'team',
                icon: 'ph:users-three-duotone',
              },
              {
                label: 'Projects',
                value: 'projects',
                icon: 'ph:briefcase-duotone',
              },
              {
                label: 'Tasks',
                value: 'tasks',
                icon: 'ph:check-circle-duotone',
              },
            ]"
          >
            <template #tab="{ activeValue }">
              <p
                v-if="activeValue === 'team'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                Ne discipulum abducam, times.
              </p>

              <p
                v-else-if="activeValue === 'projects'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                Ne discipulum abducam, times. Quae diligentissime contra
                Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
              </p>

              <p
                v-else-if="activeValue === 'tasks'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                Ne discipulum abducam, times. Quae diligentissime contra.
              </p>
            </template>
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview title="Boxed" description="Tabs component boxed">
        <div class="w-full max-w-sm">
          <BaseTabs
            type="box"
            :tabs="[
              {
                label: 'Team',
                value: 'team',
              },
              {
                label: 'Projects',
                value: 'projects',
              },
              {
                label: 'Tasks',
                value: 'tasks',
              },
            ]"
          >
            <template #tab="{ activeValue }">
              <p
                v-if="activeValue === 'team'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                Ne discipulum abducam, times.
              </p>

              <p
                v-else-if="activeValue === 'projects'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                Ne discipulum abducam, times. Quae diligentissime contra
                Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
              </p>

              <p
                v-else-if="activeValue === 'tasks'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                Ne discipulum abducam, times. Quae diligentissime contra.
              </p>
            </template>
          </BaseTabs>
        </div>
      </NuiPreview>

      <NuiPreview title="Boxed: icon" description="Tabs component boxed icons">
        <div class="w-full max-w-sm">
          <BaseTabs
            type="box"
            model-value="team"
            color="black"
            :tabs="[
              {
                label: 'Team',
                value: 'team',
                icon: 'ph:users-three-duotone',
              },
              {
                label: 'Projects',
                value: 'projects',
                icon: 'ph:briefcase-duotone',
              },
              {
                label: 'Tasks',
                value: 'tasks',
                icon: 'ph:check-circle-duotone',
              },
            ]"
          >
            <template #tab="{ activeValue }">
              <p
                v-if="activeValue === 'team'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                Ne discipulum abducam, times.
              </p>

              <p
                v-else-if="activeValue === 'projects'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                Ne discipulum abducam, times. Quae diligentissime contra
                Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
              </p>

              <p
                v-else-if="activeValue === 'tasks'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
                iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum?
                Ne discipulum abducam, times. Quae diligentissime contra.
              </p>
            </template>
          </BaseTabs>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
