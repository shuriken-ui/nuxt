<script setup lang="ts">
interface TreeViewItemTreeLeaf {
  item: any
}

interface TreeViewItemTreeChildren {
  item: any
  open?: boolean
  // eslint-disable-next-line no-use-before-define
  children?: TreeViewTreeSource
}

type TreeViewItemNode = TreeViewItemTreeLeaf | TreeViewItemTreeChildren
type TreeViewTreeSource =
  | TreeViewItemNode[]
  | (() => Promise<TreeViewItemNode[]>)

interface TreeViewSubtreeState {
  tree: TreeViewItemNode[]
  pending: boolean
  loaded: boolean
}

const props = withDefaults(
  defineProps<{
    /**
     * The tree items
     */
    children?: TreeViewTreeSource
    /**
     * When set, the component will be in treeselect mode.
     * Only items without children can be selected.
     */
    modelValue?: any[]
    /**
     * Custom icons to use for the component.
     */
    icons?: {
      open?: string
      closed?: string
      item?: string
      pending?: string
      empty?: string
    }
    /**
     * Display a line between items of the same level.
     */
    treeline?:
      | boolean
      | {
          offset?: string
          minLevel?: number
        }
    /**
     * Translation strings.
     */
    i18n?: {
      pending: string
      empty: string
    }

    /**
     * Optional CSS classes to apply to the wrapper, label, and input elements.
     */
    classes?: {
      /**
       * Classes applied to the icon when the node is pending.
       */
      pendingIcon?: string | string[]
      /**
       * Classes applied to the icon when the node is empty.
       */
      emptyIcon?: string | string[]
      /**
       * Classes applied to the icon when the node have children.
       */
      treeIcon?: string | string[]
      /**
       * Classes applied to the icon when the node have no children.
       */
      itemIcon?: string | string[]
      /**
       * Classes applied to the treeline.
       */
      treeline?: string | string[]
      /**
       * Classes applied to the inner checkbox element.
       *
       * @see [BaseCheckbox]
       */
      checkbox?: any
    }
    /**
     * @internal
     */
    level?: number
    /**
     * @internal
     */
    parent?: any
  }>(),
  {
    modelValue: undefined,
    icons: () => ({
      open: 'lucide:minus',
      closed: 'lucide:plus',
      item: '',
      pending: '',
    }),
    classes: () => ({
      pendingIcon: '',
      emptyIcon: '',
      treeIcon: '',
      itemIcon: '',
      treeline: 'border-muted-300 dark:border-muted-700',
      checkbox: {
        wrapper: 'text-primary-500 scale-[0.8] me-1',
      },
    }),
    children: undefined,
    treeline: false,
    i18n: () => ({
      pending: 'pending...',
      empty: 'empty',
    }),
    parent: undefined,
    level: 1,
  }
)
const emits = defineEmits<{
  (e: 'update:modelValue', value?: any[]): void
}>()
const value = useVModel(props, 'modelValue', emits)

const defaultIcons = {
  open: 'lucide:minus',
  closed: 'lucide:plus',
  item: '',
  empty: '',
  pending: '',
} as const

const icons = computed(() => {
  if (!props.icons) return defaultIcons
  return {
    ...defaultIcons,
    ...props.icons,
  }
})

const defaultTreeline = {
  offset: '0.625rem',
  minLevel: 1,
}

const treeline = computed(() => {
  if (props.treeline === false) return false
  if (props.treeline === true) return defaultTreeline
  return {
    ...defaultTreeline,
    ...props.treeline,
  }
})

const defaultCheckboxClasses = {
  wrapper: 'text-primary-500 scale-[0.8] me-1',
}
const checkboxClasses = computed(() => {
  if (!props.classes?.checkbox) return defaultCheckboxClasses
  return {
    ...defaultCheckboxClasses,
    ...props.classes.checkbox,
  }
})

const treeState = useTreeState()

const subtreeState = computed(() =>
  props.children ? treeState?.treeMap.get(props.children) : undefined
)
const openMap = ref<Record<number, boolean>>(getDefaultOpenMap(props.children))
const children = computed(() => subtreeState.value?.tree)
watch(() => props.children, initChildren)

defineExpose({
  /**
   * The loaded tree items from the `children` prop.
   */
  tree: children,
  /**
   * Force the component to load the tree from the `children` prop.
   */
  loadTree,
  /**
   * Returns all nodes from a tree source
   */
  getChildren,
  /**
   * Returns the children from a node.
   */
  getNodeChildren,
  /**
   * Check if all sub-nodes are selected from a node.
   */
  areAllChildSelected,
  /**
   * Check if some sub-nodes are selected from a node.
   */
  areSomeChildSelected,
  /**
   * Select all sub-nodes from a node.
   */
  selectAllNode,
  /**
   * Unselect all leaf nodes from a node.
   */
  unselectAllNode,
  /**
   * Is a node in undeterminate state. (some children are selected / children not loaded)
   */
  isUndeterminate,
  /**
   * Is a node loaded.
   */
  isNodeLoaded,
  /**
   * Invert the selection state from a node.
   */
  toggleNodeSelection,
  /**
   * Invert the selection state.
   */
  toggleChildrenSelection,
  /**
   * Select all nodes.
   */
  selectAllChildren,
  /**
   * Unselect all nodes.
   */
  unselectAllChildren,
})

await initChildren()

// api

async function initChildren() {
  await loadTree(props.children)
  openMap.value = getDefaultOpenMap(props.children)
}

function useTreeState() {
  const treeSymbol = Symbol('tree')
  let treeState = inject<null | {
    treeMap: WeakMap<TreeViewTreeSource, TreeViewSubtreeState>
  }>(treeSymbol, null)

  if (!treeState) {
    treeState = reactive({
      treeMap: new WeakMap<TreeViewTreeSource, TreeViewSubtreeState>(),
    })
    provide(treeSymbol, treeState)
  }

  if (props.children && !treeState.treeMap.has(props.children)) {
    treeState.treeMap.set(props.children, {
      tree: [],
      pending: false,
      loaded: false,
    })
  }

  return treeState
}

function getDefaultOpenMap(source?: TreeViewTreeSource) {
  const map: Record<number, boolean> = {}
  const children = getChildren(source)
  if (!children) return map

  for (const index in children) {
    const item = children[index]
    if ('open' in item && item.open !== undefined) {
      map[index] = item.open
    }
  }

  return map
}

async function loadTree(source?: TreeViewTreeSource) {
  if (!source) return
  const _subtreeState = treeState?.treeMap.get(source)

  if (!_subtreeState) {
    return
  }

  if (typeof source === 'function') {
    _subtreeState.pending = true
    try {
      _subtreeState.tree = await source()
    } finally {
      _subtreeState.pending = false
      _subtreeState.loaded = true
    }
    return
  }

  _subtreeState.tree = source ?? []
  _subtreeState.loaded = true
}

function isNodeLoaded(node?: TreeViewItemNode) {
  if (!node) return false

  if ('children' in node) {
    if (typeof node.children === 'function') {
      return treeState?.treeMap.get(node.children)?.loaded ?? false
    }
    return true
  }

  return true
}

function getChildren(tree?: TreeViewTreeSource) {
  if (!tree) return

  return treeState?.treeMap.has(tree)
    ? treeState?.treeMap.get(tree)?.tree
    : Array.isArray(tree)
    ? tree
    : undefined
}

function getNodeChildren(node?: TreeViewItemNode) {
  if (!node) return
  if (!('children' in node) || !node.children) return
  return getChildren(node.children)
}

function areAllChildSelected(node?: TreeViewItemNode): boolean {
  const _value = value.value
  if (!_value) return false
  if (!node) return false
  const children = getNodeChildren(node)

  if (!children) {
    return false
  }

  return (
    isNodeLoaded(node) &&
    children.every((child) => {
      if (!('children' in child)) return _value.includes(child)

      const subchildren = getNodeChildren(child)

      if (subchildren && isNodeLoaded(child)) {
        return areAllChildSelected(child)
      }

      return false
    })
  )
}

function areSomeChildSelected(node?: TreeViewItemNode): boolean {
  const _value = value.value
  if (!_value) return false
  if (!node) return false
  const children = getNodeChildren(node)

  if (!children) {
    return false
  }

  return (
    isNodeLoaded(node) &&
    children.some((child) => {
      if (!('children' in child)) return _value.includes(child)

      const subchildren = getNodeChildren(child)

      if (subchildren && isNodeLoaded(child)) {
        return areSomeChildSelected(child)
      }

      return false
    })
  )
}

function isUndeterminate(node?: TreeViewItemNode) {
  if (!node) return false
  if (!isNodeLoaded(node)) return false
  return areSomeChildSelected(node) && !areAllChildSelected(node)
}

function selectAllNode(node?: TreeViewItemNode) {
  const _value = value.value
  if (!_value) return
  if (!node) return

  if (!('children' in node) || !node.children) {
    const idx = _value.indexOf(node)
    if (idx === -1) {
      _value.push(node)
    }
    return
  }
  if (!isNodeLoaded(node)) return

  const children = getNodeChildren(node)

  if (!children) {
    return
  }

  for (const child of children) {
    if ('children' in child) {
      selectAllNode(child)
    } else {
      const idx = _value.indexOf(child)
      if (idx === -1) {
        _value.push(child)
      }
    }
  }
}

function selectAllChildren(tree?: TreeViewItemNode[]) {
  const _children = tree || children.value
  if (!_children) return

  for (const child of _children) {
    selectAllNode(child)
  }
}

function unselectAllNode(node?: TreeViewItemNode) {
  const _value = value.value
  if (!_value) return
  if (!node) return
  if (!('children' in node) || !node.children) {
    const idx = _value.indexOf(node)
    if (idx >= 0) {
      _value.splice(idx, 1)
    }
    return
  }
  if (!isNodeLoaded(node)) return

  const children = getNodeChildren(node)

  if (!children) {
    return
  }

  for (const child of children) {
    if ('children' in child) {
      unselectAllNode(child)
    } else {
      const idx = _value.indexOf(child)
      if (idx >= 0) {
        _value.splice(idx, 1)
      }
    }
  }
}

function unselectAllChildren(tree?: TreeViewItemNode[]) {
  const _children = tree || children.value
  if (!_children) return

  for (const child of _children) {
    unselectAllNode(child)
  }
}

function toggleNodeSelection(node?: TreeViewItemNode, event?: Event) {
  const _value = value.value
  if (!_value) return
  if (!node) return

  if ('children' in node) {
    if (!isNodeLoaded(node)) {
      event?.preventDefault()
      return
    }

    const children = getNodeChildren(node)
    if (!children || children.length === 0) {
      event?.preventDefault()
      return
    }
    if (areAllChildSelected(node)) {
      unselectAllNode(node)
    } else if (children.length > 0) {
      selectAllNode(node)
    }
    return
  }

  const idx = _value.indexOf(node)
  if (idx >= 0) {
    _value.splice(idx, 1)
  } else {
    _value.push(node)
  }
}

function toggleChildrenSelection(tree?: TreeViewItemNode[], event?: Event) {
  const _children = tree || children.value
  if (!_children) return

  for (const child of _children) {
    if ('children' in child) {
      toggleChildrenSelection(getNodeChildren(child), event)
    } else {
      toggleNodeSelection(child, event)
    }
  }
}
</script>

<template>
  <ul class="treeview relative w-full">
    <li v-if="subtreeState?.pending">
      <slot
        name="pending"
        v-bind="{
          level,
          parent,
        }"
      >
        <div
          class="text-muted-400 dark:text-muted-600 relative z-10 flex items-center gap-1 py-2 font-sans text-sm"
        >
          <slot
            name="pending-icon"
            v-bind="{
              level,
              parent,
            }"
          >
            <span
              class="text-muted-400 flex h-5 w-5 items-center justify-center"
            >
              <Icon
                v-if="icons.pending"
                :name="icons.pending"
                class="h-4 w-4"
                :class="props.classes?.pendingIcon"
              />
            </span>
          </slot>
          <slot
            name="pending-label"
            v-bind="{
              level,
              parent,
            }"
          >
            <span>{{ props.i18n.pending }}</span>
          </slot>
        </div>
      </slot>
    </li>
    <li v-else-if="!subtreeState?.tree?.length">
      <slot
        name="empty"
        v-bind="{
          level,
          parent,
        }"
      >
        <div
          class="text-muted-400 dark:text-muted-600 relative z-10 flex items-center gap-1 py-2 font-sans text-sm"
        >
          <slot
            name="empty-icon"
            v-bind="{
              level,
              parent,
            }"
          >
            <span
              class="text-muted-400 flex h-5 w-5 items-center justify-center"
            >
              <Icon
                v-if="icons.empty"
                :name="icons.empty"
                :class="props.classes?.emptyIcon"
                class="h-4 w-4"
              />
            </span>
          </slot>
          <slot
            name="empty-label"
            v-bind="{
              level,
              parent,
            }"
          >
            <span>{{ props.i18n.empty }}</span>
          </slot>
        </div>
      </slot>
    </li>
    <template v-else>
      <li v-for="(child, index) in subtreeState.tree" :key="index">
        <slot
          name="item"
          v-bind="{
            index,
            level,
            child,
            parent,
            toggle: () => (openMap[index] = !openMap[index]),
            open: openMap[index],
          }"
        >
          <div
            class="text-muted-700 dark:text-muted-400 relative z-10 flex items-center gap-1 py-2 font-sans text-sm"
          >
            <button
              v-if="'children' in child"
              class="text-muted-400 nui-focus me-1 flex h-5 w-5 items-center justify-center rounded"
              @click="openMap[index] = !openMap[index]"
            >
              <Icon
                v-if="openMap[index] && icons.open"
                :name="icons.open"
                class="h-4 w-4"
                :class="props.classes?.treeIcon"
              />
              <Icon
                v-else-if="!openMap[index] && icons.closed"
                :name="icons.closed"
                class="h-4 w-4"
                :class="props.classes?.treeIcon"
              />
            </button>
            <slot
              v-else
              name="item-icon"
              v-bind="{
                index,
                level,
                child,
                parent,
                toggle: (event?: Event) => {
                  if ('children' in child) {
                    openMap[index] = !openMap[index]
                    return
                  }
                  toggleNodeSelection(child, event)
                },
                open: openMap[index],
              }"
            >
              <span
                class="text-muted-400 me-1 flex h-5 w-5 items-center justify-center"
              >
                <Icon
                  v-if="icons.item"
                  :name="icons.item"
                  :class="props.classes?.itemIcon"
                  class="h-4 w-4"
                />
              </span>
            </slot>
            <slot
              v-if="value !== undefined"
              name="item-select"
              v-bind="{
                index,
                level,
                child,
                parent,
                toggle: (event?: Event) => {
                  if ('children' in child) {
                    openMap[index] = !openMap[index]
                    return
                  }
                  toggleNodeSelection(child, event)
                },
                open: openMap[index],
              }"
            >
              <BaseCheckbox
                v-if="'children' in child"
                :model-value="
                  isNodeLoaded(child) &&
                  getNodeChildren(child)?.length &&
                  areAllChildSelected(child)
                "
                :indeterminate="isUndeterminate(child)"
                :disabled="
                  subtreeState.pending ||
                  !isNodeLoaded(child) ||
                  getNodeChildren(child)?.length === 0
                "
                :classes="checkboxClasses"
                @click="(event: Event) => toggleNodeSelection(child, event)"
              />
              <BaseCheckbox
                v-else
                v-model="value"
                :disabled="subtreeState.pending"
                :value="child"
                :classes="checkboxClasses"
                @click="(event: Event) => toggleNodeSelection(child, event)"
              />
            </slot>
            <slot
              name="item-label"
              v-bind="{
                index,
                level,
                child,
                parent,
                toggle: (event?: Event) => {
                  if ('children' in child) {
                    openMap[index] = !openMap[index]
                    return
                  }
                  toggleNodeSelection(child, event)
                },
                open: openMap[index],
              }"
            >
              <span>{{ child.item }}</span>
            </slot>
          </div>
        </slot>

        <template v-if="'children' in child">
          <div v-if="index in openMap" v-show="openMap[index]" class="relative">
            <div
              v-if="treeline"
              class="absolute top-0 h-full w-[1px] border-l"
              :class="classes?.treeline"
              :style="{
                left: treeline.offset,
              }"
            ></div>
            <slot name="children" v-bind="{ index, level, child, parent }">
              <BaseTreeSelect
                v-model="value"
                :level="level + 1"
                :children="child.children"
                :i18n="props.i18n"
                :parent="child"
                :icons="props.icons"
                :treeline="props.treeline"
                :classes="props.classes"
              >
                <template #pending="ctx: any">
                  <slot name="pending" v-bind="ctx"></slot>
                </template>
                <template #pending-label="ctx: any">
                  <slot name="pending-label" v-bind="ctx"></slot>
                </template>
                <template #pending-icon="ctx: any">
                  <slot name="pending-icon" v-bind="ctx"></slot>
                </template>
                <template #empty="ctx: any">
                  <slot name="empty" v-bind="ctx"></slot>
                </template>
                <template #empty-label="ctx: any">
                  <slot name="empty-label" v-bind="ctx"></slot>
                </template>
                <template #empty-icon="ctx: any">
                  <slot name="empty-icon" v-bind="ctx"></slot>
                </template>
                <template #item="ctx: any">
                  <slot name="item" v-bind="ctx"></slot>
                </template>
                <template #item-select="ctx: any">
                  <slot name="item-select" v-bind="ctx"></slot>
                </template>
                <template #item-icon="ctx: any">
                  <slot name="item-icon" v-bind="ctx"></slot>
                </template>
                <template #item-label="ctx: any">
                  <slot name="item-label" v-bind="ctx"></slot>
                </template>
                <template #children="ctx: any">
                  <slot name="children" v-bind="ctx"></slot>
                </template>
              </BaseTreeSelect>
            </slot>
          </div>
        </template>
      </li>
    </template>
  </ul>
</template>

<style scoped>
.treeview:deep(.treeview) {
  @apply ps-6;
}
</style>
