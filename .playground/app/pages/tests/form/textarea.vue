<script setup lang="ts">
definePageMeta({
  title: 'BaseTextarea',
  icon: 'system-uicons:document-justified',
  description: 'Textarea component',
  section: 'form',
})

const fields = reactive({
  first: '',
  second: '',
  third: '',
  fourth: '',
  fifth: '',
})

const value = ref('')
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseTextarea">
      <NuiPreview title="Radius" description="Textarea component radiuses">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3">
          <BaseTextarea
            v-model="fields.first"
            label="Rounded: none"
            rounded="none"
            placeholder="Write a message..."
            rows="3"
            autogrow
          />
          <BaseTextarea
            v-model="fields.second"
            label="Rounded: sm"
            rounded="sm"
            placeholder="Write a message..."
            rows="3"
            autogrow
          />
          <BaseTextarea
            v-model="fields.third"
            label="Rounded: md"
            rounded="md"
            placeholder="Write a message..."
            rows="3"
            autogrow
          />
          <BaseTextarea
            v-model="fields.fourth"
            label="Rounded: lg"
            rounded="lg"
            placeholder="Write a message..."
            rows="3"
            autogrow
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: default-contrast"
        description="Textarea component default contrast"
      >
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            v-model="value"
            contrast="default-contrast"
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            color-focus
          />
          <BaseTextarea
            v-model="value"
            contrast="default-contrast"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            color-focus
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: muted"
        description="Textarea component muted"
      >
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            v-model="value"
            contrast="muted"
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            color-focus
          />
          <BaseTextarea
            v-model="value"
            contrast="muted"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            color-focus
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Contrast: muted-contrast"
        description="Textarea component muted contrast"
      >
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            v-model="value"
            contrast="muted-contrast"
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            color-focus
          />
          <BaseTextarea
            v-model="value"
            contrast="muted-contrast"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            color-focus
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Label: float"
        description="Textarea component label float"
      >
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            v-model="value"
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            label-float
          />
          <BaseTextarea
            v-model="value"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            label-float
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Focus" description="Textarea component focus color">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            v-model="value"
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            color-focus
          />
          <BaseTextarea
            v-model="value"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            color-focus
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Error" description="Textarea component errors">
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            v-model="value"
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            error="Please enter a message"
          />
          <BaseTextarea
            v-model="value"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            error="Please enter a message"
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Loading"
        description="Textarea component loading state"
      >
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            v-model="value"
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            loading
          />
          <BaseTextarea
            v-model="value"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            loading
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Disabled"
        description="Textarea component disabled state"
      >
        <div class="grid gap-6 md:max-w-4xl md:grid-cols-3 mt-10">
          <BaseTextarea
            v-model="value"
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            disabled
          />
          <BaseTextarea
            v-model="value"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            disabled
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Addon" description="Textarea component custom addon">
        <div class="grid gap-6 md:max-w-6xl md:grid-cols-3 mt-10">
          <BaseTextarea
            v-model="value"
            size="sm"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            :rows="6"
            addon
          >
            <template #addon>
              <div class="flex items-center gap-2">
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/2.svg"
                  class="me-1"
                  size="xs"
                />

                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                  class="text-muted-800 dark:text-white"
                >
                  Maya
                </BaseHeading>
              </div>

              <div class="flex items-center gap-2">
                <BaseButton size="sm">
                  Post Comment
                </BaseButton>
              </div>
            </template>
          </BaseTextarea>
          <BaseTextarea
            v-model="value"
            label="Message"
            rounded="md"
            placeholder="Write a message..."
            :rows="6"
            addon
          >
            <template #addon>
              <div class="flex items-center gap-2">
                <BaseAvatar
                  src="https://tairo.cssninja.io/img/avatars/2.svg"
                  class="me-1"
                  size="xs"
                />

                <BaseHeading
                  as="h4"
                  size="sm"
                  weight="semibold"
                  class="text-muted-800 dark:text-white"
                >
                  Maya
                </BaseHeading>
              </div>

              <div class="flex items-center gap-2">
                <BaseButton size="sm">
                  Post Comment
                </BaseButton>
              </div>
            </template>
          </BaseTextarea>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
