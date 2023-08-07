<script setup lang="ts">
definePageMeta({
  title: 'Dropdown',
  icon: 'lucide:box',
  description: 'Dropdown examples',
  section: 'content',
})
</script>

<template>
  <div
    class="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <BaseHeading size="xl" weight="medium" class="mb-10">
        Dropdown
      </BaseHeading>
      <div>
        <BaseDropdown flavor="context" label="Dropdown" orientation="start">
          <BaseDropdownItem to="#" title="Profile" text="View your profile" />
          <BaseDropdownItem to="#" title="Projects" text="View your projects" />
          <BaseDropdownItem to="#" title="Team" text="Manage your team" />
          <BaseDropdownItem
            to="#"
            title="Settings"
            text="Set your preferences"
          />
        </BaseDropdown>
      </div>
    </div>
  </div>
</template>
