<script setup lang="ts">
import { MenuItem } from '@headlessui/vue'

definePageMeta({
  title: 'Tree Select',
  icon: 'lucide:tree-deciduous',
  description: 'Tree selection component',
  section: 'navigation',
})

const tree = [
  {
    item: 'Item 1',
    children: [
      {
        item: 'Item 1.1',
      },
      {
        item: 'Item 1.2',
      },
    ],
  },
  {
    item: 'Item 2',
  },
  {
    item: 'Item 3',
    open: true,
    children: [
      {
        item: 'Item 3.0',
      },
      {
        item: 'Item 3.1',
        open: true,
        children: [
          {
            item: 'Item 3.1.1',
          },
          {
            item: 'Item 3.1.2',
            open: true,
            children: [],
          },
          {
            item: 'Item 3.1.3',
          },
        ],
      },
      {
        item: 'Item 3.2',
      },
      {
        item: 'Item 3.3',
        children: [],
      },
    ],
  },
  {
    item: 'Item 4',
    // open: true,
    children: async () => {
      await new Promise((resolve) => setTimeout(resolve, 8000))

      return Array.from(
        {
          length: 100,
        },
        (x, i) => ({
          item: `Item 4.${i}`,
          children: async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000))

            return Array.from(
              {
                length: 10,
              },
              (x, j) => ({
                item: `Item 4.${i}.${j}`,
              })
            )
          },
        })
      )
    },
  },
]

const fileTree = [
  {
    item: '.app',
    children: [
      {
        item: 'index.ts',
      },
      {
        item: 'shims.d.ts',
      },
    ],
  },
  {
    item: 'src',
    children: [
      {
        item: 'empty',
        children: [],
      },
      {
        item: 'home',
        children: [
          {
            item: 'index.ts',
          },
          {
            item: 'styles.css',
          },
        ],
      },
      {
        item: 'index.vue',
      },
    ],
  },
  {
    item: 'app.config.ts',
  },
  {
    item: 'tailwind.config.cjs',
  },
]

const topicTree = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return [
    {
      item: {
        media: undefined,
        name: 'General',
        text: undefined,
      },
      open: true,
      children: [
        {
          item: {
            icon: 'ph:cards-duotone',
            name: 'Company',
            text: 'Everything about the company',
          },
        },
        {
          item: {
            icon: 'ph:buildings-duotone',
            name: 'Company',
            text: 'Select filial',
          },
          children: [
            {
              item: {
                icon: 'ph:buildings-duotone',
                name: 'Sub-Company 1',
                text: 'Everything about the company',
              },
            },
            {
              item: {
                icon: 'ph:buildings-duotone',
                name: 'Sub-Company 2',
                text: 'Everything about the company',
              },
            },
            {
              item: {
                icon: 'ph:buildings-duotone',
                name: 'Sub-Company 3',
                text: 'Everything about the company',
              },
            },
          ],
        },
        {
          item: {
            icon: 'ph:suitcase-duotone',
            name: 'Business',
            text: 'Questions regarding business',
          },
          children: [],
        },
      ],
    },
    {
      item: {
        icon: 'ph:suitcase-duotone',
        name: 'Business',
        text: 'Questions regarding business',
      },
    },
    {
      item: {
        media: undefined,
        name: 'Topics',
        text: undefined,
      },
      children: [
        {
          item: {
            media: undefined,
            name: 'Business',
            text: undefined,
          },
          children: [
            {
              item: {
                icon: 'ph:rocket-duotone',
                name: 'Startups',
                text: 'Managing startups',
              },
            },
            {
              item: {
                icon: 'ph:robot-duotone',
                name: 'Products',
                text: 'Product lifecycles',
              },
            },
          ],
        },
        {
          item: {
            media: undefined,
            name: 'Web Content',
            text: undefined,
          },
          children: [
            {
              item: {
                icon: 'ph:pencil-duotone',
                name: 'Blogging',
                text: 'Tips & tricks about blogging',
                children: [],
              },
            },
            {
              item: {
                icon: 'ph:circles-four-duotone',
                name: 'Social media',
                text: 'Managing social media content',
              },
            },
          ],
        },
      ],
    },
  ]
}

const teamTree = [
  {
    item: {
      media: undefined,
      name: 'Top Management',
      text: undefined,
    },
    children: [
      {
        item: {
          media: 'https://media.cssninja.io/shuriken/avatars/8.svg',
          name: 'Harold Frazier',
          text: 'Group Founder',
        },
        children: [],
      },
      {
        item: {
          media: 'https://media.cssninja.io/shuriken/avatars/5.svg',
          name: 'Clarissa Miller',
          text: 'Executive Director',
        },
      },
    ],
  },
  {
    item: {
      media: undefined,
      name: 'Teams',
      text: undefined,
    },
    open: true,
    children: [
      {
        item: {
          media: undefined,
          name: 'Marketing',
          text: undefined,
        },
        open: true,
        children: [
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/3.svg',
              name: 'Clark Smith',
              text: 'Marketing Associate',
            },
          },
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/2.svg',
              name: 'Olga familly',
              text: 'Marketing Associate',
            },
            children: [
              {
                item: {
                  media: 'https://media.cssninja.io/shuriken/avatars/2.svg',
                  name: 'Clark Smith',
                  text: 'Marketing Associate',
                },
                children: [],
              },
              {
                item: {
                  media: 'https://media.cssninja.io/shuriken/avatars/2.svg',
                  name: 'Olga familly',
                  text: 'Marketing Associate',
                },
              },
            ],
          },
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/16.svg',
              name: 'Hermann Mayer',
              text: 'Marketing Officer',
            },
          },
        ],
      },
      {
        item: {
          media: undefined,
          name: 'Sales',
          text: undefined,
        },
        children: [
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/9.svg',
              name: 'Anna Lopez',
              text: 'Sales Manager',
            },
            children: [],
          },
          {
            item: {
              media: 'https://media.cssninja.io/shuriken/avatars/25.svg',
              name: 'Melany Lawfield',
              text: 'Sales Manager',
            },
          },
        ],
      },
    ],
  },
  {
    item: {
      media: 'https://media.cssninja.io/shuriken/avatars/14.svg',
      name: 'Jean LeBeauss',
      text: 'Marketing Associate',
    },
  },
]

const selection1 = ref<any[]>([])
const selection2 = ref<any[]>([])
const selection3 = ref<any[]>([])
const selection4 = ref<any[]>([])
const treeSelectRef = ref<any>(null)
const treeSelectRef2 = ref<any>(null)

function toggleAll() {
  console.log('toggle all ?', treeSelectRef.value)
  treeSelectRef.value?.toggleChildrenSelection()
}
function toggleAll2() {
  treeSelectRef2.value?.toggleChildrenSelection()
}
function unselectAll2() {
  treeSelectRef2.value?.unselectAllChildren()
}
function selectAll2() {
  treeSelectRef2.value?.selectAllChildren()
}
</script>

<template>
  <div
    class="w-full flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32"
  >
    <div>
      <div class="max-w-xs">
        <BaseTreeSelect :children="tree" v-model="selection1" />
        <pre>{{ selection1 }}</pre>
      </div>
    </div>

    <div>
      <div class="max-w-xs">
        <BaseTreeSelect :children="tree">
          <template #pending-label="{ parent }">
            {{ parent?.item }} loading...
          </template>
          <template #empty-label="{ parent }">
            {{ parent?.item }} is empty
          </template>
        </BaseTreeSelect>
      </div>
    </div>

    <div>
      <div class="max-w-xs">
        <BaseTreeSelect
          :children="tree"
          treeline
          :icons="{
            open: 'lucide:chevron-up',
            closed: 'lucide:chevron-down',
            pending: 'svg-spinners:270-ring-with-bg',
          }"
        />
      </div>
    </div>

    <div>
      <div class="max-w-xs">
        <BaseTreeSelect
          :children="tree"
          :icons="{ open: 'lucide:chevron-up', closed: 'lucide:chevron-down' }"
          treeline
        />
      </div>
    </div>

    <div>
      <div class="max-w-xs">
        <BaseTreeSelect
          :children="tree"
          :icons="{ open: 'tabler:square-minus', closed: 'tabler:square-plus' }"
          treeline
        >
          <template #item-label="{ index, level, child, open, toggle }">
            <span>custom: {{ child.item }}</span>
          </template>
        </BaseTreeSelect>
      </div>
    </div>

    <div>
      <div class="max-w-xs">
        <BaseTreeSelect
          :children="tree"
          :icons="{ open: 'tabler:square-minus', closed: 'tabler:square-plus' }"
          :classes="{
            treeline: 'border-muted-300 dark:border-muted-600 border-dashed',
          }"
          treeline
        />
      </div>
    </div>

    <div>
      <div class="max-w-xs">
        <BaseTreeSelect
          v-model="selection2"
          :children="fileTree"
          :icons="{
            open: 'clarity:folder-open-line',
            closed: 'clarity:folder-line',
            item: 'clarity:file-line',
          }"
          :classes="{
            treeline: 'border-muted-300 dark:border-muted-700',
            checkbox: {
              wrapper: 'text-red-500 mx-2',
            },
          }"
          treeline
        ></BaseTreeSelect>
      </div>
      <pre>{{ selection2 }}</pre>
    </div>

    <div>
      <div class="max-w-xs">
        <BaseTreeSelect
          :children="fileTree"
          :icons="{
            open: 'clarity:folder-open-line',
            closed: 'clarity:folder-line',
          }"
          :classes="{
            treeline: 'border-primary-200 dark:border-primary-800',
          }"
          treeline
        />
      </div>
    </div>

    <div>
      <BaseTreeSelect :children="topicTree">
        <template #item-label="{ index, level, child, open, toggle }">
          <BaseTreeSelectItem
            :level="level"
            :toggle="toggle"
            :value="{
              name: child.item.name,
              text: child.item.text,
              icon: child.item.icon,
            }"
          ></BaseTreeSelectItem>
        </template>
      </BaseTreeSelect>
    </div>

    <div>
      <BaseTreeSelect :children="topicTree" treeline>
        <template #item-label="{ index, level, child, open, toggle }">
          <BaseTreeSelectItem
            :level="level"
            :toggle="toggle"
            :value="{
              name: child.item.name,
              text: child.item.text,
              icon: child.item.icon,
            }"
          ></BaseTreeSelectItem>
        </template>
      </BaseTreeSelect>
    </div>

    <div>
      <BaseTreeSelect :children="teamTree" treeline>
        <template #item-label="{ index, level, child, open, toggle }">
          <BaseTreeSelectItem
            :level="level"
            :toggle="toggle"
            :value="{
              name: child.item.name,
              text: child.item.text,
              media: child.item.media,
            }"
          ></BaseTreeSelectItem>
        </template>
      </BaseTreeSelect>
    </div>

    <div>
      <BaseTreeSelect
        ref="treeSelectRef2"
        :children="teamTree"
        treeline
        v-model="selection3"
        :classes="{
          checkbox: {
            wrapper: 'text-red-500 mx-2',
          },
        }"
      >
        <template #item-label="{ index, level, child, open, toggle }">
          <BaseTreeSelectItem
            :level="level"
            :toggle="toggle"
            :value="{
              name: child.item?.name,
              text: child.item?.text,
              media: child.item?.media,
            }"
          ></BaseTreeSelectItem>
        </template>
      </BaseTreeSelect>
      <div class="flex gap-2">
        <BaseButton @click="toggleAll2">toggle selection</BaseButton>
        <BaseButton @click="selectAll2">select all selection</BaseButton>
        <BaseButton @click="unselectAll2">unselect all selection</BaseButton>
      </div>
      <pre>{{ selection3 }}</pre>
    </div>

    <div>
      <BaseDropdown flavor="button" label="Dropdown" orientation="start">
        <BaseTreeSelect
          ref="treeSelectRef"
          :children="teamTree"
          v-model="selection4"
        >
          <template #item-label="{ index, level, child, open, toggle }">
            <MenuItem v-slot="{ active }">
              <BaseTreeSelectItem
                :level="level"
                :toggle="toggle"
                :value="{
                  name: child.item?.name,
                  text: child.item?.text,
                  media: child.item?.media,
                }"
              ></BaseTreeSelectItem>
            </MenuItem>
          </template>
        </BaseTreeSelect>
        <BaseButton @click="toggleAll">toggle selection</BaseButton>
      </BaseDropdown>
      <pre>{{ selection4 }}</pre>
    </div>
  </div>
</template>
