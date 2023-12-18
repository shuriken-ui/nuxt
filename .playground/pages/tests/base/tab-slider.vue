<script setup lang="ts">
definePageMeta({
  title: 'BaseTabSlider',
  icon: 'system-uicons:split-three',
  description: 'Tab slider component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseTabSlider">
      <NuiPreview
        title="Rounded: none: x2"
        description="Tab slider component 2 slots"
      >
        <div class="w-full max-w-sm">
          <BaseTabSlider
            rounded="none"
            model-value="team"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
            ]"
            v-slot="{ activeValue }"
          >
            <p
              v-if="activeValue === 'team'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times.
            </p>
            <p
              v-else-if="activeValue === 'projects'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra Aristonem
              dicuntur a Chryippo. Duo Reges: constructio interrete.
            </p>
            <p
              v-else-if="activeValue === 'tasks'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra.
            </p>
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: sm: x2"
        description="Tab slider component 2 slots"
      >
        <div class="w-full max-w-sm">
          <BaseTabSlider
            rounded="sm"
            model-value="team"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
            ]"
            v-slot="{ activeValue }"
          >
            <p
              v-if="activeValue === 'team'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times.
            </p>
            <p
              v-else-if="activeValue === 'projects'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra Aristonem
              dicuntur a Chryippo. Duo Reges: constructio interrete.
            </p>
            <p
              v-else-if="activeValue === 'tasks'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra.
            </p>
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: md: x2"
        description="Tab slider component 2 slots"
      >
        <div class="w-full max-w-sm">
          <BaseTabSlider
            rounded="md"
            model-value="team"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
            ]"
            v-slot="{ activeValue }"
          >
            <p
              v-if="activeValue === 'team'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times.
            </p>
            <p
              v-else-if="activeValue === 'projects'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra Aristonem
              dicuntur a Chryippo. Duo Reges: constructio interrete.
            </p>
            <p
              v-else-if="activeValue === 'tasks'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra.
            </p>
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: lg: x2"
        description="Tab slider component 2 slots"
      >
        <div class="w-full max-w-sm">
          <BaseTabSlider
            rounded="lg"
            model-value="team"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
            ]"
            v-slot="{ activeValue }"
          >
            <p
              v-if="activeValue === 'team'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times.
            </p>
            <p
              v-else-if="activeValue === 'projects'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra Aristonem
              dicuntur a Chryippo. Duo Reges: constructio interrete.
            </p>
            <p
              v-else-if="activeValue === 'tasks'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra.
            </p>
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: full: x2"
        description="Tab slider component 2 slots"
      >
        <div class="w-full max-w-sm">
          <BaseTabSlider
            rounded="full"
            model-value="team"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
            ]"
            v-slot="{ activeValue }"
          >
            <p
              v-if="activeValue === 'team'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times.
            </p>
            <p
              v-else-if="activeValue === 'projects'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra Aristonem
              dicuntur a Chryippo. Duo Reges: constructio interrete.
            </p>
            <p
              v-else-if="activeValue === 'tasks'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra.
            </p>
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Size: sm: x2"
        description="Tab slider component 2 slots"
      >
        <div class="w-full max-w-sm">
          <BaseTabSlider
            rounded="full"
            size="sm"
            model-value="team"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
            ]"
            v-slot="{ activeValue }"
          >
            <p
              v-if="activeValue === 'team'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times.
            </p>
            <p
              v-else-if="activeValue === 'projects'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra Aristonem
              dicuntur a Chryippo. Duo Reges: constructio interrete.
            </p>
            <p
              v-else-if="activeValue === 'tasks'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra.
            </p>
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: none: x3"
        description="Tab slider component 3 slots"
      >
        <div class="w-full max-w-sm">
          <BaseTabSlider
            rounded="none"
            model-value="team"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
              { label: 'Tasks', value: 'tasks' },
            ]"
            v-slot="{ activeValue }"
          >
            <p
              v-if="activeValue === 'team'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times.
            </p>
            <p
              v-else-if="activeValue === 'projects'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra Aristonem
              dicuntur a Chryippo. Duo Reges: constructio interrete.
            </p>
            <p
              v-else-if="activeValue === 'tasks'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra.
            </p>
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: sm: x3"
        description="Tab slider component 3 slots"
      >
        <div class="w-full max-w-sm">
          <BaseTabSlider
            rounded="sm"
            model-value="team"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
              { label: 'Tasks', value: 'tasks' },
            ]"
            v-slot="{ activeValue }"
          >
            <p
              v-if="activeValue === 'team'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times.
            </p>
            <p
              v-else-if="activeValue === 'projects'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra Aristonem
              dicuntur a Chryippo. Duo Reges: constructio interrete.
            </p>
            <p
              v-else-if="activeValue === 'tasks'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra.
            </p>
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: md: x3"
        description="Tab slider component 3 slots"
      >
        <div class="w-full max-w-sm">
          <BaseTabSlider
            rounded="md"
            model-value="team"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
              { label: 'Tasks', value: 'tasks' },
            ]"
            v-slot="{ activeValue }"
          >
            <p
              v-if="activeValue === 'team'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times.
            </p>
            <p
              v-else-if="activeValue === 'projects'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra Aristonem
              dicuntur a Chryippo. Duo Reges: constructio interrete.
            </p>
            <p
              v-else-if="activeValue === 'tasks'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra.
            </p>
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: lg: x3"
        description="Tab slider component 3 slots"
      >
        <div class="w-full max-w-sm">
          <BaseTabSlider
            rounded="lg"
            model-value="team"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
              { label: 'Tasks', value: 'tasks' },
            ]"
            v-slot="{ activeValue }"
          >
            <p
              v-if="activeValue === 'team'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times.
            </p>
            <p
              v-else-if="activeValue === 'projects'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra Aristonem
              dicuntur a Chryippo. Duo Reges: constructio interrete.
            </p>
            <p
              v-else-if="activeValue === 'tasks'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra.
            </p>
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: full: x3"
        description="Tab slider component 3 slots"
      >
        <div class="w-full max-w-sm">
          <BaseTabSlider
            rounded="full"
            model-value="team"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
              { label: 'Tasks', value: 'tasks' },
            ]"
            v-slot="{ activeValue }"
          >
            <p
              v-if="activeValue === 'team'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times.
            </p>
            <p
              v-else-if="activeValue === 'projects'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra Aristonem
              dicuntur a Chryippo. Duo Reges: constructio interrete.
            </p>
            <p
              v-else-if="activeValue === 'tasks'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra.
            </p>
          </BaseTabSlider>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Size: sm: x3"
        description="Tab slider component 3 slots"
      >
        <div class="w-full max-w-sm">
          <BaseTabSlider
            rounded="full"
            size="sm"
            model-value="team"
            :tabs="[
              { label: 'Team', value: 'team' },
              { label: 'Projects', value: 'projects' },
              { label: 'Tasks', value: 'tasks' },
            ]"
            v-slot="{ activeValue }"
          >
            <p
              v-if="activeValue === 'team'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times.
            </p>
            <p
              v-else-if="activeValue === 'projects'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra Aristonem
              dicuntur a Chryippo. Duo Reges: constructio interrete.
            </p>
            <p
              v-else-if="activeValue === 'tasks'"
              class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
              iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne
              discipulum abducam, times. Quae diligentissime contra.
            </p>
          </BaseTabSlider>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
