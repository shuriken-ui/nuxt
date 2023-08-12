<script lang="ts">
// const slots = useSlots()
// const hasMedia = computed(() => {
//   return slots.default?.().some((vnode) => {
//     console.log(vnode)
//     return typeof vnode.type !== 'string'
//   })
// })

export default defineComponent({
  props: {
    /**
     * If the list should be ordered.
     */
    ordered: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    return () => {
      const ordered = props.ordered ? 'nui-list-ol' : 'nui-list-ul'
      const children = slots.default?.()
      const hasMedia = children?.some((vnode) => {
        return typeof vnode.type !== 'string'
      })

      return h(
        'div',
        {
          class: [
            'nui-list',
            hasMedia && 'nui-list-media',
            !hasMedia && `nui-list-base ${ordered}`,
          ],
        },
        children
      )
    }
  },
})
</script>
