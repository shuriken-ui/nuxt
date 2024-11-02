<script setup lang="ts">
definePageMeta({
  title: 'BaseDropdown',
  icon: 'system-uicons:maximise',
  description: 'Dropdown component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseDropdown">
      <NuiPreview title="Size" description="Dropdown menu sizes">
        <div class="flex justify-start gap-8 w-full">
          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
            size="md"
          >
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Team"
              text="Manage your team"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              contrast="default"
              rounded="sm"
            />
          </BaseDropdown>
          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
            size="lg"
          >
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Team"
              text="Manage your team"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              contrast="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Menu color" description="Dropdown menu colors">
        <div class="flex justify-start gap-8 w-full">
          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
            contrast="default"
          >
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Team"
              text="Manage your team"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              contrast="default"
              rounded="sm"
            />
          </BaseDropdown>
          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
            color="default-contrast"
          >
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Team"
              text="Manage your team"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              contrast="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Button color" description="Dropdown button colors">
        <div class="flex justify-start gap-8 w-full">
          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
            button-contrast="default"
          >
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              contrast="default"
              rounded="sm"
              disabled
            />
            <BaseDropdownItem
              to="#"
              title="Team"
              text="Manage your team"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              contrast="default"
              rounded="sm"
            />
          </BaseDropdown>

          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
            button-color="muted"
          >
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Team"
              text="Manage your team"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              contrast="default"
              rounded="sm"
            />
          </BaseDropdown>

          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
            button-color="primary"
          >
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Team"
              text="Manage your team"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              contrast="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Button: start"
        description="Dropdown button start position"
      >
        <div class="flex justify-start w-full">
          <BaseDropdown variant="button" label="Dropdown" orientation="start">
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Team"
              text="Manage your team"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              contrast="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Button: end"
        description="Dropdown button end position"
      >
        <div class="flex justify-end w-full">
          <BaseDropdown variant="button" label="Dropdown" orientation="end">
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Team"
              text="Manage your team"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              contrast="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Context: start"
        description="Dropdown context start position"
      >
        <div class="flex justify-start w-full">
          <BaseDropdown variant="context" label="Dropdown" orientation="start">
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Team"
              text="Manage your team"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              contrast="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Context: end"
        description="Dropdown context end position"
      >
        <div class="flex justify-end w-full">
          <BaseDropdown variant="context" label="Dropdown" orientation="end">
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Team"
              text="Manage your team"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              contrast="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Text: start"
        description="Dropdown text start position"
      >
        <div class="flex justify-start w-full gap-8">
          <BaseDropdown variant="text" label="Dropdown" orientation="start">
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              contrast="default"
              rounded="sm"
            />
          </BaseDropdown>
          <BaseDropdown
            variant="text"
            button-color="info"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem to="#" title="Team" text="Manage your team" />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              contrast="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Text: end" description="Dropdown text end position">
        <div class="flex justify-end w-full">
          <BaseDropdown variant="text" label="Dropdown" orientation="end">
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Team"
              text="Manage your team"
              contrast="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              contrast="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Slot: icon" description="Dropdown icon slot">
        <div class="flex justify-start gap-6 w-full">
          <BaseDropdown variant="button" label="Dropdown" orientation="start">
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              contrast="default"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:user-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              contrast="default"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:briefcase-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem
              to="#"
              title="Team"
              text="Manage your team"
              contrast="default"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:users-four-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownDivider />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              contrast="default"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:gear-six-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
          </BaseDropdown>

          <BaseDropdown variant="button" label="Dropdown" orientation="start">
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              contrast="default"
              color="dark"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:user-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              contrast="default"
              color="dark"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:briefcase-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem
              to="#"
              title="Team"
              text="Manage your team"
              contrast="default"
              color="dark"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:users-four-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownDivider />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              contrast="default"
              color="dark"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:gear-six-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Slot: avatar" description="Dropdown avatar slot">
        <div class="flex justify-start w-full">
          <BaseDropdown variant="button" label="Dropdown" orientation="start">
            <BaseDropdownItem
              to="#"
              title="Lana Jensen"
              text="Software Engineer"
              contrast="default"
              rounded="sm"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/4.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownItem
              to="#"
              title="Shawn Miller"
              text="Product Manager"
              contrast="default"
              rounded="sm"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/3.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownItem
              to="#"
              title="John Marynski"
              text="Sales Manager"
              contrast="default"
              rounded="sm"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/18.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownDivider />

            <BaseDropdownItem
              to="#"
              title="Garry Porter"
              text="CEO - Founder"
              contrast="default"
              rounded="sm"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/6.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview title="Menu header" description="Dropdown menu header">
        <div class="flex justify-start w-full">
          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
            header-label="My Team"
          >
            <BaseDropdownItem
              to="#"
              title="Lana Jensen"
              text="Software Engineer"
              contrast="default"
              rounded="sm"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/4.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownItem
              to="#"
              title="Shawn Miller"
              text="Product Manager"
              contrast="default"
              rounded="sm"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/3.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownItem
              to="#"
              title="John Marynski"
              text="Sales Manager"
              contrast="default"
              rounded="sm"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/18.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownDivider />

            <BaseDropdownItem
              to="#"
              title="Garry Porter"
              text="CEO - Founder"
              contrast="default"
              rounded="sm"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/6.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Menu in portal mode"
        description="Menu is teleported to the body instead of the parent element"
      >
        <div class="flex w-full justify-start">
          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
            :float-options="{ portal: true }"
          >
            <BaseDropdownItem
              to="#"
              title="Lana Jensen"
              text="Software Engineer"
              contrast="default"
              rounded="sm"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/4.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownItem
              to="#"
              title="Shawn Miller"
              text="Product Manager"
              contrast="default"
              rounded="sm"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/3.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownItem
              to="#"
              title="John Marynski"
              text="Sales Manager"
              contrast="default"
              rounded="sm"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/18.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>

            <BaseDropdownDivider />

            <BaseDropdownItem
              to="#"
              title="Garry Porter"
              text="CEO - Founder"
              contrast="default"
              rounded="sm"
            >
              <template #start>
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/6.svg"
                  size="xs"
                />
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
